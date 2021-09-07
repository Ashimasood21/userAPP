import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"




const Users= () => {


    return (
        <View>
           
            <View style={{ marginTop: hp('5%'), marginHorizontal: wp('5%') }}>
                <TextInput style={{ borderWidth: 1, fontSize: 20,borderRadius:32 }}
                    placeholder="Search bar"></TextInput>
            </View>
            <View style={{ marginTop: hp('5%'), marginHorizontal: wp('2%'), alignItems: 'center' }}>
                <TouchableOpacity 
                    style={{ width: wp('70%'), borderRadius: 3, padding: wp('3%'), backgroundColor: '#728FCE' }}>
                    <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Reset my password</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}
export default Users;