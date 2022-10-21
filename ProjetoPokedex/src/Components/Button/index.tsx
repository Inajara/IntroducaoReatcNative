import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

type Props = {
  title: string;
}

export default function Button({title}: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
