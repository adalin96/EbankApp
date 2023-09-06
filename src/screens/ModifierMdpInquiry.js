/* eslint-disable prettier/prettier */
// FirstTimeInquiry.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModifierMdpInquiry = ({navigation}) => {
  const [IdentifiantClient, setIdentifiantClient] = useState('');
  const [ImportantInput1, setImportantInput1] = useState(true);
  const [Nom, setNom] = useState('');
  const [ImportantInput2, setImportantInput2] = useState(true);
  const [Prenom, setPrenom] = useState('');
  const [ImportantInput3, setImportantInput3] = useState(true);
  const [Email, setEmail] = useState('');
  const [ImportantInput4, setImportantInput4] = useState(true);
  const [Tel, setTel] = useState('');
  const [ImportantInput5, setImportantInput5] = useState(true);

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
        IdentifiantClient !== '' &&
        Nom !== '' &&
        Prenom !== '' &&
        Email !== '' &&
        isEmailValid &&
        Tel !== '' &&
        isTelValid
    );
  }, [IdentifiantClient, Nom, Prenom, Email, Tel, isTelValid, isEmailValid]);

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity style={{marginRight: 5}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Icon name="arrow-back" size={24} color="#6bb463"/>
        </TouchableOpacity>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>Réinitialiser votre code secret temporaire</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View
          contentContainerStyle={{
            paddingHorizontal: 10,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={styles.bigTitleContainer}>
            <Text style={styles.bigTitle}>
            Pour réinitialiser votre code secret, veuillez renseigner le formulaire ci-dessous.
            </Text>
          </View>

          {/* MainContent sub section */}

          <Text style={styles.smallerTitle}>
          Laissez-nous vos coordonnées pour que nous puissions vous contacter.          </Text>

          
          {/* IdentifiantClient INPUT  */}
          <View style={styles.asteriskContainer}>
            <Text style={styles.asterisk}>*</Text>
          </View>
          <TextInput
            placeholder="Identifiant Client"
            value={IdentifiantClient}
            onChangeText={text => {
              setIdentifiantClient(text);
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
        </View>
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
    justifyContent: 'flex-start',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    paddingLeft: 3
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30363a',
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
  smallerTitle: {
    textAlign: 'center',
    fontSize: 15,
    color: '#808185',
    marginVertical: 20,
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
  errorText: {
    color: '#ba0001',
    marginBottom: 10,
    fontWeight: '300',
    marginLeft: 30,
    paddingBottom: 20
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

export default ModifierMdpInquiry;
