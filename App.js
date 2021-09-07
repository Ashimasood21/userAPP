import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/stacknavigation';
const App=()=>{
  return(
    <NavigationContainer>
      <MainStack></MainStack>
    </NavigationContainer>


  )



}
export default App;