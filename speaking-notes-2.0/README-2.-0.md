# Used Components

## Textarea:

In a functional Component use `useState` to update the content of the textarea.


```js
const [text, setText] = useState("");

<textarea className="textarea" value={text} onChange={(e) => setText(e.target.value)}/>

```

## Button `Save`

Use the text from inside the textarea. 
The `onClick`- event uses an eventhandler, which shows the input-text on console.

```js
<button
  className='btn-save'
  onClick={handleBtnSave}
  >Save
</button>
```
Arrow-function takes the state `noteText`:
```js
let handleBtnSave = (e) => {
    console.log(noteText);
   }
```

### Write input-text to file

Instead of `console.log` now we write to a file creating a download-element:

```js
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
```
The value of the textarea is "saved" as `state` in `noteText`. 
So we can pass it to a new `Blob`- Object. 
Unlike the parameter for "console.log", square brackets must be used here.
Now `[noteText]`is equal to JavaScript `[document.getElementById('textarea').value]`.


## Reuse `noteText` in another component

ChildComponent 

___

## Text To Speech

1. Web-Speech-API
2. react-speech-kit

### 1. Web-Speech-Api



### 2. react-speech-kit

Prerequisites:
```bash
npm install react-speech-kit
```


## Sources:
[Leigh Halliday, youtube](https://www.youtube.com/watch?v=Oe3Un4ZbefM)


___

**Note:** The background-image is from 
[Trinity College Dublin](https://www.tcd.ie), just for private use.