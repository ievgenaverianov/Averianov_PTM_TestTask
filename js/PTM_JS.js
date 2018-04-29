var aTableCells = document.getElementsByTagName('td');

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
      break;
  }
  aTableCells[i].innerHTML = aRandomNumbers[i];
};
console.log('aRandomNumbers = ', aRandomNumbers);


