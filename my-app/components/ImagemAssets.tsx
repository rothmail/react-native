import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import siteImage from '../assets/images/owl.png';

export default function ImagemAssts() {
    return (
        <View style={styles.container}>
            <Image source={siteImage} style={styles.imagem} />
            <Text style={styles.legenda}>ComCourse Owl</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
        width: 200,
        height: 200,
        marginTop: 50,
    },
    legenda: {
        fontSize: 20,
        color: '#555',
    }
})