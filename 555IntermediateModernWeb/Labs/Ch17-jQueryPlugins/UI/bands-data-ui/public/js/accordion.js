
$.getJSON('/band', function (data) {
    listBands(data);
});

function listBands(json) {
    var bands = json;
    var out = '<div id="accordion">';

    // Build table with band data for html output
    for (var i = 0; i < bands.length; i++) {
        out += '<h3>' + bands[i].name + '</h3>' +
            '<div><p>Formed in ' + bands[i].city + ', ' + bands[i].country + ' in the year of ' + bands[i].yearFormed + '. They are categorized under these genres:</p>';

        out += '<ul>';

        for (var g = 0; g < bands[i].genres.length; g++) {
            out += '<li>' + bands[i].genres[g] + '</li>';
        }

        out += '</ul></div>';
    }

    out += '</div>';

    // Push html output to div
    $("#band-list").html(out);

    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "content"
    });
}