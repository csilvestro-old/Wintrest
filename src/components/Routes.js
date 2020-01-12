import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import WelcomeBack from '../pages/WelcomeBack';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/Register' component={Register} />
                <Route exact path='/WelcomeBack' component={WelcomeBack} />
            </Switch>
        </>
    )
}
export default Routes
