import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
const CompletedList = prop => {
  const {data, onPress, navigation} = prop;
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) =>
          item.completed === true ? (
            <TodoItem navigation={navigation} onPress={onPress} item={item} />
          ) : null
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CompletedList;

const styles = StyleSheet.create({});
