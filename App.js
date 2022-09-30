import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Button, Alert } from "react-native";

import BELIEFS from './src/data/beliefs.json';
import HERESIES from './src/data/heresies.json';

const Item = ({ title }) => (
  <View style={styles.item}>    
    <Button
      title={title}
      onPress={() => {
        let msg;
        if (HERESIES[title]) {
          msg = `HERESY: ${HERESIES[title]["meaning"]}\nCHURCH: ${HERESIES[title]["church"]}`;
        } else {
          msg = title;
        }
        return Alert.alert(msg);
      }}
    />
  </View>
)

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={BELIEFS}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;