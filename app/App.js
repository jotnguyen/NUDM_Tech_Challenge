import React, {Component} from 'react';
import {Text, View , Button} from 'react-native';
import * as d3 from 'd3';
import * as Papa from 'papaparse';
// import neighborhood from './neighborhood_zipcodes.csv';
import * as RNFS from 'react-native-fs';


class HelloReactNative extends Component {
    constructor(props){
      super(props);
      this.state = {
	neighborhood: "lmao"
      }
    }
    parseSQL = () => {
      var mainBundlePath = RNFS.MainBundlePath;
      console.log("dat bundle tho",mainBundlePath)
      RNFS.readDir(mainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
	.then((result) => {
	  console.log('GOT RESULT', result[4]);
	  //	  this.setState({neighborhood: result[4]});
	  return Papa.parse(result[4].path, {
	    download: false,
	    delimiter: '\t',
	    complete: function (results){
	      console.log('ressssults',results);
	    }
	  });
	}).
	then( (result) => {
	  console.log(result);
	})
        .catch(err => console.log("err",err));

      // Papa.parse(mainBundlePath, {
      // 	download: true,
      // 	worker: true, // Don't bog down the main thread if its a big file
      // 	step: function(result) {
      //   // do stuff with result
      // 	},
      // 	complete: function(results, file) {
      //     console.log('parsing complete read', count, 'records.'); 
      // 	}
//    });

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
