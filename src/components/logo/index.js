import { View, Image } from 'react-native'
import React, { Component } from 'react'

import LogoText from '../../../assets/logoNewtin.png';
import LogoImage from '../../../assets/logo.png';
import styles from './styles'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={LogoText}/>
        <Image source={LogoImage} style={styles.logoImage}/>
      </View>
    )
  }
}