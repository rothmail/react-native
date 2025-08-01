import React, {useState} from 'react';
import {Switch, View, Text} from 'react-native';

export default function SwitchTest() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{margin: 10}}>
            <Text> Interruptor está {isEnabled ? 'habilitado' : 'desabilitado'}</Text>
            <Switch value={isEnabled}
            onValueChange={toggleSwitch}
            />
        </View>
    )
}