

// Refactored name to be appropriate with new methods
function showBands(jsonData) {
    var bands = jsonData;

    // Start html output
    var out = `<h1>Bands</h1>
               <table class="full-width">
                <tr><th>Name</th><th>Origin City</th>
                <th>Origin Country</th><th>Year Formed</th>
                <th>Genres</th><th>Action</th>
               </tr>`;

    // Build table with band data for html output
    for (var i = 0; i < bands.length; i++) {
        out += '<tr><td>' + bands[i].name + '</td><td>' + bands[i].city +
            '</td><td>' + bands[i].country + '</td><td>' + bands[i].yearFormed +
            '</td><td>' + bands[i].genres.join(', ') + '</td><td>' +
            '<div class="action"><button type="submit" onclick="modifyBand(' + bands[i].id + ')">Modify</button> ' +
            '<button type="submit" onclick="deleteBand(' + bands[i].id + ')">Delete</button> ' +
            '</div></td></tr>';
    }

    out += '</table>';

    // Push html output to div
    $('#showBands').html(out);
    $(".action").css({'float': 'right'});

    $('tr').hover(function () {
        $(this).css('color', '#7D000C');
    }, function () {
        $(this).css('color', '');
    });
}

function deleteBand(id) {
    if (confirm("Are you sure you wish to delete this band?")) {
        $.ajax({
            url: '/bands/' + id,
            type: 'DELETE',
            success: function () {
                window.alert('Band has successfully been deleted!');
                $.getJSON('/bands', function (data) {
                    showBands(data);
                });
            },
            error: function (res, stat) {
                window.alert('Error: ' + response + '\nStatus: ' + stat);
            }
        });
    }
}