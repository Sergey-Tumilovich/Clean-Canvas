export default class Tool{
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext('2d');//2d canvas
        //destroy old listeners if choosing a new tool
        this.destroyEvents()
    }

    //settings

    set fillColor(color){
        this.context.fillStyle = color;
    }

    set strokeColor(color){
        this.context.strokeStyle = color;
    }

    set lineWidth(width){
        this.context.lineWidth = width;
    }

    destroyEvents(){
        //unbinding of what was binded in recent <SpecificTool> class
        this.canvas.onmousemove = null;
        this.canvas.onmouseup = null;
        this.canvas.onmousedown = null;
    }
}