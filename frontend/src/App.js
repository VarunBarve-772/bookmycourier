import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Login from './components/user/login pages/login';
import LandingPage from './components/LandingPage';
import Register from './components/user/registration pages/Register'
import CustomerHome from './components/customer components/CustomerHome';
import CustomerCourierHistory from './components/customer components/CustomerCourierHistory';
import ManagerHome from "./components/manager components/ManagerHome";
import HeadManagerHome from './components/head manager components/HeadManagerHome';
import DeliveryBoyHome from './components/delivery boy components/DeliveryBoyHome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>

          <Route path="/login" component={Login}></Route>

          <Route path="/registration" component={Register}></Route>

        {/* Customer Routing Paths */}
          <Route path="/customer/home" component={CustomerHome}></Route>

          <Route path="/customer/history" component={CustomerCourierHistory}></Route>

        {/* Manager Routing Paths */}
          <Route path="/manager/home" component={ManagerHome}></Route>

        {/* Head Manager Routing Paths */}
          <Route path="/headmanager/home" component={HeadManagerHome}></Route>

        {/* Delivery Boy Routing Paths */}
          <Route path="/deliveryboy/home" component={DeliveryBoyHome}></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
