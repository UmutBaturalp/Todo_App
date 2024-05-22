import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;
import {Icons} from '../../assets';
const Header = props => {
  const {title, isHome, navigation} = props;
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.a}>
          {isHome ? null : (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.backIcon} source={Icons.back} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.a}></View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight * 0.1,
    backgroundColor: '#003C43',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: windowWidth * 0.05,
    borderBottomRightRadius: windowWidth * 0.05,
    paddingHorizontal: windowWidth * 0.05,
  },
  headerText: {
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    color: '#E3fEF7',
  },
  a: {
    width: windowWidth * 0.1,
  },
  backIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    tintColor: '#E3fEF7',
  },
});
