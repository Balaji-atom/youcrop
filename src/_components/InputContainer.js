// src/screens/sinup/PersonalInformation.js

import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';

class InputContainer extends React.Component {
  render() {
    const {
      placeholder,
      leftIcon,
      label,
      onFocus,
      onChangeText,
      keyboardType,
      secureTextEntry,
      multiline,
      value,
    } = this.props;
    return (
      <Input
        placeholder={placeholder}
        leftIcon={leftIcon}
        label={label}
        labelStyle={[styles.labelStyle, multiline && {marginBottom: 5}]}
        inputContainerStyle={
          ([styles.inputContainerStyle],
          multiline ? {height: 70, marginTop: -15} : {height: 34})
        }
        inputStyle={styles.inputStyle}
        leftIconContainerStyle={styles.leftIconContainerStyle}
        containerStyle={styles.containerStyle}
        onFocus={onFocus}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline ? true : false}
        value={value}
      />
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    textTransform: 'uppercase',
    fontSize: RFValue(10),
    fontWeight: '300',
    color: 'rgba(85, 85, 85, 0.6)',
  },
  inputStyle: {
    fontSize: RFValue(14),
  },
  inputContainerStyle: {
    alignItems: 'flex-start',
    borderColor: '#00A410',
  },
  leftIconContainerStyle: {
    marginLeft: 0,
    marginRight: 10,
    paddingBottom: 5,
  },
  containerStyle: {
    paddingHorizontal: 0,
  },
});

export default InputContainer;
