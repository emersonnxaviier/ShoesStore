import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,

} from 'react-native';
import Shoes from '../Shoes'

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>

            <View style={{ flexDirection: 'row' }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{ marginHorizontal: 10, marginVertical: '3%' }}>
                        <Shoes img={require('../../assets/1.png')} cost='110,90'>
                            Nike
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10, marginVertical: '3%' }}>
                        <Shoes img={require('../../assets/3.png')} cost='110,90'>
                            Nike
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10, marginVertical: '3%' }}>
                        <Shoes img={require('../../assets/2.png')} cost='110,90'>
                            Nike
                        </Shoes>
                    </View>

                    <View style={{ marginHorizontal: 10, marginVertical: '3%' }}>
                        <Shoes img={require('../../assets/6.png')} cost='110,90'>
                            Nike
                        </Shoes>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '1%',
        paddingHorizontal: '2%'
    },
});