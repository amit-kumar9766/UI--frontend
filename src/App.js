import React from 'react';
import  UserForm  from './components/UserForm';
import  General  from './components/General';


const App = () => {
  return (
    <div className="App">
      <UserForm />
      <br/>
      <General/>
    </div>
  );
}

export default App;