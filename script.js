
const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// For the empty boxes
for (const empty of emptyBoxes) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    //console.log("dragStart");
    this.className += ' hold';
    setTimeout(() =>  this.className = 'invisible', 0);
}

function dragEnd() {
    // console.log("dragEnd");
    this.className = 'fill';
}

function dragOver(e) {
    //console.log("dragOver");
    e.preventDefault();
}

function dragEnter(e) {
    //console.log("dragEnter");
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    //console.log("dragLeave");
    this.className = 'empty';
}

function dragDrop() {
    //console.log("dragDrop");
    this.className = 'empty';
    this.append(fill);
}