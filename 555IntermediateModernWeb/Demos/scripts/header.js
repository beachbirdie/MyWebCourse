var headerBody = document.getElementsByTagName("body")[0];
var myElemDiv = document.createElement('div');
var myTitle = document.title;

myElemDiv.id = 'page-header';

myElemDiv.innerHTML = `
        <header style="padding-bottom:20px">
            <h1>${myTitle}</h1>
            <a href="../../">
                Demos index</a>   
        </header>
        <hr />
`;

headerBody.insertAdjacentElement('afterbegin', myElemDiv)