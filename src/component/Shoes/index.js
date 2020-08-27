import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,

} from 'react-native';

export default function Shoes(props) { // props são para receber o valor de outra tela.



    // FUNÇÃO PARA QUANDO O NOME ULTRAASSAR O TAMANHO LIMITE DA TELA COLOQUE OS TRÊS PONTOS.
    function filterDesc(desc) {
        if (desc.length < 20) {
            return desc;
        }
        return `${desc.substring(0, 20)}...` //SE O NOME FOR MUITO GRANDE, VAI PEGAR DO PRIMEIRO ATÉ O CARACTERE 25 E OS 3 PONTOS.
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={props.onClick}>
                <Image
                    source={props.img}
                    style={styles.shoesImg}
                />
                <Text style={styles.shoesText}>
                    {filterDesc(props.children)}  {/* children pois o valor esta dentro de um componente na Home */}
                </Text>
                <View opacity={0.4}>
                    <Text style={styles.shoesText}> {props.cost} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shoesImg: {
        width: 175,
        height: 175,
    },
    shoesText: {
        fontSize: 16,
    },
});