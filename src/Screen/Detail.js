/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

function Detail({route}) {
  const [isloading, setLoading] = useState(true);
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const setPageLoad = () => {
    setLoading(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1F740E'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '100%',
            height: '7%',
            backgroundColor: '#1F740E',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={{height: 30, width: 30, marginLeft: 10}}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '900'}}>
            {route?.params?.name}
          </Text>
          <Text style={{color: 'white', marginRight: 10}}></Text>
        </View>
        <View renderToHardwareTextureAndroid={true} style={{flex: 1}}>
          <WebView
            source={{uri: route?.params?.link}}
            style={{flex: 1}}
            onLoad={() => setPageLoad()}
            androidHardwareAccelerationDisabled={true}
          />
        </View>
        {isloading && (
          <ActivityIndicator
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            size="large"
            color={'#1F740E'}
          />
        )}
      </View>
    </SafeAreaView>
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
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
});

export default Detail;
