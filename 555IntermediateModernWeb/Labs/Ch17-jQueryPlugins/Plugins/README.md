# Chapter 17: Exercise: Using jQuery Plugins
## Objectives
* Explore the use of jQuery Plugins used in a CRUD application 

## Steps:

### Execute the working app
1. Navigate to the `\bands-plugins` folder.

1. Open the directory `\bands-plugins` in the terminal/command window.

(Right click the folder in VS Code and choose Open in Terminal)

1. Use the `package.json` to install project dependencies by executing this command from the prompt:   `npm install`

1. Start the server by executing this command from the prompt: `npm start`

1. In the output you should see that the server is running on http://localhost:3009

1. Click the link `PLUG-IN: Band Table` and view the table of data.

1. Click on the column headers and use the `Search:` box to filter data

1. Notice how pagination is available. Go back to the bands tabs and add 3 bands. Then come back to this page and observe pagination.


### Examine the code
1. Open the public folder and examine the file `piBand.html`

1. Note the inclusion of these two scripts:
    ```javascript
    <script src="//cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>

    <script src="js/bandsTable.js"></script>
    ```
1. View the contents of `bandsTable.js`. Note how this script passes uses the DataTable plugin.


