import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Courses from "../Api/CourseApi";
const Course = ({ navigation }) => {

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image style={styles.cardImage} source={item.img} resizeMode='contain' />
          </View>
          <Text style={styles.mainHeader}>
            {item.title}
          </Text>
          <Text style={styles.descripation}>
            {item.descripation}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('CourseDetails',
              {
                courseId: item.id,
              }
            )}>
              <Text style={styles.buttontext}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <FlatList
      data={Courses}
      keyExtractor={(item) => item.id}
      renderItem={courseCard}
    />
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 50,
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
    fontSize: 22,
    color: "#344055",
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 15,
    textAlign: 'center'
  },
  descripation: {
    textAlign: 'left',
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
    fontWeight: '800'
  }

})

export default Course
