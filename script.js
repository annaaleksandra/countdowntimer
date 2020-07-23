
const days = document.getElementById('days');
days.textContent= "";

const button = document.getElementById('button');
button.addEventListener('click', changeDayAmount);

const subtitle = document.getElementById('subtitle');

function changeDayAmount() {
    changeClassLists();
    getDaysLeft();
}

function changeClassLists() {
    button.classList.add('inactive');
    subtitle.classList.remove('inactive');
}


function getDaysLeft() {
    let today = Date.now();
    let dueDate = new Date(2020, 07, 28).getTime();
    let daysLeft = (dueDate - today) / (60 * 60 * 24 * 1000)

    days.textContent = Math.ceil(daysLeft);
}