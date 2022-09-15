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
import CenterList from './components/CenterList';
import ManagerList from './components/head manager components/ManagerList';
import CustomerProfile from './components/customer components/CustomerProfile';
import ManagerProfile from './components/manager components/ManagerProfile';
import HeadManagerProfile from './components/head manager components/HeadManagerProfile';
import DeliveryBoyProfile from './components/delivery boy components/DeliveryBoyProfile';

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

          <Route path="/customer/centers" component={CenterList}></Route>

          <Route path="/customer/profile" componet={CustomerProfile}></Route>

        {/* Manager Routing Paths */}
          <Route path="/manager/home" component={ManagerHome}></Route>
          
          <Route path="/manager/profile" componet={ManagerProfile}></Route>

        {/* Head Manager Routing Paths */}
          <Route path="/headmanager/home" component={HeadManagerHome}></Route>

          <Route path="/headmanager/center" component={CenterList}></Route>

          <Route path="/headmanager/manager" component={ManagerList}></Route>

          <Route path="/headmanager/profile" componet={HeadManagerProfile}></Route>

        {/* Delivery Boy Routing Paths */}
          <Route path="/deliveryboy/home" component={DeliveryBoyHome}></Route>

          <Route path="/deliveryboy/profile" componet={DeliveryBoyProfile}></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
