import React,{useState} from 'react'

function Form() {
    const [firstName,setfirstName]=useState('');
    const [email,setEmail]=useState('');
    const [people,setpeople]=useState([]);
    const handlesubmit=(e)=>{
         e.preventDefault();

         if(firstName && email){
            const person={
                firstName,email
                
            };
            console.log(person);
            setpeople((people)=>{
                return [...people,person];
            });
         }
    };
  return (
    <>
    <article>
    <form onSubmit={handlesubmit}>
        <label htmlFor="firstName">Name:</label>
        <input type="text"
        name='firstName'
        value={firstName}
         onChange={(e)=>setfirstName(e.target.value)} /><br/>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'>submit</button>
    </form>
     
    {people.map((person, index) => {
          const {  firstName, email } = person;
          return (
            <div >
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
    </article>     
    </>
  );
};

export default Form