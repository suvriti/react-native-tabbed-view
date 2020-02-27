import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards'

export default function ExploreScreen({navigation}) {
  return (
<ScrollView>
 
 <Card>
   <CardImage 
     source={{uri: 'http://bit.ly/2GfzooV'}} 
     title="Goa"
   />
   <CardTitle
     subtitle="Explore the beaches"
   />
   {/* <CardContent text="Clifton, Western Cape" /> */}
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
         onPress={() => navigation.navigate('Booked')}
       title="Book"
       color="#FEB557"
     />
   </CardAction>
 </Card>
 <Card>
   <CardImage 
     source={require('../assets/images/bhutan.jpg')} 
     title="Bhutan"
   />
   <CardTitle
     subtitle="Enjoy the serendipity"
   />
   {/* <CardContent text="Clifton, Western Cape" /> */}
   <CardAction 
     separator={true} 
     inColumn={false}>
     <CardButton
       onPress={() => {}}
       title="Share"
       color="#FEB557"
     />
     <CardButton
       onPress={() => navigation.navigate('Booked')}
       title="Book"
       color="#FEB557"
     />
   </CardAction>
 </Card>

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
    width: 100,
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
}
});
