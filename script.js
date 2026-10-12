function drag(event) { // runs when you drag something (ex. icons in tierlist)
    event.dataTransfer.setData("text/plain", event.target.id) // this stores the ID of the icon in the tierlist 
}

function allowDrop(event) { // allows drop to occur, by preventing default of dropping not occurring
    event.preventDefault();
}

function drop(event) { // runs when a drop occurs
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    let dropTarget = event.target.closest('.tier-dropzone, .song-pool');
    if (dropTarget) dropTarget.appendChild(draggedElement);
}