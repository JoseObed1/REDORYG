import React from 'react'
import {View,Button,Text, SafeAreaView, ScrollView, StyleSheet, Alert} from 'react-native'

const Separator = () => (
   <View style={styles.separator} />
);

const Home = ({navigation})=> {
    return(
        <SafeAreaView style={styles.container} >
             <ScrollView
            contentInsetAdjustmentBehavior="automatic">

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

            </ScrollView>
            
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
  container: {
    paddingTop:130,
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

   