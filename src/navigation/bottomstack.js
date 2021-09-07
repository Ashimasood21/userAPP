import React from 'react';
import {} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../screens/Home';
import Users from '../screens/User';
import Profile from '../screens/Profile';

const Tab1=createBottomTabNavigator();
const  BottomStack=()=>{
    return(
        <Tab1.Navigator>
            <Tab1.Screen name='Home' component={Home} options={{
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <Icon name="home" color={color} size={size} />
                )
            }}/>
            <Tab1.Screen name='Users' component={Users} options={{
                tabBarLabel:'Users',
                tabBarIcon:({color,size})=>(
                    <Icon name="users" color={color} size={size} />
                )
            }}/>
            <Tab1.Screen name='Profile' component={Profile} options={{
                tabBarLabel:'Profile',
                tabBarIcon:({color,size})=>(
                    <Icon name="list" color={color} size={size} />
                )
            }}/>
        </Tab1.Navigator>

    )
}
export default BottomStack;