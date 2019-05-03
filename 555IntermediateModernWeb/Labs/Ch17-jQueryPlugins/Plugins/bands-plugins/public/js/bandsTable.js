
$(document).ready(function () {
    $.getJSON('/band', function (dataSet) {
        dataTable(dataSet);
    });

    function dataTable(jsonData) {
        $('#bandsTable').DataTable({
            data: jsonData,
            columns: [
                {title: 'ID', data: 'id'},
                {title: 'Name', data: 'name'},
                {title: 'Origin City', data: 'city'},
                {title: 'Origin Country', data: 'country'},
                {title: 'Year Formed', data: 'yearFormed'},
                {title: 'Genres', data: 'genres[, ]'}
            ]
        });
    }
});
