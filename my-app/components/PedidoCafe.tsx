import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
export default function PedidoCafe() {
    // Estado : começa com um café
    const[cafe, setCafe] = useState(1);
    return (
        <View style={{ padding: 20}}>
            <Text style={{fontSize: 18}}>Você pediu {cafe} cafés</Text>
            <Button
            title='Pedir mais um café'
            onPress={() => setCafe(cafe + 1)}
            ></Button>
        </View>
    )
}