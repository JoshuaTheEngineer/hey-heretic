import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const TitleScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Hey Heretic!</Text>
                <Button
                    title={"Index"}
                    onPress={() => navigation.navigate('Index')}
                />
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

export default TitleScreen;