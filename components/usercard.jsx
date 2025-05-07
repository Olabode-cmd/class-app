import { View, Text, Image, StyleSheet } from 'react-native'

const Usercard = () => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={require('../assets/view.jpeg')}
                style={styles.image} // style={{ width: 100, height: 100 }}
            />
            <Text style={styles.title}>Lorem ipsum dolor sit</Text>

            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quisquam deleniti voluptatibus nulla!</Text>
        </View>
    )
}

export default Usercard;
const styles = StyleSheet.create({
    wrapper: {
        width: '70%',
        height: 400,
        marginBottom: 30,
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
     subtitle: {
        fontSize: 16,
        color: 'white',
        marginTop: 6,
    }
})