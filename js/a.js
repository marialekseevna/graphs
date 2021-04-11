/*По заданной квадратной матрице n×n из нулей и единиц определите, 
может ли данная матрица быть матрицей смежности простого неориентированного графа*/

function createMatrixA(obj) {
  var res = "",
    size = document.getElementById("sizeA"),
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

function printMatrixA() {
  var A = [],
    size = document.getElementById("sizeA"),
    N = size.options[size.selectedIndex].value * 1;
  for (var i = 0; i < N; i++) {
    A[i] = [];
    for (var j = 0; j < N; j++) {
      A[i][j] = 1 * document.getElementById("a" + (i + 1) + (j + 1)).value;
    }
  }
  return A;
}

function unorientedGraph() {
  matrixsize = document.getElementById("sizeA").value;
  answer = document.getElementById("answerA");
  matrix = printMatrixA();
  let k = 0;
  let z = 0;

  for (var i = 0; i < matrixsize; i++) {
    if (matrix[i][i] != 0) {
      break;
    }
    for (j = 0; j < matrixsize; j++) {
      if (matrix[i][j] != matrix[j][i]) {
        break;
      }
    }
    if (j < matrixsize) {
      break;
    }
  }

  for (let i = 0; i < matrixsize; i++) {
    for (let j = 0; j < matrixsize; j++) {
      if (matrix[i][i] != 0) {
        k = 9999;
      }
      if (matrix[i][j] == matrix[j][i]) {
        k++;
      }
    }
  }

  for (i = 0; i < matrixsize; i++)
    for (j = 0; j < matrixsize; j++) {
      if (i == j && matrix[i][j] == 1) z++;
    }
  if (k != matrixsize * matrixsize) {
    answer.innerHTML = "Нет";
  } else {
    answer.innerHTML = "Да";
  }
}