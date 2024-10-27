import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';

export default function Entry() {
  return (
    <View style={styles.background}>
      {/* these have limited functionality because i ran out of time and need to sleep */}
        <Image style={styles.header} source={require('../../assets/images/ombre-head.png')} />
        <Text style={styles.title}>Check history</Text>
        <Text style={styles.subtitle}>Check a pee</Text>
        <View style={styles.recent}>
            <Text style={styles.recentText}>The most recent pee:</Text>
            <Text style={styles.recentBody}>You peed at 2 o'clock. You likely need to drink 2 more liters of water! </Text>
            <View style={styles.stripe}></View>
        </View>
        <View style={styles.buttoncontainer}> 
          
            <Button page="/(tabs)/history" name='Your best pee: Sunday, October 27'/>
            <Button page="/(tabs)/history" name='Your worst pee: Monday, October 28'/>
            <Button page="/(tabs)/history" name='The most pees: Tuesday, October 29'/>
        </View>
        <Image style={styles.footer} source={require('../../assets/images/ombre-head.png')} />
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
  footer: {
    position: 'absolute',
    transform: [{ rotate: '180deg' }],
    bottom: -80,
    width: '100%'
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
    top: '20%',
    width: '100%',
    height: '100%',
  },
  recent: {
    width: '90%',
    height: '22%',
    top: '20%',
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 10,
    margin: 10
  },
  stripe: {
    width: '6%',
    height: '100%',
    left: '86%',
    top: '-72%',
    backgroundColor: '#D1A926',
  },
  recentText: { // sorry this is so repetitive but its currently 4 am
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: '#696666',
    paddingLeft: 20,
    paddingTop: 17,
  },
  recentBody: {
    width: '80%',
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: '#696666',
    paddingLeft: 20,
    paddingTop: 17,
  }
});