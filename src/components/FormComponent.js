import React, { useState } from 'react';

function FormComponent({ addTaskListener }) {
  const [textValue, setTextValue] = useState('');

  function textChangeListener(event) {
    let value = event.target.value;
    setTextValue(value);
  }

  return (
    <form>
      <input type='text' value={textValue} onChange={textChangeListener} />
      <button
        onClick={(e) => {
          addTaskListener(e, textValue);
          setTextValue('');
        }}
        className='primary'>
        Add Task
      </button>
    </form>
  );
}

export default FormComponent;

//in react version 16.8 hooks(functions) were introduced

// class- stateful(state) and functional- stateless(no state)

// props = {
//     name,
//     address,
//     age
// }

// state = {
//     textValue : ""
//      address: "",
//             age: 0,
// }
