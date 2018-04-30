var oStartButton = document.getElementById("startButton");
var aTableCells = document.getElementsByTagName('td');
// var aRandomNumbers = [];

function fillCells() {

    var aRandomNumbers = [];
    for (i = 0; i < 42; i++) {
        aRandomNumbers.push(Math.floor(Math.random() * 4));
        switch (aRandomNumbers[i]){
            case 0:
                aRandomNumbers[i] = '&#9824;';
                break;
            case 1:
                aRandomNumbers[i] = '&#9827;';
                break;
            case 2:
                aRandomNumbers[i] = '&#9829;';
                break;
            case 3:
                aRandomNumbers[i] = '&#9830;';
        }
        aTableCells[i].innerHTML = aRandomNumbers[i];
    };
}

oStartButton.addEventListener("click", fillCells);

// function compareCellValues () {
//     if (aTableCells[i].innerHTML === aTableCells[i - 1].innerHTML) {
//         aTableCells[i - 1].classList.add("checked");
//     }
//     if (aTableCells[i].innerHTML === aTableCells[i + 1].innerHTML) {
//         aTableCells[i + 1].classList.add("checked");
//     }
//     if (aTableCells[i].innerHTML === aTableCells[i - 6].innerHTML) {
//         aTableCells[i - 6].classList.add("checked");
//     }
//     if (aTableCells[i].innerHTML === aTableCells[i + 6].innerHTML) {
//         aTableCells[i + 6].classList.add("checked");
//     }
// }

for (var i = 0; i < 42 ; i++) {
    aTableCells[i].addEventListener('click', function (i) {
        this.classList.add("checked");
        var sSymbol = this.innerHTML;
        for (var j = 0; j < 42; j++) {
            if (aTableCells[j].innerHTML === sSymbol)  {
                aTableCells[j].classList.add("checked");
            }

        }
    })
};

// console.log(aRandomNumbers);