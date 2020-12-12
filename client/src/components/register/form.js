import React from 'react';
import { mainColor } from '../constants/colos';


const RegisterForm = (props)  => {
    return (
    <div className="mt-5">
         <h3 className="text-left mb-3">Personel informations</h3>
         <form>
                <div className="form-group">
                    <label >First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label >Last Name</label>
                    <input type="email" className="form-control" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label >Phone</label>
                    <input type="email" className="form-control" placeholder="Phone" />
                </div>
                
                <button type="submit" className="btn btn-block mt-5" style={{backgroundColor: mainColor.mainRed, borderRadius: "0px !important", color: mainColor.mainWhite}}>Register</button>
        </form>
    </div>)
}

export default RegisterForm;