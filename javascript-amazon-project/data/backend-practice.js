// Backend = another computer that manages the data of a website.
// Messages can be sent between computers using HTTP (HyperText Transfer Protocol)

// Use built-in class: XMLHttpRequest
const xhr = new XMLHttpRequest();

// Use this to WAIT for response to come back.
xhr.addEventListener('load', () => {
  // Response is NOT available right away since it takes tme to send data. So it will be undefined.
  console.log(xhr.response);
});

// 2 parameters = type of HTTP message(GET, POST, PUT, DELETE), where to send HTTP message(URL address that helps locate another computer on the Internet).
xhr.open('GET', 'https://supersimplebackend.dev');

// Using another URL path.
// xhr.open('GET', 'https://supersimplebackend.dev/hello');
// xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');

// Sending an unsupport URL path will lead to an error.
// Some backends provide a documentation page on which URL paths are supported(Backend API).
// xhr.open('GET', 'https://supersimplebackend.dev/not-supported');

// Send message. View results in Network tab after inspect element.
// Our computer sends request to a computer which sends back a response. Request-Response Cycle.
xhr.send();

// Using the URL in the browser is the same as making a GET request.
