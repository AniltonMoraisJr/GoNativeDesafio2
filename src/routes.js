import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

/* Pages */
import Repositories from './pages/respositories';
import Issues from './pages/issues';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
    },
  ),
);

export default Routes;
