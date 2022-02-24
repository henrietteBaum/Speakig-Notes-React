// working version 

import React, {useRef} from 'react'


function WebSpeech({noteText}) {
  const syntRef = useRef(window.speechSynthesis)

  const handleBtnSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(noteText);
    syntRef.current.speak(utterance);
  }

  return (
    <div>
      <button 
      id='btn-speak'
      onClick={handleBtnSpeak}
      >Speak</button>
    </div>
  )
}

export default WebSpeech