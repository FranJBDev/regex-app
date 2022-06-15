import './App.css';

function App() {
  const testClick = (e =>{
    e.preventDefault()
    const g = document.querySelector('#g').checked ? 'g':''
    const i = document.querySelector('#i').checked ? 'i':''
    const m = document.querySelector('#m').checked ? 'm':''

    const regex = new RegExp(document.querySelector('#regexInput').value, g+i+m)
    const lblRegex = document.querySelector('#regexRes')
    lblRegex.innerHTML = regex

    let input = document.querySelector('#inputArea').value
    console.log('Largo', input.length)

    let output = document.querySelector('#outputArea')
    const resArray = input.match(regex)
    let resTxt = ''

    if (resArray) resArray.forEach(e => resTxt+= e + '\n' )
    output.value = resTxt    
  })

  const clearInputText = (e=>{
    e.preventDefault()
    let input = document.querySelector('#inputArea')
    input.value = ''

  })

  return (
    <div className="App">
      <label id='start'>/</label>
      <input id='regexInput' placeholder='Insert regular expression here'></input>
      <label id='end'>/</label>

      <button onClick={testClick}>Go</button>

      <br></br><label id='regexRes'></label>
      
      <br></br><br></br>
      <label>Global</label>
      <input id='g' type='checkbox'></input>

      <br></br>
      <label>Case insensitive</label>
      <input id='i' type='checkbox'></input>

      <br></br>
      <label>Multi line</label>
      <input id='m' type='checkbox'></input>

      <br></br><br></br>
      <div>
        <label>Input text</label>
        <br></br>
        <textarea rows="15" cols="90" id='inputArea'></textarea>
        <button onClick={clearInputText}>Clear</button>
        <button>Paste</button>
        <br></br><br></br>

        <label>Output text</label>
        <br></br>
        <textarea rows="15" cols="90" id='outputArea'></textarea>
        <button>Copy</button>
      </div>
    </div>
  );
}

export default App;
