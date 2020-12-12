import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'




const useStyle = makeStyles((theme)=>({

}))


const Scanner = () => {

    const classes = useStyle()

    return (<div className="container-fluid py-5">

      <div className="row">
        <div className="col-sm-5">
         <img src="/assets/vbvr.jpg"  className="img-fluid"/>
        </div>
        <div className="col-sm-7">
          <h2 className="font-weight-bold">Use your Body Scanner to generate your avatar</h2>

          <p className="text-left mt-5 " style={{fontSize: "18px"}}>
            Our Scanner allows you to generate your avatar that looks like you in every detail.
          </p>
          <p className="text-justify text-medium" style={{width: "80%"}}>
          it is a revolutionary system equipped with cameras, lights, and other sensors that allows you to take pictures of your body in greater detail. This allows our system to generate an avatar that looks like you in every detail.
          </p>

          <h5>Where can I find the scanner ?</h5>

          <div className="row mt-5">
            <div className="col-sm-4">
               <img src="/assets/shop.jpg"  className="img-fluid" style={{height: "140px"}} />
               <p className="mt-2">Clothing store</p>
            </div>
            <div className="col-sm-4">
               <img src="/assets/fitness.jpg"  className="img-fluid" style={{height: "140px"}} />
               <p className="mt-2">Fitness room</p>
            </div>
            <div className="col-sm-4">
               <img src="/assets/park.jpeg" className="img-fluid" style={{height: "140px"}} />
               <p className="mt-2">Amusement park</p>
            </div>

          </div>

        </div>
      </div>
    </div>)
}


export default Scanner;
