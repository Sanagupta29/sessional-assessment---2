var counter = 0;
var infoContainer = document.getElementById("api");
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('Get', 'https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09');

    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data){
    var htmlString = "";
    for(i=counter; i<10; i++){
        htmlString += "<p>" + data[i].title + data[i].body + "</p>"
    }
    infoContainer.insertAdjacentHTML('beforeend',htmlString);
}
