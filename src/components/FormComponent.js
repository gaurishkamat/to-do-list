import React, { useState, useEffect, useCallback, useRef } from 'react';

//useState, useEffect, useReducer, useSelector, useCallback, useMemo, useRef, useContext, createContext
//useCallback and useMemo - performance optimization

function FormComponent({ addTaskListener }) {
  const [textValue, setTextValue] = useState('');
  const btnRef = useRef(null);

  const textChangeListener = useCallback((event) => {
    let value = event.target.value;
    setTextValue(value);
  }, []);

  useEffect(() => {
    console.log('Component Did Update');
    console.log(btnRef.current.scrollIntoView());
  });

  useEffect(() => {
    console.log('Component Did Mount');
  }, []);

  useEffect(() => {
    console.log('Component Did Update');
    if (textValue === 'purva') {
      console.log('hello', textValue);
    }
  }, [textValue]);

  return (
    <form>
      <input
        id='text-value'
        type='text'
        value={textValue}
        onChange={textChangeListener}
      />
      <button
        ref={btnRef}
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

//class based component- lifecycle methods

// componentDidMount
// componentDidUpdate
// componentWillUnmount
