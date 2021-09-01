import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Text, View, Button, Image, TextInput } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/schedule.png';

export function ForgotPassword() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.login}>
        <Text style={styles.Text}>Esqueceu a senha?</Text>
        <TextInput
          style={styles.textInput}
          textContentType="newPassword"
          placeholder="Email"
        />

        <View style={styles.button}>
          <Button title="Próximo" />
        </View>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}
