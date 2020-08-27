import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,

} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../component/Shoes';
import { useNavigation } from '@react-navigation/native';

const Home = () => {


    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.imageBanner}
                />
                <View style={styles.textContainer}>

                    <Text style={styles.text}> TÊNIS </Text>
                    <Text style={[styles.text, { color: '#CECECE' }]}> - </Text>
                    <Text style={[styles.text, { color: '#CECECE' }]}> MASCULINO </Text>

                    <TouchableOpacity style={styles.buttonIconHeader}>
                        <MaterialIcons
                            name='filter-list'
                            size={24}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.text}> LANÇAMENTOS </Text>

                <View style={styles.itensContainer}>
                    <Shoes img={require('../../assets/1.png')} cost='190,00'>
                        Nike Air Max
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} cost='280,00' onClick={() => navigation.navigate('Detail')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View style={styles.itensContainer}>
                    <Shoes img={require('../../assets/3.png')} cost='530,99'>
                        Adidas Squidward Tentacles
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} cost='199,89'>
                        Nike Epic React Flyknit 2
                    </Shoes>
                </View>

                <View style={styles.itensContainer}>
                    <Shoes img={require('../../assets/5.png')} cost='270,99'>
                        Adidas Joyride Run Flyknit
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} cost='219,89'>
                        Adidas Run 2
                    </Shoes>
                </View>

            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        paddingBottom: 20
    },
    header: {
        marginBottom: 8,
    },
    imageBanner: {
        width: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '0.1%',
    },
    buttonIconHeader: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
    },
    line: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 2,
    },
    itensContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // para ter duas colunas e ficar uma ao lado da outra.
    }

});

export default Home;