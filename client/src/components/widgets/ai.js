import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'


const useStyle = makeStyles((theme)=>({

  item:{
      cursor: "pointer"
  }  

}))


const Ai = () => {

    const classes = useStyle()

    return (<div className="container-fluid my-5">
         
        <div className="row">
            <div className="col-sm-6">
              <img src="assets/ai-back.jpeg" className="img-fluid" />
            </div>
            <div className="col-sm-6">
            <h2>We use artificial intelligence to bring your avatar to life</h2>
            <p className="mt-3">
              Thanks to artificial intelligence, you can transfer your knowledge, your habits, your gestures to your avatar ... <br/><br/>The more you train your avtar, the more it looks like you
            </p>
            </div>
        </div>
    </div>)
}


export default Ai;
