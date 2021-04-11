/*Неориентированный граф задан матрицей смежности. Найдите степени всех вершин графа.*/

function createMatrixL(obj) {
  var res = "",
    size = document.getElementById("sizeL"),
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

function printMatrixL() {
  var A = [],
    size = document.getElementById("sizeL"),
    N = size.options[size.selectedIndex].value * 1;
  for (var i = 0; i < N; i++) {
    A[i] = [];
    for (var j = 0; j < N; j++) {
      A[i][j] = 1 * document.getElementById("a" + (i + 1) + (j + 1)).value;
    }
  }
  return A;
}

function powMatrix(){
  matrixsize = document.getElementById("sizeL").value;
  answer = document.getElementById("answerL");
  answer.innerHTML = "Степени вершин: " + "<br>";
  matrix = printMatrixL();
  let mtr = [];

  for (let k = 0; k < matrix.length; k++){
    mtr[k] = 0;
  }

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (+matrix[i][j] === 1){
        mtr[i] += 1;
      }
    }
    answer.innerHTML += mtr[i] + "<br>";
  }
}