import React, {useState, useCallback, useRef} from 'react';
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

const DashboardComptesEspece = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToDashboardComptesEspece = () => {
    navigation.navigate('DashboardCmptEspc');
  };

  const data = [
    {
      id: '1',
      data: [
        {
          previousBalance: '176 899 839,00',
        },
        {
          previousBalance: '76 786 322,98',
        },
      ],
    },
    {
      id: '2',
      data: [
        {
          previousBalance: '65 554 897,78',
        },
        {
          previousBalance: '78 675,56',
        },
      ],
    },
    {
      id: '3',
      data: [
        {
          previousBalance: '0',
        },
        {
          previousBalance: '176 899 839,00',
        },
      ],
    },
    {
      id: '4',
      data: [
        {
          previousBalance: '65 554 897,78',
        },
        {
          previousBalance: '176 899 839,00',
        },
      ],
    },
  ];

  const flatListRef = useRef(null);

  const handleViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const handlePaginationCirclePress = index => {
    // Step 2: Use scrollToIndex to scroll to the selected item
    flatListRef.current.scrollToIndex({index});
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fafcff'}}>
      <LinearGradient colors={['#519342', '#6ec65a']} style={styles.header}>
        <View style={styles.firstRow}>
          <View style={styles.iconContainer}>
            <IconBell name="bell" size={22} color="#fff" />
          </View>
          <Text style={styles.headerTitle}>Tableau de bord</Text>
          <View style={{width: 45}} />
        </View>
        <View style={styles.secondRow}>
          <TouchableOpacity
            style={styles.buttonEspece}
            onPress={goToDashboardComptesEspece}>
            <Text style={styles.buttonEspeceText}>COMPTES ESPÈCE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTitre}>
            <Text style={styles.buttonTitreText}>COMPTES TITRE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdRow}>
          <Text style={styles.positionText}>
            COMPOSITION DU PORTEFEUILLE VALORISÉ
          </Text>
          <Text style={styles.subPositionText}>TOUS ACTIFS CONFONDUS</Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.bigAmount}>893 721 934,00</Text>
        <View style={styles.smallButton}>
          <Text style={styles.smallButtonText}>MAD</Text>
        </View>
        <Text style={styles.dateText}>POSITION VALORISÉE LE 26/12/2021</Text>
        {/* Pagination Circles */}
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePaginationCirclePress(index)} // Add onPress event
            >
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      index === currentIndex
                        ? '#fff'
                        : 'rgba(255, 255, 255, 0.5)',
                  },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>

      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              paddingBottom: 20,
              paddingTop: 20,
            }}>
            {item.data.map((subItem, index) => (
              <View key={index} style={styles.card}>
                {/* First column */}
                <View style={styles.cardColumn}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}>
                    <Icon name="bank" size={20} color="#63b551" />
                    <Text style={[styles.boldIdText, {marginLeft: 10}]}>
                      IDENTIFIANT CLIENT
                    </Text>
                  </View>
                  <Text style={[styles.thinText, {marginBottom: 20}]}>
                    889885855954485599
                  </Text>
                  <Text style={styles.thinText}>VALORISATION J-1</Text>
                  <Text style={styles.boldText}>{subItem.previousBalance}</Text>
                </View>
                <View style={[styles.cardColumn, {width: 125}]} />
                {/* Second column */}
                <View style={styles.cardColumn}>
                  <View style={[styles.smallOval, {alignSelf: 'flex-end'}]}>
                    <Text style={styles.ovalText}>MAD</Text>
                  </View>
                </View>
              </View>
            ))}
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
    height: '42%',
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
    backgroundColor: 'rgba(120, 180, 110, 1)',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEspeceText: {
    color: '#fff',
    fontWeight: '800',
  },
  buttonTitre: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitreText: {
    fontWeight: '800',
  },
  thirdRow: {
    alignItems: 'center',
    marginTop: 20,
  },
  positionText: {
    fontSize: 12,
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
    alignSelf: 'center',
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
    fontSize: 12,
  },
  dateText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 10,
    elevation: 3,
    maxWidth: '100%',
    alignSelf: 'center',
  },
  cardColumn: {},
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boldIdText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  thinText: {
    fontSize: 15,
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
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 10,
  },
});

export default DashboardComptesEspece;
