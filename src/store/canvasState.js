import {makeAutoObservable} from 'mobx';

class CanvasState{
    canvas = null;

    //undo & redo (they are actually stacks)
    undoList = [];
    redoList = [];

    constructor(){
        makeAutoObservable(this)//observe state data
    }

    //[canvas, setCanvas] :)
    setCanvas(canvas){
        this.canvas = canvas;
    }

    pushToUndo(data){
        this.undoList.push(data);
        console.log(`UNDOLIST LENGTH: ${this.undoList.length}`);
        console.log(this.undoList);
    }

    pushToRedo(data){
        this.redoList.push();
    }

    undo(){
        let context = this.canvas.getContext('2d');
        console.log(this.undoList);
        console.log(this.redoList);
        if(this.undoList.length>0){//there IS something in undo
            let previous = this.undoList.pop();
            this.redoList.push(this.canvas.toDataURL());
            let img = new Image();
            img.src = previous;

            img.onload = () =>{
                context.clearRect(0,0,this.canvas.width,this.canvas.height);
                context.drawImage(img,0,0,this.canvas.width,this.canvas.height); 
            } 
        }
        //else there's nothing drawn (but clear it just in case)
        else context.clearRect(0,0,this.canvas.width,this.canvas.height);
        console.log(this.undoList);
        console.log(this.redoList);
    }

    redo(){
        console.log(this.undoList);
        console.log(this.redoList);
        let context = this.canvas.getContext('2d');
        if(this.redoList.length>0){//there IS something in undo
            let previous = this.redoList.pop();
            this.undoList.push(this.canvas.toDataURL());
            let img = new Image();
            img.src = previous;

            img.onload = () =>{
                context.clearRect(0,0,this.canvas.width,this.canvas.height);
                context.drawImage(img,0,0,this.canvas.width,this.canvas.height); 
            } 
        }
        console.log(this.undoList);
        console.log(this.redoList);
    }
}

export default new CanvasState();