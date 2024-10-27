import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
import Charts from '@/components/Charts';

export default function Main() {
  return (
    <View style={styles.background}>
        <Image style={styles.header} source={require('../../assets/images/ombre-head.png')} />
        <Text style={styles.title}>Purdue Pete</Text>
        <Text style={styles.subtitle}>Welcome back,</Text>
        
        <View style={styles.chartx}></View>
        <View style={styles.charty}></View>
        <View style={styles.chartcontainer}>
          <Charts entries = {3} />
          <Charts entries = {2} />
          <Charts entries = {6} />
        </View>
        <Image style={styles.footer} source={require('../../assets/images/ombre-head.png')} />
        <View style={styles.buttoncontainer}>
          <Button page="/(tabs)/entry" name="Add an entry"/>
          <Button page="/(tabs)/history" name="Check history"/>
          <Button page="/(tabs)/main copy" name="How much water should I be drinking?"/> 
        </View>
        
        <Text style={styles.footertext}>
          PeePal
        </Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  
  },
  chartcontainer: {
    display: 'flex',
    flexDirection: 'row',
    top: '25.5%',
    left: '10%',
    alignItems: 'flex-end',
  },
  footer: {
    position: 'absolute',
    transform: [{ rotate: '180deg' }],
    bottom: -80,
    width: '100%',
  },
  chartx: {
    position: 'absolute',
    top: '40%',
    width: '90%',
    height: '0.5%',
    alignSelf: 'center',
    backgroundColor: '#56A790'
  },
  charty: {
    position: 'absolute',
    top: '24%',
    left: '5%',
    width: '0.7%',
    height: '16%',
    alignSelf: 'center',
    backgroundColor: '#56A790'
  },
  footertext: {
    position: 'absolute',
    bottom: '2%',
    left: '6%',
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    top: 0,
  },
  title: {
    fontFamily: 'Avenir',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '11%',
    left: '7%',
    fontSize: 25,
    fontWeight: 'bold',
    color: "#696666",
  },
  subtitle: {
    fontFamily: 'Avenir',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '8.5%',
    left: '7%',
    fontSize: 16,
    fontWeight: 'bold',
    color: "#989292",
  },
  buttoncontainer: {
    top: '25%',
    width: '100%',
    height: '100%',
  },
});


