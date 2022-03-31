
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Menu from "../component/Menu";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage} resizeMode='contain' source={require('../assets/on2.jpg')} />
        <Text style={styles.mainHeader}>Welcome To</Text>
        <Text style={[styles.mainHeader, { fontSize: 33, color: '#4c5dab', marginTop: 0 }]}>{props.channelname}</Text>
        <Text style={styles.paraStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
      </View>
    </View >
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    height: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase'
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    lineHeight: 26,
    paddingBottom: 50,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  menuStyle: {

  }
});


export default HomeScreen;
