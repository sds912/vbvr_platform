import { makeStyles } from '@material-ui/core';
import React from 'react'
import { mainColor } from '../constants/colos';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon  from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyle = makeStyles((theme)=>({

    root:{
       
        height: "380px",
        backgroundColor: mainColor.mainMarron
    }

}))


const Footer = () => {

    const classes = useStyle();

    return (<div  className={classes.root}>

         <div className="row text-white p-5">
            <div className="col-sm-4">
               <div className="row">
                 <div className="col-sm-4">
                     <img src="/assets/logo.jpeg"  className="img-fluid"/>
                 </div>
                 <div className="col-sm-8">
                     Your avatar is you
                 </div>

               </div>
            </div>

            <div className="col-sm-4">
              <h4>Contact Us</h4>
              <p> 
                        <EmailIcon style={{marginRight: ".5em"}} />
                        <span>senghor.pape912@hotmail.com</span> 
                    </p>
                    <p>
                       <PhoneIcon style={{marginRight: ".5em"}} />
                       <span>77 744 36 63</span> 
                    </p>
                    <p>
                        <LocationOnIcon style={{marginRight: ".5em"}} />
                        <span>Dakar Patte d'oies</span>
                    </p>

            </div>

            <div className="col-sm-4">
              <h4>Join us on</h4>
              <div style={{width: "140px", display: "flex", textAlign: "center" , backgroundColor: "#ffffff"}} >
                <FacebookIcon style={{fontSize: "36px", color: "#3b5998", marginLeft:"15px", cursor: "pointer"}} />
                <LinkedInIcon  style={{fontSize: "36px", color: "#007bb5",cursor: "pointer"}}/>
                <InstagramIcon  style={{fontSize: "36px", color: "#ff0084",cursor: "pointer"}}/>
            </div>
            
            </div>
         </div>
         <p className="text-center text-white" >&copy; Copyright 2020 VbvR; </p>
    </div>)
}


export default Footer;
