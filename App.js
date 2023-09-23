import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { useState } from 'react';
import Cnttxt from "./components/cnttxt.js"

export default function App() {
  
  // Use State returns an array with two parts: a state variable and a way to update the state variable
  const [val, ch] = useState(0);
  const [error, er] = useState("");

  function incr() {
    ch(val+1);
    er("");
  }
  function decr() {
    if (val) {ch(val-1); er("");}
    else er("0 is the minimum!");
  }
  function res() {
    ch(0);
    er("");
  }
  // Make a decrease button (cannot be < 0)
  // Make a reset button
  // Try out app on phone
  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>{val}</Text> */}
      <Cnttxt color="blue" fontSize={100} margin={100}>
        {val}
      </Cnttxt>


      <Pressable style={styles.bt}> 
        <Button onPress={incr} title={"Increase"}/> 
      </Pressable>
      <Pressable style={styles.bt}> 
        <Button onPress={decr} title={"Decrease"}/> 
      </Pressable>
      <Pressable style={styles.bt}> 
        <Button onPress={res} title={"Reset"}/> 
      </Pressable>
      <Text style={styles.errorr}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bt: {
    margin: 10,
  },
  errorr: {
    paddingTop: 50,
    textAlign: 'center',
    color: 'red',
    fontSize: '40',
    fontWeight: 'bold',
  },
});
