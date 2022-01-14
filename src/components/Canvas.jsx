import React, { useEffect, useRef } from "react";
import {observer} from "mobx-react-lite";
import "../styles/canvas.scss";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas = observer(() =>{//observe canvas
    const canvasRef = useRef()//make reference

    useEffect(()=>{//update it
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    },[])

    //draw reaction
    const draw = () =>{
        //take snapshot of the current canvas and push it to undo
        canvasState.pushToUndo(canvasRef.current.toDataURL());
        console.log(canvasState.undoList);
    }

    return(
        <div className="canvas">
            {/* reference, and also width and height to preserve
            px ratio inside canvas */}
            <canvas 
                onMouseDown={() =>draw()}
                ref={canvasRef} width={800} height={600}/>
        </div>
    );
})

export default Canvas;