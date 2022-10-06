import React from 'react';
import { Image, View, Text } from 'react-native';

import Logo from '../../assets/butterfly-logop.jpg';
import { styles } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.text}>BeautiflyMedia</Text>
    </View>
  );
}
