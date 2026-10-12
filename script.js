const songLibrary = [ // JavaScript array to store songs
    { id: 'song-1',  title: 'Mr. To You',          img: 'images/album1.jpg' },
    { id: 'song-2',  title: 'Career Boy',          img: 'images/album1.jpg' },
    { id: 'song-3',  title: 'Daddy Like',          img: 'images/album1.jpg' },
    { id: 'song-4',  title: 'Emasculate',          img: 'images/album1.jpg' },
    { id: 'song-5',  title: 'Man to Man',          img: 'images/album1.jpg' },
    { id: 'song-6',  title: 'Musical Genius',      img: 'images/album1.jpg' },
    { id: 'song-7',  title: 'Flamboyant',          img: 'images/album1.jpg' },
    { id: 'song-8',  title: 'Guyliner',            img: 'images/album1.jpg' },
    { id: 'song-9',  title: 'Live by the Sword',   img: 'images/album1.jpg' },
    { id: 'song-10', title: 'Adam & Steve',        img: 'images/album1.jpg' },
    { id: 'song-11', title: 'fReAkY 4 Life',       img: 'images/album1.jpg' },
    { id: 'song-12', title: 'F The World',         img: 'images/album2.jpg' },
    { id: 'song-13', title: 'My Agenda',           img: 'images/album2.jpg' },
    { id: 'song-14', title: 'Gentleman',           img: 'images/album2.jpg' },
    { id: 'song-15', title: 'Mlady',               img: 'images/album2.jpg' },
    { id: 'song-16', title: 'Iron Fist',           img: 'images/album2.jpg' },
    { id: 'song-17', title: 'Barbie Boy',          img: 'images/album2.jpg' },
    { id: 'song-18', title: 'Sorry Bro (I Love You)', img: 'images/album2.jpg' },
    { id: 'song-19', title: 'Monk Mode (Interlude)', img: 'images/album2.jpg' },
    { id: 'song-20', title: 'Edgelord',            img: 'images/album2.jpg' },
    { id: 'song-21', title: 'Ram It Down',         img: 'images/album2.jpg' },
    { id: 'song-22', title: 'Give Great Thanks',   img: 'images/album2.jpg' },
    { id: 'song-23', title: 'Symphony',            img: 'images/album3.jpg' },
    { id: 'song-24', title: 'Idolize',             img: 'images/album3.jpg' },
    { id: 'song-25', title: 'Freak Mode',          img: 'images/album3.jpg' },
    { id: 'song-26', title: 'Sodom & Gomorrah',    img: 'images/album3.jpg' },
    { id: 'song-27', title: 'Puppet',              img: 'images/album3.jpg' },
    { id: 'song-28', title: 'Manmade Horrors',     img: 'images/album3.jpg' },
    { id: 'song-29', title: 'Yes Man',             img: 'images/album3.jpg' },
    { id: 'song-30', title: 'Anon',                img: 'images/album3.jpg' },
    { id: 'song-31', title: 'Phonies',             img: 'images/album3.jpg' },
    { id: 'song-32', title: 'Touch Grass',         img: 'images/album3.jpg' },
    { id: 'song-33', title: 'Lifetime',            img: 'images/album3.jpg' },
    { id: 'song-34', title: 'Warning Signs',       img: 'images/album3.jpg' },
    { id: 'song-35', title: 'Wanna Be a Star',     img: 'images/album3.jpg' },
    { id: 'song-36', title: 'Mr. Tambourine Man',  img: 'images/album4.jpg' },
    { id: 'song-37', title: "Hips Don't Lie",      img: 'images/album4.jpg' },
    { id: 'song-38', title: 'Hella Good',          img: 'images/album4.jpg' },
    { id: 'song-39', title: 'Feel Good Inc.',      img: 'images/album4.jpg' },
    { id: 'song-40', title: 'Scarborough Fair',    img: 'images/album4.jpg' },
    { id: 'song-41', title: 'Caribbean Blue',      img: 'images/album4.jpg' },
    { id: 'song-42', title: 'Without Me',          img: 'images/album4.jpg' },
    { id: 'song-43', title: 'The Model',           img: 'images/album4.jpg' },
    { id: 'song-44', title: 'Young Folks',         img: 'images/album4.jpg' },
    { id: 'song-45', title: 'Bizarre Love Triangle', img: 'images/album4.jpg' }
];

document.addEventListener('DOMContentLoaded', () => { // adding songs to website
    const songPool = document.querySelector('.song-pool');

    songLibrary.forEach(song => {
        const item = document.createElement('div');
        item.className = 'tier-item';
        item.draggable = true;
        item.id = song.id;

        item.innerHTML = `
            <img src="${song.img}" alt="${song.title}">
            <span class="song-title">${song.title}</span>
        `;

        songPool.appendChild(item);
    });
});

let draggedId = null; // variable to track ID of dragged item

document.addEventListener('dragstart', (event) => { // listens for dragstart
    const item = event.target.closest('.tier-item');
    if (!item) return;
    draggedId = item.id;
    event.dataTransfer.setData('text/plain', item.id);
});

document.addEventListener('dragover', (event) => { // allows dropping by preventing default
    const dropzone = event.target.closest('.tier-dropzone, .song-pool');
    if (dropzone) event.preventDefault();
});

document.addEventListener('drop', (event) => { // allows drop to occur
    const dropzone = event.target.closest('.tier-dropzone, .song-pool');
    if (!dropzone) return;

    event.preventDefault();

    const id = event.dataTransfer.getData('text/plain') || draggedId;
    const draggedElement = document.getElementById(id);

    if (draggedElement) dropzone.appendChild(draggedElement);

    draggedId = null; // now that dragging has finished, set back to NULL
});