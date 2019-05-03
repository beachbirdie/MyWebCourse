

var updDialog, updForm;

function modifyBand() {
    var id = $(this).attr('data-id');
    $.getJSON('/band/' + id, function (data) {
        updateForm(data);
    });
    updDialog.dialog("open");
}

function updateForm(jsonData) {
    var band = jsonData;
    $('#modifyBand').html('');

    // Start html output
    var out = '<h4 id="band" data-id="' + band.id + '"> Update ' + band.name + '</h4><form class="upd">';

    // Build form for html output
    out += `<div>
                <label for="updName">Band Name:</label>
                <input type="text" id="updName" name="updName" value="` + band.name + `" required>
            </div>
            <div>
                <label for="city">Origin City:</label>
                <input type="text" id="updCity" name="city" value="` + band.city + `" required>
            </div>
            <div>
                <label for="updCountry">Origin Country:</label>
                <input type="text" id="updCountry" name="updCountry" value="` + band.country + `" required>
            </div>
            <div>
                <label for="updYearFormed">Year Formed:</label>
                <input type="text" id="updYearFormed" name="updYearFormed" value="` + band.yearFormed + `" required>
            </div>
            <div>
                <label for="updGenres">Genres:</label>
                <input type="text" id="updGenres" name="updGenres" value="` + band.genres.join(', ') + `" required>
            </div>`;

    // Add submit button to html output
    out += '</form>';

    // Push html output to div
    $('#mod-dialog-form').html(out);

    $('form').css({'width': '500px', 'margin': '0 auto'});
    $('input').css('width', '100%');
}

function updateBand() {
    var id = $('#band').attr('data-id');
    var re = /\,[\s]?/;

    var band = {
        "name": $('#updName').val(),
        "city": $('#updCity').val(),
        "country": $('#updCountry').val(),
        "yearFormed": $('#updYearFormed').val(),
        "genres": $('#updGenres').val().split(re)
    };

    $.ajax({
        type: 'PUT',
        url: '/band/' + id,
        contentType: "application/json",
        data: JSON.stringify(band),
        success: function (res, stat) {
            setTimeout(posting, 1000);
            updDialog.dialog("close");
            setTimeout(function () {
                $.getJSON('/band', function (data) {
                    showBands(data);
                });
            }, 1500);
        },
        error: function (res, stat) {
            console.log(JSON.stringify(band));
            window.alert('Error: ' + JSON.stringify(res) + '\nStatus: ' + stat);
        }
    });
}

updDialog = $("#mod-dialog-form").dialog({
    autoOpen: false,
    height: 500,
    width: 600,
    modal: true,
    buttons: {
        "Update Band": updateBand,
        Cancel: function () {
            updDialog.dialog("close");
        }
    },
    close: function () {
        $('#mod-dialog-form').html('');
    }
});

updForm = updDialog.find("form").on("submit", function (event) {
    event.preventDefault();
    updateBand();
});
