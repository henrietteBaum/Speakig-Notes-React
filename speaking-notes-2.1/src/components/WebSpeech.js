// working version 

import React, {useRef} from 'react'
import StyledButton from '../styles/Button.style';
import StyledSidebar from '../styles/Sidebar.style';

function WebSpeech({noteText}) {
  const syntRef = useRef(window.speechSynthesis)

  const handleBtnSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(noteText);
    syntRef.current.speak(utterance);
  }

  return (
    <StyledSidebar>
      <StyledButton 
      onClick={handleBtnSpeak}
      >Speak</StyledButton>
    </StyledSidebar>
  )
}

export default WebSpeech