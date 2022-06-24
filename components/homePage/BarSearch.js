import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
    return (
        <View style={{ flexDirection: 'row' }} >







            <View style={{ flexDirection: 'row', height: 40, width: 310, margin: 5, backgroundColor: 'red' }}>
                <GooglePlacesAutocomplete
                    query={{ key: '' }}
                    onPress={(data, details = null) => {
                        console.log(data.description);
                        const city = data.description.split(',')[0];
                        cityHandler(city);
                    }}
                    placeholder='Search'
                    styles={{
                        textInput: {
                            backgroundColor: '#eee',
                            borderRadius: 20,
                            height: 40, width: 310,
                            fontWeight: '700',
                            marginTop: 7,
                        },
                        textInputContainer: {
                            backgroundColor: '#eee',
                            borderRadius: 50, 
                            height: 40, width: 310,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginRight: 10,
                        },
                    }}

                    renderLeftButton={() => (
                        <View style={{ marginLeft: 10 }}>
                            <Ionicons name='location-sharp' size={24} />
                        </View>
                    )} />
            </View>
            <View style={{ flexDirection: 'row', height: 40, width: 70, padding:8,margin:2,  borderRadius:10,
             backgroundColor: 'green', justifyContent:'center', alignItems:'center' }}>
                    <Ionicons name='location-sharp' size={25} style={{ marginRight: 6 }} />
                    <Text>maps</Text>
                </View>
        </View>
    )
}
