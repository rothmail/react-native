import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type UsuarioProps = {
    nome: string;
    idade: number;
    cidade: string;
}

const Usuario: React.FC<UsuarioProps> = ({ nome, idade, cidade }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>Idade: {idade}</Text>
            <Text style={styles.texto}>Cidade: {cidade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
    },
})
export default Usuario;