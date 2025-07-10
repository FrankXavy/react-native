import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,   } from 'react-native';
import icon from './assets/icon.png';
import { useEffect, useState } from 'react';
import { getPersonajes } from './lib/rickyMorty';
import { ScrollView } from 'react-native-web';
import { Constants } from 'expo-constants';

export default function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
      console.log("Fetching latest games...");
      getPersonajes().then((data) => {
        setPersonajes(data);
        console.log("personajes:", data);
      });
    }, []);

   
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
        <ScrollView>
        {personajes.map((character) => (
          <View key={character.id} style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.species}>{character.species}</Text>
            <Text style={styles.status}>{character.status}</Text>
            <Text style={styles.gender}>{character.gender}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 12,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
    color:'#fff',
  },
  species: {
    fontSize: 16,
    color: '#fff',
  },
  status: {
    fontSize: 16,
    color: '#33caff', 
  },
  gender: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }, 
})
