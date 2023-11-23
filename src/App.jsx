import * as React from 'react';
import Testing from './screens/Testing';

const App = () => {
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //   { key: 'dashboard', title: 'Dashboard', focusedIcon: 'view-dashboard', unfocusedIcon: 'view-dashboard-outline'},
  //   { key: 'history', title: 'History', focusedIcon: 'history' },
  //   { key: 'setting', title: 'Setting', focusedIcon: 'cog', unfocusedIcon: 'cog-outline'},
  // ]);

  // const renderScene = BottomNavigation.SceneMap({
  //   dashboard: Dashboard,
  //   history: AlbumsRoute,
  //   setting: Setting,
  // });

  return (
    <Testing/>
    // <BottomNavigation
    //   navigationState={{ index, routes }}
    //   onIndexChange={setIndex}
    //   renderScene={renderScene}
    // />
  );
};

export default App;