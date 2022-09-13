import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Login from './components/user/login pages/login';
import LandingPage from './components/LandingPage';
import Register from './components/user/registration pages/Register'
import CustomerHome from './components/customer components/CustomerHome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>

          <Route path="/login" component={Login}></Route>

          <Route path="/registration" component={Register}></Route>

          <Route path="/customer/home" component={CustomerHome}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
