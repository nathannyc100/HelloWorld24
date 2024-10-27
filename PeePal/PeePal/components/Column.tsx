import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View, Pressable } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type ColumnProps = {
    name: string;
    color: string;
}
export default function Column(props: ColumnProps) {
  return (
            <View style={[styles.column, {backgroundColor: props.color}]}></View>
  );
}

const styles = StyleSheet.create({

  column: { // LEARN FLEX :(
    width: '14%',
    height: '80%',
    borderRadius: 15,
    
    // backgroundColor: "#D9D9D9",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,  
    elevation: 10,
    margin: 3
    },
});


