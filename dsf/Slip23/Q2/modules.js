// Q.2) Write node js script to build Your Own Node.js Module. Use require (“http”) module is a built-in Node module that invokes the functionality of the HTTP library to create a local server. Also use the export statement to make functions in your module available externally. Create a new text file to contain the functions in your module called, “modules.js” and add this function to return today’s date and time.
function datetime() {
  let dt = new Date();
  let date = ("0" + dt.getDate()).slice(-2);
  let month = ("0" + (dt.getMonth() + 1)).slice(-2);
  let year = dt.getFullYear();
  let hours = dt.getHours();
  let minutes = dt.getMinutes();
  let seconds = dt.getSeconds();
  return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
}
module.exports = { datetime };
