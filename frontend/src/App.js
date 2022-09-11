import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Login from './components/user/login pages/login';
import LandingPage from './components/landingPage';
import Register from './components/user/registration pages/register'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>

          <Route path="/login" component={Login}></Route>

          <Route path="/registration" component={Register}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
