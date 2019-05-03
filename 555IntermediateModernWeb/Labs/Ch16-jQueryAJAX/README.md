# Chapter 16: Using jQuery Ajax

## Objectives
* Explore the use of AJAX calls using jQuery for a CRUD application 

## Steps:

### Execute the working app
1. Navigate to the `\bandsAjax` folder.

1. View the contents of `package.json`. This project relies on `json-server` to set up a REST based API.

1. View the contents of `db.json` - this data isused by the server and provides band data.

1. Open the directory `\bandsAjax` in the terminal/command window.
(Right click the folder in VS Code and choose Open in Terminal)

1. Use the package.json to install project dependencies by executing this command from the prompt:   `npm install`

1. Start the server by executing this command from the prompt: `npm start`

1. In the output you should see that the server is running on [http://localhost:3008](http://localhost:3008)


### Examine the code
1. Expand the public directory. Look at the scripts at the bottom of `index.html`. Notice how jQuery is being included. 

    Using `integrity` in this way is supported by Chrome and Firefox and is one step towards ensuring the CDN content has not been manipulated. You can read more here: [https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)

1. Note the use of getJSON to get the band info from the json server
    ```javascript
        $.getJSON('/band', function (data) {
                        showBands(data);
        });
    ```
1. Read through the `showBands` function in `script.js`. The data is used to populate the table. Later we will use a plugin to create the table with more features.

1. In this same file is the `deleteBand` function. Note its use of `$.ajax` to delete a band from the server.

1. View the usage of `$.ajax` to add a band in `addBand.js`
  

        $.ajax({
            type: 'POST',
            url: '/band',
            contentType: "application/json",
            data: JSON.stringify(band),
            success: function (res, stat) {
                window.alert('Band successfully added!\nSuccess: ' + JSON.stringify(res) + '\nStatus: ' + stat);
            },
            error: function (res, stat) {
                window.alert('Error: ' + res + '\,Status: ' + stat);
            }
        });
    });
    ```

1. View the usage of `$.ajax` to modify a band:
    ```javascript
    function modifyBand(id) {
        $.getJSON('/band/' + id, function (data) {
            updateForm(data);
        });
    }

    function updateForm(jsonData) {
        var band = jsonData;

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
                window.alert('Error: ' + response + '\nStatus: ' + stat);
            }
        });
    }
    ```

