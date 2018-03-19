console.log("Deadpool is awesome");


fetch('http://localhost:8080/views/floatingButton.html')
    .then(response => response.text())
        .then(data => {
            document.body.innerHTML += data;
     });

injectScript('http://localhost:8080/scripts/floatingButton.js');



function injectScript(url){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = url;
    head.appendChild(script);
}