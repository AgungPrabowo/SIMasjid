import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from '../styles/color';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import {apiLogin} from '../api/login';

export default class Login extends Component {
  handleEmailChange = email => {
    // parent class change handler is always called with field name and value
    this.setState({email: email});
  };
  handlePasswordChange = password => {
    // parent class change handler is always called with field name and value
    this.setState({password: password});
  };

  state = {
    email: '',
    password: '',
  };

  render() {
    const {email, password} = this.state;

    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.avoidView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText={'EMAIL ADDRESS'}
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handleEmailChange}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{marginBottom: 30}}
              onChangeText={this.handlePasswordChange}
            />
          </ScrollView>
          <NextArrowButton
            handleNextButton={apiLogin.bind(
              this,
              this.state.email,
              this.state.password,
            )}
          />
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
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
});
