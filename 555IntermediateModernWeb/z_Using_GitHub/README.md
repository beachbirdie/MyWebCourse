# Chapter 0: Intro

## Overview

This is an alternative way to work on exercises, by creating your own repository for creating exercises.  If you choose to go this route, in future exercises, use the repo you create and open in VSCode instead of the WIP
directory.


## Objectives    
* Practice with markdown files 
* Practice with VSCode
* Install VS Code extensions
* Create new repository using GitHub
* Commit your changes

### Part 2: Install VS Code extensions:

    To install extensions, look on the left side bar menu of VS Code and click on the `Extensions` icon or use the shortcut (Ctrl + Shift + X). Type into the Extensions Marketplace search field to find `Open in Browser`. When you've found the extension, install it by pressing the green `Install` button. Wait for the install to complete and then press the blue `Reload` button that appeared in the same location as the green `Install` button.


1. Install a VS Code Extension called `Open in Browser` if you do not have it already installed. 

    This extension will allow us to easily open our HTML files on the browser.

1. Follow a similar workflow as explained in Step 1 to download another VS Code Extension called `GitLens -
Git supercharged`

    GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.

### Part 3 - Create new MyWebCourse repository using GitHub

1. You will be creating a repository in GitHub and for working locally. Open a command prompt to c:\ and execute these commands - putting YOUR name and your email in quotes.
    ```
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    ```

2. Create a directory on C:\ called `MyWebCourse` by using  mkdir to create a new directory called MyWebCourse:

    ```
    mkdir MyWebCourse
    ```

3. Navigate to https://GitHub.com/ and sign into an existing account of yours or sign up for a new account.

4. After logging into GitHub, create a new GitHub repository called `MyWebCourse` by either selecting the `Start a Project` button on the center of the page or the `New` green button on the left hand `Repositories` panel

    Leave the checkbox for `Initialize this repository with a README` unchecked and select `Create Repository`

5. Copy the list of commands from the section `…or create a new repository on the command line` and paste them into the windows Command Prompt we opened in Step 2 that is currently within the `MyWebCourse` directory. Press enter to execute the last line and your repository should have been created.

6. From the Command Prompt within `MyWebCourse` directory execute the command `code .` to open the project in VS Code.

7. Find the README.md file within the Explorer on the left side of VS Code and open it.

8. Edit the README.md file to include your name

9. Save the file, and notice the `Source Control` button on the left hand toolbar. It should now have a blue circle on it containing the number 1. This number indicates the number of files that have been changed locally.

10. Within the panel `Source Control` that opened, mouse over the README.md file; press the `+` button that appeared to stage the change. You can also stage the change by right clicking on the README.md and clicking `Stage Changes`. You should now see that `README.md` was added above to `Staged Changes`

11. Above `Staged Changes` you should see a text input field with the text `Message (press Ctrl+Enter to commit)`. Within this field enter a good commit message which describes the changes we staged in the previous step.

12. Click the check mark above the text message field to commit the changes made to README.md

13. Now that we have committed a change it is ready to be pushed to GitHub. Before pushing we always want to make sure we've pulled the latest changes from the remote repository, but since we're making the first changes we can go ahead and push. To push the commit to GitHub, click on the `...` button found on top of VS Code's git panel which was on the same level as the check mark. You can also click on the `Synchronize Changes` button found in blue on the bottom left of VS Code. This button will pull changes and then push commits made to the current branch we are on.

14. VS Code will prompt you to enter your GitHub credentials to push the changes, please do so now. If you navigate to GitHub, you should see the README.md is updated with your changes.

15. VS Code will continue to ask for your GitHub username and password every time it talks to GitHub. You can use a credential helper shown in the Windows example below:


    On Windows, running the following in the command line will store your credentials:

    ```
    $ git config --global credential.helper manager
    ```

    You can also do this by install a native Git shell, such as Git for Windows https://gitforwindows.org/ or cloning the repository using SSH, but we would need an administrator of the repository to explicitly allow your SSH key.

16. Tell Git to ignore files in a directory. 
    
    * Git includes a settings file called `.gitignore`
    * Any files or directories included in this file will not be included when you push changes up to the repository.
    * Add a file called `.gitignore`
    * Open this file and add this on the first line: local-only.txt 
    * Now create a new file called `local-only.txt` and inside add the text "This is a local file."
    * Save the file - and you should not see it being tracked by Git.
    * You will be adding files as you perform labs in the class.  You do not want these changes to be published to the repository.  In order to ensure this, you will create a directory to hold these files.  The GIT directory is in this .gitignore file.


17. On VS Code's left hand toolbar, click on the `GitLens` extension you installed earlier. This extension contains additional features.

18. Familiarize yourself with `GitLens'` panel. Notice how you can use it to access different repositories and their branches, remote, your stashes, etc. Also notice how you can navigate through it to see history of a file, a line, or compare files between different branches or between local and remote.

19. Please mark your work as complete. With your name tent card if in a classroom or by using method for online training. (spreadsheet, status symbol, etc.)
