import React, { useState } from "react";
import { View, StyleSheet } from 'react-native'

// //importar componente criado
// // import Titulo from "@/components/Titulo"
// // import ImagemAssets from '@/components/ImagemAssets'
// import TextInput from "@/components/TextInputPesquisa";
import ButtonTest from "@/components/ButtonTest";
// // import Text from "@/components/TextTDS241T";
import ScrollView from "@/components/ScrollViewTest";
// // import ModalTest from "@/components/ModalTest";
// // import SwitchTest from "@/components/SwitchTest";
// // import PerfilUsuario from "@/components/PerfilUsuario";
// // import PedidoCafe from "@/components/PedidoCafe";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/**
//       <Titulo />
//       <ImagemAssets />
//       <PerfilUsuario nome = 'Amanda' idade = {16} cidade = 'São Leopoldo' />
//       <ModalTest />
//       <SwitchTest />
//       <PedidoCafe />
//        */}
//       <AnimeCard />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightblue'
//   }
// })

import AnimeCard from "@/components/AnimeCard";
import Animated from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";

type Anime = {
  id: number,
  nome: string,
  classificacao: string,
}

export default function App() {
  const [anime, setAnime] = useState<Anime[]>([]);

  const [novoAnime, setNovoAnime] = useState<string>('');

  const addAnime = () => {
    if (novoAnime.trim() === '') return;

    setAnime([
      ...anime,
      { id: Date.now(), nome: novoAnime, classificacao: 'legal' }
    ]);
    setNovoAnime('');
  }

  const avaliarAnime = (id: number, novaClassificacao: string) => {
    setAnime((prevAnime) =>
      prevAnime.map((anime) =>
        anime.id === id
          ? { ...anime, classificacao: novaClassificacao }

          : anime
      )
    )
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='Digite o nome do Anime'
          value={novoAnime}
          onChangeText={setNovoAnime} />
        <Button title='Adicionar anime'
          onPress={addAnime} />
        <ScrollView style={{ width: '100%', marginTop: 20 }} />
        <View key={anime.id} style={styles.cardContainer} />
        <AnimeCard nome={anime.nome} classificacao={anime.classificacao} />
        <View style={StyleSheet.botoes}>
          <Button title='Legal'
            onPress={() => avaliarAnime(anime.id, 'legal')}
        </View>
        )
      </View>
  }
}
