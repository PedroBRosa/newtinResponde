import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';

const statusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default statusBar;
