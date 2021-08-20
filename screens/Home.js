import React from 'react'
import {View,Button,Text, SafeAreaView, ScrollView, StyleSheet, Alert, ImageBackground} from 'react-native'

const Separator = () => (
   <View style={styles.separator} />
);

const Home = ({navigation})=> {
    return(
        <SafeAreaView style={styles.container} >
            <ScrollView
            contentInsetAdjustmentBehavior="automatic">

              <ImageBackground style={{flex:1}} source={{url:'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80'}} >

                <View>
                    <Text style={styles.title}>
                      Registra tu rostro para que el app pueda detectar y reconocerlo.
                    </Text>
                    <Button
                        title="Registro de Rostro"
                        color= "#008080"
                        onPress={() => navigation.navigate('Registro')}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>
                        A traves de esta opcion su rostro puede ser detectado y reconocido, siempre y cuando este se encuentre en la BD de la app.
                    </Text>
                    <Button
                        title="Reconocimiento Facial"
                        color= "#008080"
                        onPress={() => navigation.navigate('RostroRec')}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>
                    Deteccion de diferentes gestos con la mano, descubrelos tu mismo.
                    </Text>
                    <Button
                        title="Reconocimiento De Gestos"
                        color= "#008080"
                        onPress={() => navigation.navigate('GestoRec')}
                    />
                </View>
                <Separator />
              </ImageBackground>

            </ScrollView>
            
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
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
});


export default Home

   