import { View, Text, StyleSheet, Pressable, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import ProfilePicture from './assets/view.jpeg'
import Dots from './assets/dots.svg'
import RedBox from './components/redbox';
import Usercard from './components/usercard';

const App = () => {
  // useState Lesson
  // The primary use of useState is to manage state or store data in a 
  // functional component.

  // const [name, setName] = useState('John Doe');
  // const [age, setAge] = useState(25);
  // console.log(name);

  // const changeName = () => {
  //   setName('Matthew Joe');
  // }

  // Image and Stylesheets


  // work experience
  const workExperience = [
    {
      companyName: "Google",
      position: "Software Engineer",
      duration: "Jan 2020 - Present",
      description: "Worked on various projects using React Native and Node.js."
    },
    {
      companyName: "Microsoft",
      position: "Software Engineer Intern",
      duration: "Jun 2019 - Dec 2019",
      description: "Developed and maintained mobile applications for iOS and Android platforms."
    },
    {
      companyName: "Facebook",
      position: "Software Engineer Intern",
      duration: "Jun 2018 - Dec 2018",
      description: "Contributed to the development of Facebook's mobile applications."
    }
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>My Profile</Text>

        <View style={styles.banner}>
          <View style={styles.profile}>
            <Image source={ProfilePicture} style={styles.image} />
            <View style={{ marginLeft: 16 }}>
              <Text style={styles.bigtext}>Matthew Joe</Text>
              <Text style={styles.smallertext}>4 years of experience</Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Download CV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>Contact</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={{ fontSize: 28 }}>About</Text>
            <Text style={{ marginTop: 6, fontSize: 20, color: "#666" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
          </View>

          {workExperience.map((item) => (
            <View style={styles.workCard}>
              <View>
                <Text>{item.companyName}</Text>
                <Text>{item.duration}</Text>
                <Text>{item.position}</Text>
              </View>
              <View>
                <Image source={Dots} style={{ width: 20, height: 20 }} />
              </View>
            </View>
          ))}
        </View>

        <Usercard />
      </View>
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D3D75",
  },
  wrapper : {
    backgroundColor: "red",
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 36,
    paddingLeft: 16
  },
  banner: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 16,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    padding: 16,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    marginTop: 20,
    borderRadius: 14,
  },
  bigtext: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  smallertext: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'medium'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 20
  },
  button: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 14,
    borderRadius: 34,
  },
  workCard: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    marginBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})