import React from "react";
import { View, StyleSheet } from 'react-native'

//importar componente criado
import Titulo from "@/components/Titulo"
import ImagemAssets from '@/components/ImagemAssets'
import TextInputPesquisa from "@/components/TextInputPesquisa";
import ButtonTest from "@/components/ButtonTest";
import Text from "@/components/TextTDS241T";

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <ImagemAssets />
      <Text />
      <TextInputPesquisa />
      <ButtonTest />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  }
})