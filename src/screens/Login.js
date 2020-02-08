import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from '../styles/color';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View styles={styles.wrapper}>
          <ScrollView>
            <Text>Login</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01,
  },
});
