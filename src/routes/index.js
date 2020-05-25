import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import Page404 from '../pages/Page404';

const Routes = () => {
  return(
  	<BrowserRouter>
	    <Switch>
	      <Route exact path="/" component={MainContainer} key="Index" />
	      <Route path="*" component={Page404} key="Page404" />
	    </Switch>
    </BrowserRouter>
  )
}

export default Routes;