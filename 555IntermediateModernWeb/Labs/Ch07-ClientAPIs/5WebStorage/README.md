# Chapter 7: Exercise: Use Web Storage
## Objectives
* Store data locally using local storage
* Retrieve local data stored in local storage

### Estimated Completion Time 
15 minutes

## Steps:
### Save Preferences in Local Storage
1. Create a folder in `/WIP` called `WebStorage`.

1. Copy `favoriteMusic.html` to this new folder, then open it in the browser and editor.
    * You will notice an alert when the page loads, from code in window.onload 
    * Click the save and clear buttons and notice the code that is called. 
    * You will implement the logic to save, load and clear from local storage.

1. Above window.onload, add two variables that will be used to handle saving and loading data from form elements, and use document.getElementById in the onload function to refer to the HTML elements:
    ```javascript
    var bandTextBox;
    var genreSelect;

    window.onload = function() {
        bandTextBox = document.getElementById('bandTextBox');
        genreSelect = document.getElementById('genreSelect');
        loadData();
    };
    ```

1. Before loading or saving settings you should check if local storage functionality is supported or not by the user's browser. Since this will be done in muliple places, it is good practice to put the lgoic into a function. Add the following function below the window.onload function:
    ```javascript
        function hasLocalStorage() {
            return ('localStorage' in window && window['localStorage'] != 
                    null);
        }
    ```

1. When the `Save Info` button is clicked, use the `hasLocalStorage()` function. If localStorage is supported, use `setItem()` to store band and genre from the `bandTextBox` and `genreSelect` element references. To accomplish this task, add logic to the existing saveData function, replacing the alert:
    ```javascript
    function saveData() {
        if (hasLocalStorage()) {
            try {
                localStorage.setItem('band', bandTextBox.value);
                localStorage.setItem('genre', genreSelect.value);
                alert('data saved');
            }
            catch (e) {
                /* can assume storage error */
                alert('Storage quota exceeded');
            }
        }
        else {
            alert('No local storage support');
        }
    }
    ```
1. Save the file and test it in the browser. 
    * Enter a band, select a genre, and click the `Save` button.  
    * Open the browser developer tools and look in the area where local storage is viewed. 
    * you should see the data saved under local storage.

1. Close the browser and reload the page in the browser and notice that your saved values are not prefilled. They are in localStorage but need to be loaded.

    ### Load Preferences from Local Storage
1. In the `loadData()` function check if local storage is available, and load the band and genre data using the references to the HTML elements.
    ```javascript
    function loadData() {
                if (hasLocalStorage()) {
                    var band = localStorage.getItem('band');
                    var genre = localStorage.getItem('genre');
                    bandTextBox.value = band;
                    genreSelect.value = genre;
                }
    }
    ```
1. Refresh the browser. The settings you entered previously should now be displayed.

    ### Clear Preferences in Local Storage
1. The button to clear stored settings calls the `clearClick` function. Add the code to handle clearing local storage settings: 
    ```javascript
    function clearSavedData() {
                genreSelect.selectedIndex = 0;
                if (hasLocalStorage()) {
                    localStorage.clear();
                    loadData();
                    alert('data cleared');
                }
            }
    ```
1. Click the `Clear Info` button and then close and open the browser again. If you check local storage the values will no longer be there.

1. Mark your work as complete

##Bonus

If done before others, implement checkboxes for favorite genres. Save and load these using web storage.