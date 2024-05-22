import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
const TaskList = prop => {
  const {data, onPress, navigation} = prop;
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) =>
          item.completed === false ? (
            <TodoItem navigation={navigation} item={item} onPress={onPress} />
          ) : null
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
