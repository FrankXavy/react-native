import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  } from 'react-native';
import { Main } from './components/Main';
import LogoReact from './components/LogoReact';


export default function App() {


  return (
    
      <View style={styles.container}>
        
        <StatusBar style="auto" />
        <LogoReact style={styles.logo}/>
        <Main />
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
  logo: {
    backgroundColor: '#333',
    padding: 20,
  }
})
