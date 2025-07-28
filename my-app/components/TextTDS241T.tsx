import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TextTDS241T() {
    return (
        <View style={styles.container}>
            {/** Exibe um texto simples com estilo || View equivale a uma div*/}
            <Text style={styles.text}>O presente trabalho propõe uma análise do impacto de plataformas digitais de cursos gratuitos no acesso à educação de qualidade, com foco na plataforma Community Course, que visa promover o compartilhamento de conhecimentos educacionais por meio de uma interface intuitiva e acessível. É importante destacar que os cursos disponíveis na plataforma são acessados por meio de links externos — ou seja, são produzidos fora da Community Course. A proposta da plataforma é funcionar como uma ponte entre os conteúdos educativos já existentes e os usuários, facilitando o acesso de maneira direta e eficaz. A pesquisa é fundamentada na necessidade de democratizar o acesso ao aprendizado, especialmente em um contexto no qual as políticas públicas educacionais são insuficientes. A plataforma oferece recursos como a seção de perfil, onde o usuário pode gerenciar seus dados e acompanhar cursos compartilhados ou salvos. A pesquisa utilizou uma abordagem quantitativa, por meio de um questionário estruturado com a Escala de Likert, aplicado a usuários potenciais para avaliar a receptividade da plataforma e suas funcionalidades. Os resultados apontaram uma alta demanda por uma plataforma gratuita e acessível, com forte adesão ao modelo proposto. Além disso, a pesquisa identificou uma lacuna no mercado educacional digital, sugerindo que a ComCourse pode preencher uma necessidade significativa de acesso organizado e democrático ao conhecimento.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'red',
    }
});