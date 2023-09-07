import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EyeIcon from 'react-native-vector-icons/FontAwesome';
import QuestionIcon from 'react-native-vector-icons/Ionicons';
import EnvelopeIcon from 'react-native-vector-icons/Ionicons';
import LockIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation, route}) {
  //this is used for when the user is in a UI that had a button "Envoyer Demande"
  const {showPopup} = route.params || {};

  useEffect(() => {
    const loadUserId = async () => {
      const savedUserId = await AsyncStorage.getItem('userId');
      if (savedUserId) {
        setUserId(savedUserId);
      }
    };
    loadUserId();
    //this is used for when the user is in a UI that had a button "Envoyer Demande"
    if (showPopup) {
      Alert.alert(
        'Succès',
        'Demande envoyée',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  }, [showPopup]);

  const toggleSwitch = async () => {
    setSwitchEnabled(!isSwitchEnabled);

    try {
      // Retrieve the existing IDs from storage
      const storedIds = await AsyncStorage.getItem('userIds');
      let userIdsArray = storedIds ? JSON.parse(storedIds) : [];

      if (!isSwitchEnabled) {
        // Add new userId to the array and save it back to storage
        userIdsArray.push(userId);
        await AsyncStorage.setItem('userIds', JSON.stringify(userIdsArray));
      } else {
        // Remove userId from array and save it back to storage
        userIdsArray = userIdsArray.filter(id => id !== userId);
        await AsyncStorage.setItem('userIds', JSON.stringify(userIdsArray));
      }

      return userIdsArray; // return the array of stored IDs
    } catch (error) {
      console.error('An error occurred while updating storage:', error);
      return null; // In case of an error, you could return null or an empty array
    }
  };

  const [enteredId, setEnteredId] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const handleLogin = () => {
    if (enteredId === '889885855954485599' && enteredPassword === '1234') {
      // Navigate to Dashboard
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid ID or password');
    }
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isSwitchEnabled, setSwitchEnabled] = useState(false);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [firstInputValid, setFirstInputValid] = useState(true);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [savedUserId, setSavedUserId] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#6ec65a', '#509141']}
        style={styles.linearGradient}>
        <Text style={styles.title}>CDG CAPITAL V1</Text>

        <View style={styles.container}>
          <Text style={styles.subtitle}>
            Une banque novatrice et engagée, porteuse de solutions utiles et
            efficientes.
          </Text>
          <View style={{height: 70}} />
          <TextInput
            placeholder="Saisissez votre identifiant client"
            value={userId}
            onChangeText={text => {
              setUserId(text);
              setFirstInputValid(text !== '');
              setShowSuggestions(text.length > 0);
            }}
            style={[
              styles.input,
              {width: '100%'},
              !firstInputValid
                ? {borderColor: '#ba0001', borderWidth: 0.95}
                : {},
            ]}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {/* {showSuggestions && (
            <ScrollView
              style={{maxHeight: 100, borderWidth: 1, borderColor: 'grey'}}>
              <View style={{backgroundColor: 'white'}}>
                {savedUserId.map((id, index) => (
                  <Text
                    key={index}
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: 'grey',
                    }}
                    onPress={() => {
                      setUserId(id);
                      setShowSuggestions(false);
                    }}>
                    {id}
                  </Text>
                ))}
              </View>
            </ScrollView>
          )} */}

          {!firstInputValid && (
            <Text
              style={{
                color: '#ba0001',
                marginBottom: 25,
                marginRight: 200,
                fontWeight: 300,
              }}>
              Champ obligatoire
            </Text>
          )}
          <View style={styles.inputWithIcon}>
            <TextInput
              secureTextEntry={!isPasswordVisible}
              placeholder="Saisissez votre nouveau code secret"
              onChangeText={text => setPassword(text)}
              style={(styles.input, {width: '90%'})}
            />
            {/* Insert your icon to toggle password visibility here */}
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <EyeIcon
                name={isPasswordVisible ? 'eye' : 'eye-slash'}
                size={20}
                color="#333440"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.whiteText}>MÉMORISER MON IDENTIFIANT</Text>
            <Switch
              value={isSwitchEnabled}
              onValueChange={toggleSwitch}
              trackColor={{true: 'green', false: '#e5e4e2'}}
              thumbColor={isSwitchEnabled ? 'white' : 'white'}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: userId && password ? 'white' : '#7eba70'},
            ]}
            onPress={() => {
              if (userId && password) {
                if (
                  (userId === '889885855954485599' && password === '1234') ||
                  (userId === 'TestId1' && password === '1234')
                ) {
                  // Navigate to DashboardComptesClient
                  navigation.navigate('DashboardCmptEspc');
                } else {
                  alert('Invalid ID or password');
                }
              } else {
                alert('Both fields are required');
              }
            }}
            disabled={!userId || !password}>
            <Text>ACCÉDER À MES COMPTES</Text>
          </TouchableOpacity>

          <View style={styles.line} />
          <Text style={[styles.whiteText, {marginBottom: 10}]}>
            AVEZ-VOUS BESOIN D'ASSISTANCE?
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('FirstTimeInquiry');
            }}>
            <View style={styles.iconContainer}>
              <QuestionIcon name="help-circle-outline" size={19} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.buttonText}>
                S'AUTHENTIFIER POUR LA PREMIÈRE FOIS
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ModifierMdpInquiry');
            }}>
            <View style={styles.iconContainer}>
              <LockIcon name="lock-closed-outline" size={18} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.buttonText}>
                RÉINITIALISER VOTRE CODE SECRET
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('ContactCDG');
            }}>
            <View style={styles.iconContainer}>
              <EnvelopeIcon name="mail-outline" size={18} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.buttonText}>CONTACTER CDG CAPITAL</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.footerText}>© 2022 CDG CAPITAL. ALL RIGHTS</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 90,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  container: {
    height: '80%',
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  switchContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  whiteText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    height: 36,
    borderRadius: 25,
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  textContainer: {
    flex: 2.7,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
  line: {
    width: '30%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 40,
  },
  footerText: {
    fontSize: 10,
    color: 'white',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
