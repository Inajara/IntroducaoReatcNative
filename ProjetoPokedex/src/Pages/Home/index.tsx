import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import api from '../../Services/api';

export default function Home() {
  useEffect(() => {
    async function listaPokemon() {
      const response = await api.get(`/pokemon`);
      //const {results} = response.data;
      console.log(response.data);
    }
    listaPokemon()
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
