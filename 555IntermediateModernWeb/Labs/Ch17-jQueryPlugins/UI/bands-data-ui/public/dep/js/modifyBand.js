
function modifyBand(id) {
    $.getJSON('/band/' + id, function (data) {
        updateForm(data);
    });
}

function updateForm(jsonData) {
    var band = jsonData;
    $('#modifyBand').html('');

    // Start html output
    var out = '<h4>' + band.name + '</h4><form id="updateForm" name="updateForm">';

    // Build form for html output
    out += `<div>
                <label for="name">Band Name:</label>
                <input type="text" id="name" name="name" value="` + band.name + `">
            </div>
            <div>
                <label for="city">Origin City:</label>
                <input type="text" id="city" name="city" value="` + band.city + `">
            </div>
            <div>
                <label for="country">Origin Country:</label>
                <input type="text" id="country" name="country" value="` + band.country + `">
            </div>
            <div>
                <label for="yearFormed">Year Formed:</label>
                <input type="text" id="yearFormed" name="yearFormed" value="` + band.yearFormed + `">
            </div>
            <div>
                <label for="genres">Genres:</label>
                <input type="text" id="genres" name="genres" value="` + band.genres.join(', ') + `">
            </div>`;

    // Add submit button to html output
    out += '<button type="submit" onclick="updateBand(' + band.id + ')">Update</button></form>';

    // Push html output to div
    $('#modifyBand').html(out);

    $('form').css({'width': '500px', 'margin': '0 auto'});
    $('input').css('width', '100%');
}

function updateBand(id) {
    var re = /\,[\s]?/;

    var band = {
        "name": $('#name').val(),
        "city": $('#city').val(),
        "country": $('#country').val(),
        "yearFormed": $('#yearFormed').val(),
        "genres": $('#genres').val().split(re)
    };

    $.ajax({
        url: '/band/' + id,
        type: 'PUT',
        contentType: "application/json",
        data: JSON.stringify(band),
        success: function (res, stat) {
            window.alert('Band successfully Updated!\nSuccess: ' +
                JSON.stringify(res) + '\nStatus: ' + stat);
        },
        error: function (res, stat) {
            console.log(JSON.stringify(band));
            window.alert('Error: ' + res + '\nStatus: ' + stat);
        }
    });
}
