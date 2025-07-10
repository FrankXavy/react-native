import { Image, StyleSheet, Text, View,   } from 'react-native';
import { useEffect, useState } from 'react';
import { getPersonajes } from '../lib/rickyMorty';
import { ScrollView } from 'react-native-web';
import { CharacterCard } from './CharacterCard';


export function Main() {

  const [personajes, setPersonajes] = useState([]);
  
  useEffect(() => {
      getPersonajes().then((data) => {
        setPersonajes(data);
      });
    }, []);

   
  return (
    <>
        <ScrollView>
        {personajes.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
