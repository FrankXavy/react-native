import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TouchableHighlight, Pressable } from 'react-native';
import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.image} source={{uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg"}} />
      <Text>Tenemos aqui la app!</Text>
      <Button
        title="Click me!"
        onPress={() => alert('Button clicked!')}
        color={'#841584'}
        />
      <TouchableHighlight
  onPress={() => alert('Touchable Highlight clicked!')}
        style={{ backgroundColor: '#841584', padding: 10, borderRadius: 5, marginTop: 20 }}
      
        underlayColor="#DDDDDD">
        <Text style={{ color: '#000' }}>Touchable Highlight</Text>
      </TouchableHighlight>
      <Pressable onPress={() => alert('Pressable clicked!')}>
        <Text style={{ color: '#fff', padding: 10, backgroundColor: '#841584', borderRadius: 5, marginTop: 20 }}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 215,
    height: 294,
    borderRadius: 10,
    marginBottom: 20,
  }
});
