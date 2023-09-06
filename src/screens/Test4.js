import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const isValidEmail = email => {
  // Basic email validation regex
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const Test4 = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    setIsEmailValid(isValidEmail(Email));
  }, [Email]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isEmailValid ? null : styles.inputError]}
        placeholder="Email"
        value={Email}
        onChangeText={text => setEmail(text)}
      />
      {!isEmailValid && <Text style={styles.errorText}>Email non valide</Text>}
      {/* Rest of your code */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
  // ... your other styles
});

export default Test4;
