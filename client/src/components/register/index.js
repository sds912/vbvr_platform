import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RegisterForm from './form';
import AvatarShower from './avatar';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mesures = [
    {
        name: "Height",
        value: 168
    },
    {
       name: "Weigth",
       value: 180
    },
    {
        name: "Chest",
        value: 78	
    },
    {
        name: "Waist",
        value: 63
    },
    {
        name: "Inseam",
        value: 78
    },
    {
        name: "Thigh width",
        value: 54	
    },
    {
        name: "Arm length",
        value: 60
    }
]

const  Register  = () =>  {
  const classes = useStyles();

  return (
    <div className="container-fluid" style={{height: "100vh"}}>
        <div className="row">
            <div className="col-sm-2 p-4">
            <ul className="list-group list-group-flush" style={{marginTop: "25%"}}>
                {
                    mesures.map(item => <li className="list-group-item text-left">{item.name} : {item.value}</li>)
                }
            </ul>
            </div>
            <div className="col-sm-6">
                <AvatarShower />
            </div>
            <div className="col-sm-4 p-5">
              <RegisterForm />
            </div>
        </div>


    </div>
  );
}

export default Register;