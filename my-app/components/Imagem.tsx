import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Imagem() {
    return (
        <View style={styles.container}>
            <Text style={styles.legenda}>Capybara</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Imagem: {
        width: 200,
        height: 200,
        marginTop: 0,
        marginBottom: 10,
    },
    legenda: {
        fontSize: 20,
        color: '#555',
    }
})