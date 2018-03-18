console.log("Deadpool is awesome");

fetch('http://localhost:8080/floatingButton.html')
    .then(response => response.text())
        .then(data => {
            document.body.innerHTML += data;
     });


    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://localhost:8080/floatingButton.js';
    head.appendChild(script);   