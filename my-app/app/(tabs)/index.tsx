import React from "react";
import { View, StyleSheet } from 'react-native'

//importar componente criado
import Titulo from "@/components/Titulo"
import ImagemAssets from '@/components/ImagemAssets'
import TextInputPesquisa from "@/components/TextInputPesquisa";
import ButtonTest from "@/components/ButtonTest";
import Text from "@/components/TextTDS241T";
import ScrollViewTest from "@/components/ScrollViewTest";
import ModalTest from "@/components/ModalTest";
import SwitchTest from "@/components/SwitchTest";
import PerfilUsuario from "@/components/PerfilUsuario";

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <ImagemAssets />
      <PerfilUsuario nome = 'Amanda' idade = {16} cidade = 'São Leopoldo' />
      <ModalTest />
      <SwitchTest />
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