import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Courses from "../Api/CourseApi";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  const selectedcourse = Courses.find((element) => { return id === element.id }
  )
  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image style={styles.cardImage} source={selectedcourse.img} resizeMode='contain' />
        </View>
        <Text style={styles.mainHeader}>
          {selectedcourse.title}
        </Text>
        <Text style={styles.descripation}>
          {selectedcourse.descripation}
        </Text>
        <Text style={styles.coursetext}>
          {selectedcourse.course1}
        </Text>
        <Text style={styles.coursetext}>
          {selectedcourse.course2}
        </Text>
        <Text style={styles.coursetext}>
          {selectedcourse.course3}
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.price} >{selectedcourse.price}</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Course')}>
            <Text style={styles.buttontext}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 15
  },
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 15,
    textAlign: 'center',
  },
  descripation: {
    textAlign: 'center',
    fontWeight: '500',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#7d7d7d'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontext: {
    fontSize: 20,
    color: '#eee',
    textTransform: 'capitalize',
    fontWeight: '900'
  },
  coursetext: {
    textAlign: 'center',
    fontWeight: '500',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 18,
    color: '#4d4d4d'
  },
  price: {
    backgroundColor: '#344055',
    color: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'center'
  }

})

export default CourseDetails
