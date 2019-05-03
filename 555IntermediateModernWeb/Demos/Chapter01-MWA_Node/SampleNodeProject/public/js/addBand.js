$('#add').click(function () {
    const re = /\,[\s]?/;

    const band = {
        "name": $('#name').val(),
        "city": $('#city').val(),
        "country": $('#country').val(),
        "yearFormed": $('#yearFormed').val(),
        "genres": $('#genres').val().split(re)
    };

    $.ajax({
        type: 'POST',
        url: '/bands',
        contentType: "application/json",
        data: JSON.stringify(band),
        success: function (res, stat) {
            window.alert('Band successfully added!\nSuccess: ' + JSON.stringify(res) + '\nStatus: ' + stat);
            window.history.back();
        },
        error: function (res, stat) {
            window.alert('Error: ' + res + '\,Status: ' + stat);
        }
    });
});
