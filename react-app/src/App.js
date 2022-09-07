import React from 'react'
import Profile from './Profile';
function App() {
  function getFormData(event){
      event.preventDefault();
  }
  return (
    <div>
      <Profile/>
    </div>
  )
}

export default App