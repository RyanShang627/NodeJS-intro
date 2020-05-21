const fs = require('fs');
const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicatedNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log('New note added!');
  } else {
    console.log('Note title taken!');
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
