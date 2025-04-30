import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [temperature, setTemperature] = useState(20)
  const [message, setMessage] = useState('Waiting for temperature...')

  const checkTemperature = () => {
    if (temperature < 25) { 
      setMessage('It is cold')
    } else {
      setMessage('It is hot')
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{fontSize: 50, textAlign: 'center'}}>{temperature}</Text>
      <Text>{message}</Text>

      <Pressable onPress={checkTemperature}>
        <Text>Check temperature</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
