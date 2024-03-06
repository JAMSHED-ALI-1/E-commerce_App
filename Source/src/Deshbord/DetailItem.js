import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import CommonHeader from '../Component/CommonHeader';
import { COLORS } from '../Theme/Colors';
import CommonButton from '../Component/CommonButton';
import { useRoute } from '@react-navigation/native';

const DetailItem = ({ route }) => {
    const { item } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: item.thumbnail ? item.thumbnail : item.image }} style={styles.image} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.textHeading}>
                        {item.title.length > 10
                            ? item.title.substring(0, 10) + '\n'
                            : item.title
                        }
                    </Text>
                    <View style={styles.ratingContainer}>
                        <Image source={require('../../Assets/Images/Star.png')} style={styles.starIcon} />
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>4.5</Text>
                    </View>
                </View>
                <Text style={[styles.textHeading, { marginTop: 10, color: COLORS.blue }]}>{`$${item.price}`}</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.textHeading}>Description</Text>
                <Text style={{ fontSize: 14, marginTop: 10 }}>{item.description}</Text>
                <Text style={styles.textHeading}>Size</Text>
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                    <TouchableOpacity>
                        <Text style={styles.size}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.size}>11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.size}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.size}>14</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <CommonButton title={'Buy Now'} bgColor={COLORS.blue} />
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailItem;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.white
    },
    image: {
        height: 300, // Adjust the height as necessary
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        resizeMode:'contain'
    },
    content: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    starIcon: {
        height: 20,
        width: 20,
        marginRight: 5,
    },
    textHeading: {
        fontSize: 20,
        color: COLORS.black,
        fontWeight: 'bold',
        marginTop: 10
    },
    size: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: COLORS.secondry,
        borderRadius: 10,
        borderWidth: 0.5
    }
});
