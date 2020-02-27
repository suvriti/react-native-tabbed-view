import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function SignInScreen({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
                <Image
                    style={styles.image}
                    source={require('../assets/images/travelLogin.png')}
                />
                <TextInput style={styles.input} 
                    placeholder="Username"
                />
                <TextInput style={styles.input} 
                    placeholder="Password"
                    secureTextEntry={true}
                />
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate('Explore')}
       >
         <Text> Go </Text>
 </TouchableOpacity>
            </View>
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
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
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
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
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
    width: 100,
    marginTop:28,
    borderRadius:60,
    alignSelf:'center',
    alignItems: 'center',
    backgroundColor: '#89cff0',
    padding: 10
  }
});
