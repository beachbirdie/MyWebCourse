
var dialog, form;

$("#addBand").button().click(function () {
    dialog.dialog("open");
});

function addBand() {
    var re = /\,[\s]?/;

    var band = {
        "name": $('#bandName').val(),
        "city": $('#bandCity').val(),
        "country": $('#bandCountry').val(),
        "yearFormed": $('#bandYearFormed').val(),
        "genres": $('#bandGenres').val().split(re)
    };

    $.ajax({
        type: 'POST',
        url: '/band',
        contentType: "application/json",
        data: JSON.stringify(band),
        success: function (res, stat) {
            setTimeout(posting, 1000);
            dialog.dialog("close");
            setTimeout(function () {
                $.getJSON('/band', function (data) {
                    showBands(data);
                });
            }, 3000);
        },
        error: function (res, stat) {
            window.alert('Error: ' + JSON.stringify(res) + '\,Status: ' + stat);
        }
    });
}

dialog = $("#add-dialog-form").dialog({
    autoOpen: false,
    height: 500,
    width: 600,
    modal: true,
    buttons: {
        "Add Band": addBand,
        Cancel: function () {
            dialog.dialog("close");
        }
    },
    close: function () {
        form[0].reset();
    }
});

form = dialog.find("form").on("submit", function (event) {
    event.preventDefault();
    addBand();
});
