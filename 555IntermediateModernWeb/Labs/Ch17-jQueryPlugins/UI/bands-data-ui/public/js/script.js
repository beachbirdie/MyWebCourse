
$('#show').button().click(function () {
    $.getJSON('/band', function (data) {
        showBands(data);
    });
});

$('#hide').button().click(function () {
    $('#showBands').html('');
});

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
            '<div class="action"><button class="btn btn-warning" id="updateBand" data-id="' + bands[i].id + '">Modify</button> ' +
            '<button class="btn btn-danger" id="deleteBand" data-id="' + bands[i].id + '">Delete</button> ' +
            '</div></td></tr>';
    }

    out += '</table>';

    // Push html output to div
    $('#showBands').html(out);

    $('tr').hover(function () {
        $(this).css('color', '#7D000C');
    }, function () {
        $(this).css('color', '');
    });

    $('.action')
        .on('click', '#updateBand', modifyBand)
        .on('click', '#deleteBand', deleteBand)
        .css({'float': 'right'});
}

function deleteBand() {
    var id = $(this).attr('data-id');
     if (confirm("Are you sure you wish to delete this band?")) {
        $.ajax({
            url: '/band/' + id,
            type: 'DELETE',
            success: function () {
                setTimeout(posting, 1000);
                setTimeout(function () {
                    $.getJSON('/band', function (data) {
                        showBands(data);
                    });
                }, 3000);
            },
            error: function (res, stat) {
                window.alert('Error: ' + res + '\nStatus: ' + stat);
            }
        });
     }
}