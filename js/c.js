/*Простой неориентированный граф задан матрицей смежности. Найдите количество ребер в графе*/ 

function createMatrixC(obj) {
  var res = "",
    size = document.getElementById("sizeC"),
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

function printMatrixC() {
  var A = [],
    size = document.getElementById("sizeC"),
    N = size.options[size.selectedIndex].value * 1;
  for (var i = 0; i < N; i++) {
    A[i] = [];
    for (var j = 0; j < N; j++) {
      A[i][j] = 1 * document.getElementById("a" + (i + 1) + (j + 1)).value;
    }
  }
  return A;
}

function matrixEdges() {
  matrixsize = document.getElementById("sizeC").value;
  answer = document.getElementById("answerC");
  answer.innerHTML = "";
  matrix = printMatrixC();
  let k = 0;

  for (i = 0; i < matrixsize; i++) {
    for (j = 0; j < matrixsize; j++) {
      if (matrix[i][j] == 1) k++;
    }
  }
  answer.innerHTML = k/2;
}