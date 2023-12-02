import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import dictionary from '../database';


export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isSearchPressed: false
    }
  }
  getWord = (word) => {

      var word = dictionary[this.state.text]["word"]
      var definition = dictionary[this.state.text]["definition"]
      var lexicalCategory = dictionary[this.state.text]["lexicalCategory"]

      this.setState({
        "word": word,
        "definition": definition,
        "lexicalCategory": lexicalCategory,
      });

  };

  render() {
    return (
      <SafeAreaProvider>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({
              text: text,
              isSearchPressed: false,
              word: "Loading...",
              lexicalCategory: '',
              examples: [],
              definition: "",
            });
          }}
          value = {this.state.text}
        />
          
        
        <TouchableOpacity style = {styles.searchButton} 
        onPress = {()=>{
          this.setState({ isSearchPressed: true});
          this.getWord(this.state.text)
        }}>
          <Text style = {styles.displayText}>Search</Text>
        </TouchableOpacity>

        <View style = {styles.detailsContainer}>
          <Text style = {styles.detailsTitle}>
              Word: {" "}
          </Text>
          <Text style = {{fontSize: 18}}>
              {this.state.word}
          </Text>
        </View>
        <View style = {styles.detailsContainer}>
          <Text style = {styles.detailsTitle}>
              Type: {" "}
          </Text>
          <Text style = {{fontSize: 18}}>
              {this.state.lexicalCategory}
          </Text>
        </View>
        <View style = {{flexDirection: 'row',flexWrap: 'wrap'}}>
          <Text style = {styles.detailsTitle}>
              Definition: {" "}
          </Text>
          <Text style = {{fontSize: 10}}>
              {this.state.definition}
          </Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create(
  {
  displayText: {
    textAlign: 'center',
    fontSize: 18,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    width: 100,
    height: 30,
    alignSelf: 'center',
    margin: 7,
  },
  inputBox: {
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: 280,
    height: 35,
    borderWidth: 5,
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#ffae42",
  }
  }
)
