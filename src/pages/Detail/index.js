import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import Dot from '../../component/Dot';
import SizeShoes from '../../component/SizeShoes';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

const Detail = ({ navigation }) => {

    navigation.setOptions({
        headerTitle: 'Nike Downshifter 10',
    });

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,00</Text>
                </View>

                <View opacity={0.3}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Downshifter 10</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#2379f4' name='Azul' />
                    <Dot color='#ff0000' name='Vermelho' />
                    <Dot color='#ddd' name='Cinza' />
                    <Dot color='#000' name='Preto' />
                </View>

                <View style={styles.sizes}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeShoes bgColor='#17181a' color='#fff'> 37 </SizeShoes>
                        <SizeShoes > 38 </SizeShoes>
                        <SizeShoes > 39 </SizeShoes>
                        <SizeShoes > 40 </SizeShoes>
                        <SizeShoes > 41 </SizeShoes>
                        <SizeShoes> 42 </SizeShoes>
                    </ScrollView>
                </View>

                <View style={styles.textConstent}>

                    <Text style={styles.textTitle}>
                        Nike Downshifter 10
                    </Text>
                    <Text style={styles.textConstent}>
                        O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizado, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético.
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button onClick={() => alert('Produto adicionado ao carrinho!')} />

                <View style={styles.line} />

                <Footer />

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%',
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
    },
    sizes: {
        flexDirection: 'row',
        width: '100%',
    },
    textConstent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 2,
        borderBottomColor: '#DDD',
        marginVertical: '2%',
    },

});

export default Detail;