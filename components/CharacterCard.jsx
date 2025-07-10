import { View, StyleSheet, Text, Image } from 'react-native';

export function CharacterCard({ character }) {
  // This component receives a character object as a prop and displays its details
  return (
    <View key={character.id} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.title}>{character.name}</Text>
      <Text style={styles.species}>{character.species}</Text>
      <Text style={styles.status}>{character.status}</Text>
      <Text style={styles.gender}>{character.gender}</Text>
    </View>
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
