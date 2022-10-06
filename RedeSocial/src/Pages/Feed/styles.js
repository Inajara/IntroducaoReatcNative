import { ActivityIndicator, Image, Text, View } from 'react-native';
import styled from 'react-native-styled-components';

export const Container = styled(View, {});
export const Post = styled(View, {
  marginTop: 10,
});
export const Header = styled(View, {
  padding: 15,
  flexDirection: 'row',
  alignItems: 'center',
});
export const Avatar = styled(Image, {
  width: 32,
  height: 32,
  borderRadius: 16,
  marginRight: 10,
});
export const Name = styled(Text, {
  fontWeight: '600',
});
export const Description = styled(Text, {
  padding: 15,
  lineHeight: 18,
});
export const Loading = styled(ActivityIndicator, {
  size: 'small',
  color: '#999',
  margin: 30,
});
