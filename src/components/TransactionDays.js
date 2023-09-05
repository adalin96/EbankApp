import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TransactionDaysItem from './TransactionDaysItem';

const TransactionDays = ({title}) => {
  return (
    <View style={styles.dayContainer}>
      {/* Date de transaction */}

      <View style={styles.mainTextContainer}>
        <Text style={styles.mainTitle}>{title}</Text>
      </View>

      {/* Fin de date */}

      <TransactionDaysItem
        mainTitle="Achat de code"
        secondaryText="code-pen"
        amount={800}
      />
      <TransactionDaysItem
        mainTitle="Reparation PC"
        secondaryText="code-pen"
        amount={100}
      />
      <TransactionDaysItem
        mainTitle="Achat de cours"
        secondaryText="code-pen"
        amount={50}
      />
    </View>
  );
};

export default TransactionDays;

const styles = StyleSheet.create({
  dayContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    marginBottom: 5,
  },

  mainTextContainer: {
    marginTop: 15,
  },

  mainTitle: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});