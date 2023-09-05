import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconBell from 'react-native-vector-icons/MaterialCommunityIcons';

const Dashboard = ({navigation}) => {
  const data = [
    {
      id: '1',
      previousBalance: '176 899 839,00',
      currentBalance: '176 899 893,00',
    },
    {
      id: '2',
      previousBalance: '76 786 322,98',
      currentBalance: '56 787 446,00',
    },
    {
      id: '3',
      previousBalance: '65 554 897,78',
      currentBalance: '676 565 553,00',
    },
    {
      id: '4',
      previousBalance: '78 675,56',
      currentBalance: '756 643,07',
    },
    {
      id: '5',
      previousBalance: '0',
      currentBalance: '0',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fafcff'}}>
      <LinearGradient colors={['#519342', '#6ec65a']} style={styles.header}>
        <View style={styles.firstRow}>
          <View style={styles.iconContainer}>
            <IconBell name="bell" size={22} color="#fff" />
          </View>
          <Text style={styles.headerTitle}>Tableau de bord</Text>
          <View style={{width: 45}}/>
        </View>
        <View style={styles.secondRow}>
          <TouchableOpacity style={styles.buttonEspece}>
            <Text style={styles.buttonEspeceText}>COMPTES ESPÈCE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTitre}>
            <Text style={styles.buttonTitreText}>COMPTES TITRE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdRow}>
          <Text style={styles.positionText}>POSITION ESPÈCE CONSOLIDÉE</Text>
          <Text style={styles.subPositionText}>HORS DEVISES ÉTRANGÈRES</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.bigAmount}>163 659 565,26</Text>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallButtonText}>MAD</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>SOLDE ARRÊTÉ LE 27/12/2021</Text>
        {/* Pagination Circles */}
        <View style={styles.pagination}>
          <View style={styles.translucentCircle} />
          <View style={styles.whiteCircle} />
        </View>
      </LinearGradient>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            {/* First column */}
            <View style={styles.cardColumn}>
              <Icon name="bank" size={24} color="#63b551" />
              <Text style={styles.boldText}>IDENTIFIANT CLIENT</Text>
              <Text style={styles.thinText}>889885855954485599</Text>
              <Text style={styles.thinText}>SOLDE DU MOIS PRÉCÉDENT</Text>
              <Text style={styles.mediumText}>{item.previousBalance}</Text>
            </View>
            {/* Second column */}
            <View style={styles.cardColumn}>
              <View style={styles.smallOval}>
                <Text style={styles.ovalText}>MAD</Text>
              </View>
              <Text style={styles.thinText}>SOLDE DU MOIS EN COURS</Text>
              <Text style={styles.boldText}>{item.currentBalance}</Text>
            </View>
          </View>
        )}
      />

      {/* Footer Information */}
      <View style={styles.footer}>
        <Icon name="info-circle" size={20} color="#eebb68" />
        <Text style={styles.footerText}>
          Toutes les informations affichées sont soumises à l'accord de CDG
          Capital et ne représentent pas un engagement de comptabilisation
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '48%',
    paddingTop: 20,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  iconContainer: {
    backgroundColor: '#48883C',
    width: 32,
    height: 32,
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  buttonEspece: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEspeceText: {
    color: '#485465',
    fontWeight: '800',
  },
  buttonTitre: {
    backgroundColor: 'rgba(120, 180, 110, 1)',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitreText: {
    color: '#fff',
    fontWeight: '800',
  },
  thirdRow: {
    alignItems: 'center',
    marginTop: 20,
  },
  positionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '800',
  },
  subPositionText: {
    fontSize: 12,
    color: '#fff',
  },
  separator: {
    height: 1,
    width: '10%',
    backgroundColor: '#fff',
    marginVertical: 10,
    alignSelf: 'center'
  },
  bigAmount: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallButton: {
    backgroundColor: 'rgba(120, 200, 110, 1)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 12
  },
  dateText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 20,
    padding: 20,
    elevation: 3
  },
  cardColumn: {
    justifyContent: 'space-between',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  thinText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 18,
  },
  smallOval: {
    backgroundColor: '#eef6ec',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  ovalText: {
    color: '#000',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
  whiteCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  translucentCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 5,
  },
  footerText: {
    fontSize: 11,
    textAlign: 'center',
  },
});

export default Dashboard;
