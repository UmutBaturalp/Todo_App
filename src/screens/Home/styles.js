import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#cee',
    alignItems: 'center',
  },

  //----------------------------------------------

  taskView: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderRadius: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.01,
    alignItems: 'center',
  },
  taskTitle: {
    width: windowWidth * 0.9,
    paddingTop: windowHeight * 0.025,
    paddingBottom: windowHeight * 0.005,
    paddingHorizontal: windowWidth * 0.02,
  },
  taskTitleText: {
    fontSize: windowWidth * 0.045,
    color: 'black',
    fontWeight: '600',
  },

  addButton: {
    position: 'absolute',
    bottom: windowHeight * 0.03,
    right: windowWidth * 0.05,
    backgroundColor: 'tomato',
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.1,
  },
  addIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    tintColor: '#cee',
  },
  line: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.001,
    backgroundColor: 'black',
    marginVertical: windowHeight * 0.01,
  },
});
