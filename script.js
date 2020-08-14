// save user input
function uwuGen() {
  var x = document.getElementById("inText").value;
  var y = x.replace(/r/g, "w");

  document.getElementById("outText").innerHTML = y;
}
