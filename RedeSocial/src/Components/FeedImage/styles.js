import { Image, ImageBackground } from 'react-native';
import styled from 'react-native-styled-components';

export const Small = styled(ImageBackground, {
  width: '100%',
  background: '#eee',
  aspectRatio: `${(props) => props.aspect}`,
});
export const Original = styled(Image, {
  width: '100%',
  aspectRatio: `${(props) => props.aspect}`,
});
