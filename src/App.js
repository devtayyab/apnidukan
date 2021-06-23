import React from 'react'
import Home from './component/home';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
function App() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="App">
     <Home fullScreen = {fullScreen}></Home>
    </div>
  );
}

export default App;
