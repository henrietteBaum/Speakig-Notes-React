// working version :)))

import React, { useState } from 'react'
import WebSpeech from './WebSpeech';

function NoteText() {

  const[noteText, setNoteText] = useState([]);

  // let handleBtnSave = (e) => {
  //   console.log(noteText);
  // }

  let handleBtnSave = () => {
    const element = document.createElement('a');
    const file = new Blob([noteText], {
      type:'text/plain; charset=utf-8'
    })
    element.href = URL.createObjectURL(file);
    element.download = 'newfile.txt';
    document.body.appendChild(element);
    element.click();
  }
  
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
        <button
        className='btn-save'
        onClick={handleBtnSave}
        >Save</button>

      </div>
    </div>
  )
}

export default NoteText