import React from 'react';
import { ScrollView, Text } from 'react-native';

import Titulo from "@/components/Titulo"
import ImagemAssets from '@/components/ImagemAssets'
import TextInputPesquisa from "@/components/TextInputPesquisa";
import ButtonTest from "@/components/ButtonTest";
import TextTDS241T from "@/components/TextTDS241T";

const ScrollViewTest = () => {
    return (
        <ScrollView>
            <Titulo />
            <ImagemAssets />
            <TextTDS241T />
            <TextInputPesquisa />
            <ButtonTest />
        </ScrollView>
    );
}

export default ScrollViewTest