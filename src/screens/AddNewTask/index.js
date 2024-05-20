import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Header} from '../../components';
const AddNewTask = props => {
  const {navigation} = props;
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  console.log(newTaskTitle);
  console.log(newTaskDesc);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="ADD NEW TASK" isHome={false} navigation={navigation} />
        <View style={styles.taskView}>
          <View style={styles.taskTitle}>
            <Text style={styles.taskTitleText}>Title</Text>
            <TextInput
              onChangeText={text => setNewTaskTitle(text)}
              placeholder="Enter Your Task Title"
              style={styles.taskTitleInput}
            />
          </View>
          <View style={styles.taskDesc}>
            <Text style={styles.taskDescText}>Description</Text>
            <TextInput
              onChangeText={text => setNewTaskDesc(text)}
              textAlignVertical="top"
              placeholder="Enter Your Task Description"
              style={styles.taskDescInput}
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                console.log('clicked cancel');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
                console.log('clicked add new task');
                // BURAYA TODO EKLEME YAPILACAK
              }}
              style={[styles.button, {backgroundColor: 'green'}]}>
              <Text style={styles.buttonText}>Add New Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNewTask;
