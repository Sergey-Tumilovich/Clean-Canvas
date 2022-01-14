import Tool from './Tool';

//Tool =>Brush
//     => any other tool

export default class Brush extends Tool{
    constructor(canvas){
        super(canvas);
        //start listening
        this.listen()
    }


    //listener
    listen(){
        //bind those functions to current context to enable using 'this'
        //inside context
        this.canvas.onmousemove = this.hMouseMove.bind(this);
        this.canvas.onmouseup = this.hMouseUp.bind(this);
        this.canvas.onmousedown = this.hMouseDown.bind(this);
    }

    //mouse release
    hMouseUp(e){
        this.mouseDown = false;
    }
    //mouse press
    hMouseDown(e){
        this.mouseDown = true;
        this.context.beginPath()//new line
        //get x and y coords for a new path
        this.context.moveTo(
            e.pageX - e.target.offsetLeft,
            e.pageY - e.target.offsetTop)
    }
    //mouse drawing
    hMouseMove(e){
        if(this.mouseDown){//then start drawing
            this.draw(
                e.pageX - e.target.offsetLeft,
                e.pageY - e.target.offsetTop);
        }
    }


    draw(x,y){
        this.context.lineTo(x,y);//create a line to these coords
        this.context.stroke();//fill it with color
    }
}