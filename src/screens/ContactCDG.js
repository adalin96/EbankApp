/* eslint-disable prettier/prettier */
// FirstTimeInquiry.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconDate from 'react-native-vector-icons/FontAwesome';

const ContactCDG = ({navigation}) => {
  const [objetDemande, setObjetDemande] = useState('');
  const [ImportantInput1, setImportantInput1] = useState(true);
  const [Nom, setNom] = useState('');
  const [ImportantInput2, setImportantInput2] = useState(true);
  const [Prenom, setPrenom] = useState('');
  const [ImportantInput3, setImportantInput3] = useState(true);
  const [Email, setEmail] = useState('');
  const [ImportantInput4, setImportantInput4] = useState(true);
  const [Tel, setTel] = useState('');
  const [ImportantInput5, setImportantInput5] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');
  const [showOptions3, setShowOptions3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('');
  const [showOptions4, setShowOptions4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState('');

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const options = [
    'Conseil financier',
    'Activité de marché',
    'Service dépositaire',
    'Service bancaire',
    'Intermediation & courtage',
    'Sujet tranverse',
  ];

  const options2 = ['Monsieur', 'Madame'];

  const options3 = [
    'Je veux être contacté(e) par téléphone',
    'Je veux recevoir une réponse par mail',
  ];

  const options4 = ['Matin', 'Après-midi'];

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isTelValid, setIsTelValid] = useState(true);

  const isValidEmail = email => {
    // Basic email validation regex
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const isValidPhoneNumber = phoneNumber => {
    // The regex here checks if the phone number starts with 06, 07, or 05,
    // followed by 8 more digits, for a total of 10 digits.
    return /^0[567]\d{8}$/.test(phoneNumber);
  };

  useEffect(() => {
    setIsButtonEnabled(
      objetDemande !== '' &&
        Nom !== '' &&
        Prenom !== '' &&
        Email !== '' &&
        Tel !== '',
    );
  }, [objetDemande, Nom, Prenom, Email, Tel]);

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
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

          {/* first sub zone */}
          <Text style={styles.sectionTitles}>
            Veuillez préciser votre demande :
          </Text>

          {/* Objet de la demande INPUT  */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
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
                ? {borderColor: '#ba0001', borderWidth: 0.6}
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
                  marginLeft: 30,
                }}>
                Champ obligatoire
              </Text>
            </View>
          )}

          {/* Type de la demande INPUT */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
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
                style={{
                  color: selectedOption ? '#000' : '#ccc',
                }}
              />
              <Icon name="arrow-drop-down" size={35} color="#444654" />
            </View>
          </TouchableOpacity>
          {showOptions && (
            <View
              style={{
                // remove position: 'absolute',
                backgroundColor: '#fefbe8',
                maxHeight: 160, // or however big you want it
                marginBottom: 10,
                padding: 8,
                elevation: 20,
                borderRadius: 10,
                width: '80%',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedOption(option);
                    setShowOptions(false);
                  }}>
                  <Text>
                    {'> '}
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Detaillez votre demande INPUT */}
          <View style={[styles.input, {height: 120}]}>
            <TextInput placeholder="Détaillez votre demande" />
          </View>

          {/* Second sub section zone */}
          <Text style={styles.sectionTitles}>
            Veuillez préciser votre demande :
          </Text>

          {/*civilite INPUT */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TouchableOpacity onPress={() => setShowOptions2(!showOptions2)}>
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
                placeholder="Civilité"
                value={selectedOption2}
                style={{
                  color: selectedOption2 ? '#000' : '#ccc',
                }}
              />
              <Icon name="arrow-drop-down" size={35} color="#444654" />
            </View>
          </TouchableOpacity>
          {showOptions2 && (
            <View
              style={{
                // remove position: 'absolute',
                backgroundColor: '#fefbe8',
                maxHeight: 160, // or however big you want it
                marginBottom: 10,
                padding: 8,
                elevation: 20,
                borderRadius: 10,
                width: '80%',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              {options2.map((option2, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedOption2(option2);
                    setShowOptions2(false);
                  }}>
                  <Text>
                    {'> '}
                    {option2}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Nom INPUT  */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TextInput
            placeholder="Nom"
            value={Nom}
            onChangeText={text => {
              setNom(text);
              setImportantInput2(text !== '');
            }}
            style={[
              styles.input,
              !ImportantInput2
                ? {borderColor: '#ba0001', borderWidth: 0.6}
                : {},
            ]}
          />
          {!ImportantInput2 && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text
                style={{
                  color: '#ba0001',
                  marginBottom: 10,
                  fontWeight: '300',
                  marginLeft: 30,
                }}>
                Champ obligatoire
              </Text>
            </View>
          )}

          {/* Prenom INPUT  */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TextInput
            placeholder="Prénom"
            value={Prenom}
            onChangeText={text => {
              setPrenom(text);
              setImportantInput3(text !== '');
            }}
            style={[
              styles.input,
              !ImportantInput3
                ? {borderColor: '#ba0001', borderWidth: 0.6}
                : {},
            ]}
          />
          {!ImportantInput3 && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text
                style={{
                  color: '#ba0001',
                  marginBottom: 10,
                  fontWeight: '300',
                  marginLeft: 30,
                }}>
                Champ obligatoire
              </Text>
            </View>
          )}

          {/* Email INPUT  */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TextInput
            placeholder="Email"
            value={Email}
            onChangeText={text => {
              setEmail(text);
              setImportantInput4(text !== '');
            }}
            onBlur={text => {
              setIsEmailValid(isValidEmail(Email) || Email === '');
            }}
            style={[
              styles.input,
              !ImportantInput4
                ? {borderColor: '#ba0001', borderWidth: 0.6}
                : {},
              isEmailValid ? null : styles.inputError,
            ]}
          />

          {!isEmailValid && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={styles.errorText}>Email non valide</Text>
            </View>
          )}
          {!ImportantInput4 && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={styles.errorText}>Champ obligatoire</Text>
            </View>
          )}

          {/* Téléphone INPUT  */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TextInput
            placeholder="Téléphone"
            value={Tel}
            onChangeText={text => {
              setTel(text);
              setImportantInput5(text !== '');
            }}
            onBlur={() => {
              setIsTelValid(isValidPhoneNumber(Tel) || Tel === '');
            }}
            style={[
              styles.input,
              !ImportantInput5
                ? {borderColor: '#ba0001', borderWidth: 0.6}
                : {},
              isTelValid ? null : styles.inputError,
            ]}
          />
          {!isTelValid && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={styles.errorText}>
                Numéro de téléphone non valide
              </Text>
            </View>
          )}
          {!ImportantInput5 && (
            <View style={{justifyContent: 'flex-start'}}>
              <Text
                style={{
                  color: '#ba0001',
                  marginBottom: 10,
                  fontWeight: '300',
                  marginLeft: 30,
                }}>
                Champ obligatoire
              </Text>
            </View>
          )}

          {/* Activité INPUT  */}
          <TextInput placeholder="Activité" style={styles.input} />

          {/* Entreprise INPUT  */}
          <TextInput placeholder="Entreprise" style={styles.input} />

          {/* Dirigeant INPUT  */}
          <TextInput placeholder="Dirigeant" style={styles.input} />

          {/* Third sub section zone */}
          <Text style={styles.sectionTitles}>
            Comment souhaitez-vous que nous répondions à votre demande ?{' '}
          </Text>

          {/*contact option INPUT */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TouchableOpacity onPress={() => setShowOptions3(!showOptions3)}>
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
                placeholder="Choisissez une option"
                value={selectedOption3}
                style={{
                  color: selectedOption3 ? '#000' : '#ccc',
                }}
              />
              <Icon name="arrow-drop-down" size={35} color="#444654" />
            </View>
          </TouchableOpacity>
          {showOptions3 && (
            <View
              style={{
                // remove position: 'absolute',
                backgroundColor: '#fefbe8',
                maxHeight: 160, // or however big you want it
                marginBottom: 10,
                padding: 8,
                elevation: 20,
                borderRadius: 10,
                width: '80%',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              {options3.map((option3, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedOption3(option3);
                    setShowOptions3(false);
                  }}>
                  <Text>
                    {'> '}
                    {option3}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Fourth sub section zone */}
          <Text style={styles.sectionTitles}>
            Partagez avec nous vos disponibilités afin de vous contacter
          </Text>

          {/* Date INPUT */}
          <View
            style={[
              styles.asteriskContainer,
              {justifyContent: 'space-between'},
            ]}>
            <Text>Choisissez une date:</Text>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <View
            style={[
              styles.input,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              style={{width: '28%', color: onDateChange ? '#000' : '#ccc'}}
              value={date.toLocaleDateString()}
              editable={false}
            />
            <TouchableOpacity
              style={styles.iconDateContainer}
              onPress={() => setShowPicker(true)}>
              <IconDate name="calendar" size={24} color="#6bb463" />
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

          {/*Moment de la journee INPUT */}
          <TouchableOpacity onPress={() => setShowOptions4(!showOptions3)}>
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
                placeholder="Moment de la journée"
                value={selectedOption4}
                style={{
                  color: selectedOption4 ? '#000' : '#ccc',
                }}
              />
              <Icon name="arrow-drop-down" size={35} color="#444654" />
            </View>
          </TouchableOpacity>
          {showOptions4 && (
            <View
              style={{
                // remove position: 'absolute',
                backgroundColor: '#fefbe8',
                maxHeight: 160, // or however big you want it
                marginBottom: 10,
                padding: 8,
                elevation: 20,
                borderRadius: 10,
                width: '80%',
                marginHorizontal: 15,
                paddingTop: 20,
              }}>
              {options4.map((option4, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedOption4(option4);
                    setShowOptions4(false);
                  }}>
                  <Text>
                    {'> '}
                    {option4}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/*Champ-obligatoire text*/}
          <Text
            style={{
              fontWeight: 300,
              color: 'red',
              marginLeft: 15,
              marginBottom: 40,
              marginTop: 20,
            }}>
            * Champ obligatoire
          </Text>

          {/*Send zone */}
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              disabled={!isButtonEnabled}
              style={[
                styles.button,
                isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled,
              ]}
              onPress={() => {
                navigation.navigate('Login', { showPopup: true });
              }}>
              <Text style={styles.buttonText}>Envoyer la demande</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    flex: 0.1,
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
    flex: 0.9,
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
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    elevation: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
  },
  asteriskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 15,
    paddingHorizontal: 5,
  },
  asterisk: {
    color: 'red',
  },
  iconDateContainer: {
    padding: 5,
    color: '#6bb463',
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
  errorText: {
    color: '#ba0001',
    marginBottom: 10,
    fontWeight: '300',
    marginLeft: 30,
  },
  button: {
    width: '60%',
    height: 36,
    borderRadius: 25,
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  buttonEnabled: {
    backgroundColor: '#6bb463',
  },
  buttonDisabled: {
    backgroundColor: '#9cb1a3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ContactCDG;
