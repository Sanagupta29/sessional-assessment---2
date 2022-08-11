var counter = 0;
var click = 0;
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
    counter = click*10 + 1; 
    click++;
});

function renderHTML(data){
    var htmlString = "";
    var printValue = counter+10;
    for(var i = counter; i < printValue; i++){
        htmlString += "<b>" + data[i].title +"</b>"+"<p>" + data[i].body + "</p>";
    }
    infoContainer.insertAdjacentHTML('beforeend',htmlString);
}
