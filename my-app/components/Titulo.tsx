import React from "react";
import { Text, StyleSheet } from 'react-native'

//mostra o titulo na tela
export default function Titulo() {
    return (
        <Text style={styles.titulo}>Community Course</Text>
    );
}

//estilo aplicado ao titulo
const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
    }
});