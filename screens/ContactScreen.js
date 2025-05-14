import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Contact Screen</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#2D3D75',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
