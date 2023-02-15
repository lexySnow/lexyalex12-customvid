import React, { useState } from "react";
import Select from "react-select";
import './selectSytle.css'
import makeAnimated from 'react-select/animated'
export default function DropdownMultiComponent(props) {
    const animatedComponents = makeAnimated();
  const [addOnValue, setAddonValue] = useState(0);
  const options = props.data.map((item) => {
    return {
      value: item.price,
      label: item.name,
    };
  });

  const totalAddon =
    addOnValue &&
    addOnValue.reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  props.onChange(totalAddon);

  const handleChange = (selectedValues) => {
    setAddonValue(selectedValues);
  };
  return (
    <div>
      <Select isSearchable={ false } components={animatedComponents} className="select" placeholder={props.placeholder} options={options} isMulti onChange={handleChange} />
    </div>
  );
}
