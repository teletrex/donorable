import React from 'react';
import styleguide from "../../styles/styleguide";
import {View, StyleSheet} from "react-native";


export default function HR() {
  const styles = StyleSheet.create(styleguide)
  return <View style={styles.hr}/>
}
