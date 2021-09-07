import React from 'react';
import { } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomStack from '../navigation/bottomstack';
import DrawerBg from '../components/DrawerBg'

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerBg}>


            <Drawer.Screen name='BottomStack' 
            options={{ drawerLabel: 'First page Option' }}
                component={BottomStack} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;