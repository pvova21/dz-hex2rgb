import React, { useState } from 'react';
import InputField from './InputField';
import hexRgb from './Converter';

export default function PageColor() {
  const [state, setState] = useState('#34495e');

  const onChange = (ev) => {
    ev.preventDefault();
    setState(() => ev.target.value);
  };
  console.log(state);
  
  return (
    <div className="container" style={{backgroundColor: hexRgb(state).background}}>
      <InputField color={hexRgb(state)} onChange={onChange} />
    </div>
  );
}
