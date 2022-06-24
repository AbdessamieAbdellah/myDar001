import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import SearchBar from '../components/homePage/BarSearch'
import BelowHeaderTab from '../components/homePage/BelowHeaderTab'
import Categories from '../components/homePage/Categories'
import DealsRestaurant from '../components/homePage/DealsRestaurants'
import Header from '../components/homePage/Header'
import HeaderTab from '../components/homePage/HeaderTab'
import Restaurants from '../components/homePage/restaurants'

export default function Home() {
    return (
        <View style={{flex:1 , backgroundColor:'black'}} >
            <SafeAreaView>
                <ScrollView>
            <SearchBar/>
            <BelowHeaderTab/>
            <HeaderTab/>
            <Categories/>
            <Restaurants/>
            <DealsRestaurant/>

            </ScrollView>
            </SafeAreaView>
        </View>
    )
}
