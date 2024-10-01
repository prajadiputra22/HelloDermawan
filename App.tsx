/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import React, { useState } from 'react';

const App = () => {
    const [text, onChangeText] = useState('');
    const [activeTab, setActiveTab] = useState<string>('Cappuccino');
    const handleTabPress = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.locationContainer}>
                    <Text>Darmawan Suka Prajadiputra</Text>
                    <Text style={styles.location}>Sukabumi, Jawa Barat</Text>
                </View>
                <Image
                    source={require('./src/asset/image/kaka.jpg')}
                    style={styles.avatar}
                />
            </View>

            {/* Search Input */}
            <TextInput
                onChangeText={onChangeText}
                style={styles.input}
                placeholder="Search Coffee"
            />

            {/* Promo Banner */}
            <ImageBackground 
                source={require('./src/asset/image/coffee-banner.jpg')} 
                style={styles.promoBanner} 
                imageStyle={{ borderRadius: 10 }}
            >
                <Text style={styles.promoText}>Promo</Text>
                <Text style={styles.promoDetails}>Buy one get one FREE</Text>
            </ImageBackground>

            {/* Navigation */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabScroll}>
                <View style={styles.tabContainer}>
                    {['Cappuccino', 'Macchiato', 'Espresso', 'Americano', 'Mocha', 'Latte'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.tabButton,
                                activeTab === tab && styles.activeTabButton
                            ]}
                            onPress={() => handleTabPress(tab)}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    activeTab === tab && styles.activeTabText
                                ]}
                            >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Coffee Grid */}
            <View style={styles.coffeeGrid}>
            <View style={styles.coffeeItem}>
                    <Image
                        source={require('./src/asset/image/coffee.jpeg')}
                        style={styles.coffeeImage}
                    />
                    <Text style={styles.coffeeName}>Cappuccino</Text>
                    <Text style={styles.coffeeDetail}>With Chocolate</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.coffeePrice}>$5.50</Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.coffeeItem}>
                    <Image
                        source={require('./src/asset/image/oatmilk.webp')}
                        style={styles.coffeeImage}
                    />
                    <Text style={styles.coffeeName}>Cappuccino</Text>
                    <Text style={styles.coffeeDetail}>With Oat Milk</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.coffeePrice}>$5.00</Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.coffeeItem}>
                    <Image
                        source={require('./src/asset/image/cappucino.jpg')}
                        style={styles.coffeeImage}
                    />
                    <Text style={styles.coffeeName}>Cappuccino</Text>
                    <Text style={styles.coffeeDetail}>With Milk</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.coffeePrice}>$3.80</Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.coffeeItem}>
                    <Image
                        source={require('./src/asset/image/Capuccino.jpeg')}
                        style={styles.coffeeImage}
                    />
                    <Text style={styles.coffeeName}>Cappuccino</Text>
                    <Text style={styles.coffeeDetail}>With Cream</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.coffeePrice}>$5.80</Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    locationContainer: {
        flexDirection: 'column',
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    input: {
        height: 40,
        marginTop: 1,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    promoBanner: {
        height: 150,
        borderRadius: 10,
        padding: 20,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promoText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#6F4E37',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    promoDetails: {
        fontSize: 43,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    tabScroll: {
        marginVertical: 20,
    },
    tabContainer: {
        flexDirection: 'row',
    },
    tabButton: {
        backgroundColor: '#6F4E37',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    activeTabButton: {
        backgroundColor: '#D2691E',
    },
    tabText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    activeTabText: {
        color: '#FFF',
    },
    coffeeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    coffeeItem: {
        width: '47%',
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: '#6F4E37'
    },
    coffeeImage: {
        width: '90%',
        height: 130,
        borderRadius: 10,
        marginTop: 9,
        alignSelf: 'center'
    },
    coffeeName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 9,
        textAlign: 'left',
    },
    coffeeDetail: {
        fontSize: 14,
        color: '#fff',
        marginTop: 2,
        marginHorizontal: 9,
        textAlign: 'left',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3,
    },
    coffeePrice: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 9,
    },
    addButton: {
        backgroundColor: '#fff',
        width:25,
        padding: 1,
        borderRadius: 5,
        margin: 9,
    },
    addButtonText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#6F4E37',
        textAlign: 'center',
    },
});

export default App;
