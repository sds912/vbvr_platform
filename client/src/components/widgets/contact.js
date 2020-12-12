import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';



const useStyle = makeStyles((theme) => ({
    title:{
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "600",

    },
    divider:{
        width: "180px",
        height: "4px",
        margin: "0 auto",
        backgroundColor: "#FF7400"
    }
}))

const ContactUs = () => {
         const classes = useStyle();
        return (
            <div className="containe-fluid px-5 bg-primary pb-5 text-white my-5" style={{textAlign: "left", marginTop: "2em", backgroundImage:"url('assets/back.jpg')", backgroundPosition: "center", backgroundSize:"cover", backgroundRepeat: "no-repeat", color: "white !important"}}>
               <Typography className={classes.title}>Contact Us</Typography>


               <br/>
               <br/>
                <div className="row">
                <div className="col-sm-12 col-md-6 mb-5" style={{
                          backgroundColor: "#450029",
                          textAlign: "center"

                }}>
                <div style={{maxWidth: "350px", margin: "4em auto", textAlign: "left", fontSize: "16px", color: "#ffffff"}}>
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

                    <div style={{width: "140px", margin: "2em auto", display: "flex", textAlign: "center" , backgroundColor: "#ffffff"}} >
                        <FacebookIcon style={{fontSize: "36px", color: "#3b5998", marginLeft:"15px", cursor: "pointer"}} />
                        <LinkedInIcon  style={{fontSize: "36px", color: "#007bb5",cursor: "pointer"}}/>
                        <InstagramIcon  style={{fontSize: "36px", color: "#ff0084",cursor: "pointer"}}/>
                    </div>
                </div>
               

                </div>
                    <div className="col-sm-12 col-md-6">
                        <form style={{color: "white"}}>
                        <div class="form-row" >
                                <div class="form-group col-md-6">
                                <label style={{fontSize: "18px", fontWeight: "600"}}>Last Name</label>
                                <input type="text" class="form-control" placeholder="Nom" />
                                </div>
                                <div class="form-group col-md-6">
                                <label style={{fontSize: "18px", fontWeight: "600"}}>First Name</label>
                                <input type="text" class="form-control"  placeholder="Prénom" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize: "18px", fontWeight: "600"}}>Email</label>
                                <input type="email" class="form-control" placeholder="email" />
                            </div>
                            <div class="form-group">
                                <label style={{fontSize: "18px", fontWeight: "600"}}>Your Message</label>
                                <textarea class="form-control"  rows="3"></textarea>
                            </div>
                        </form>
                        <button className="btn btn-lg text-white btn-block" style={{backgroundColor: "#450029"}}>
                             Send
                        </button>
                    </div>

               
                </div>
            </div>
        )
    
}

export default ContactUs