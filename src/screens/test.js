import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconDate from 'react-native-vector-icons/FontAwesome';

const Test = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.input,
          {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <TextInput
          style={{backgroundColor: 'red', width: '26%'}}
          placeholder="Choisissez une date"
          value={date.toLocaleDateString()}
          editable={false}
        />
        <Text style={styles.asterisk}>*</Text>
        <TouchableOpacity
          style={styles.iconDateContainer}
          onPress={() => setShowPicker(true)}>
          <IconDate name="calendar" size={24} color="#900" />
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 5,
  },
  textInput: {
    flex: 1,
  },
  asterisk: {
    color: 'red',
    marginRight: 20,
  },
  iconDateContainer: {
    padding: 5,
  },
});

export default Test;
