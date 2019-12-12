import React from 'react';
import { View ,ScrollView,Button} from 'react-native';
import {Text} from 'native-base';

import {connect} from 'react-redux'
import Action from './Redux/actions/Action'
class CounterApp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      // counter:0
    }
  }
  // incearseNumber=()=>{
  //   this.setState({
  //     counter:this.state.counter+1
  //   }, ()=>{
  //     console.log(this.state.counnter)
  //   })
  //   }
  //   decNumber=()=>{
  //     this.setState({
  //       counter:this.state.counter-1
  //     })
  //     }
  render() {
    // const {counter}=this.state;
    return (
      <ScrollView>      
      <View style={{flex: 1, flexDirection: 'column',marginTop:'15%',}}>
        <Button onPress={()=>{this.props.incrementCounter()}}  title ='increase' style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <Text style={{marginTop:'20%',paddingBottom:'30%',fontSize:100,paddingLeft:'35%'}}>{this.props.counter}</Text>
        <Button onPress={()=>{this.props.decrementCounter()}} title ='Decrease' style={{width: 50, height: 50, backgroundColor: 'orange'}} />
      </View>
         
      </ScrollView>

    );
  }
}
function mapDispatchToProps(dispatch){
  return{
    incrementCounter: ()=> dispatch(Action.increment()),
     decrementCounter: ()=> dispatch(Action.decrement()),

  }
}
function mapStateToProps(state){
  console.log('state',state)
  return{
     counter:state.Increment+state.Decrement
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CounterApp);


