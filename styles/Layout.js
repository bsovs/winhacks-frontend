import {Dimensions, Platform, StyleSheet} from "react-native";

const {height, width} = Dimensions.get('window');

const Layout = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        ...Platform.select({
            ios: {},
            android: {}
        })
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
    text: {
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 15
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