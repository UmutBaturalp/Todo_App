import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.02,
    paddingVertical: windowHeight * 0.01,
    backgroundColor: '#fff',
    borderRadius: windowWidth * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginVertical: windowHeight * 0.01,
  },
  text: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
    color: '#003C43',
  },
  button: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    paddingRight: windowWidth * 0.02,
  },
});
