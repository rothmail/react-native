import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { green } from 'react-native-reanimated/lib/typescript/Colors';

export default function ButtonTest() {
    const aoClicar = {
        title: 'Pesquisar',
        onPress: () => Alert.alert('Pesquisa realizada com sucesso!!'),
    }
    return (
        <View style={styles.container}>
            <Button title={aoClicar.title} onPress={aoClicar.onPress} color='blue'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        borderRadius: 100,
    }
});