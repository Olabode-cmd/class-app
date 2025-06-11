import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        console.log(username, password);
        // 1. set loading to true to signify a request is in progress
        setLoading(true);

        try {
            // 2. make a request to the server
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            // 3. check if the response is ok
            if (!response.ok) {
                throw new Error('Something went wrong. Try again later.');
            }

            // 4. parse the response data as a json object
            const data = await response.json();
            console.log(data);
        } catch (error) {
            // 5. handle any errors that occur during the request
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Contact Screen</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        <TextInput 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{borderWidth: 1, padding: 10, marginBottom: 10, borderColor: '#ccc'}}
        />
        <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderWidth: 1, padding: 10, marginBottom: 10, borderColor: '#ccc' }}
        />
        <Pressable 
            onPress={handleSubmit}
            style={styles.button}
        >
            <Text style={styles.buttonText}>
                {/* {loading ? <ActivityIndicator /> : "Submit"} */}
                {/* Submit */}
                <ActivityIndicator />
            </Text>
        </Pressable>
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
