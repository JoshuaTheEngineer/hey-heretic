import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const ChurchScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Church Stance</Text>
                <Text>{ route.params.meaning }</Text>
                <Text>More Details</Text>
                <Text>{ route.params.church }</Text>
            </View>
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

export default ChurchScreen;