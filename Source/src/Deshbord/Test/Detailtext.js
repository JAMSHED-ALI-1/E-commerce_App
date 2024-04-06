import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../../Redux/features/CartSlice';
import Prodect from '../Prodect';

const ShowDetail = () => {
    const navigation = useNavigation();
    const [currentItem,setCurrentItem]=useState({})
    const route = useRoute();
    const dispatch=useDispatch()
    const {cartData,totalAmount}=useSelector(state=>state.cartItem)
    console.log('first',cartData,totalAmount)
    const [showcount,setshowcount]=useState(false)
    const [quantity, setQuantity] = useState(0);
    const handleAddToCart = () => {
        
        setshowcount(true); 
    };
    useEffect(()=>{
        const ItemChecking=()=>{
            const ItemAviliable=cartData ?.find(value=>value.id===Prodect.id)
            if(ItemAviliable){
       setCurrentItem(ItemAviliable)
            }else{
 setCurrentItem({})
            }
        }
        ItemChecking()
    },[cartData])
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../../../Assets/Images/Backarrow.png')} style={styles.backButtonIcon} />
            </TouchableOpacity>
            <Image source={{ uri: route.params.thumbnail }} style={styles.thumbnail} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={styles.price}>${route.params.price}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>Category: {route.params.category}</Text>
                <Text style={styles.description}>Description: {route.params.description}</Text>
                <Text style={styles.description}>Rating: {route.params.rating}</Text>
            </View>
            {!showcount && (
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
            )}
           {showcount && (
            <View style={styles.quantityContainer} 
            // onPress={()=>dispatch(removeToCart(route.params.id))}
            >
            <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{currentItem.quantity}</Text>
            <TouchableOpacity style={styles.quantityButton}  
            // onPress={()=>dispatch(addToCart(route.params))}
            >
                <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
        </View>
           )}
            <TouchableOpacity style={styles.viewCartButton}>
                <Text style={styles.buttonText}>View Cart</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default ShowDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    backButton: {
        marginTop: 30
    },
    backButtonIcon: {
        height: 40,
        width: 40
    },
    thumbnail: {
        height: 200,
        width: '100%',
        borderRadius: 20,
        marginTop: 10
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 15
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        color: '#03fc24'
    },
    descriptionContainer: {
        padding: 20
    },
    description: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    addToCartButton: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    quantityButton: {
        height: 45,
        width: 45,
        borderRadius: 50,
        backgroundColor: '#9e9e9e',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: '600'
    },
    quantity: {
        color: 'black',
        fontSize: 18
    },
    viewCartButton: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    }
});
