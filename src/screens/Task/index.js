import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
const Task = props => {
  const {navigation, route} = props;
  const {item} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskView}>
          <View style={styles.taskTitle}>
            <Text style={styles.taskTitleText}>{item.title}</Text>
          </View>
          <View style={styles.taskDescription}>
            <Text style={styles.taskDescriptionText}>{item.description}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Task;
