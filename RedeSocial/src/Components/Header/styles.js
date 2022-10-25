import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'serif',
    color: 'purple',
    margin: 10,
  },
  image: {
    maxHeight: 45,
    maxWidth: 200,
  },
});
