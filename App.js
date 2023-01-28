import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text,View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>Smart Home V1.0</Text>
      <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1218148871/vector/smart-home-emblem-for-digital-technologies-vector-illustration-eps-10.jpg?s=612x612&w=0&k=20&c=XBQEUXQu4VQhH6G-JgjGwUTiHsNqsL1UdA4PGWbvPig=',
          }}
          style={{width: 200, height: 200}}
        />
      <Button
        onPress={() => {
          console.log('You tapped the button!');
        }}
        title="Login"
        color="#701809"
      />


      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    justifyContent: 'center',
    padding: 2,
  },
});
