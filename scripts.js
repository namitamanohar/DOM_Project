function showFact() {
  //this is for the Click Here button
  //get the div below the Click Here button using the id
  //
  //create a p tag element and set it equal to a variable
  //
  // add innerHTML to the p element and set it equal to a random fact  //
  //append this p element to the div element
  //
}

function removeFact() {
  //this is for the Remove Fact button
  //get the div element below the Click Here button using the id and set it equal to a variable
  var factDiv = document.getElementById("FactBox");
  //https://www.w3schools.com/jquery/html_removeclass.asp
  //using the resource above remove the the class border
  factDiv.classList.remove("border");
  //using the resource above remove the the class bernie
  factDiv.classList.remove("bernie");
  //set the innerHTML of the div element to "" (empty strings)
  factDiv.innerHTML = "";
}

function addBlueBackground() {
  //this is for the Toggle Blue Background button
  //get the div element below the Click Here button using the id and set it equal to a variable
  var factDiv = document.getElementById("FactBox");
  // https://www.w3schools.com/howto/howto_js_toggle_class.asp
  //using the resource above toggle the class blue from the element above
  factDiv.classList.toggle("blue");
}

function addWhiteText() {
  //this is for the Toggle White Text Button
  //get the div element below the Click Here button using the id and set it equal to a variable
  var factDiv = document.getElementById("FactBox");
  // https://www.w3schools.com/howto/howto_js_toggle_class.asp
  //using the resource above toggle the class white from the element above
  factDiv.classList.toggle("white");
}

function addRedBorder() {
  //this is for the Toggle Red Border Button
  //get the div element below the Click Here button using the id and set it equal to a variable
  var factDiv = document.getElementById("FactBox");
  // https://www.w3schools.com/howto/howto_js_toggle_class.asp
  //using the resource above toggle the class border from the element above
  factDiv.classList.toggle("border");
}
//get the Toggle Bernie button using its id and set it equal to the variable called bernieBtn
const bernieBtn = document.querySelector("#bernieBtn");
//here is the code for adding an eventListenter to the bernieBtn that alerts a message
bernieBtn.addEventListener("click", () => {
  alert("A smile - courtesy of Bernie 😃🧤");
});
function addBernie() {
  //this is for the Toggle Bernie button
  //get the div element below the Click Here button using the id and set it equal to a variable
  var factDiv = document.getElementById("FactBox");
  // https://www.w3schools.com/howto/howto_js_toggle_class.asp
  //using the resource above toggle the class bernie from the element above
  factDiv.classList.toggle("bernie");
}
