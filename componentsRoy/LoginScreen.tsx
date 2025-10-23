import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const createAccount = async () => {
   await fetch('http://192.168.1.5:3000/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, phoneNumber }),
      });
    };

  const checkAccount = async () => {
    await fetch(`http://192.168.1.5:3000/check-account?username=${username}`);
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
