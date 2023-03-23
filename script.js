const rightColumn = document.querySelector('.right-column');

function clickyCode() {
    if (rightColumn.style.backgroundColor == 'red'){
        rightColumn.style.backgroundColor = 'green';
    } else {
        rightColumn.style.backgroundColor = 'red';
    }
}

rightColumn.addEventListener('click', clickyCode);