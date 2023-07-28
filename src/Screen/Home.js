/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {VolumeManager} from 'react-native-volume-manager';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const socket = new WebSocket('ws://192.168.18.241:40510');

function Home(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.Image} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{paddingBottom: '40%'}}
          onPress={() =>
            navigation.navigate('Detail', {
              name: 'Είσοδος / Εγγραφή',
              link: 'https://erasitexniki.inale.gr/wp-login.php',
            })
          }>
          <Image
            source={require('../assets/btn.png')}
            style={{height: 150, width: 250}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={styles.bottomSection}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                navigation.navigate('Detail', {
                  name: 'Η Έρευνα',
                  link: 'https://erasitexniki.inale.gr/app/research.html',
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/icon-01.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Η Έρευνα</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                navigation.navigate('Detail', {
                  name: 'Αποτελέσματα',
                  link: 'https://erasitexniki.inale.gr/app/results.html',
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/icon-02.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Αποτελέσματα</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                navigation.navigate('Detail', {
                  name: 'Επικοινωνία',
                  link: 'https://erasitexniki.inale.gr/app/contact.html',
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/icon-03.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Επικοινωνία</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.row, {marginTop: 20}]}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                navigation.navigate('Detail', {
                  name: 'Δηλώστε Συμμετοχή',
                  link: 'https://erasitexniki.inale.gr/wp-login.php?action=register',
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/icon-04.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text} numberOfLines={2}>
                  Δηλώστε{'\n'}Συμμετοχή
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                navigation.navigate('Detail', {
                  name: 'Τρόπος Διεξαγωγής',
                  link: 'https://erasitexniki.inale.gr/app/how-to.html',
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/icon-05.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Τρόπος{'\n'}Διεξαγωγής</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              onPress={() =>
                navigation.navigate('Detail', {
                  name: 'Ποιοι Είμαστε',
                  link: 'https://erasitexniki.inale.gr/app/faq.html',
                })
              }>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../assets/new-icon-06.png')}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Ποιοι{'\n'}Είμαστε</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    // remove width and height to override fixed static size
  },
  Image: {
    width: '94%',
    height: 100,
    marginLeft: 10,
    // marginRight: 20,
    resizeMode: 'contain',
    marginTop: '20%',
  },

  bottomSection: {
    position: 'absolute',
    bottom: '5%',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },
  icon: {height: 40, width: 40, tintColor: 'white'},
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    alignItems: 'center',
    fontSize: 13,
    textAlign: 'center',
  },
  Button: {justifyContent: 'center', flex: 1},
});

export default Home;
