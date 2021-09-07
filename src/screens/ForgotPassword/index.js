import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"




const ForgotPassword = ({navigation}) => {


    return (
        <View>
            <Text style={{ marginTop: hp('5%'), fontSize: 30, fontWeight: 'bold', color: '#728FCE', textAlign: 'center' }}>Forgot Password</Text>
                      <View style={{ marginTop: hp('5%'), marginHorizontal: wp('5%') }}>
                <TextInput style={{ borderWidth: 1, fontSize: 20 }}
                    placeholder="you'r e-mail address"></TextInput>
            </View>
            <View style={{ marginTop: hp('5%'), marginHorizontal: wp('2%'), alignItems: 'center' }}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}
                    style={{ width: wp('70%'), borderRadius: 3, padding: wp('3%'), backgroundColor: '#728FCE' }}>
                    <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Reset my password</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}
export default ForgotPassword;