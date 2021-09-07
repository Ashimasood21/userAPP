
import React from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const BtnLogin = () => {
    navigation.navigate('Register')
  }


  return (
    <View>
      <View style={{marginTop: hp('5%'),alignItems:'center'}}>
              <Text style={{fontSize:18}}>Proceed with your</Text>
      <Text style={{fontSize:35,fontWeight:'bold',color:'#728FCE'}}>Login</Text>
      </View>

      <View style={{ marginHorizontal: wp('5%') }}>
        <TextInput onChangeText={(email) => setEmail(email)} style={{ borderBottomWidth: 1, marginTop: hp('5%'), fontSize: 20 }}
          placeholder='Email id/Phone number'></TextInput>
        <TextInput onChangeText={(password) => setPassword(password)} style={{ borderBottomWidth: 1, marginTop: hp('5%'), fontSize: 20 }}
          placeholder='Password'></TextInput>
      </View>

      <View style={{ marginTop: hp('5%'), marginHorizontal: wp('2%'), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => BtnLogin()}
          style={{ width: wp('90%'), borderRadius: 3, padding: wp('4%'), backgroundColor: '#728FCE' }}>
          <Text style={{ fontSize: 20, color: 'white',textAlign:'center', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
          <Text style={{fontSize:17,textAlign:'right'}}>Forgot password?</Text>
        </TouchableOpacity>
      
      <View style={{alignSelf:'center',marginTop:hp('5%')}}>
      <Text style={{fontSize:19}}>Or</Text>
      </View>
      <View style={{justifyContent: 'space-evenly',flexDirection:'row',marginTop:hp('5%')}}>
      <TouchableOpacity >
        <Icon
          name="facebook"
          size={50}
          color="blue"/>
      </TouchableOpacity>
      <TouchableOpacity >
        <Icon
          name="google"
          size={50}
          color="#DB4437"/>
      </TouchableOpacity>
      </View>
    </View>
  )
}
export default Login;