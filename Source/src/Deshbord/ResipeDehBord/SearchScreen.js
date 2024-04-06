import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SearchApi } from './Api/RecepieeApi';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { CUISINE_FILTERS, DIET_FILTERS, DISH_FILTERS } from './Data';
const SearchScreen = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [Showdata, setData] = useState('');
    const [showModal, setshowModal] = useState(false)
const [selectedDish,setselectedDish]=useState('')
const [selectedCusine,setselectedCusine]=useState('')
const [selectedDiet,setselectedDiet]=useState('')





    const searchApi = async () => {
        try {
            if (search.trim() !== '') { // Check if search is not empty
                const response = await SearchApi({ search });
                // console.log(response);
                setData(response);
            }
        } catch (error) {
            console.log(error);
        }
    };
    //       useEffect(()=>{
    // searchApi()
    //       },[])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <TouchableOpacity style={styles.backbtn} onPress={() => navigation.goBack()} animation={'slideInUp'}>
                <Image source={require('../../../Assets/Images/Right.png')} style={styles.backImage} />
            </TouchableOpacity>
            <View style={styles.search}>
                <Image source={require('../../../Assets/Images/SearchIcon.png')} style={styles.cearchIcon} />
                <TextInput placeholder='Search Recipe' style={styles.textInput} onChangeText={setSearch}
                    value={search} />
                {search !== '' && (
                    <TouchableOpacity onPress={() => { setSearch(''); setData('') }}
                    >
                        <Image source={require('../../../Assets/Images/close.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                )}
            </View>
            {search !== '' && (
                <TouchableOpacity style={styles.searchBtn} onPress={() => searchApi()}>
                    <Text style={styles.searchtitle}>Search</Text>
                </TouchableOpacity>
            )}
            <FlatList
                data={Showdata}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.itemContainer}
                            onPress={() => navigation.navigate('DetailReciepee', data = item)}>
                            <Image source={{ uri: item.image }} style={styles.imageReciepee} />
                            <View>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={[styles.nameText, { marginTop: 20, color: 'green' }]}>{item.cuisine}</Text>
                                <Text style={[styles.nameText, { color: 'green' }]}>{item.mealType}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
            {
                Showdata.length > 0 && (
                    <TouchableOpacity style={styles.filterbtn} onPress={() => {
                        setshowModal(true)
                    }}>
                        <Image source={require('../../../Assets/Images/filter.png')}
                            style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                )
            }
            <Modal isVisible={showModal} style={{ margin: 0 }} backdropColor='rgba(0,0,0,.5)'
                onBackdropPress={() => {
                    setshowModal(false)
                }} onBackButtonPress={() => {
                    setshowModal(false)
                }}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.heading}>Filter</Text>
                        <TouchableOpacity onPress={()=>setshowModal()}>
                        <Image source={require('../../../Assets/Images/close.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    </View>
                    <Text style={[styles.heading,{marginTop:20}]}>DishType</Text>
                    <View>
                        <FlatList data={DISH_FILTERS}
                        contentContainerStyle={{marginTop:15}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index})=>{
                            return(
                                <TouchableOpacity style={[styles.filterItem,{backgroundColor:selectedDish===item ? '#05B681':'white'}]} onPress={()=>{
                                    setselectedDish(item)
                                }}>
                                   <Text style={{fontSize:16,color:selectedDish===item ? 'white':'black'}}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }}/>
                    </View>
                    <Text style={[styles.heading,{marginTop:20}]}>Cusine</Text>
                    <View>
                        <FlatList data={CUISINE_FILTERS}
                        contentContainerStyle={{marginTop:15}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index})=>{
                            return(
                                <TouchableOpacity
                                 style={[styles.filterItem,{backgroundColor:selectedCusine===item ? '#05B681':'white'}]} onPress={()=>setselectedCusine(item)}>
                                    <Text style={{fontSize:16,color:selectedCusine===item ?'white':'black'}}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }}/>
                    </View>
                    <Text style={[styles.heading,{marginTop:20}]}>Diet</Text>
                    <View>
                        <FlatList data={DIET_FILTERS}
                        contentContainerStyle={{marginTop:15}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index})=>{
                            return(
                                <TouchableOpacity style={[styles.filterItem,{backgroundColor:selectedDiet===item ? '#05B681':'white'}]} onPress={()=>{
                                    setselectedDiet(item)
                                }}>
                                    <Text style={{fontSize:16,color:selectedDiet===item ? 'white':'black'}}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }}/>
                    </View>
                <TouchableOpacity
                 style={[styles.modalsubmit]} onPress={()=>setshowModal()}>
                    <Text style={styles.searchtitle}>Apply Filter</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    search: {
        height: 50,
        borderWidth: 1,
        borderColor: '#9e9e9e',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        borderRadius: 8
    },
    cearchIcon: {
        height: 30,
        width: 30
    },
    textInput: {
        width: '80%',
        paddingLeft: 10
    },
    backbtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    backImage: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBtn: {
        width: '50%',
        height: 45,
        backgroundColor: '#05B681',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 8,
        justifyContent: 'center'
    },
    searchtitle: {
        fontSize: 16,
        color: '#fff'
    },
    itemContainer: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: '#9e9e9e',
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 15,
        borderRadius: 8
    },
    imageReciepee: {
        width: 120,
        height: '100%',
        resizeMode: 'stretch',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8
    },
    nameText: {
        fontSize: 16,
        color: 'black',


    },
    filterbtn: {
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: '#f5e7e6',
        right: 15,
        position: 'absolute',
        bottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    modalView: {
        width: '100%',
        height: '60%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 15,

    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    heading: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
    },
    filterItem:{
        paddingHorizontal:15,
        paddingVertical:10,
        borderWidth:1,
        borderColor:'#9e9e9e',
        marginLeft:10,
        borderRadius:8
    },
    modalsubmit:{
        width:'90%',
        backgroundColor: '#05B681',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:15,
        marginTop:20,
        borderRadius:10
    }
});
