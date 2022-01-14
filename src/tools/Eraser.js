import Brush from './Brush';

//Brush =>Eraser
//since the eraser is a brush drawing with white (?) color

export default class Eraser extends Brush{
    //draw with white color
    draw(x,y){
        this.context.strokeStyle = "white";
        this.context.lineTo(x,y);
        this.context.stroke();
    }
}