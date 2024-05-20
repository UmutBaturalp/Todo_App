import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Header, TodoItem, TaskList, CompletedList} from '../../components';
import {Icons} from '../../assets';
import {todoData} from '../../assets/Contans';
const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="TODO APP" isHome={true} navigation={navigation} />
        <View style={styles.taskTitle}>
          <Text style={styles.taskTitleText}>YOUR TASKS</Text>
        </View>
        <View style={styles.taskView}>
          <TaskList data={todoData} />
        </View>
        <View style={styles.line}></View>
        <View style={styles.taskTitle}>
          <Text style={styles.taskTitleText}>COMPLETED</Text>
        </View>
        <View style={styles.taskView}>
          <CompletedList data={todoData} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewTask')}
          style={styles.addButton}>
          <Image source={Icons.plus} style={styles.addIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
