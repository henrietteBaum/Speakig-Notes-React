import React from 'react'

const SaveNoteText = ({noteText}) => {

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
    <div>
      <button
        className='footer btn-save'
        onClick={handleBtnSave}
        >Save</button>
      <input placeholder="file name to save ..." type="text" id="file-name" />
    </div>
  )
}

export default SaveNoteText