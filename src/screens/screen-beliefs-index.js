import { SafeAreaView, StyleSheet, Text, View, SectionList, Button } from "react-native";

import CHURCH from '../data/church-teachings-on-jesus.json';
import HERESIES from '../data/heresies.json';

const DATA = [
    {
      "title" : "Heresies",
      "data" : Object.keys(HERESIES)
    },
    {
      "title" : "Catholic Church Teachings",
      "data" : Object.keys(CHURCH)
    }
]

const Item = ({ title, navigation }) => {
    return (
      <View style={styles.item}>    
        <Button
          title={title}
          onPress={() => {
            if (HERESIES[title]) {
                return navigation.navigate('Heresy', { meaning: HERESIES[title]["belief"], church: HERESIES[title]["church"] })
            } else {
                return navigation.navigate('Church', { meaning: CHURCH[title]["belief"], church: CHURCH[title]["church"] })
            }
          }}
        />
      </View>
    )
}

const IndexScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} navigation={navigation} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    )
}

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

export default IndexScreen;