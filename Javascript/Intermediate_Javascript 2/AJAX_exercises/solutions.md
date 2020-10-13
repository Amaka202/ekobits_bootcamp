## Where else have you seen 'asynchronous' code before? Think back to a certain section in Part I of the Intermediate JavaScript course.

## What is XHR?

 this stands for XMLHttpRequest, which is an API that allows for transferring data between client and server. 

## What is XML? Why do we prefer to use JSON?

this stands for Extensible Markup language. In some ways XML looks similar to HTML (both use tags enclosed with brackets, for instance), but XML is primarily used to store text data.

Less Verbose: JSON has a more compact style than XML, and it is often more readable. The lightweight approach of JSON can make significant improvements in RESTful APIs working with complex systems.
Faster: The XML software parsing process can take a long time

## What is AJAX?

this stands for Asynchronous JavaScript and XML. It is a set of technologies that allows for building single page applications (applications that do not require full page refreshes to change data on the page). 

## Using the XHR object, make a request to https://omdbapi.com and choose a title to search by using the query string and key of t.

var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      console.log(JSON.parse(XHR.responseText))
    }
};
XHR.open("GET", "https://omdbapi.com?t=titanic");
XHR.send();

## Using the fetch API, make a request to https://omdbapi.com and choose a title to search by using the query string and key of t.

fetch('https://omdbapi.com?t=titanic').then(function(response){
    return response.json().then(function(data){
        console.log(data);
    });
});