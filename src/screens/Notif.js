import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    type: 'INSUFFISANCE PROVISION ESPÈCE',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 2 heures',
  },
  {
    id: '2',
    type: 'INSUFFISANCE PROVISION TITRES',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 3 heures',
  },
  {
    id: '3',
    type: 'INSUFFISANCE PROVISION ESPÈCE',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 1 jour',
  },
  {
    id: '4',
    type: 'CHANGEMENT DE STATUT',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 2 jours',
  },
  {
    id: '5',
    type: 'INSUFFISANCE PROVISION ESPÈCE',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 3 jours',
  },
  {
    id: '6',
    type: 'INSUFFISANCE PROVISION TITRES',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 4 jours',
  },
  {
    id: '7',
    type: 'CHANGEMENT DE STATUT',
    operation: 'Achat contre paiement',
    isin: 'SONASID (MA0000010019)',
    time: 'Il y a 5 jours',
  },
];

const NotificationItem = ({item}) => (
  <TouchableOpacity style={styles.notificationContainer}>
    <View style={styles.notificationHeader}>
      <Text style={styles.notificationType}>{item.type}</Text>
    </View>
    <Text style={styles.notificationDetails}>Operation: {item.operation}</Text>
    <Text style={styles.notificationDetails}>
      Designation ISIN: {item.isin}
    </Text>
    <Text style={styles.notificationTime}>{item.time}</Text>
  </TouchableOpacity>
);

const Notif = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => {
            navigation.navigate('DashboardCmptEspc');
          }}>
          <Icon name="arrow-back" size={24} color="#6bb463" />
        </TouchableOpacity>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>Centre de notifications</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <FlatList
          data={notifications}
          renderItem={({item}) => <NotificationItem item={item} />}
          keyExtractor={item => item.id}
        />
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
    flex: 0.07,
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
    paddingLeft: 3,
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#30363a',
    marginRight: 60,
  },
  mainContent: {
    flexDirection: 'column',
    flex: 0.93,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  notificationContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 1, // for Android shadow
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  notificationType: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6bb463',
  },
  notificationDetails: {
    fontSize: 14,
    color: '#555',
  },
  notificationTime: {
    fontSize: 12,
    color: '#2b7bd8',
    marginTop: 8,
  },
});
export default Notif;
