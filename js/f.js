/*Простой неориентированный граф задан списком ребер, выведите его представление в виде матрицы смежности.*/

function createEdgesF(obj) {
    var res = "",
      size = document.getElementById("sizeF"),
      n = size.options[size.selectedIndex].value * 1;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < 2; j++) {
        res +=
          '<input class = "form" style="width: 80px; height: 80px;" type="text" maxlength="1" id="a' +
          (i + 1) +
          (j + 1) +
          '" />';
      }
      res += "<br />";
    }
    document.getElementById(obj).innerHTML = res;
}

function printEdgesF() {
    var A = [],
      size = document.getElementById("sizeF"),
      N = size.options[size.selectedIndex].value * 1;
    for (var i = 0; i < N; i++) {
      A[i] = [];
      for (var j = 0; j < 2; j++) {
        A[i][j] = 1 * document.getElementById("a" + (i + 1) + (j + 1)).value;
      }
    }
    return A;
}

function edgeToMatrix() {  
    answer = document.getElementById("answerF");
    answer.innerHTML = "Матрица смежности: " + "<br>";
    matrix = printEdgesF();
    var arrEdges = [];
    max = 0;
    
    for (let i = 0; i < matrix.length; i += 1) {
      for (let j = 0; j < matrix[i].length; j += 1) {
        if (matrix[i][j] > max) {
          max = +matrix[i][j];
        }
      }
    }
    for (let z = 0; z < max; z += 1) {
      arrEdges.push([]);
      for (let x = 0; x < max; x += 1) {
        arrEdges[z][x] = 0;
      }
    }
    let i = 0;
    let j = 0;
    for (let h = 0; h < matrix.length; h += 1) {
      console.log(matrix.length);
      i = +matrix[h][0];
      j = +matrix[h][1];
      arrEdges[i-1][j-1] = arrEdges[j-1][i-1] = 1;
      console.log(arrEdges);
      answer.innerHTML += arrEdges[h].join(" ") + "<br>"
    }
  }