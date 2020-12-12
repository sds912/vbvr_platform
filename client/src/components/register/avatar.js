import React from "react";
import Sketch from "react-p5";
 
const AvatarShower = (props) => {
    let x = 50;
    const y = 50;
    let obj;

    const preload  = (p5) => {
        obj = p5.loadModel('/assets/avatar/avatar.obj');
      }

 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(640, window.innerHeight-50, p5.WEBGL).parent(canvasParentRef);
       

    };
 
    const draw = (p5) => {
        p5.background(200);
        
    let s = 0.005;
    p5.rotateZ(p5.frameCount * s);
    p5.rotateX(p5.frameCount * s);
    p5.rotateY(p5.frameCount * s);

    p5.scale( 0.008); // Scaled to make model fit into canvas

    //let locX = p5.mouseX - height / 2;
    //let locY = p5.mouseY - width / 2;
    
    p5.normalMaterial(); // For effect
    
    p5.model(obj);
    };
 
    return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default AvatarShower;