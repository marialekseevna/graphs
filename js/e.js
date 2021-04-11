/*Простой неориентированный граф задан матрицей смежности, выведите его представление в виде списка ребер.*/

function createMatrixE(obj) {
    var res = "",
      size = document.getElementById("sizeE"),
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

function printMatrixE() {
    var A = [],
      size = document.getElementById("sizeE"),
      N = size.options[size.selectedIndex].value * 1;
    for (var i = 0; i < N; i++) {
      A[i] = [];
      for (var j = 0; j < N; j++) {
        A[i][j] = 1 * document.getElementById("a" + (i + 1) + (j + 1)).value;
      }
    }
    return A;
}

function matrixToEdges() {
    matrixsize = document.getElementById("sizeE").value;
    answer = document.getElementById("answerE");
    answer.innerHTML = "Список ребер: " + "<br>";
    matrix = printMatrixE();
    
    for (let i = 0; i < matrixsize; i++) {
      for (let j = 0; j < matrixsize; j++) {
        if (i < j && matrix[i][j] == 1) {
          answer.innerHTML += (i + 1) + " " + (j + 1) + "<br>";
          }
      }
    }
}