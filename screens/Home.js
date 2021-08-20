import React from 'react'

import {View,Text,SafeAreaView, ScrollView, Image, TouchableOpacity,StyleSheet, ImageBackground} from 'react-native'

const Separator = () => (
   <View style={styles.separator} />
);

const Home = ({navigation})=> {
    return(
      <ImageBackground style={{flex:1}} source={{uri:'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v412-kul-01-fluidshape_2.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=7ed25591d71f6728b10ee5c980bd82f7'}} >
        <SafeAreaView style={styles.container} >
            <ScrollView
            contentInsetAdjustmentBehavior="automatic">      
              <View>          
                <Text style={styles.titulo}><Image source={require('../images/logo.png')}style={{width:40,height:40}}></Image>
                  REDORYG
                </Text>
              </View>      
                <View>
                    <Text style={styles.title}>
                      Registra tu rostro para que el app pueda detectar y reconocerlo.
                    </Text>
                    <TouchableOpacity                       
                        onPress={() => navigation.navigate('Registro')}
                        style={styles.button}>
                        <Text style={styles.textButton}>Reconocimiento de Rostro</Text>  
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>
                        A traves de esta opcion su rostro puede ser detectado y reconocido, siempre y cuando este se encuentre en la BD de la app.
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RostroRec')}
                        style={styles.button}>
                          <Text style={styles.textButton}>Reconocimiento Facial</Text> 
                    </TouchableOpacity> 
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>
                    Deteccion de diferentes gestos con la mano, descubrelos tu mismo.
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('GestoRec')}  
                        style={styles.button}>
                        <Text style={styles.textButton}>Reconocimiento de gestos</Text>                     
                    </TouchableOpacity>
                </View>
                
              

            </ScrollView>
            
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
  button:{
    width:310,
    height: 30,
    alignItems: 'center',
    alignContent:'center',
    justifyContent:'center',
    marginTop:5,
    marginBottom:5,   
    elevation: 3,
    backgroundColor: "#00bfff",
    borderRadius: 10,
    
  },
  textButton:{
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"

  },
  titulo:{
    color:'#fff',
    fontSize:30,
    fontWeight: "bold",
    paddingBottom:50,
    alignSelf: "center",

  }
  
});


export default Home

   