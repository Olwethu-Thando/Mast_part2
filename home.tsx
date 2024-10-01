import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    
    <View style={styles.overlay}>
      <View style={styles.mainPicture}></View>
      
      <Text style={styles.title}>Culinary Courier</Text>
      <Text style={styles.subtitle}>Cooking like a boss</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}  // Navigate to Menu screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('Add Dish')}  // Navigate to Add Dish screen
      >
        <Text style={styles.addButtonText}>Add a Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // Dark overlay for the background
    padding: 20,
  },
  logo: {
    width: 100, // Adjust the width of the logo
    height: 100, // Adjust the height of the logo
    marginBottom: 20, // Space below the logo
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#7D4CC1',  // Light purple button for "Get Started"
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,  // Space between buttons
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4CAF50',  // Green button for "Add a Dish"
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

