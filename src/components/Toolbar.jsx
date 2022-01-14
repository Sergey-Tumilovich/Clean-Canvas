import React from "react";
import canvasState from "../store/canvasState";
import canvasToImage from "canvas-to-image";
import toolState from "../store/toolState";
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import "../styles/toolbar.scss";

const Toolbar = () =>{

    const changeColor = e =>{
        //toolState.setStrokeColor(e.target.value);
        toolState.setFillColor(e.target.value);
    }


    return(
        <div className="toolbar">
            {/* button <classGeneric> <btnIcon> <onclick tool selector> */}
            <button className="toolbar__btn brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}/>
            <button className="toolbar__btn rect" onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}/>
            <button className="toolbar__btn circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}/>
            <button className="toolbar__btn erase" onClick={()=> toolState.setTool(new Eraser(canvasState.canvas))}/>
            <button className="toolbar__btn line" onClick={()=> toolState.setTool(new Line(canvasState.canvas))}/>

            {/* palette */}
            <input
                onChange={e=>changeColor(e)}
                style={{marginLeft:10}} type="color"/>

            <button className="toolbar__btn undo" onClick={()=>canvasState.undo()}/>
            <button className="toolbar__btn redo" onClick={()=>canvasState.redo()}/>
            <button className="toolbar__btn save" 
                onClick={()=>canvasToImage(canvasState.canvas,{
                    name: `Canvas snapshot ${new Date()}`,
                    type: 'png',
                    quality: 1
                })}/>
        </div>
    );
}

export default Toolbar;