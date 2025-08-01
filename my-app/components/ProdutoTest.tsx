import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Definição das propriedades do componentes
type ProdutoPros = {
    nome: string;
    lote: string;
    validade: string;
}

// Componente
const Produto: React.FC<ProdutoPros> = ({nome, lote, validade}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>Lote: {lote}</Text>
            <Text style={styles.texto}>Validade: {validade}</Text>
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
export default Produto;