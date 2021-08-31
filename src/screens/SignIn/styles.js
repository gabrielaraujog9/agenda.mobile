import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10151C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 264,
    height: 264,
    marginBottom: 64
  },
  login: {
    width: '100%',
    alignItems: 'center'
  },
  login2: {
    width: '70%',
    marginBottom: 21,
    alignItems: 'flex-start'
  },
  login3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    height: 42
  },
  textInput: {
    backgroundColor: '#F6F8FF',
    width: '80%',
    height: 39,
    borderRadius: 25,
    marginBottom: 19,
    fontSize: 16,
    paddingLeft: 56
  },
  Text: {
    color: '#f6f8ff',
    fontSize: 16
  },
  button: {
    width: 104,
    height: 42,
    borderRadius: 10
  }
});
