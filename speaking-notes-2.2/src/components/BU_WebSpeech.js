import React, {useRef} from 'react'
import StyledButton from '../styles/Button.style';
import StyledSidebar from '../styles/Sidebar.style';
import SelectVoice from './SelectVoice';

function WebSpeech({noteText, selectedVoice, setSelectedVoice } ) {
  const syntRef = useRef(window.speechSynthesis)

  const handleBtnSpeak = ({selectedVoice}) => {
    const utterance = new SpeechSynthesisUtterance(noteText);
    utterance.voice = selectedVoice;
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