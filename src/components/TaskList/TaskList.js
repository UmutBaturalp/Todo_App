import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
const TaskList = prop => {
  const {data} = prop;
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) =>
          item.completed === false ? <TodoItem item={item} /> : null
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({});
