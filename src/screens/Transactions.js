import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TransactionDays from '../components/TransactionDays';

const windowHeight = Dimensions.get('window').height;
const Transaction = () => {
  return (
    <ScrollView style={StyleSheet.root}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerItems}>
          {/* portefeuille zone */}
          <TouchableOpacity style={styles.inactiveItem}>
            <Entypo
              name="wallet"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
            <Text style={styles.headerItemsText}>Portefeuille</Text>
          </TouchableOpacity>

          {/* Historique zone */}
          <TouchableOpacity style={styles.activeItem}>
            <Entypo
              name="list"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
            <Text style={styles.headerInactiveItemsText}>Historique</Text>
          </TouchableOpacity>
        </View>

        {/* Montant zone */}
        <View style={styles.accountView}>
          <FontAwesome
            name="dollar"
            size={30}
            color="#fff"
            style={{marginRight: 5}}
          />

          <Text style={styles.accountText}>2.000.000</Text>
        </View>
      </View>
      {/* Fin de Header */}

      {/* Transaction en fonction du jour */}

      <TransactionDays title="Aujourd'hui" />
      <TransactionDays title="Hier" />
      <TransactionDays title="10 Aout 2021" />
    </ScrollView>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#edf1f2',
  },
  header: {
    backgroundColor: '#154ee7',
    height: windowHeight * 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20,
  },
  headerItems: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeItem: {
    flexDirection: 'row',
    backgroundColor: '#1d50b1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,
  },
  inactiveItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,
  },
  headerItemsText: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },
  headerInactiveItemsText: {
    color: '#eee',
    fontFamily: 'OpenSans-Regular',
  },
  accountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  accountText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
  },


});
