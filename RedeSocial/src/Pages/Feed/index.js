import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import {
  Avatar,
  Container,
  Description,
  Header,
  Loading,
  Name,
  Post,
} from './styles';
import api from '../../Services/api';
import FeedImage from '../../Components/FeedImage';

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
    <Container>
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
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>
            {/* <FeedImage
              aspectRatio={item.aspectRatio}
              smallSource={{ uri: item.image }}
              source={{ uri: item.small }}
            /> */}
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </Container>
  );
}
