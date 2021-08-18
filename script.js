const countElement = document.getElementById("count-el"),
    incrementButton = document.getElementById("increment-button"),
    saveButton = document.getElementById("save-button"),
    resetButton = document.getElementById("reset-button"),
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

function reset() {
    countNumber = 0;
    countElement.textContent = countNumber;
    previousEntriesElement.textContent = "Previous entries: ";
}

incrementButton.addEventListener('click', increment);
saveButton.addEventListener('click', save);
resetButton.addEventListener('click', reset)