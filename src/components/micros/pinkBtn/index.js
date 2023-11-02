import { Text, TouchableOpacity, Platform, StyleSheet } from "react-native";

export const PinkButtonComponent = ({ btnText, goToPage }) => {
    return (
        <TouchableOpacity onPress={goToPage} style={styles.btn} >
            <Text style={styles.btnTxt}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#FCCCD4",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#6C0434",
        paddingTop: 9,
        paddingBottom: 9,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: .5,
                shadowRadius: 4,
            },
            android: {
                elevation: 8,
            },
        }),
    marginTop: 10,
    marginBottom: 10
    },
    btnTxt: {
        textAlign: "center",
        color: "#6C0434",
        fontWeight: 400,
        fontSize: 18
    }
})
