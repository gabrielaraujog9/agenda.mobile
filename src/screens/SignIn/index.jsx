import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import logo from '../../assets/schedule.png';

export function SignIn({ navigation }) {
  // const [showPass, setShowPass] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={logo} />
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.Text}>Esqueci minha senha!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login3}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.Text}>Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <Button title="Entrar" color="#2672DE" />
        </View>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}
