import './App.css';

function App() {
  const testClick = (e =>{
    e.preventDefault()
    const g = document.querySelector('#g').checked ? 'g':''
    const i = document.querySelector('#i').checked ? 'i':''
    const m = document.querySelector('#m').checked ? 'm':''

    const regex = new RegExp(document.querySelector('#regexInput').value, g+i+m)
    let input = document.querySelector('#inputArea').value
    let output = document.querySelector('#outputArea')
    output.value = input.match(regex)
    console.log(regex)
    
  })

  return (
    <div className="App">
      <label id='start'>/</label>
      <input id='regexInput' placeholder='Insert regular expression here'></input>
      <label id='end'>/</label>

      <button onClick={testClick}>Test</button>
      
      <br></br>
      <label>g</label>
      <input id='g' type='checkbox'></input>

      <label>i</label>
      <input id='i' type='checkbox'></input>

      <label>m</label>
      <input id='m' type='checkbox'></input>

      <br></br><br></br>
      <div>
        <label>Input text</label>
        <br></br>
        <textarea rows="15" cols="90" id='inputArea'></textarea>
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
