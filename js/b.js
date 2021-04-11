/*По заданной матрице смежности неориентированного графа определите, содержит ли он петли.*/

function createMatrixB(obj) {
  var res = "",
    size = document.getElementById("sizeB"),
    n = size.options[size.selectedIndex].value * 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      res +=
        '<input style="width: 80px; height: 80px;" type="text" maxlength="1" id="a' +
        (i + 1) +
        (j + 1) +
        '" />';
    }
    res += "<br />";
  }
  document.getElementById(obj).innerHTML = res;
}

function printMatrixB() {
  var A = [],
    size = document.getElementById("sizeB"),
    N = size.options[size.selectedIndex].value * 1;
  for (var i = 0; i < N; i++) {
    A[i] = [];
    for (var j = 0; j < N; j++) {
      A[i][j] = 1 * document.getElementById("a" + (i + 1) + (j + 1)).value;
    }
  }
  return A;
}

function matrixLoops() {
  answer = document.getElementById("answerB");
  answer.innerHTML = " ";
  matrix = printMatrixB();
  let loop = false;

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++) {
      if (+matrix[i][i] !== 0) {
        loop = true
        }
      }
    }
    if (loop == true){
      answer.innerHTML = "Да";
    }else{
      answer.innerHTML = "Нет";
    }
}