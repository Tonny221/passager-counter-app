const countElement = document.getElementById("count-el"),
    incrementButton = document.getElementById("increment-button"),
    saveButton = document.getElementById("save-button"),
    previousEntriesElement = document.getElementById("previous-entries");

let countNumber = 0;

function increment(){
    countNumber += 1;
    countElement.textContent = countNumber;
}

function save(){
    let previousString = countNumber + " - ";
    previousEntriesElement.textContent += previousString;
    countNumber = 0;
    countElement.textContent = countNumber;
}

incrementButton.addEventListener('click', increment);
saveButton.addEventListener('click', save);