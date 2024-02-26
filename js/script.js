document.getElementById('executeButton').addEventListener('click', function () {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;

    let fullCode = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
        </html>
    `;

    if (htmlCode == '') {
        fullCode = `
            <html>
            <head>
                <title>Hello</title>
            </head>
            <body>
                <h1>Say hello!</h1>
            </body>
            </html>
        `;
    }

    const blob = new Blob([fullCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const newTab = window.open(url, '_blank');
    newTab.focus();
});

document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('htmlCode').value = '';
    document.getElementById('cssCode').value = '';
    document.getElementById('jsCode').value = '';
});

document.getElementById('githubButton').addEventListener('click', function () {
    window.open('https://github.com/hello-n-bye/spark')
})