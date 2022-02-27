import React, { useRef } from 'react'

function FileUpload({setNoteText}) {
  const fileInputRef = useRef([]);

  const handleBtnOpen = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  }


  let handleInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      setNoteText(file);
      console.log(reader.result);
      setNoteText(reader.result);
    }
    reader.onerror = () => {
      console.log('file error', reader.error)
    }
  }

  return (
    <div>
      <form>
        <button onClick={handleBtnOpen}>Open</button>
        <input 
        onChange={handleInputChange}
        type="file" id="file" multiple accept="text" 
        style={{display: 'none'}} 
        ref={fileInputRef} 
        />
        {/* <label for="file">Open</label>   */}
      </form>
    </div>
  )
}

export default FileUpload