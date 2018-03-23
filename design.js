const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");
const colorPicker = document.getElementById("colorPicker");
const myTable = document.getElementById("pixelCanvas");
const submit = document.querySelector("input[type='submit']");
let row = "";
let col = "";

const makeGrid = () => {
  for (let i = 1; i <= gridHeight.value; i++){
    row = document.createElement('tr');
    myTable.appendChild(row);
    for (let j = 1; j <= gridWidth.value; j++){
      col = document.createElement('td');
      row.appendChild(col);
    }
  }
};

submit.addEventListener('click', function(evt){
  myTable.innerHTML = "";
  evt.preventDefault();
  makeGrid();
});

myTable.addEventListener("click", function (evt){
  return evt.target.nodeName === 'TD' ? evt.target.style.backgroundColor = colorPicker.value : "";
});

myTable.addEventListener("dblclick", function (evt){
  return evt.target.nodeName === 'TD' ? evt.target.style.backgroundColor = "" : "";
});