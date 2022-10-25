import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import api from '../../Services/api';
import { styles } from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  async function loadPage() {
    setLoading(true);
    const { data } = await api.get('/feed?_expand=author');
    setLoading(false);
    setFeed(data);
  }

  useEffect(() => {
    loadPage();
  }, []);

  const refreshList = () => {
    setRefresh(true);
    loadPage();
    setRefresh(false);
  };

  return (
    <View>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={(item) => String(item.id)}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refresh}
        ListFooterComponent={loading && <ActivityIndicator />}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={styles.header}>
              <Image
                style={styles.image}
                source={{ uri: item.author.avatar }}
              />
              <Text style={styles.name}>{item.author.name}</Text>
            </View>
            <ImageBackground
              style={styles.feedImage}
              smallSource={{ uri: item.small }}
              source={{ uri: item.image }}
              resizeMode="contain"
              blurRadius={3}
            />
            <View style={styles.description}>
              <Text style={styles.description}>
                <Text style={styles.description}>{item.author.name}</Text>{' '}
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
