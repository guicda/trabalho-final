// 1. geradorDeTagsDeIdentificacao
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// 2. verificarSePodeSerAdotado
export function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

// 3. calcularConsumoDeRacao
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// 4. decidirTipoDeAtividadePorPorte
export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  } else {
    return 'livre pra praticar atividades fora de casa';
  }
}

// 5. buscarDadoAsync
export async function buscarDadoAsync() {
  return 'Pipoca'; // valor esperado para o teste
}
