import React from 'react';
import { View,Image, TextInput,Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"




const Profile= () => {


    return (
        <View>
           <View style={{height:hp('40%'),backgroundColor:'#728FCE',alignItems:'center'}}>
            <Image source={require('../../assets/profile.jpg')}
               style={{height:hp('20%'),width:wp('35%'),marginTop:hp('5%'),borderRadius:80}}></Image>
               <Text style={{fontSize:18}}>UserName</Text>
           </View>
           <View style={{ marginTop:hp('2%'), marginHorizontal:wp('10%') }}>
        <TextInput onChangeText={(email) => setEmail(email)} style={{ borderBottomWidth:1, fontSize: 20 }}
          placeholder='Email'></TextInput>
          <TextInput onChangeText={(phone) => setPhone(phone)} style={{ borderBottomWidth:1, marginTop:hp('2%'), fontSize: 20 }}
          placeholder='Phone number'></TextInput>
        <TextInput onChangeText={(password) => setPassword(password)} style={{ borderBottomWidth: 1, marginTop:hp('2%'), fontSize: 20 }}
          placeholder='Facebook'></TextInput>
      </View>
            </View>
    )
}
export default Profile;