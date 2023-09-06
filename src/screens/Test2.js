import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Test = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const translateY = new Animated.Value(0);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  return (
    <GestureHandlerRootView>
      <View style={{marginTop: 100}}>
        <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              editable={false}
              value={selectedOption}
              placeholder="Type de la demande"
            />
            <Text>↓</Text>
          </View>
        </TouchableOpacity>
        {showOptions && (
          <View style={{
            // remove position: 'absolute',
            backgroundColor: '#fff',
            maxHeight: 200, // or however big you want it
          }}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedOption(option);
                    setShowOptions(false);
                  }}>
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </Animated.View>
        </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = {
  optionContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 1000,
    top: 50,
    left: 0,
    right: 0,
    maxHeight: 200, // or however big you want it
  },
};

export default Test;
