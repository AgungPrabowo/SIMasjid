import React, {Component} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import propTypes from 'prop-types';
import colors from '../../styles/color';

export default class RoundedButton extends Component {
  render() {
    const {text, textColor, backgroundColor, icon} = this.props;
    return (
      <TouchableHighlight style={[{backgroundColor}, styles.wrapper]}>
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[{textColor}, styles.buttonText]}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  backgroundColor: propTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: 'flex',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    color: colors.green01,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
