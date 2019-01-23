import React, {Component} from 'react';
import {Text, View , Button} from 'react-native';
import * as d3 from 'd3';

class HelloReactNative extends Component {
    constructor(props){
      super(props);
      this.state = {
	neighborhood: "lmao"
      }
    }
    parseSQL = () => {
      //console.log(hoodDate);
      // d3.csvParse("/neighborhood_zipcodes.csv").
      // 	then((data) => {
      // 	  console.log('test')
      // 	  this.setState({neighborhood: data})
      // 	}).
      // 	catch((err) => {console.log(err)});
      
    }
  showSchools = () => {
    // return (<li> test </li>)
  }
  render() {
    return (
      <View>
        <Text>
          If you like React, you'll also like React Native.
        </Text>
        <Text>
          Instead of 'div' and 'span', you'll use native components
          like 'View' and 'Text'.
        </Text>
	
	<Button
          onPress={this.parseSQL}
          title="grab schools"
	/>
	<Text>
	{this.state.neighborhood}
	</Text>
      </View>
    );
  }
}

export default HelloReactNative;
