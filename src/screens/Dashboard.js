import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
// import AntDesign from './../../assets/images/walletIcon';
import {Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowHeight = Dimensions.get('window').height;

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* header that shows cash or securities */}
      <View style={styles.header}>
        <View style={styles.headerItems}>
          {/* portefeuille zone */}
          <TouchableOpacity style={styles.activeItem}>
            <Entypo
              name="wallet"
              size={20}
              color="#fff"
              style={{marginRight: 5}}
            />
            <Text style={styles.headerItemsText}>Portefeuille</Text>
          </TouchableOpacity>

          {/* Historique zone */}
          <TouchableOpacity style={styles.inactiveItem}>
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

      {/* the actions at the top */}
      <View style={styles.topActionsContainer}>
        <View style={styles.topCard}>
          <View style={styles.topCardRow}>
            {/* deposer */}
            <TouchableOpacity style={styles.topCardRowItem}>
              <AntDesign name="pluscircleo" size={20} color="#0e39c8" />
              <Text style={styles.topActionsText}>Deposer</Text>
            </TouchableOpacity>
            {/* retirer */}
            <TouchableOpacity style={styles.topCardRowItem}>
              <AntDesign name="minuscircleo" size={20} color="#0e39c8" />
              <Text style={styles.topActionsText}>Retirer</Text>
            </TouchableOpacity>
            {/* echange */}
            <TouchableOpacity style={styles.topCardRowItem}>
              <FontAwesome name="exchange" size={20} color="#0e39c8" />
              <Text style={styles.topActionsText}>Echnager</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* My accounts zone */}
      <View style={styles.myAccountContainer}>
        <Text style={styles.myAccountText}> Vos Comptes</Text>
      </View>

      {/* account list zone */}
      <View>
        <TouchableOpacity style={styles.accountList_item}>
          <View style={styles.accountList_item_image_text}>
            <Image
              source={require(`C:\\Users\\nada\\pureReactNativeProjects\\Ebank\\EbankMobileApp\\assets\\images\\placeholder.png`)}
              style={{width: 80, height: 80}}
            />
            <View>
              <Text style={styles.account_libelle}>Nom du compte</Text>
              <Text>Description du compte</Text>
            </View>
          </View>

          <AntDesign name="arrowright" size={20} color="#153ee7" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountList_item}>
          <View style={styles.accountList_item_image_text}>
            <Image
              source={require(`C:\\Users\\nada\\pureReactNativeProjects\\Ebank\\EbankMobileApp\\assets\\images\\placeholder.png`)}
              style={{width: 80, height: 80}}
            />
            <View>
              <Text style={styles.account_libelle}>Nom du compte</Text>
              <Text>Description du compte</Text>
            </View>
          </View>

          <AntDesign name="arrowright" size={20} color="#153ee7" />
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <TouchableOpacity style={styles.createAccountContainer_icon_text}>
            <AntDesign
              name="plus"
              size={20}
              color="#edf1f2"
              style={{marginRight: 5}}
            />
            <Text>Ajouter un compte</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dernieres Transactions */}

      <View style={styles.accountTextContainer}>
        <Text style={styles.accountTextContainer_text}>
          Dernières Transactions
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}> Paiement</Text>
            <Text>3000 $</Text>
          </View>

          <AntDesign name="arrowright" color="#154ee7" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}> Paiement</Text>
            <Text>3000 $</Text>
          </View>

          <AntDesign name="arrowright" color="#154ee7" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}> Paiement</Text>
            <Text>3000 $</Text>
          </View>

          <AntDesign name="arrowright" color="#154ee7" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.lastTransactionItem}>
          <View>
            <Text style={styles.lastTransactionItem_text}> Paiement</Text>
            <Text>3000 $</Text>
          </View>

          <AntDesign name="arrowright" color="#154ee7" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
  topActionsContainer: {
    left: 0,
    right: 0,
    height: 90,
    marginTop: -45,
  },
  topCard: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 4,
    flexDirection: 'row',
    alignContent: 'center',
  },
  topCardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topCardRowItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topActionsText: {
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },
  myAccountContainer: {
    padding: 15,
    marginTop: 15,
  },
  myAccountText: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },
  accountList_item: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accountList_item_image_text: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  account_libelle: {
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
  },

  createAccountContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  createAccountContainer_icon_text: {
    borderWidth: 1,
    borderColor: '#edf1f2',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 30,
  },

  lastTransactionItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#edf1f2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  lastTransactionItem_text: {
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    color: '#000',
  },
});

export default Dashboard;
