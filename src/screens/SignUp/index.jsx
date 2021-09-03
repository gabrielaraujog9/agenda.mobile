import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { styles } from './styles';
import logo from '../../assets/schedule.png';
import Svg1 from '../../assets/schedule.svg';

export function SignUp() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (passwordConfirm != password) {
      return Alert.alert(
        'Senha incompatível',
        'Digite senha iguais nos campos',
        [<Button title="0k" />]
      );
    }
    //Logica backend para salvar dados do cadastro
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.login}>
        <Text style={styles.Text}>Criar conta</Text>
        <TextInput
          style={styles.textInput}
          textContentType="emailAddress"
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          textContentType="password"
          secureTextEntry={true}
          placeholder="Crie uma senha"
          onChangeText={setPassword}
        />
        <TextInput
          secureTextEntry={true}
          textContentType="newPassword"
          style={styles.textInput}
          placeholder="Confirme sua senha"
          onChangeText={setPasswordConfirm}
        />
        <View style={styles.button}>
          <Button title="Cadastre-se" color="#2672DE" onPress={handleSubmit} />
        </View>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}
