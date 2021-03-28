import { Dimensions, Platform, StyleSheet } from "react-native";
import Colors from "./Colors";
const { height, width } = Dimensions.get('window');

const Layout = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        ...Platform.select({
            ios: {},
            android: {}
        })
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 'auto'
    },
    paddingSmall: {
        padding: 10,
    },
    padding: {
        padding: 25,
    },
    marginSmall: {
        padding: 10,
    },
    margin: {
        padding: 25,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 1.5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginVertical: 10,
        letterSpacing: 2,
        color: Colors.secondaryText,
        padding: 5,
    },
    textHeader: {
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 10
    },
    textRow: {
        flexDirection: 'row',
        width: width * 3 / 4,
        marginVertical: 5
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        margin: 10
    },
    button: {
        marginRight: 10
    },
    width: width,
    height: height,
    headerText: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: 'left',
        color: Colors.white,
        marginVertical: 10,
    },
    textInput: {
        borderWidth: 0,
        marginVertical: 8,
        padding: 8,
        borderRadius: 5,
        width: width - 75,
        borderColor: Colors.grey,
        backgroundColor: Colors.white,
        fontSize: 14
    },
    landingButton: {
        width: width - 75,
        backgroundColor: Colors.white,
        color: Colors.red,
        borderRadius: 8,
        //height: 25,
        fontSize: 18,
        fontWeight: "600",
    },
    inverseButton: {
        width: width - 75,
        backgroundColor: Colors.red,
        color: Colors.white,
        borderRadius: 8,
        //height: 25,
        fontSize: 18,
        fontWeight: "600",
    },
});
export default Layout;