import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();
    console.log('constructor called');
    this.state = {
      counter: 0,
    };
  }
  update = () => {
    console.log('update called');
    this.setState({ counter: this.state.counter + 1 });
  };

  reset = ()=>{
    this.setState({counter:0})
  }
  componentWillMount(){
    console.log("component will mount called")
  }
  componentDidMount(){
    console.log("componentDidMount called")
    //setInterval(this.update,2000)
  }
  componentDidUpdate(){
     console.log(" componentDidUpdate called")
  }

  componentWillUpdate(){
     console.log(" componentWillUpdate called")
  }

  render() {
    console.log("render called")
    return (
      <View style={stylesheet.viewstyling}>
        <Text style={stylesheet.headingstyling}>
          {' '}
          React Native LifeCycle Methods{' '}
        </Text>
        <View style={{ marginTop: 45 }}>
          <Card style={stylesheet.cardstyling}>
              <Text
                style={{ marginTop:11,marginBottom:8, fontWeight: 'bold',textAlign:'center' }}>
                {this.state.counter}
              </Text>
              <View style={{marginTop:10,marginBottom:6}}><Button color="green" title="update" onPress={this.update} /></View>
              <View><Button color='red' title="reset" onPress={this.reset} /></View>
    
          </Card>
        </View>
      </View>
    );
  }
}

const stylesheet = StyleSheet.create({
  viewstyling: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#ededed',
  },

  headingstyling: {
    marginTop: 7,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardstyling: {
    padding: 4,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
    height: 135,
    alignItems: 'center',
  },
});
