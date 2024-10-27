import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
import Column from '@/components/Column';

export default function Entry() {
  return (
    <View style={styles.background}>
        <Image style={styles.header} source={require('../../assets/images/ombre-head.png')} />
        <Text style={styles.title}>Add an entry</Text>
        <Text style={styles.subtitle}>Add a pee</Text>
        <View style={styles.buttoncontainer}>
            {/* sorry this is really stupid but im running out of time <33*/}
            <Button name='Time                                                       +'/>
            <Button name='Date                                                       +'/>
            <Button name='Amount                                                  +'/>
        </View>
        <Text style={styles.bannerheader}>Choose color or begin analysis:</Text>

        <View style={styles.banner}>
            <Column name='bad - overhydrated' color='#FFFFEC'/>
            <Column name='good - yay!' color='#FBFDAA'/>
            <Column name='bad - a bit oversaturated!' color='#FFE860'/>
            <Column name='badd - oversaturated' color='#FED13B'/>
            <Column name='super bad' color='#E6C16B'/>
            <Column name='drink' color='#D1A926'/>
        </View>
        <Image style={styles.footer} source={require('../../assets/images/ombre-head.png')} />
        <Text style={styles.footertext}>
          PeePal
        </Text>
        <Text style={styles.advicetext}>Your pee is...</Text>
        
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
  banner: {
    position: 'absolute',
    top: '58%',
    width: '100%',
    height: '28%',
    backgroundColor: '#D9D9D9',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bannerheader: {
    fontFamily: 'Avenir',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: "53%",
    left: '7%',
    fontSize: 16,
    fontWeight: 'bold',
    color: "#696666",
  },
  advicetext: {
    fontFamily: 'Avenir',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '82.5%',
    left: '7%',
    fontSize: 16,
    fontWeight: 'bold',
    color: "#696666",
  },
});