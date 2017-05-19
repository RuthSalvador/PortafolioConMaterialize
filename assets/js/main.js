//Contact validations
window.onload = function(){
  var input   = document.getElementsByClassName('input');
  var error   = document.getElementsByClassName('error');

  var soloLetras = function (e) {
    var codLetra = e.keyCode;
    if((codLetra>=97 && codLetra<=122) || (codLetra>=65 && codLetra<=90) ||
      codLetra == 39 || codLetra == 32 || codLetra==241 || codLetra==209) {
      return true
    } else {
      return false
    }
  }

  input[0].onkeypress = soloLetras;
  input[1].onkeypress = soloLetras;

  document.getElementById('submit').addEventListener('click',function(){
    if(input[0].value==''||input[1].value==''||input[2].value==''||input[3].value==''){
      error[0].textContent = 'Todos los campos son obligatorios';
    } else {
      error[0].textContent = '';
    }
  });
}
