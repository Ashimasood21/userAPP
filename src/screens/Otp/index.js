import React from 'react';
import { View, Text, TouchableOpacity, TextInput, } from 'react-native';
import { useRef, useState } from 'react';
import { heightPercentageToDP } from '../../utility';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index"

const Otp = ({navigation}) => {
    const [opt1, setOtp1] = useState('')
    const [opt2, setOtp2] = useState('')
    const [opt3, setOtp3] = useState('')
    const [opt4, setOtp4] = useState('')
    const ref_input1 = useRef(); 
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const Varify = () => {
         navigation.navigate('DrawerBg')
        
    }
    return (
        <View>
            <Text style={{alignSelf:'center',fontSize:22,marginTop:hp('30%')}}>Varification code send to this number</Text>
           <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp('3%')}}>
        <Text style={{fontSize:18}}>Didn't recieve code?</Text>
        <TouchableOpacity>
          <Text style={{color:'#728FCE',fontSize:18}}> Resend Code</Text>
        </TouchableOpacity>
      </View>
            
            
                <Text style={{marginTop:hp('6%'),alignSelf:'center',color:'#728FCE',fontSize:25}}>Enter OTP</Text>
            

            <View style={{ marginTop:hp('5%'), flexDirection: 'row', marginHorizontal:wp('25%'), justifyContent: 'space-between' }}>

                 
            
                <TextInput placeholder=' ' returnKeyType="next" keyboardType="numeric" maxLength={1} ref={ref_input1}
                    onChangeText={otp1 => {
                        setOtp1(otp1)
                        if (otp1) ref_input2.current.focus();
                    }} style={{ borderBottomWidth: 1 }}></TextInput>

                <TextInput placeholder=' ' returnKeyType='next' keyboardType='numeric' maxLength={1} ref={ref_input2}
                    onChangeText={opt2 => {
                        setOtp2(opt2)
                        if (opt2) ref_input3.current.focus();
                    }}
                    style={{ borderBottomWidth: 1 }}></TextInput>

                <TextInput placeholder=' ' returnKeyType='next' keyboardType='numeric' maxLength={1} ref={ref_input3}
                    onChangeText={opt3 => {
                        setOtp3(opt3)
                        if (opt3) ref_input4.current.focus();
                    }}
                    style={{ borderBottomWidth: 1 }}></TextInput>
                <TextInput placeholder=' ' returnKeyType='next' keyboardType='numeric' maxLength={1} ref={ref_input4}
                    onChangeText={opt4 => {
                        setOtp4(opt4)
                        if (opt4) ref_input4.current.focus();
                    }}
                    style={{ borderBottomWidth: 1 }}></TextInput>
            </View>

            <View style={{ marginTop:hp('10%'), marginHorizontal:wp('1%'), alignItems: 'center' }}>
                <TouchableOpacity onPress={() => Varify()} style={{ marginTop:'2%', width: '99%', borderRadius: 3, padding: '4%', backgroundColor: '#728FCE' }}>
                    <Text style={{ fontSize: 18, color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Varify Number</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Otp;