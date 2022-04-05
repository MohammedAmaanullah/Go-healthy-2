import React,{Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class WeightCheck extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Weight Check</Text>
                    </View>
            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightgreen"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    }
})
