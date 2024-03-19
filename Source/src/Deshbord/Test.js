import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList, Button } from 'react-native';
import CommonHeader from '../Component/CommonHeader';
import axios from 'axios';
import TestHeade from '../Component/TestHeade';
import { useNavigation } from '@react-navigation/native';
import { addToCat } from '../../../Redux/Action';
const { width: Width, height: Height } = Dimensions.get('window');

const Test = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([]);

    const ApiData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            setData(res.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ApiData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity style={styles.cardContainer}>
                    <Image
                        source={{ uri: item.thumbnail ? item.thumbnail : item.image }}
                        style={{
                            height: Height * 0.1,
                            width: Width * 0.15,
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={styles.headingtext}>{item.title.length > 10 ? item.title.substring(0, 10) + ".." : item.title}</Text>
                    <Text style={styles.text}>{`$${item.price}`}</Text>

                </TouchableOpacity>
                <Button title='Buy' />
            </>
        );
    }

    return (
        <View style={styles.container}>
            <TestHeade />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

export default Test;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headingtext: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        marginLeft: 10,
        fontSize: 14,
    },
});
