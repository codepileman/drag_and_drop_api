const draggableElement = document.querySelector('#myDraggableElement');

draggableElement.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', draggableElement.id);
})


const dropZones = document.querySelectorAll('.drop-zone');
for(let dropZone of dropZones){
    dropZone.addEventListener('dragover', e => {
        e.preventDefault();
        dropZone.classList.add('drop-zone--over');
    });

    dropZone.addEventListener('dragleave', e => {
        //no need to remove child. when dragleave starts, DOM api removes the child
        dropZone.classList.remove('drop-zone--over');
    })

    dropZone.addEventListener('drop', e => {
        e.preventDefault();
        const droppedElementId = e.dataTransfer.getData('text/plain');
        const droppedElement = document.querySelector('#' + droppedElementId);
        dropZone.appendChild(droppedElement);
        dropZone.classList.remove('drop-zone--over');
    })

}