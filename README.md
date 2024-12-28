# 📅 Gerenciador de Hábitos usando Next.js 13

Aprenda a usar o poder da versão 13+ do Next.js construindo um gerenciador de hábitos!

## 🔨 Informação Básica
- Foi utilizado o Next.js na versão mais atual para construir a estrutura do projeto e gerenciar as rotas da aplicação.
- Desenvolva a aplicação mobile-first.

### Página inicial

- Funcionalidade de exibir uma lista de hábitos.
  - Cada hábito mostra os últimos 7 dias, com um check se o hábito foi feito, um "x" se ele não foi feito ou uma bolinha cinza se ele ainda não foi marcado.
- Botão de excluir um hábito na lista de hábitos.
- Ao clicar em um hábito, você será redirecionado para uma nova rota que exibe os detalhes do hábito.
- Botão de adicionar hábitos que leva a uma nova página de cadastro de hábito.
- Exibe uma mensagem quando não houverem hábitos cadastrados

### Página de cadastro de hábitos

- Crie um formulário para a pessoa cadastrar o nome do hábito
- Implemente um botão para submeter
- Implemente um botão para cancelar o cadastro e voltar para a página inicial.

### Página de detalhes do hábito

- Mostre o nome do hábito e um botão de voltar para a tela inicial
- Mostre um calendário com os hábitos
  - A pessoa pode navegar entre os meses e verá, a cada dia do mês, um check se o hábito foi feito, um "x" se ele não foi feito ou uma bolinha cinza se ele ainda não foi marcado.
  - Quando a pessoa clica em um dia, o hábito deve ser marcado ou desmarcado.
    
## 🔨 Desafios extras para quem quer ir além
- Implemente uma funcionalidade de "streak", ou seja, a quantidade de dias consecutivos que o hábito foi feito.
- Implemente um login e cadastro de usuários.

## 🔍 Obs
- Simplifique o backend da aplicação. O foco principal é usar o Next no front, então não precisa criar uma API muito robusta. [Uma dica é utilizar o Redis da própria Vercel, que se chama KV.](https://vercel.com/docs/storage/vercel-kv)
- Estude sobre React 18 e Server Components.
- Utilize Server Actions
- Utilize um framework CSS, como Tailwind, para ganhar agilidade na implementação.

## 👉🏽 Sobre esse mini-projeto
### Tecnologias utilizadas
**NextJS 13**

- `Server Components`
- `Data fetching`
- `Server Actions`
- `Nested layouts`
- `Routes`
- `pages.tsx`
- `layout.tsx`
- `error.tsx`
- `loading.tsx`
- `Vercel KV`
- `Redis`
- `React`
- `HTML, CSS, JavaScript`
