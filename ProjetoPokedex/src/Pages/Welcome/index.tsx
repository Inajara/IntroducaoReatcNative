import React from 'react';
import {View, Text} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

import {styles} from './styles';
import pokemonAnimation from './pokemon.json';
import Button from '../../Components/Button';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AnimatedLottieView
          style={styles.animacao}
          autoPlay
          source={pokemonAnimation}
          loop
        />
        <Text style={styles.texto}>Welcome to the Pokedex</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Button title="Let's Begin"/>
        </View>
      </View>
    </View>
  );
}
