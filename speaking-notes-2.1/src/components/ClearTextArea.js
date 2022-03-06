import React from 'react'
import StyledButton from '../styles/Button.style'
import { StyledClearText } from '../styles/ClearTextArea.style'
import StyledSidebar from '../styles/Sidebar.style'

function ClearTextArea({setNoteText}) {

const handleBtnClear = () => {
  setNoteText('');
}

  return (
    <StyledSidebar>
      <StyledClearText>
        <StyledButton
        onClick={handleBtnClear}
        >Clear
        </StyledButton>
      </StyledClearText>
    </StyledSidebar>
  )
}

export default ClearTextArea