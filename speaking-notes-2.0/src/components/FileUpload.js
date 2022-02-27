import React from 'react'

function FileUpload({setNoteText}) {
  // const fileInputRef = useRef([]);


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
      <input 
        type='file' 
        className='btn-add' 
        onChange={handleInputChange}
        // ref={fileInputRef}
      />
    </div>
  )
}

export default FileUpload