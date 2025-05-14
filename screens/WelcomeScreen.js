import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Your Personal Task Manager</Text>
        
        <View style={styles.features}>
          <Text style={styles.featureText}>• Organize your tasks</Text>
          <Text style={styles.featureText}>• Track your progress</Text>
          <Text style={styles.featureText}>• Stay productive</Text>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3D75',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    opacity: 0.8,
    marginBottom: 40,
  },
  features: {
    width: '100%',
    marginBottom: 40,
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3D75',
  },
});

export default WelcomeScreen; 