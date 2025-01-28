# **Don't Starve Together Boss Checklist**

Este projeto é um aplicativo web simples desenvolvido com **React** e **Vite** para listar todos os bosses do jogo *Don't Starve Together*. Ele permite que os jogadores marquem quais bosses já foram derrotados, com um checklist interativo, imagens associadas a cada boss, e persistência de dados usando **Local Storage**.

---

## **Funcionalidades**

- ✅ **Lista de Bosses**: Exibe uma lista de bosses obtida de uma API.
- 📷 **Imagens**: Mostra imagens personalizadas para cada boss.
- ☑️ **Checklist**: Permite marcar/desmarcar bosses como derrotados.
- 💾 **Persistência**: Salva automaticamente o progresso no **Local Storage**, para que as seleções não sejam perdidas ao recarregar a página.
- 🔄 **Indicador de Carregamento**: Mostra um spinner de "Carregando..." enquanto a lista de bosses é carregada.
- 🖱️ **Rolagem**: Lista de bosses com rolagem vertical para facilitar a navegação em dispositivos menores.

---

## **Como Executar o Projeto**

1. Certifique-se de que você tem o **Node.js** e o **npm** instalados.
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/dst-boss-checklist.git
   ```
3. Navegue para o diretório do projeto:
   ```bash
   cd dst-boss-checklist
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

---

## **Estrutura de Pastas**

```
public/
├── assets/
│   ├── imgs/
│   │   ├── MossGosse.png
│   │   ├── Dragonfly.png
│   │   ├── default.png
│   │   └── ...
src/
├── App.jsx
├── main.jsx
└── ...
```

- **`public/assets/imgs/`**: Contém imagens de cada boss. O nome das imagens deve corresponder ao nome dos bosses retornados pela API, com os caracteres `/` removidos.

---

## **Personalização**

### Adicionar mais bosses:

1. Certifique-se de que as imagens correspondentes aos bosses estejam na pasta `public/assets/imgs/`.

### API utilizada:

- Este projeto consome uma API fictícia hospedada em:
  ```
  https://dst-boss-api.vercel.app/bosses
  ```
- Para usar sua própria API, atualize o link em `App.jsx` na função `fetch()`.

### Fallback para imagens ausentes:

- Caso a imagem de um boss não seja encontrada, será exibida uma imagem padrão `default.png` da pasta `assets/imgs/`.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca principal para a interface do usuário.
- **Vite**: Ferramenta de build e servidor de desenvolvimento rápido.
- **Tailwind CSS**: Para estilização rápida e responsiva.
- **Local Storage**: Para salvar o estado do checklist.

---

## **Contribuição**

Sinta-se à vontade para contribuir com melhorias para este projeto! Basta abrir uma issue ou enviar um pull request.

---

## **Licença**

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo como quiser.