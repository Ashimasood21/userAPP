import React from 'react';
import {View,Text} from 'react-native';
import { useEffect } from 'react';



const Splash=({navigation})=>{
    useEffect(()=>{
        setTimeout(function (){
            navigation.navigate('Login')
        },3000);
    })
    
    return(
        <View style={{height:'100%',width:'100%',backgroundColor: '#728FCE'}}>
        <View style={{ alignItems:'center',marginTop:'70%', height: '100%', width: '100%' }}>
           
            <Text>Spalsh Screen</Text>
        </View>
        </View>
    )
}
export default Splash;