import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Login } from '../../Redux/features/AuthSlice'; // Import your Redux action
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LoginTest = () => {
    // States for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation=useNavigation()

    // Redux hooks
    const dispatch = useDispatch();
    const { userData, isLoading, isSuccess, isError } = useSelector(state => state.auth); // Select data from the Redux store
useEffect(()=>{
    if (isSuccess) {
        navigation.navigate('Test'); // Replace 'NextScreen' with the name of the next screen
    } 
}, [isSuccess, navigation])
    // Function to handle login
    const handlingLogin = () => {
        // Create parameters object to pass to the login action
        const params = {
            username: email,
            password: password,
        };
        // Dispatch the login action with the parameters
        console.log(params)
        dispatch(Login(params));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                value={email}
                placeholder="Enter Email"
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="grey"
                autoCapitalize="none"
            />
            <TextInput
                value={password}
                placeholder="Enter Password"
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="grey"
                secureTextEntry // Hide the password input
            />
            <TouchableOpacity style={styles.btn} onPress={handlingLogin}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 36,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Add some bottom margin for spacing
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'coral',
        paddingHorizontal: 20,
        marginBottom: 20, // Add some bottom margin for spacing
    },
    btn: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginTest;
