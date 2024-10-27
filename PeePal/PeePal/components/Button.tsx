import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Href, router} from 'expo-router';

type ButtonProps = {
    name: string,
    page: Href<string | object>
}
export default function Button(props: ButtonProps) {
  return (
            <Pressable onPress={()=>router.navigate(props.page)} style={styles.button}>
              <Text style={styles.buttonText}>{props.name}</Text>
            </Pressable>
  );
}

const styles = StyleSheet.create({
  
  button: {
    width: '90%',
    height: '7%',
    // position: 'absolute',
    // top: '50%',
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 10,
    paddingLeft: 20,
    paddingTop: 17,
    margin: 10
  },
  buttonText: {
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: '#696666', 
  },
});


