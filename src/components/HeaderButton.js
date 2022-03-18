import React from 'react';
import {Text, StyleSheet, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderButton = props => {
  //   console.log(props.iconType);
  return (
    <View>
      <Icon onPress={props.selectedBtn} name={props.iconType} size={23} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeaderButton;
