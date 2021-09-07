import React from 'react';
import {useState} from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"



const Register=({navigation})=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  

  const BtnLogin = () => {
    navigation.navigate('Otp')
  }
    
    
    return(
        <View>
          <Text style={{marginTop:hp('5%'),fontSize:25,textAlign:'center'}}>Register your account</Text>
            <View style={{ marginTop:hp('5%'), marginHorizontal:wp('5%') }}>
            <TextInput onChangeText={(name) => setName(Name)} style={{ borderBottomWidth:1, fontSize: 20 }}
          placeholder='Name'></TextInput>
        <TextInput onChangeText={(email) => setEmail(email)} style={{ borderBottomWidth:1, marginTop:hp('5%'), fontSize: 20 }}
          placeholder='Email id/Phone number'></TextInput>
          <TextInput onChangeText={(phone) => setPhone(phone)} style={{ borderBottomWidth:1, marginTop:hp('5%'), fontSize: 20 }}
          placeholder='Phone number'></TextInput>
        <TextInput onChangeText={(password) => setPassword(password)} style={{ borderBottomWidth: 1, marginTop:hp('5%'), fontSize: 20 }}
          placeholder='Password'></TextInput>
      </View>
 
      <View style={{ marginTop:hp('5%'), marginHorizontal:wp('2%'), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => BtnLogin()}
          style={{ width:wp('90%'), borderRadius: 3, padding:wp('4%'), backgroundColor: '#728FCE' }}>
          <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>REGISTER</Text>
        </TouchableOpacity>
     </View>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{fontSize:16}}>Have an account?</Text>
        <TouchableOpacity>
          <Text style={{color:'#728FCE',fontWeight:'bold',fontSize:16}}>  Login Now</Text>
        </TouchableOpacity>
      </View>

        </View>
    )
}
export default Register;