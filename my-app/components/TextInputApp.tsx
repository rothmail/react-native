import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, } from "react-native"

//criando o componente 
export default function TextInputTDS241T() {
    const [nome, setNome] = useState('') //estado para armazenar o nome 
    return (
        <view style={styles.container}>
            <TextInput style={styles.input} placeholder="Nome" onChangeText={(texto) => setNome(texto)}
            />
        </view>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18, marginBottom: 8
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        borderRadius: 100,
        borderStyle: 'solid',
        color: '#212121',
        flex: 1,
    }
})