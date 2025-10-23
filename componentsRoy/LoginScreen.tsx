import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
      />

      <TextInput
      style={styles.input}
      placeholder="Phone Number"
      />

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Create Account</Text>
    </TouchableOpacity>
  </View>
);

}

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
