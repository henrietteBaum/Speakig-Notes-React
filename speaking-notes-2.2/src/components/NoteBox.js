import React, { useState } from 'react'
import { StyledTextarea } from '../styles/NoteBox.style';
import ClearTextArea from './ClearTextArea';
import FileUpload from './FileUpload';
import SaveNoteText from './SaveNoteText';
import { StyledSidebar} from '../styles/Sidebar.style';
import WebSpeech from './WebSpeech';

function NoteBox() {

  const [noteText, setNoteText] = useState([]);

  const handleTextChange = event => {
    setNoteText(event.target.value);
  };


  return (
    <>
    <StyledTextarea 
      value={noteText} 
      onChange={handleTextChange} 
      placeholder='Type text here or open existing file'
    />
     <FileUpload
      noteText={noteText}
      setNoteText={setNoteText}
     />
     <StyledSidebar>
     <WebSpeech
      noteText={noteText}
      setNoteText={setNoteText}
      />
     <ClearTextArea
      noteText={noteText}
      setNoteText={setNoteText}
     />
     {/* <SelectVoice
     selectecVoice={selectedVoice}
     setSelectedVoice={setSelectedVoice}
     /> */}
     </StyledSidebar>
     <SaveNoteText
      noteText={noteText}
      setNoteText={setNoteText}
     />
     </>
  )
}


export default NoteBox