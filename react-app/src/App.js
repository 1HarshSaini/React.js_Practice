import React from 'react'

function App() {
  function getFormData(event){
      event.preventDefault();
  }
  return (
    <div>
      <h2>Form in React</h2>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name'/><br />
        <select>
          <option value="">DSA</option>
          <option value="">F&D</option>
          <option value="">NALR</option>
        </select><br /><br />
        <input type="checkbox" /><span>Tick </span>
        <br /><br />
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default App