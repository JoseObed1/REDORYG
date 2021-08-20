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
  
import { RNCamera } from 'react-native-camera'; // for taking selfies
/*import base64ToArrayBuffer from 'base64-arraybuffer'; // for converting base64 images to array buffer
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // for showing icons
import axios from 'axios'; // for making requests to the cognitive services API*/

class ExampleApp extends PureComponent {
    takePicture = async () => {
        if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
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
        flex: 0,
        width:310,
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
  
AppRegistry.registerComponent('App', () => ExampleApp);



/*const RostroRec = ()=> {
    return(
        <View style = {{flex:1, justifyContent: 'center' , alignItems:'center'}}>
            <RNCamera
                    ref={cameraRef}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    captureAudio={false}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
            />
        </View>
    )
}*/

export default ExampleApp