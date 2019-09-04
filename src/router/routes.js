import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Main from '../components/main/main';

 const Routes = () => {
   return (
     <Switch>
       <Route exact path='/' component={Main} />
     </Switch>
   )
 };

 export default Routes;