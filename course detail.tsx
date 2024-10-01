import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const courses = {
  starters: {
    title: 'Starters',
    description: 'Explore a variety of delicious starters to kick off your meal. Our selection includes:',
    dishes: [
      { name: 'Bruschetta', description: 'Grilled bread topped with diced tomatoes, garlic, and basil.' },
      { name: 'Caesar Salad', description: 'Romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.' },
      { name: 'Stuffed Mushrooms', description: 'Mushrooms filled with a savory cheese and breadcrumb mixture.' },
    ],
  },
  mainCourse: {
    title: 'Main Course',
    description: 'Enjoy our range of hearty and flavorful main courses. Choose from:',
    dishes: [
      { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection with a lemon butter sauce.' },
      { name: 'Ribeye Steak', description: 'Juicy ribeye steak served with mashed potatoes and steamed vegetables.' },
      { name: 'Pasta Alfredo', description: 'Creamy Alfredo sauce over fettuccine pasta with grilled chicken.' },
    ],
  },
  dessert: {
    title: 'Dessert',
    description: 'Indulge in our sweet and delectable desserts:',
    dishes: [
      { name: 'Chocolate Lava Cake', description: 'Rich chocolate cake with a gooey molten center.' },
      { name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked sponge and mascarpone cream.' },
      { name: 'Cheesecake', description: 'Creamy cheesecake served with a strawberry compote.' },
    ],
  },
};

const CourseDetailScreen = ({ route }) => {
  const { courseType } = route.params;
  const course = courses[courseType];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {course.dishes.map((dish, index) => (
        <View key={index} style={styles.dishContainer}>
          <Text style={styles.dishTitle}>{index + 1}. {dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
        </View>
        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7D4CC1',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  dishContainer: {
    marginBottom: 20,
  },
  dishTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 16,
  },
});

export default CourseDetailScreen;
