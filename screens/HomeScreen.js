import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react'

const HomeScreen = () => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // Json - Javascript Object Notation

  const fetchProducts = async () => { // asynchronous function
    try {
      const response = await fetch('https://dummyjson.com/products')
      if (!response.ok) {
        throw new Error('Something went wrong. Try again later.')
      }

      const data = await response.json()
      // console.log(data)
      setProducts(data.products)
    } catch (error) {
      console.error(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  // products

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{error}</Text>
      </View>
    )
  }

  // fetchProducts();
  // setUser("Michael")
  return (
    <View style={styles.container}>
      {["Michael", "Peter", "Paul", "Julius", "Abe"].map((name, index) => (
        <Text>My name is {name}. I am number {index}</Text>
      ))}

      {/* {products.map((name) => (
        <Text>{name.title}</Text>
      )} */}

      {products.map((product) => (
        <View>
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
      ))}

      {/* My name is Micheal. I am number 1 */}
      {/* My name is Peter. I am number 2 */}
      {/* My name is Paul. I am number 3 */}
      {/* My name is Julius. I am number 4 */}
      {/* My name is Abe. I am number 5 */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen; 

// GET, POST, PUT, PATCH, DELETE

// const user = { name: "Olabode One", course: "Frontend", email: "olabode@google.com"}
// PUT REQUEST = { name: "Olabode One", course: "Backend", email: "olabode@google.com"}
// PATCH REQUEST = { course: "Backend" }