import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Image, Dimensions, TouchableWithoutFeedback, Keyboard } from "react-native";

const initialState = {
    login: "",
    email: "",
    password: ""
}

export default function LogScreen() {

    const [state, setstate] = useState(initialState)

    const submit = () => {
        console.log(state);
        setstate(initialState);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../assets/images/RegScreenBG.jpg")} style={styles.imgBg}>
                <View style={styles.textWrap}>
                    <Image style={styles.avatar} source={require("../assets/images/RegisterAvatar.jpg")}></Image>
                    <Text style={{ color: "#fff", fontSize: 30, color: '#212121', marginBottom: 33, marginLeft: 'auto', marginRight: 'auto', fontWeight: 500, }}>Увійти</Text>
                    <View style={{ gap: 33 }}>
                        <TextInput value={state.email} onChangeText={(value) => setstate((prevState) => ({ ...prevState, email: value }))} style={styles.input} placeholder="Адреса електронної пошти" ></TextInput>
                        <TextInput value={state.password} onChangeText={(value) => setstate((prevState) => ({ ...prevState, password: value }))} style={styles.input} secureTextEntry={true} placeholder="Пароль"></TextInput>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={submit}>
                        <Text style={styles.btnTitle}>Увійти</Text>
                    </TouchableOpacity>
                    <Text style={styles.logInText}>Немає аккаунту? Зареєструватись</Text>
                </View>
            </ImageBackground >
        </View >
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        position: 'absolute',
        top: -60,
        borderRadius: 25,
        left: 145
    },
    kaw: {
        flex: 1
    },
    textWrap: {
        marginTop: 323,
        paddingTop: 92,
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center"
    },
    input: {
        width: 343,
        fontSize: 16,
        color: '#212121',
        padding: 16,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
    },
    imgBg: {
        position: 'absolute',
        right: 0,
        left: 0,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    btn: {
        marginTop: 43,
        height: 51,
        width: 343,
        borderRadius: 25,
        backgroundColor: '#FF6C00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTitle: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    logInText: {
        marginTop: 16,
        fontSize: 16,
        color: '#1B4371'
    }
});

    // const [dimensions, setdimensions] = useState(Dimensions.get('window').width - 18 * 2)

    // useEffect(() => {
    //     const onChange = () => {
    //         const width = Dimensions.get('window').width - 18 * 2;
    //         setdimensions(width)
    //     }
    //     Dimensions.addEventListener('change', onChange)
    //     return Dimensions.removeEventListener('change', onChange)
    // }, [])
