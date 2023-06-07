import React from 'react';


export default function InputField(props) {
  const { color, onChange } = props;

  return (
    <form className="color-check_form">
      <input id="hexColor-field" type="text" name="hex" defaultValue={color.hex} onChange={onChange} />
      <div id="rgdColor-field">{color.rgb}</div>
    </form>
  );
}

InputField.defaultProps = {
  color: {
    hex: '#34495e',
  }
}
