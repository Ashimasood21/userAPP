import React, { } from 'react'
import { View, Text, ImageBackground, Image,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from
    "../../utility/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerBg = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{backgroundColor:"blue"}}
                style={{ height: '100%', width: '100%' }}>
                <TouchableOpacity>
                    <View>
                        <Text style={{ color: "black", top: 5, left: 10 }}>golf</Text>
                        <Text style={{ color: "black", top: 5, left: 10 }}>golf</Text>
                        <Text style={{ color: "black", top: 5, left: 10 }}>golf</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
export default DrawerBg;