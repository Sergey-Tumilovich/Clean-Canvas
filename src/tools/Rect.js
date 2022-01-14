import Tool from './Tool';

//Tool =>Brush
//     => any other tool

export default class Rect extends Tool{
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
        //remember start of a rectangle
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;

        //save rectangle to prevent it being drawn each moment of time
        this.saved = this.canvas.toDataURL()
    }
    //mouse drawing
    hMouseMove(e){
        if(this.mouseDown){//then start drawing
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            // w & h <= end coordinate - start coordinate
            this.width = currentX - this.startX;
            this.height = currentY - this.startY;
            this.draw(this.startX, this.startY, this.width,this.height);
        }
    }

    //create a w x h rectangle with start at (x,y)
    draw(x,y,w,h){
        const img = new Image();//create new image for rectangle
        img.src = this.saved;
        img.onload = () =>{//async needed
            this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
            this.context.drawImage(img,0,0,this.canvas.width, this.canvas.height)
            this.context.beginPath()//begin drawing
            this.context.rect(x,y,w,h)//draw a rectangle
            this.context.fill()//fill
            this.context.stroke()//stroke
        }
    }
}