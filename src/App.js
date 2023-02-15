import Logo from "./Logo.png";
import "./App.css";
import DropdownComponent from "./components/DropdownComponent";
import time_data from "./components/Data_File/time_data";
import delivery_data from "./components/Data_File/Delivery_data";
import bg_addon_data from "./components/Data_File/bg_addon_data";
import anal_addon_data from "./components/Data_File/anal_addon_data";
import cum_addon_data from "./components/Data_File/cum_addon_data";
import fetish_addon_data from "./components/Data_File/fetish_addon_data";
import extras_addon_data from "./components/Data_File/extras_addon_data";
import { useState } from "react";
import DropdownMultiComponent from "./components/DropdownMultiComponent";
function App() {
  const [time_Data, setTime_Data1] = useState(0);
  const [delivery_Data, setDelivery_Data] = useState(0);
  const [bg_Data, setBg_Data] = useState(0);
  const [anal_Data, setAnal_Data] = useState(0);
  const [cum_data, setCum_data] = useState(0);
  const [fetish_data, setFetish_data] = useState(0);
  const [extras_data, setExtras_data] = useState(0);

  const getDataTime = (data) => {
    setTime_Data1(data);
  };
  const getDataDelivery = (data) => {
    setDelivery_Data(data);
  };
  const getDataBg_Data = (data) => {
    setBg_Data(data);
  };
  const getDataAnal_Data = (data) => {
    setAnal_Data(data);
  };
  const getCum_Data = (data) => {
    setCum_data(data);
  };
  const getFetish_Data = (data) => {
    setFetish_data(data);
  };
  const getExtras_Data = (data) => {
    setExtras_data(data);
  };

  const extraDataToFloat = parseFloat(extras_data);
  const fetishDatatoFloat = parseFloat(fetish_data);
  const cumDatatoFloat = parseFloat(cum_data);
  const analDatatoFloat = parseFloat(anal_Data);
  const bgDataToFloat = parseFloat(bg_Data);
  const deliveryDataToFloat = parseFloat(delivery_Data);
  const timeDataToFloat = parseFloat(time_Data);
  const Sub_total =
    timeDataToFloat +
    deliveryDataToFloat +
    bgDataToFloat +
    analDatatoFloat +
    cumDatatoFloat +
    fetishDatatoFloat +
    extraDataToFloat;
  const totalToFixed = Sub_total.toFixed(2);

  const total = totalToFixed * 0.8;
  const totalWith20 = total.toFixed(2);
  return (
    <div className="App">
        <img src={Logo} className="App-logo" alt="logo" />
      
      <div>
        <DropdownComponent data={time_data} onChange={getDataTime} />
        <DropdownComponent data={delivery_data} onChange={getDataDelivery} />
        <DropdownMultiComponent
          data={bg_addon_data}
          onChange={getDataBg_Data}
          placeholder="BG Add-On"
        />
        <DropdownMultiComponent
          data={anal_addon_data}
          onChange={getDataAnal_Data}
          placeholder="Anal Add-On"
        />
        <DropdownMultiComponent
          data={cum_addon_data}
          onChange={getCum_Data}
          placeholder="Cum Add-On"
        />
        <DropdownMultiComponent
          data={fetish_addon_data}
          onChange={getFetish_Data}
          placeholder="Fetish Add-On"
        />
        <DropdownMultiComponent
          data={extras_addon_data}
          onChange={getExtras_Data}
          placeholder="Extras Add-On"
        />
        <div className="title">{`Sub-Total: $ ${totalToFixed}`}</div>
        <div className="title">{`Total: $ ${totalWith20}`}</div>
      </div>
    </div>
  );
}

export default App;
