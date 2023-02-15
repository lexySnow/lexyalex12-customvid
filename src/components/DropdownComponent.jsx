import React, { useState } from "react";
import "./selectSytle.css";
import Select from "react-select";

function DropdownComponent(props) {
  const [addon1, setAddon1] = useState(0);
  const data = props.data.map((time_data) => {
    return <option value={time_data.price}>{time_data.time}</option>;
  });
  const handleChange = (e) => {
    setAddon1(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <div>
      
      <select isSearchable={ false } className="selectSingle" onChange={handleChange}>
       
        {data}
      </select>
    </div>
  );
}

export default DropdownComponent;
