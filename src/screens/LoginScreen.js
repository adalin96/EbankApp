import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LogoSvg from './../../assets/images/LoginSVG.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import TwitterSvg from './../../assets/images/twitterIcon';
import GoogleSvg from './../../assets/images/googleIcon';
import FacebookSvg from './../../assets/images/facebookIcon';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoSvg width={300} height={200} />
      <Text style={styles.title}>LoginScreen</Text>
      {/* email input zone */}
      <View style={styles.inputContainer}>
        <Entypo name="email" size={20} color="#666" style={{marginRight: 5}} />
        <TextInput style={styles.input} placeholder={'Email Address'} />
      </View>
      {/* password input zone */}
      <View style={styles.inputContainer}>
        <MaterialComunity
          name="security"
          size={20}
          color="#666"
          style={{marginRight: 5}}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder={'Password'}
        />
        {/* forgot password button */}
        <TouchableOpacity>
          <Text style={{color: '#0065ff'}}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      {/* login button */}
      <TouchableOpacity style={styles.touchableButton}>
        <Text style={styles.touchableText}>Login</Text>
      </TouchableOpacity>
      {/* easy login secting */}
      <View>
        <Text style={styles.centeredText}>Login with</Text>
      </View>
      <View style={styles.svgRow}>
        <TouchableOpacity style={styles.svgClickable}>
          <GoogleSvg width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgClickable}>
          <TwitterSvg width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.svgClickable}>
          <FacebookSvg width={24} height={24} />
        </TouchableOpacity>
      </View>
      {/* sign up zone */}
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>Not a member? </Text>
        <TouchableOpacity>
          <Text style={{color: '#0065ff', marginLeft: 3}}>Signup now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input: {
    flex: 1,
  },
  touchableButton: {
    marginBottom: 30,
    borderRadius: 5,
    padding: 20,
    backgroundColor: '#0065ff',
  },
  touchableText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  centeredText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  svgClickable: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  svgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default LoginScreen;
