import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GoScreen from './screens/GoScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import db from /config.js

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  GoScreen: GoScreen,
})

var all students = []

var class a data.val().class_A; for (var i in class_a) ( all students.push(class a[i]);
}
all students.sort (function(a, b) { return a.roll_no - b.roll_no;
});
this.setState({ all students: all students });

});
updateAttendence(roll_no, status) {

var id = '';

if (roll_no <= 9) {

id = '0' + roll_no;

} else {

id= roll_no;

}

var today = new Date();

var dd = today.getDate();

var mm today.getMonth() + 1;

var yyyy = today.getFullYear();

if (dd < 10) { 
  dd = + dd;

if (mm < 10) (

mm = '0' + mm;

today dd+-+ var ref_path = id; 
var class ref = db.ref(ref_path); 
class_ref.update(

[today]: status,


const AppContainer = createAppContainer();