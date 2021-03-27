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
        fontSize: 30,
        marginVertical: 10,
        letterSpacing: 2,
        color: Colors.primaryText
    },
    textHeader: {
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 10
    },
    textRow: {
        flexDirection: 'row',
        width: width*3/4,
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
});
export default Layout;