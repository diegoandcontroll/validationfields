import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

function App() {
  const cep = useForm('cep');
  const email = useForm('email');
  const name = useForm('name');
  const lastname = useForm(false);
  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate() && email.validate() && name.validate()){
      console.log('Send');
    }else{
      console.log('Not Send');
    }
  }
  return (
    <form onSubmit={handleSubmit}>

        <Input 
          label="Name"
          id="name"
          type="text"
          placeholder="How to name"
          {...name}
        />

        <Input 
          label="Lastname"
          id="lastname"
          type="text"
          placeholder="How to lastname"
          {...lastname}
        />
       <Input 
          label="Cep"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />

        <Input 
          label="Email"
          id="email"
          type="email"
          placeholder="How to email"
          {...email}
        />
      <button type="submit">Send</button>
    </form>
  )  
}
export default App;
