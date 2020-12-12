import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyle = makeStyles((theme)=>({

  item:{
      cursor: "pointer"
  }  

}))


const Solution = () => {

    const classes = useStyle()

    return (<div className="container-fluid my-5">
        <h2 className="text-center mb-4">What is my avatar for ?</h2>
         <div className="row">
             <div className="col-sm-3">
                <img src="assets/ai-train.jpg" className="img-fluid" style={{height: "180px"}}/>
                <p className="mt-2">Train your avatar to know you better and look like you</p>
             </div>
             <div className="col-sm-3">
                <img src="assets/clothing.png" className="img-fluid" style={{height: "180px"}}/>
                <p className="mt-2">Use your avatar to try on clothes online</p>
             </div>
             <div className="col-sm-3">
                <img src="assets/vr.jpg" className="img-fluid" style={{height: "180px"}} />
                <p className="mt-2">Use your avatar in video games and VR</p>
             </div>
             <div className="col-sm-3">
                <img src="assets/onlinecourse.jpg" className="img-fluid" style={{height: "180px"}}/>
                <p className="mt-2">Your avatar can teach online for you</p>
             </div>
         </div>
           

    </div>)
}


export default Solution;
