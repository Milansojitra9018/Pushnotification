/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { requestUserPermission, NotificationListener } from './src/utils/pushnotification_helper';
import { Text, View } from 'react-native';

const App = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, [])
  return(
    <View style={{alignSelf:'center',flex:1,justifyContent:'center'}}>
      <Text style={{fontWeight: 'bold',}}>Push Notification Tester</Text>
    </View>
  )
}

export default App;
