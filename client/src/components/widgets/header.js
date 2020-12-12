import { makeStyles } from '@material-ui/core'
import React from 'react'
import { mainColor } from '../constants/colos'




const useStyle = makeStyles((theme)=>({

  root:{
      position: "relative",
      height: "calc(100vh - 80px)",
      width: "100%",
      backgroundImage: "url('/assets/Background.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover"
  }  

}))


const Header = () => {

    const classes = useStyle()

    return (<div className={classes.root}>
        <div style={{width: "375px"}}>
            <img src="/assets/avatar.png" className="img-fluid" />
        </div>
        <div style={{position: "absolute", top: "4em", left:"32%", color: "#ba00a3", fontWeight:"bolder"}}>
            <h1 style={{fontSize: "72px"}}>Your avatar is you</h1>
            <h5 style={{fontSize: "38px"}}>duplicate yourself !</h5>
        </div>


    </div>)
}


export default Header;
