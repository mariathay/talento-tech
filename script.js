function addNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    if (title === '' || content === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const note = document.createElement('div');
    note.className = 'note';

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;

    const noteContent = document.createElement('p');
    noteContent.textContent = content;

    note.appendChild(noteTitle);
    note.appendChild(noteContent);

    document.getElementById('notesList').appendChild(note);

    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
}
