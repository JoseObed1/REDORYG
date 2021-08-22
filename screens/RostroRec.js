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
    TouchableOpacity // add
} from 'react-native';

import {
    launchCamera,
    launchImageLibrary
  } from 'react-native-image-picker';
  
import { RNCamera } from 'react-native-camera'; // for taking selfies
/*import base64ToArrayBuffer from 'base64-arraybuffer'; // for converting base64 images to array buffer
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // for showing icons
import axios from 'axios'; // for making requests to the cognitive services API*/

var foo = 0;

class ExampleApp extends PureComponent {

    takePicture = async () => {
        if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        alert("No se detecto ningun rostro.")
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
                <Text style={styles.textButton}> Detectar Rostro </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => chooseFile('photo')} style={styles.button}>
                <Text style={styles.textButton}> Seleccionar... </Text>
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

const chooseFile = (type) => {
    const numbers = ["Caterina Giannechinni", "Ronald Cabrera", "José Obed"];
    var ciclado = 0;

    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      
      if (foo >= 3){
        foo = 0;
      } 

      alert("El rostro detectado pertenece a: " + numbers[foo])
      console.log(numbers[foo])
      foo += 1;

    });
  };

export default ExampleApp