import { View, Text, Image, StyleSheet } from 'react-native'

const Usercard = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={require('../assets/view.jpeg')}
                style={styles.image} // style={{ width: 100, height: 100 }}
            />
            <Text style={styles.title}>{props.title}</Text>

            <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
    )
}

export default Usercard;
const styles = StyleSheet.create({
    wrapper: {
        width: '70%',
        height: 400,
        marginBottom: 10,
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