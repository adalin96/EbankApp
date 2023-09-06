import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#6ec65a', '#509141']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={styles.title}>CDG CAPITAL</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#ffffff', // White color for the text
    marginBottom: 20,
    fontSize: 45,
    textShadowOffset: {width: 3, height: 3}, // Horizontal and vertical offset of the shadow
    textShadowRadius: 1, // Blur radius
    textShadowColor: '#b1b1b1', // Shadow color
  },
});

export default LoadingScreen;
