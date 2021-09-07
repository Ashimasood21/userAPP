import React, { } from 'react'
import { View, Text, ImageBackground, Image,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "../../utility/index";
import Icon from 'react-native-vector-icons/FontAwesome';
const MainHeader = ({ navigation }) => {
    
    return (
        <View style={{background: "white", width: wp("100%"), height:hp("7%"),
            justifyContent: "center" }}>
                <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="navicon"  size={40} color="black" />
                </TouchableOpacity>
                    <Text style={{ color: "blue", fontWeight: "bold",
                        fontSize: wp("6%"), marginRight: "32%"
                    }}>header</Text>
                </View>
           
        </View>
    );
}
export default MainHeader;
