import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const TodoItem = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <Text
          style={[styles.button, {color: item.completed ? 'red' : 'green'}]}>
          {item.completed ? 'Undo' : 'Complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
