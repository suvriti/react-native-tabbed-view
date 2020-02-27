import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function BookedScreen({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
        <Image
            source={require('../assets/images/packing.jpeg')}
            style={styles.welcomeImage}
          />
         <Text style={styles.optionText}> Your trip is booked. Let's Go Pack!! </Text>
        </View>
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate('Home')}
       >
         <Text> Back To Home. </Text>
 </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
    alignItems: 'center',
  },
  optionIconContainer: {
    marginRight: 12,
  },
  welcomeImage: {
    marginTop: 63,
    alignSelf: 'center',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    marginTop:50,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 300,
    marginTop: 30,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderRadius:10,
    borderColor: '#48AAAD'
},
goButton : {
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: '#48AAAD'
},
button: {
    width: 200,
    marginTop:28,
    borderRadius:60,
    alignSelf:'center',
    alignItems: 'center',
    backgroundColor: '#c18eda',
    padding: 10
  }
});
