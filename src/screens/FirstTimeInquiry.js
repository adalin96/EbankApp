// FirstTimeInquiry.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SMS from '../../assets/images/sms.svg'
import Pwd from '../../assets/images/password.svg'
import UserAuth from '../../assets/images/Friend_authentication.svg'
const FirstTimeInquiry = ({navigation}) => {
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
        <Text style={styles.topText}>
          S'authentifier pour la première fois ?
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/*Connexion zone */}
        {/* First Row - Human Shield Icon */}
        <UserAuth height={40} width={40}/>
        {/* Second Row - "Connexion" Text */}
        <Text style={styles.connexionText}>Connexion</Text>
        {/* Third Row - Number Icon and Info Text */}
        <View style={styles.rowWithIcon}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <Text style={styles.connexionInstrution}>
            Renseignez votre identifiant client et code secret temporaire et
            cliquez sur le button  {'« accéder à mes comptes »'}
          </Text>
        </View>
        {/* Fourth Row - Separator Line */}
        <View style={styles.separatorLine} />
        {/*CodeConfirmation zone */}
        {/* First Row - Human Shield Icon */}
        <SMS width={43} height={43} marginTop={15} marginBottom={10}/>

        {/* Second Row - "Connexion" Text */}
        <Text style={styles.connexionText}>Code de confirmation par SMS</Text>
        {/* Third Row - Number Icon and Info Text */}
        <View style={styles.rowWithIcon}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <Text style={styles.connexionInstrution}>
            Renseignez le code de 4 chiffres envoyé par SMS au numéro de
            téléphone associé au compte
          </Text>
        </View>
        <View style={styles.rowWithIcon}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>2</Text>
          </View>
          <Text style={[styles.connexionInstrution, {marginTop: 6}]}>
            Si vous n'avez pas reçu de code, vous avez la possibilité de générer
            un autre code
          </Text>
        </View>
        {/* Fourth Row - Separator Line */}
        <View style={styles.separatorLine} />
        {/*ModificationCode zone */}
        {/* First Row - Human Shield Icon */}
        <Pwd width={50} height={50} />
        {/* Second Row - "Connexion" Text */}
        <Text style={styles.connexionText}>
          Modification du code secret temporaire
        </Text>
        {/* Third Row - Number Icon and Info Text */}
        <View style={styles.rowWithIcon}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <Text style={styles.connexionInstrution}>
            Saisissez votre nouveau code secret composé de 8 caractéres
            alphanumériques
          </Text>
        </View>
        <View style={styles.rowWithIcon}>
          <View style={styles.numberCircle}>
            <Text style={styles.numberText}>2</Text>
          </View>
          <Text style={[styles.connexionInstrution, {marginTop: 6}]}>
            {
              "Aprés lecture des mentions légales, cochez « J'ai lu et 2 j'accepte les mentions légales » ainsi que « Je ne suis pas un robot », puis cliquez sur « Confirmer »"
            }
          </Text>
        </View>
      </View>

      {/*Understood zone */}
      <View style={{flex: 0.08, alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text>J'ai compris</Text>
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
    justifyContent: 'space-evenly',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  arrowIcon: {
    color: '#6bb463',
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30363a',
    marginLeft: 15,
  },
  mainContent: {
    flexDirection: 'column',
    flex: 0.84,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30,

  },
  shieldIcon: {
    color: '#6bb463',
  },
  connexionText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#232426',
    marginBottom: 15,
  },
  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '100%',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  connexionInstrution: {
    fontSize: 15,
    marginLeft: 10,
    textAlign: 'justify',
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#d6d7d9',
    marginTop: 20,
  },
  numberCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#ffd74f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 12,
    color: '#ffffff',
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

export default FirstTimeInquiry;
