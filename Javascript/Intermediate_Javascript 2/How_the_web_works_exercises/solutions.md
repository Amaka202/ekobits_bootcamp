## What is HTTP?

 HTTP (Hypertext Transfer Protocol) is a protocol (means of communication) between servers and browsers. 

## What is a URL?

URL stands for Uniform Resource Locator. A URL is nothing more than the address of a given unique resource on the Web. In theory, each valid URL points to a unique resource.

## What is TCP?

TCP (Transmission Control Protocol) is a standard that defines how to establish and maintain a network conversation through which application programs can exchange data. TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other.

## WHat is IP

The Internet Protocol (IP) is the protocol that governs how data is sent across a network from one computer to another. Every computer has at least one IP address which is a unique identifier of that computer on the web.

## What is DNS?

 Domain Name System is a server that takes a domain name like https://www.google.com as input and returns an IP address as output. This is necessary for the web because computers can only make connections to ip addresses.

 ## What is idempotent?

 Idempotent - Refers to an operation that can be repeated many times on a set of data and the state of the set of data will not change. This concept is applicable to the HTTP spec since operations like a GET request should be idempotent but a POST request is not.

 ## What is a query string?

 The QueryString collection is used to retrieve the variable values in the HTTP query string.

## What is a path or route?

A path may relate to a file that the web server has in its hard drive or an abstract resource that the web server is able to create, read update or delete. These are also called routes.

## List four HTTP Verbs and their use cases.

GET - An idempotent operation that is designed for getting data from the server.
POST - A non idempotent operation that can create data on the server or otherwise modify data.
PUT - Technically idempotent, but commonly used for updating data that already exists on the server.
PATCH - Non idempotent and also used for modifying data on the server. (Read this for details on why PATCH is not classified as idempotent.)

## What is a client?

Clients, also known as service requesters, are pieces of computer hardware or server software that request resources and services made available by a server.

## what is a server

A server is a device or computer program that provides functionality for other devices or programs. Any computerized process that can be used or called upon by a client to share resources and distribute work is a server.

## What is an HTTP request?

the browser makes a HTTP GET request to the server. The GET request contains the path, in this case /. We will talk about the GET request in more details later.

## what is an HTTP response

the response sent back after a HTTP request is succesful

## What is an HTTP header? Give a couple examples of request and response headers you have seen.

HTTP headers let the client and the server pass additional information with an HTTP request or response

## What is REST?

REST (REpresentational State Transfer) is an architectural style, and an approach to communications that is often used in the development of Web services.

## What is JSON?

Javascript Object Notation
JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page

## What happens when you type in "Hello World" in google.com and press enter?

A request is sent to DNS to know the IP address of Google.com, when the IP is return a HTTP request is sent to the server bearing the IP address, which retrieves the information and send back a HTTP response.

## What does it mean when we say the web is "stateless"?

web is stateless - this means that when using HTTP the end point does not "remember" things (such as who you are). It has no state. This is in contrast to a desktop application - if you have a form and you go to a different form, then go back, the state has been retained (so long as you haven't shut down the application).

Normally, in order to maintain state in web application, one uses cookies.

## What is curl?

curl is a tool to transfer data from or to a server, using one of the supported protocols 