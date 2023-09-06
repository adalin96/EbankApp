import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const Test3 = ({navigation}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Update the button state based on the "important" inputs
    setIsButtonEnabled(input1 !== '' && input2 !== '');
  }, [input1, input2]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Important Input 1"
        value={input1}
        onChangeText={text => setInput1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Important Input 2"
        value={input2}
        onChangeText={text => setInput2(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Unimportant Input"
        value={input3}
        onChangeText={text => setInput3(text)}
      />
      <TouchableOpacity
        disabled={!isButtonEnabled}
        style={[
          styles.button,
          isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled,
        ]}
        onPress={() => {
          navigation.navigate('LoginV2');
        }}>
        <Text style={styles.buttonText}>Envoyer la demande</Text>
      </TouchableOpacity>
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
  button: {
    borderRadius: 20, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: 'blue',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Test3;
