import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useState } from 'react';
import { API_URL } from './config';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const createAccount = async () => {
    await fetch(`${API_URL}/create-account`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, phoneNumber }),
    });
  };

  const checkAccount = async () => {
    const response = await fetch(`${API_URL}/check-account?username=${username}&phoneNumber=${phoneNumber}`);
    const data = await response.json();
    
    if (data.exists) {
      Alert.alert('Account exists');
    } else {
      Alert.alert('Account does not exist');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
      style={styles.input}
      placeholder="Phone Number"
      value={phoneNumber}
      onChangeText={setPhoneNumber}
      />

    <TouchableOpacity style={styles.button} onPress={createAccount}>
      <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={checkAccount}>
      <Text style={styles.buttonText}>Check Account</Text>
    </TouchableOpacity>

  </View>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#56382d',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
