import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';


const Main = props =>(
  <Switch>
  {/* component routers to series component and we import main to APP*/}
    <Route exact path='/' component={Series} />
    {/*the id wil be dynamic, id form series*/}
    <Route  path='/series/:id' component={SingleSeries} />

  </Switch>
);

export default Main;
