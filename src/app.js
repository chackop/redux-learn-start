import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet, helloAction } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0
    // };
    // this.onPressIncrement = this.onPressIncrement.bind(this);
    // this.onPressDecrement = this.onPressDecrement.bind(this);
    // this.onPressClear = this.onPressClear.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  // onPressIncrement() {
  //   this.setState({ count: this.state.count + 1 });
  // }

  // onPressDecrement() {
  //   this.setState({ count: this.state.count - 1 });
  // }

  // onPressClear() {
  //   this.setState({ count: 0 });
  // }

  onChangeText(number) {
    const count = parseInt(number);
    // this.setState({ count });
    this.props.counterSet(count);
  }

  render() {
    console.log(this.props);
    const { helloText, pressedButton } = this.props.hello;
    const { container, countViewStyle, welcome } = styles;
    return (
      <View style={container}>
        <TextInput
          style={{ width: 40, height: 40, borderWidth: 1 }}
          onChangeText={this.onChangeText}
          value={this.props.count.toString()}
        />
        <View style={countViewStyle}>
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={welcome}>
            {/* {this.state.count} */}
            {this.props.count}
          </Text>
          <Button onPress={this.props.counterDecrement} title="-" />
        </View>
        <Button onPress={this.props.counterClear} title="Clear" />
        <Text>
          {helloText}
        </Text>
        <Text>
          Did you press button ? {pressedButton.toString()}
        </Text>
        <Button onPress={this.props.helloAction} title="Button to press" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});

function mapStateToProps(state) {
  return {
    count: state.count,
    hello: state.hello
  };
}

export default connect(mapStateToProps, { counterIncrement, counterDecrement, counterClear, counterSet, helloAction })(App);
