import { Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'

const button = ({iconName,title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
    <AntDesign name={iconName} size={24} color="#CDCDCD" />
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default button