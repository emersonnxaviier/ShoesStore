import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,

} from 'react-native';

export default function SizeShoes(props) {
    return (
        <TouchableOpacity style={[styles.constainer, { backgroundColor: props.bgColor || '#fff' }]}>
            <Text style={[styles.text, { color: props.color || '#ddd' }]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    constainer: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 4,
        borderColor: '#ddd',
        marginHorizontal: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',

    },
});