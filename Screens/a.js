import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, FlatList } from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const Details = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const fadeAnimHeader = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const fadeAnimCategories = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnimHeader }]}>
        <Text style={styles.headerText}>This is Details Page</Text>
      </Animated.View>
      <Animated.View style={[styles.categoriesContainer, { opacity: fadeAnimCategories }]}>
        <Text style={styles.categoriesText}>Categories</Text>
      </Animated.View>
      <AnimatedFlatList
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  categoriesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  categoriesText: {
    color: 'white',
    fontSize: 18,
  },
  listContent: {
    paddingTop: 100,
  },
});