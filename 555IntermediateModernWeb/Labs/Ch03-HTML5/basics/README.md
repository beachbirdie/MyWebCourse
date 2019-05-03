# Chapter 3: Practice with Basics of HTML 

## Objectives
* Use assets (files) in the same directory as this README
* copy files between folders in VSCode
* Create a new HTML file
* Practice with a HTML `<head>` child elements
* Practice Commenting / Uncommenting code
* 

### Estimated Completion Time 
10 minutes

## Create a new page

1. In your `/WIP` folder create a folder called `html`.

1. Add an HTML file called `index.html` by right-clicking the html folder and choosing `new file`.

1. In this new blank file start typing `html`, and choose the template with html:5 as in this directory's screenshot `choose-template.png`

    ## character encoding - commenting/uncommenting code
1. Copy this code and paste it into the `<body>` element. (Highlight then control-c, to paste, use control-V)
    ```html
    <h1>Welcome to the home page in multiple languages!</h1>
    <ul>
        <li>Czech - Vítej</li> 
        <li>Greek - Καλώς ορίσατε</li>
        <li>Bosnian - Dobrodošli</li>
        <li>Italian - Benvenuto</li>
        <li>Chinese (Mandarin) - 欢迎</li>
        <li>German - herzlich willkommen</li>
        <li>French - Bienvenue</li>
        <li>Turkish - Hoşgeldiniz</li>
        <li>Russian - Здра́вствуйте! </li>
    </ul>
    ```

1. Load the page in Chrome and view the characters. They should look okay.

1. Find this line in the `<head>` element of your `index.html` 
    ```html
    <meta charset="UTF-8">
    ```

    * Comment out this line by clicking anywhere on that line, and using the VSCode keyboard shortcut of control+/  (forward slash)
    

1. Copy the following line, and then paste it after the line you just commented out. 
    ```html
    <meta charset="ISO-8859-1">
    ```

1. Reload the page and view the differences.

1. Go back and uncomment the UTF-8 version and remove the ISO version.

    ## favicon
1. Under `WIP/html` directory create a new directory called `favicon`.

1. In the Explorer sidebar of VSCode look in the same folder as this readme file `\Labs\Ch03-HTML5\basics` and find the file `favicon.ico`.

1. Add this file to your project by
    * clicking on this file in explorer menu
    * hit control-c to copy
    * click on your new `WIP/html/favicon` directory
    * hit control-v to paste

1. In your `index.html` file:
    * Add this line in `<head>`
    ```
    <link rel="icon" href="favicon/favicon.ico" />
    ```

1. `Notice` the usage of the subdirectory to specify the location relative to the current location.

1. Reload the browser and you should see the favicon in the browser tab.

    ## view meta description

1. In Chrome, use Google or Bing to search for `Mozilla Developer Network` and read the search results description.

1. Right-click on the result link to open the site in a new window.  

1. While viewing the MDN website, right click in displayed browser window and choose `View Source`.  Scroll or use control-F to find the meta element which has the description - you should see the same text as what was displayed in the search results. 

1. Mark your work as complete and help others. We retain more by helping others!

## Bonus

1. Create your own favicon.
    1. Comment out the line you added during the exercise.
        ```html
        <link rel="icon" href="favicon/favicon.ico" />
        ```
    
    1. Search for a PNG image you like using Google image search, specifying a custom size of 260x260. Download the file into your `WIP/html` directory.

    1. Visit the website: https://realfavicongenerator.net/ and upload your image into tool. 

    1. `Notice`: it generates icons for usage not just in a desktop browser but also for various mobile environments. Choose to keep in same folder, and generate the code and icons.

    1. Copy the generated code into the `<head>` element of your html file. 

    1. Download the zip file and use Windows Explorer to extract the files into `WIP\html\favicon`. (Right-click to extract files from context menu)

    ## adjust relative paths

    1. If you open the browser now, you can see an error in the browser console. 
        * The generated code is assuming you are working on a server, and the / before the name of the file indicates to look in the root directory. ex. locahost:3000/ 
        * When using file:/ the root is c:\ !  
    
    1. Fix this error by removing the slash from the `href` attribute value and pointing to the favicon directory.
