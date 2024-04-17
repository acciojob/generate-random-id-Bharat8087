function makeid(l) {
  var result = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < l; i++) {
    result += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
