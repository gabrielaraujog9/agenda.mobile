import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';
import { styles } from './styles';
export function SignIn() {
  // const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('/Users/Araújo/Desktop/reactnative/mobile/assets/schedule.png')}
        />
      </View>
      <View style={styles.login}>
        <TextInput
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          secureTextEntry={true}
          textContentType="password"
          placeholder="Password"
          style={styles.textInput}
        />
      </View>
      <View style={styles.login2}>
        <Text style={styles.Text}>Esqueci minha senha!</Text>
      </View>
      <View style={styles.login3}>
        <Text style={styles.Text}>Cadastre-se</Text>
        <View style={styles.button}>
          <Button title="Entrar" color="#2672DE" />
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
