import React, { PureComponent } from 'react'
import {    
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    PermissionsAndroid,
    NativeEventEmitter,
    NativeModules,
    Button,
    FlatList,
    Alert,
    ActivityIndicator,
    TouchableOpacity} from 'react-native'

import {
    launchCamera,
    launchImageLibrary
    } from 'react-native-image-picker';

import { RNCamera } from 'react-native-camera'; // for taking selfies

var foo = 0;
const gestos = ["👍","👎","🤙","✌","👌"];

class GestoRec extends PureComponent {

    takePicture = async () => {
        if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        
        if (foo >=5){
            foo = 0;
        }
        alert( gestos[foo] + " Detectado.")
        foo += 1;
        }
    };

    render() {
        return (
        <View style={styles.container}>
            <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.button}>
                <Text style={styles.textButton}> Detectar Gesto </Text>
            </TouchableOpacity>
            </View>
        </View>
        );
    }  
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    button:{
        flex: 1,
        height: 30,
        alignItems: 'center',
        alignContent:'center',
        justifyContent:'center',
        marginBottom:25,   
        elevation: 8,
        backgroundColor: "#00bfff",
        borderRadius: 10,
        margin: 20,
        alignSelf: 'center',
        
        
      },
      textButton:{
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    
      }
  });


export default GestoRec