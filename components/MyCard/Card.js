import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImageOne from "../../assets/images/man.jpg";
export default function Card({widthProp}) {
    const [text,setText] = useState('Електронна адреса@')
    const handleFunc = () => {
        setText('Змінили текст')
    }
    const dynamicWidth = widthProp*0.95
    return (
        <View style={[{width: dynamicWidth},styles.forCard]}>
            <View style={styles.wrapperPart}>
                <Image source={ImageOne} style={{width:60,height:60,borderRadius:'50%',marginRight:10,marginTop:-7}}></Image>
                <View>
                    <Text style={{fontWeight:'bold',marginBottom:5}}>Ім'я жирним</Text>
                    <Text style={{marginBottom:5}}>{text}</Text>
                    <Text>Посада</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.forButton}>
                <Text style={{color:'white',fontWeight:'bold'}}>Підписатися</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapperPart:{
        flexDirection:'row',
    },
    forButton:{
        backgroundColor:'blue',
        borderRadius:10,
        width:'25%',
        paddingVertical:10,
        alignItems: 'center',
    },
    forCard:{
        borderColor:'blue',
        backgroundColor:'white',
        padding: 15,
        borderRadius:10,
        marginBottom:15,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height:'100',
        //Тінь
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
})
