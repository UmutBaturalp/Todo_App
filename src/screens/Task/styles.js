import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {Contans} from '../../assets';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#135D66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: '#003C43',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  backButton: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
  },
  taskView: {
    rowGap: windowWidth * 0.05,
  },
  taskTitleText: {
    fontSize: windowWidth * 0.06,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  taskTitle: {
    backgroundColor: '#003C43',
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowWidth * 0.02,
    borderRadius: windowWidth * 0.03,
  },
  taskDescriptionText: {
    fontSize: windowWidth * 0.05,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  taskDescription: {
    backgroundColor: '#003C43',
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowWidth * 0.02,
    borderRadius: windowWidth * 0.03,
  },
});
