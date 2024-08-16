# README

## Descrição

Esta aplicação mobile foi desenvolvida para fornecer informações e suporte a profissionais de saúde e pacientes, abordando temas como violência obstétrica, humanização do parto e direitos reprodutivos. A aplicação é dividida em duas categorias principais de usuários: **Profissionais da Saúde** e **Pacientes**, cada um com conteúdos personalizados.

## Tecnologias

- **React Native**: Framework utilizado para desenvolver a aplicação mobile, garantindo compatibilidade com Android e iOS.
- **Styled Components**: Biblioteca para estilização de componentes de forma modular e dinâmica.
- **Expo (v51)**: Plataforma utilizada para facilitar o desenvolvimento e testes da aplicação.

## Funcionalidades

### Tela Inicial
- Escolha entre "Profissionais da Saúde" ou "Pacientes".

### Seção para Profissionais da Saúde
- **Tela de Apresentação**: Informações sobre violência obstétrica e humanização do atendimento.
- **Opções de Leitura**:
  - **Conceitos Importantes**: 20 telas.
  - **Dicionário da Gestação**: 1-2 telas.
  - **Estudo de Casos**: 15 telas.
  - **Práticas Advertidas**: 10 telas.
  - **Orientações e Links Úteis**: 5 telas de orientações e 1 tela com links relevantes.

### Seção para Pacientes
- **Tela de Apresentação**: Informações sobre direitos dos pacientes e parto seguro.
- **Opções de Leitura**:
  - **Conceitos Importantes**: 29 telas.
  - **Dicionário da Gestação**: 1-2 telas.
  - **Práticas Advertidas**: 10 telas.
  - **Orientações e Links Úteis**: 6 telas de orientações e 1 tela com links relevantes.

## Estrutura do Projeto

A navegação da aplicação segue uma estrutura hierárquica:
1. **Tela Inicial**: Seleção entre "Profissionais da Saúde" e "Pacientes".
2. **Tela de Apresentação**: Exibe a introdução para o grupo selecionado.
3. **Tela de Decisão**: Apresenta botões de navegação para diferentes seções de conteúdo.
4. **Tela de Conteúdo**: Exibe o conteúdo detalhado escolhido na tela de decisão.

## Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI

## Instalação

1. **Clone o Repositório**
   ```bash
   git clone <URL-do-repositório>
   cd <nome-do-repositório>
