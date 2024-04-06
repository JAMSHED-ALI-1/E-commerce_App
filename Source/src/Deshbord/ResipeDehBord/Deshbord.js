import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MEAL_FILTERS } from './Data'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { fatchData } from './Api/RecepieeApi'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

const Deshbord = () => {
    const navigation = useNavigation()
    const [reciepeeData, setreciepeeData] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchData = await fatchData();
                setreciepeeData(fetchData)
                //   console.log(fetchData)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.topView}>
                <Image source={require('../../../Assets/Images/DesbordTop.png')} style={styles.img} />
                <View style={styles.tranparentView}>
                    <Animatable.Text animation={'slideInUp'} style={styles.reciepee}>Reciepee</Animatable.Text>
                    <TouchableOpacity style={styles.searchBox} activeOpacity={.8} onPress={() => navigation.navigate('SearchScreen')}>
                        <Image source={require('../../../Assets/Images/SearchIcon.png')} style={styles.searchIcon} />
                        <Text>Please Search Here</Text>
                    </TouchableOpacity>
                    <Animatable.Text animation={'slideInUp'} style={styles.note}>Search 1000+ recipes easily with one click</Animatable.Text>
                </View>
            </View>
            <Animatable.Text animation={'slideInUp'} style={styles.Heading}>Categories</Animatable.Text>
            <View>
                <FlatList data={MEAL_FILTERS}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.catagoryItem} activeOpacity={.8}>
                                <View style={styles.card}>
                                    <Animatable.Image animation={'slideInUp'} source={item.Icon} style={styles.catagoryIcon} />
                                </View>
                                <Animatable.Text animation={'slideInUp'} style={styles.titletext}>{item.title}</Animatable.Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
            <Text style={styles.Heading}>Trendy Reciepees</Text>
            <View>
                <FlatList horizontal
                    data={reciepeeData}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: 20 }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.recipeeItem}
                                onPress={() => navigation.navigate('DetailReciepee', data = item)}>
                                <Image source={{ uri: item.image }} style={styles.recipeeImage} />
                                <Animatable.View style={[styles.tranparentView, { borderRadius: 15 }]}>
                                    <Animatable.Text animation={'slideInUp'} style={styles.recipeeLabel}>{item.name}</Animatable.Text>
                                    <Animatable.Text animation={'slideInUp'} style={[styles.recipeeLabel, { color: '#03fc24', position: 'absolute', bottom: 15 }]}>
                                        Price: {100}
                                    </Animatable.Text>

                                </Animatable.View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Deshbord

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    topView: {
        width: '100%',
        height: '40%'
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    tranparentView:
    {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',

    },


    searchBox: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: 'White',
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginTop: 50,
    },
    searchIcon: {
        height: 25,
        width: 25
    },
    reciepee: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: 60,
        left: 20,
        fontWeight: '600'
    },
    note: {
        fontSize: 18,
        color: '#fff',
        width: '90%',
        alignSelf: 'center',
        alignSelf: 'center',
        fontWeight: '600',
        marginTop: 20
    },
    Heading: {
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 20,
        marginTop: 20,
        color: 'black'

    },
    catagoryItem: {
        width: 150,
        height: 150,
        alignItems: "center"

    },
    card: {
        marginTop: 10,
        width: '80%',
        height: '70%',
        shadowColor: "rgba(0,0,0,.5)",
        shadowOpacity: 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    catagoryIcon: {
        height: 60,
        width: 60,

    },
    titletext: {
        fontSize: 20,
        color: '#111',

    },
    recipeeItem: {
        width: 160,
        height: 200,
        marginLeft: 20,
        borderRadius: 15
    },
    recipeeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 15
    },
    recipeeLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        width: '90%'
    }
})