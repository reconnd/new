import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Lazy'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  )
}

export default Routes;
