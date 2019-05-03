var consoleBody = document.getElementById("page-header");
var elemDiv = document.createElement('div');

elemDiv.innerHTML
 = `    <p>Open the console in order to see the output</p>
        <p>Ctrl-Shift-I is oneshortcut to open the console</p>

        <p>F12 is used by most browers as a shortcut</p>
`;
elemDiv.id="console-directions"

consoleBody.appendChild(elemDiv);