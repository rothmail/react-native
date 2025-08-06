import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    titulo: string,
    classificacao: string,
};

const AnimeCard: React.FC<Props> = ({ titulo, classificacao }) => {
    let corFundo = '#9e9e9e'
    if (classificacao === 'legal') {
        corFundo = '#4caf50'
    } else if (classificacao === 'intermediario') {
        corFundo = '#ffc107'
    } else if (classificacao === 'ruim') {
        corFundo = '#f44336'
    }
    return (
        <View style={[styles.card, { backgroundColor: corFundo }]}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        elevation: 5,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    classificacao: {
        fontSize: 14,
    },
})
export default AnimeCard;