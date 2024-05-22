import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const TodoItem = props => {
  const {item, onPress, navigation, route} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Task', {item: item});
      }}
      style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}>
        <Text
          style={[styles.button, {color: item.completed ? 'red' : 'green'}]}>
          {item.completed ? 'Undo' : 'Complete'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoItem;
