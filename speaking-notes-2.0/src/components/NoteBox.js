// working version :)))

import React, { useState } from 'react'
import FileUpload from './FileUpload';
import SaveNoteText from './SaveNoteText';
import WebSpeech from './WebSpeech';

function NoteBox() {

  const[noteText, setNoteText] = useState([]);
  
  return (
    <div className='wrapper'>
      <textarea
      className='textarea'
      rows='10'
      placeholder='Type text here ...'
      value={noteText}
      onChange={(e) => setNoteText(e.target.value) }
      ></textarea>

      <div className='btn-group'>
          <WebSpeech
          noteText={noteText}
          setNoteText={setNoteText}
          />
          <FileUpload
          noteText={noteText}
          setNoteText={setNoteText}
          />  
        <SaveNoteText
        noteText={noteText}
        setNoteText={setNoteText}
        />
      </div>
    </div>
  )
}

export default NoteBox