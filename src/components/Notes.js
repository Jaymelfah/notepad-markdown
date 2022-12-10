import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { BsTrash } from 'react-icons/bs';

const Notes = (props) => {
  const { notes, setNotes } = props;
  const createNewNote = () => {
    const note = {
      id: nanoid(),
      body: '',
    };
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const filter = notes.filter((note) => note.id !== id);
    setNotes(filter);
  };

  return (

    <div className="note-container ">
      <div className="note-header flex">
        <h1>Notes</h1>
        <button
          className="add-note-btn"
          onClick={createNewNote}
          type="button"
        >
          +

        </button>
      </div>
      <div className="notes-list flex">
        {notes.map(((note, index) => (
          <div className="specific-note" key={note.id}>
            <span>
              Note
              {' '}
              {index + 1}
            </span>
            <BsTrash onClick={() => deleteNote(note.id)} />
          </div>
        )))}
      </div>

    </div>
  );
};

Notes.propTypes = ({
  notes: PropTypes.array,
  setNotes: PropTypes.func,
}).isRequired;
export default Notes;
