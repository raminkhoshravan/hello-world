import { StyleSheet, PixelRatio } from 'react-native';
const styles = StyleSheet.create({
    buttonContainer: {
        height: 45, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        marginBottom: 20, width: 250, borderRadius: 30, alignSelf: 'center',
    },
    sideMenuContainer: {
        width: '100%',
        // height: '100%',
        flex:1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        paddingTop: 20,
      },
      sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 150 / 2,
      },
    logo: {
        color: 'white', fontSize: 50, fontFamily: 'slm'

    },
    listItem: {
        flex: 1, width: '100%', fontFamily: 'sans', padding: 10, marginBottom: 5, backgroundColor: '#eee', flexDirection: 'row', justifyContent: 'flex-end',
    },
    txt1: {
        flex: 1, fontFamily: 'sans', paddingRight: 5, marginRight: 5, borderRightWidth: 1, borderRightColor: '#c5cae9', justifyContent: 'center',

    },
    titleContainer: {
        flexDirection: 'row'
    },
    items: {
        flexDirection: 'row', width: '100%', justifyContent: 'flex-end', flex: 1, borderRadius: 20, marginLeft: 5, marginRight: 5,
        backgroundColor: '#FFFF'
    },
    item_1: {
        direction: 'rtl',
        flex: 1, borderRadius: 15, margin: 2
    },
    textinput_1: {
        flex: 1, direction: 'rtl',
        width: '100%', fontFamily: 'sans',
        // backgroundColor: '#fafafa',
        borderRadius: 15, paddingVertical: 1, paddingHorizontal: 5
    },
    ImageContainer: {
        borderRadius: 10, margin: 5, shadowOffset: { width: 0, height: 9 }, shadowColor: '#000', shadowOpacity: 0.50,
        shadowRadius: 12.35,
        width: 50, height: 80, borderColor: 'red', borderWidth: 1 / PixelRatio.get(), justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#f5a106',

    },
    image: {
        width: '100%', height: 200,
    },
    body: {
        marginBottom: 10, padding: 10, paddingTop: 0
    },
    renttitle: {
        width: '100%', fontFamily: 'sans', padding: 10, marginBottom: 5, backgroundColor: '#f5a106', flexDirection: 'row', justifyContent: 'flex-end',
    },
    renttitletxt: {
        color: '#FFFF', fontFamily: 'sans', flex: 1, paddingRight: 5, marginRight: 5, borderRightWidth: 1, borderRightColor: '#ffe082', justifyContent: 'center',
    },
    buttonImage: {
        width: 40, height: 25
    },
    loginButton: {
        backgroundColor: "#ffab00",
    },
    container: {
        flex: 1, backgroundColor: null,
        alignItems: 'center', justifyContent: 'center',     // backgroundColor: '#DCDCDC',
    },
    container1: {
        flex: 1, justifyContent: 'flex-start',
    },
    container2: {
        flex: 1, justifyContent: 'flex-start', backgroundColor: '#FFFFFF',
    },
    container3: {
        backgroundColor: '#fff', overflow: 'hidden'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: null,
        padding: 100
    },
    
    inputContainer: {
        borderBottomColor: '#F5FCFF', backgroundColor: '#FFFFFF', borderRadius: 30, borderBottomWidth: 1,
        width: 250, height: 45, marginBottom: 10, flexDirection: 'row', alignItems: 'center'
    },
    inputs1: {
        borderRadius: 20, backgroundColor: '#FFFF', fontFamily: 'sans', color: 'grey'
    },
    inputs1_2: {
        borderRadius: 20, backgroundColor: '#FFFF', fontFamily: 'sans',
    },
    inputs: {
        height: 45, marginHorizontal: 6, borderBottomColor: '#FFFFFF', flex: 1,
    },
    inputIcon: {
        width: 30, height: 30, marginRight: 15, justifyContent: 'center'
    },
    loginText: {
        color: 'white', fontFamily: 'sans',
    },
    button: {
        alignItems: 'center', justifyContent: 'center', margin: 5, padding: 5, backgroundColor: '#f5a106', borderRadius: 15,

    },
    button3: {
        flex: 1, alignItems: 'flex-end', justifyContent: 'center',
    },
    title: {
        flex: 1, padding: 10, color: '#f5a106', fontWeight: 'bold'
    },
    texttitle: {
        flex: 1, justifyContent: 'flex-end', fontFamily: 'sans', color: '#9e9e9e', marginRight: 15,
    },
    button2: {
        flex: 1, margin: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 15,

    },
    itemtext: {
        justifyContent: 'flex-end', fontFamily: 'sans', marginRight: 10,
    },
    footer: {
        alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', backgroundColor: '#424242',
    },
    footer1: {
        alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#424242',
    },
    viewcity: {
        borderBottomColor: '#F5FCFF', backgroundColor: '#FFFFFF', borderRadius: 30, borderBottomWidth: 1,
        width: 250, height: 45, marginBottom: 10,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})
export default styles;