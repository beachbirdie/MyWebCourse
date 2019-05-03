
$('#add').click(function () {
    addBand();
});

function addBand() {
    var re = /\,[\s]?/;

    var band = {
        "name": $('#name').val(),
        "city": $('#city').val(),
        "country": $('#country').val(),
        "yearFormed": $('#yearFormed').val(),
        "genres": $('#genres').val().split(re)
    };

    $.ajax({
        type: 'POST',
        url: '/band',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(band),
        success: function (res, stat) {
            window.alert('Band successfully added!\nSuccess: ' + JSON.stringify(res) + '\nStatus: ' + stat);
			window.history.back();
        },
        error: function (res, stat) {
            window.alert('Error: ' + res + '\,Status: ' + stat);
        }
    });
}
