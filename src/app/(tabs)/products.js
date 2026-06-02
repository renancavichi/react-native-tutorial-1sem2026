import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView} from 'react-native';

export default function Products() {
  return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>Produtos</Text>
        <Text>Produto, em administração e marketing, é um conjunto de atributos, tangíveis ou intangíveis, constituído através do processo de produção, para atendimento de necessidades reais ou simbólicas, e que pode ser negociado no mercado, mediante um determinado valor de troca, quando então se converte em mercadoria.

Portanto, como produtos, consideramos bens físicos (furadeiras, livros, etc), serviços (cortes de cabelo, lavagem de carro, etc.), eventos (concertos, desfiles, etc.), pessoas (Pelé, George Bush, etc.), locais (Havaí, Veneza, etc.), organizações, (Greenpeace, Exército da Salvação, etc.) ou mesmo ideias (planejamento familiar, direção defensiva, etc.)

Segundo Kotler e Armstrong, produto é qualquer coisa que possa ser oferecida a um mercado para atenção, aquisição, uso ou consumo, e que possa satisfazer um desejo ou necessidade.

O produto é o primeiro elemento do composto mercadológico: todos os demais componentes dependem do estudo e conhecimento do produto. A propaganda, o preço e a distribuição só podem ser definidas após um estudo do produto e da identificação de seu mercado-alvo. Assim os fatores diretamente relacionados a oferta de marketing são aqui estudados.
        </Text>
        <Text>Produto, em administração e marketing, é um conjunto de atributos, tangíveis ou intangíveis, constituído através do processo de produção, para atendimento de necessidades reais ou simbólicas, e que pode ser negociado no mercado, mediante um determinado valor de troca, quando então se converte em mercadoria.

Portanto, como produtos, consideramos bens físicos (furadeiras, livros, etc), serviços (cortes de cabelo, lavagem de carro, etc.), eventos (concertos, desfiles, etc.), pessoas (Pelé, George Bush, etc.), locais (Havaí, Veneza, etc.), organizações, (Greenpeace, Exército da Salvação, etc.) ou mesmo ideias (planejamento familiar, direção defensiva, etc.)

Segundo Kotler e Armstrong, produto é qualquer coisa que possa ser oferecida a um mercado para atenção, aquisição, uso ou consumo, e que possa satisfazer um desejo ou necessidade.

O produto é o primeiro elemento do composto mercadológico: todos os demais componentes dependem do estudo e conhecimento do produto. A propaganda, o preço e a distribuição só podem ser definidas após um estudo do produto e da identificação de seu mercado-alvo. Assim os fatores diretamente relacionados a oferta de marketing são aqui estudados.
        </Text>
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  contentContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
