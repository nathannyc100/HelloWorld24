import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';

export default function CameraPage() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [colorString, setColorString] = useState('test');
  const cameraRef = useRef(undefined);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync();


    const x = photo.width / 2;
    const y = photo.width / 2;

    setColorString(photo.uri);

    const result = await ImageManipulator.manipulateAsync(
      photo.uri,
      [{ crop: { originX: x, originY: y, width: 1, height: 1 } }],
      { base64: true }
    );
    
    var getPixels = require("get-pixels")

    getPixels(result, function(err, pixels) {
      if(err) {
        console.log("Bad image path")
        return
      }
      console.log("got pixels", pixels.shape.slice())
      setColorString(pixels)
    })

    return;

    const base64 = result.base64;
    const binaryString = atob(base64); // decode base64 to binary
    const r = binaryString.charCodeAt(0);
    const g = binaryString.charCodeAt(1);
    const b = binaryString.charCodeAt(2);

    setColorString(r + ", " + g + ", " + b);




  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <Text style={styles.colorText}>{colorString}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  colorText: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});

