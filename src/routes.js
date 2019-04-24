import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppWrapper from './components/AppWrapper/AppWrapper';

export default (
    <Switch>
        <Route exact path="/" component={ AppWrapper }/>
    </Switch>
)