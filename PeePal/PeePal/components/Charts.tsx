import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type ChartsProps = {
    entries: number; // scale by entry but its kinda broken and affects the buttons too 
}
export default function Charts(props: ChartsProps) {
  return (
    <View>
        <View style={[styles.column, {height: props.entries * 20}]}></View>
    </View>
    
  );
}

const styles = StyleSheet.create({

    column: { // LEARN FLEX :(
        width: '100%',
        top: '32%',
        backgroundColor: "#56A790",
        margin: 30
    },

});


