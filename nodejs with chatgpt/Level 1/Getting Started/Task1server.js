//Task 1 creating server

const http = require("http"); /*
An HTTP (Hypertext Transfer Protocol) server is a type of web server that is designed to serve web pages over the Internet. 
It is the component of the web infrastructure that is responsible for receiving HTTP requests from client devices
 (such as browsers) and returning the requested web pages or other resources (such as images, videos, or APIs).
*/

/*The http.createServer function in Node.js returns an instance of an HTTP server. 
This server can be used to handle HTTP requests and respond to those requests with data. */
const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/plain" });
  res.end("Hello World");
  /*This line writes the response body using the end method of the res object.
   The response body is the message "Hello, World!", which will be displayed in the browser.*/
}); /*
This line sets the status code and response headers using the writeHead method of the res object. 
The 200 status code means "OK," and the Content-Type header specifies the type of the response body, 
which is plain text.
*/
console.log(typeof httpServer); //object

httpServer.listen(3000, () => {
  console.log("listning at port 3000");
});
/* This line starts the HTTP server and makes it listen for incoming requests on port 3000. 
The listen method takes a port number and an optional callback function as arguments.
 The callback function is executed when the server is ready to receive requests, 
 and it simply logs a message to the console.*/
