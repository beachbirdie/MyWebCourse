# Chapter 17: Exercise: Using jQuery UI
## Objectives
* Explore the use of jQuery UI in a CRUD application 

## Steps:

### Execute the working app
1. Navigate to the `/bands-data-ui` folder.
1. Open the directory `/bands-data-ui` in the terminal/command window.
(Right click the folder in VS Code and choose Open in Terminal)
1. Use the package.json to install project dependencies by executing this command from the prompt:   `npm install`
1. Start the server by executing this command from the prompt: `npm start`
1. In the output you should see that the server is running on http://localhost:3010
1. Click the link `Bands` and then modify a band. Notice the change in working with bands info. (The pop-up and progress bar.) 
1. Click the link `UI: Band List` and view the use of the plugin.
1. Click on different band names and see how the data is  presented.  


### Examine the code
1. Examine the file `index.html` file in public
1. Note the inclusion of scripts:
    ```javascript
        <script src="js/script.js"></script>
        <script src="js/jqueryStyle.js"></script>
        <script src="js/add-modal.js"></script>
        <script src="js/mod-modal.js"></script>
        <script src="js/postProgress.js"></script>
    ```
1. View the contents of these scripts to explore their usage.

1. Examine the file in public called `BandList.html`
Note the inclusion and explore this scripts:
    ```javascript
         <script src="js/accordion.js"></script>
    ```
