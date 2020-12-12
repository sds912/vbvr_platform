import { Route, Switch } from 'react-router-dom';
import './App.css';
import Account from './components/account';
import { ACCOUNT, HOME, REGISTER, SIGNIN,SIGNUP } from './components/constants/routes';
import Home from './components/home/index';
import Register from './components/register';
import SignIn from './components/signin/index';
import SignInSide from './components/signup/index';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ACCOUNT} component={Account}  />
          <Route exact path={SIGNIN} component={SignIn} />
          <Route exact path={REGISTER} component={Register} />
          <Route exact path={SIGNUP} component={SignInSide} />
        </Switch>
    </div>
  );
}

export default App;
