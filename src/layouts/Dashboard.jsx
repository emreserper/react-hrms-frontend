import React from 'react'
import JobAdvertisementPage from '../pages/JobAdvertisementPage';
import Register from '../pages/Register';
import {Route} from "react-router-dom";
import Login from '../pages/Login';
export default function Dashboard() {
    return (
        <div className="dashboard">
             <Route exact path="/jobadvertisement" component={JobAdvertisementPage} />
             <Route exact path="/register" component={Register} />
             <Route exact path="/login" component={Login} />
      </div>
    )
}
