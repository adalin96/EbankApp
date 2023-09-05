// FirstTimeInquiry.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const ContactCDG = ({navigation}) => {
  const [objetDemande, setObjetDemande] = useState('');
  const [typeDemande, setTypeDemande] = useState('');
  const [ImportantInput1, setImportantInput1] = useState(true);
  const [ImportantInput2, setImportantInput2] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const translateY = new Animated.Value(0);

  const options = [
    ' ',
    'Conseil financier',
    'Activité de marché',
    'Service dépositaire',
    'Service bancaire',
    'Intermediation & courtage',
    'Sujet tranverse',
  ];

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
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginV2');
          }}>
          <Icon name="arrow-back" size={24} color="#6bb463" />
        </TouchableOpacity>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>Contacter CDG Capital</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={styles.bigTitleContainer}>
            <Text style={styles.bigTitle}>
              Avez-vous besoin d'une information ou vous désirez prendre un
              rendez-vous ?
            </Text>
          </View>

          {/* MainContent sub section */}

          <Text style={styles.smallerTitle}>
            Nos équipes s'engagent à vous répondre dans les meilleurs délais.
          </Text>

          <Text style={styles.sectionTitles}>
            Veuillez préciser votre demande :
          </Text>

          <TextInput
            placeholder="Objet de votre demande"
            value={objetDemande}
            onChangeText={text => {
              setObjetDemande(text);
              setImportantInput1(text !== '');
            }}
            style={[
              styles.input,
              !ImportantInput1
                ? {borderColor: '#ba0001', borderWidth: 1.1}
                : {},
            ]}
          />
          {!ImportantInput1 && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text
                style={{
                  color: '#ba0001',
                  marginBottom: 10,
                  fontWeight: '300',
                }}>
                Champ obligatoire
              </Text>
            </View>
          )}

          <GestureHandlerRootView>
            <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
              <View
                style={[
                  styles.input,
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                ]}>
                <TextInput
                  editable={false}
                  placeholder="Type de la demande"
                  value={selectedOption}
                  //   style={[
                  //     styles.input,
                  // !ImportantInput2
                  //   ? {borderColor: '#ba0001', borderWidth: 1.1}
                  //   : {},
                  //   ]}
                />
                <Icon name="arrow-drop-down" size={35} color="#444654" />
              </View>
            </TouchableOpacity>
            {showOptions && (
              <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={({nativeEvent}) => {
                  if (nativeEvent.oldState === State.ACTIVE) {
                    setShowOptions(false);
                    translateY.setValue(0);
                  }
                }}>
                <Animated.View
                  style={{
                    ...styles.optionContainer,
                    transform: [{translateY: translateY}],
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
              </PanGestureHandler>
            )}
          </GestureHandlerRootView>

          {/* {!ImportantInput2 && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text
                style={{
                  color: '#ba0001',
                  marginBottom: 10,
                  fontWeight: '300',
                }}>
                Champ obligatoire
              </Text>
            </View>
          )} */}

          <View style={{marginTop: 150}}></View>
        </ScrollView>
      </View>

      {/*Send zone */}
      <View style={{flex: 0.08, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('LoginV2');
          }}
          //   disabled={}
        >
          <Text>Envoyer la demande</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcff',
  },
  topSection: {
    flex: 0.08,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal: 10,
  },
  arrowIcon: {
    color: '#6bb463',
    flex: 0.05,
  },
  topTextContainer: {
    flex: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30363a',
    marginRight: 30,
  },
  mainContent: {
    flexDirection: 'column',
    flex: 0.84,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  bigTitleContainer: {},
  bigTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#6bb463',
  },
  mainContentSubSection: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  smallerTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#808185',
    marginVertical: 20,
  },
  sectionTitles: {
    fontWeight: '500',
    color: 'black',
    marginBottom: 20,
    marginHorizontal: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    elevation: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  optionContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 1000,
    top: 50,
    left: 0,
    right: 0,
    maxHeight: 200,
  },
  button: {
    backgroundColor: '#6bb463',
    width: '60%',
    height: 36,
    borderRadius: 25,
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default ContactCDG;
