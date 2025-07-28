import React, { useState } from 'react';
import { Modal, View, Button, Text } from 'react-native';
import { addWhitelistedNativeProps } from 'react-native-reanimated/lib/typescript/ConfigHelper';

export default function ModalTest() {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            <Button title="Abrir Modal" onPress={() => setVisible(true)} />

            <Modal visible={visible} transparent animationType='slide'>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300, height: 200}}>
                            {/** caixa branca com cantos arredondados e padding interno*/}
                            <Text style={{marginBottom: 10}}>Este é um modal</Text>
                            <Button title='Fechar Modal' onPress={() => setVisible (false)} />
                        </View>
                    </View>
            </Modal>
        </View>
    );
}