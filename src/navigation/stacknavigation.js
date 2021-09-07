import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Otp from '../screens/Otp';
import ForgotPassword from '../screens/ForgotPassword';
import BottomStack from '../navigation/bottomstack';
import DrawerBg from './drawernavigation';

const MainStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='Otp' component={Otp}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
            <Stack.Screen name='BottomStack' component={BottomStack} options={{headerShown:false}}/>
            <Stack.Screen name='DrawerBg' component={DrawerBg}  options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default MainStack;