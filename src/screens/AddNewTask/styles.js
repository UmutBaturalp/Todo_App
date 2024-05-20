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

  taskView: {
    marginTop: windowHeight * 0.05,
    width: windowWidth * 0.9,
    height: windowHeight * 0.7,
    borderWidth: 2,
    borderColor: 'tomato',
    borderRadius: windowWidth * 0.05,
    alignItems: 'center',
  },

  taskTitle: {
    width: windowWidth * 0.8,
    paddingVertical: windowHeight * 0.02,
  },
  taskTitleText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '700',
    color: 'black',
    paddingVertical: windowHeight * 0.01,
  },

  taskTitleInput: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.075,
    borderWidth: 1,
    borderRadius: windowWidth * 0.03,
    color: 'black',
    paddingHorizontal: windowWidth * 0.04,
    textAlignVertical: 'center',
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
  taskDesc: {
    width: windowWidth * 0.8,
    paddingVertical: windowHeight * 0.02,
  },
  taskDescText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '700',
    color: 'black',
    paddingVertical: windowHeight * 0.01,
  },

  taskDescInput: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.3,
    borderWidth: 1,
    borderRadius: windowWidth * 0.03,
    color: 'black',
    paddingHorizontal: windowWidth * 0.04,
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },

  //----------------------------------------------,

  buttonView: {
    width: windowWidth * 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: windowWidth * 0.1,
  },

  button: {
    backgroundColor: 'red',
    width: windowWidth * 0.32,
    height: windowHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
  },
  buttonText: {
    fontSize: windowWidth * 0.045,
    fontWeight: '700',
    color: 'white',
  },
});
