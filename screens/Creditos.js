import React from 'react'
import {View,Button,Text, Image, StyleSheet, SafeAreaView, ImageBackground} from 'react-native'

const Separator = () => (
    <View style={styles.separator} />
 );

const Creditos = ()=> {
    return(
        <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/originals/8c/37/60/8c3760589c87367b587a52db820e46c5.jpg'}} >
            <SafeAreaView>
                <View style = {{flex:0, justifyContent: 'center' , alignItems:'center', paddingTop:15}}>
                <Image source={require('../images/ro.jpg')}style={{width:130,height:130}}></Image><Text style={styles.text}>Nombre: Ronald Cabrera Gonzalez</Text>
                <Text style={styles.text}>Matricula: 2019-8467 </Text>
                </View>
                <Separator/>
                <View style = {{flex:0, justifyContent: 'center' , alignItems:'center'}}>
                <Image source={require('../images/cattt.jpg')}style={{width:130,height:130}}></Image><Text style={styles.text}>Nombre: Caterina Giannecchini Rosario </Text>
                <Text style={styles.text}>Matricula: 2019-8106 </Text>       
                </View>
                <Separator/>
                <View style = {{flex:0, justifyContent: 'center' , alignItems:'center'}}>
                <Image source={require('../images/obed.jpg')}style={{width:130,height:130}}></Image><Text style={styles.text}>Nombre: Jose Obed Zorilla Pool</Text>
                <Text style={styles.text}>Matricula: 2019-8790 </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>



    )
}



const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      color:'white',
      fontSize:15,
      fontFamily: 'sans-serif',
      
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    
      }
});

export default Creditos