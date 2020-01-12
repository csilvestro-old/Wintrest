import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import WelcomeBack from '../pages/WelcomeBack';
import Dashboard from '../pages/Dashboard/Dashboard';
import Following from '../pages/Following/Following';
import UserProfile from '../pages/UserProfile/UserProfile';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/WelcomeBack' component={WelcomeBack} />
                <Route exact path='/Dashboard' component={Dashboard} />
                <Route exact path='/Following' component={Following} />
                <Route exact path='/UserProfile' component={UserProfile} />
            </Switch>
        </>
    )
}
export default Routes
