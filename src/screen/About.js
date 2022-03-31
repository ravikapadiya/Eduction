//import liraries
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// create a component
const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> ravi kapadiya</Text>
      <Text style={styles.paraStyle}> I Am full stack developer</Text>
      <View style={styles.mainimage}>
        <TouchableOpacity>
          <Image style={styles.rimageStyle} source={require('../assets/r.jpg')} />
        </TouchableOpacity>
      </View>
      <View style={styles.aboutlayout} >
        <Text style={styles.aboutHeader}>About me</Text>
        <Text style={[styles.abouttext]}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      <View style={styles.manuContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.youtube.com/')} >
          <Image style={styles.iconStyle} source={require('../assets/you2.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL('https://www.google.co.in/')} >
          <Image style={styles.iconStyle} source={require('../assets/go.jpg')} />
        </TouchableOpacity>
      </View>
    </View >
  );
};

// define your styles
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: "center"
  },
  mainHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textTransform: 'uppercase',
    marginTop: 30,
    marginBottom: 10,
  },
  paraStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: 'green',
    paddingBottom: 30,
  },
  mainimage: {

  },
  rimageStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,

  },
  aboutlayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  aboutHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase',
    marginVertical: 15,
  },
  abouttext: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 5,
  },
  manuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconStyle: {
    width: 70,
    height: 70,
    aspectRatio: 1,
  }
});

//make this component available to the app
export default About;
