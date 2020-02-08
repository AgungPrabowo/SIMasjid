import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import colors from '../styles/color';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
          <Text style={styles.welcomeText}>Welcome to Fucking Application</Text>
          <RoundedButton
            text="Connect to Facebook"
            textColor={colors.green01}
            backgroundColor={colors.white}
            icon={
              <Icon name="facebook" size={20} style={styles.facebookIcon} />
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.green01,
    flex: 1,
    display: 'flex',
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
});
