import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainHeader from '../../components/Mainheader';



const Home= ({navigation}) => {


    return (
        <View>
            <MainHeader navigation={navigation} showIcon={'sideBar'}></MainHeader>
           
            <View style={{ marginTop: hp('5%'), marginHorizontal: wp('5%') ,flexDirection:'row',borderWidth:1,borderRadius:32 }}>
            <Icon name="account-search"  size={40} color="black" />
                <TextInput style={{ fontSize: 20}}
                    placeholder="Search bar"></TextInput>
                    
                    
                    
            </View>
            {/* <View style={{ marginTop: hp('5%'), marginHorizontal: wp('2%'), alignItems: 'center' }}>
                <TouchableOpacity 
                    style={{ width: wp('70%'), borderRadius: 3, padding: wp('3%'), backgroundColor: '#728FCE' }}>
                    <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Reset my password</Text>
                </TouchableOpacity>
            </View> */}
            </View>
    )
}
export default Home;