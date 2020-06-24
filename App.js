import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Components/Card'

class App extends Component {
  render() {
  return(
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <Card />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App