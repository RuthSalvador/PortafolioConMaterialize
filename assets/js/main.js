//Contact validations
window.onload = function(){
  var fist_name = document.getElementById('first_name');
  var last_name = document.getElementById('last_name');
  var message   = document.getElementById('textarea1');

  var letras = function (e) {
    var codLetra = e.keyCode;
    if ((codLetra>=97 && codLetra<=122) || (codLetra>=65 && codLetra<=90) || codLetra == 39 || codLetra == 32 || codLetra==241 || codLetra==209) {
      return true;
    } else {
      return false;
    }
  }

  first_name.onkeypress = letras;
  last_name.onkeypress = letras;
}
