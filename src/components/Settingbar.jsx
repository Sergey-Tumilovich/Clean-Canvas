import React from "react";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";

const Settingbar = () =>{
    return(
        <div className="toolbar" style={{top:40}}>
            <label htmlFor="line-width" style={{margin:'0 10px'}}>Line width</label>
            <input 
                id="line-width" 
                type="number" 
                defaultValue={1} min={1} max={60}
                style={{margin:'0 10px'}}
                onChange={e=>toolState.setLineWidth(e.target.value)}/>
            <label htmlFor="stroke-color" style={{margin:'0 10px'}}>Stroke color</label>
            <input 
                id="stroke-color" 
                type="color" 
                style={{margin:'0 10px'}}
                onChange={e=>toolState.setStrokeColor(e.target.value)}/>
        </div>
    );
}

export default Settingbar;