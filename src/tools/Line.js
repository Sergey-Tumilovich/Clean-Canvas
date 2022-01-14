import Tool from './Tool';

//Tool =>Brush
//     => any other tool

export default class Line extends Tool{
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
        this.currentX = e.pageX-e.target.offsetLeft
        this.currentY = e.pageY-e.target.offsetTop
        this.context.beginPath()
        this.context.moveTo(this.currentX, this.currentY )

        //save rectangle to prevent it being drawn each moment of time
        this.saved = this.canvas.toDataURL()
    }
    //mouse drawing
    hMouseMove(e){
        if(this.mouseDown){
            this.draw(
                e.pageX-e.target.offsetLeft, 
                e.pageY-e.target.offsetTop);
        }
    }

    //create a w x h rectangle with start at (x,y)
    draw(x,y){
        const img = new Image();//create new image for rectangle
        img.src = this.saved;
        img.onload = () =>{//async needed
            this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
            this.context.drawImage(img,0,0,this.canvas.width, this.canvas.height)
            this.context.beginPath()//begin drawing
            this.context.moveTo(this.currentX,this.currentY);
            this.context.lineTo(x,y);
            this.context.stroke()//stroke
        }
    }
}