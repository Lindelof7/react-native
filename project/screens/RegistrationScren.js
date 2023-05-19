import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Image } from "react-native";

export default function RegistrationScreen() {
    return (
        <ImageBackground source={require("../assets/images/RegScreenBG.jpg")} style={styles.imgBg}>
            <KeyboardAvoidingView
                behavior={
                    Platform.OS == 'ios' ? 'padding' : '100'
                }
                keyboardVerticalOffset={200}
            >
                <View style={styles.textWrap}>

                    <Image style={styles.avatar} source={require("../assets/images/RegisterAvatar.jpg")}></Image>
                    <Text style={{ color: "#fff", fontSize: 30, color: '#212121', marginBottom: 33, marginLeft: 'auto', marginRight: 'auto' }}>Реєстрація</Text>
                    <View style={{ gap: 33 }}>
                        <TextInput style={styles.input} placeholder="Логін"></TextInput>
                        <TextInput style={styles.input} placeholder="Адреса електронної пошти"></TextInput>
                        <TextInput style={styles.input} secureTextEntry={true} placeholder="Пароль"></TextInput>
                    </View>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnTitle}>Зареєструватись</Text>
                    </TouchableOpacity>
                    <Text style={styles.logInText}>Вже є аккаунт? Увійти</Text>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground >
    )
};
const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        backgroundColor: '#fff',
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
        marginTop: 263,
        paddingTop: 92,
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: "center"
    },
    input: {
        fontSize: 16,
        color: '#212121',
        padding: 16,
        width: 343,
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
        justifyContent: 'flex-end',
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
