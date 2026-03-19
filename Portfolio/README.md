# 🗂️ Portfólio — Leonardo Morais Cruz

Portfólio pessoal desenvolvido com **HTML, CSS/Sass e JavaScript puro**, com design inspirado em glassmorphism dark. Todos os dados são carregados dinamicamente a partir de um arquivo `data.json` — para atualizar qualquer informação, basta editar esse arquivo.

---

## ✨ Preview

> Acesse o projeto ao vivo:  
> **[lk-nocturne.github.io/portfolio](https://lk-nocturne.github.io/portfolio)**  
> *(atualize o link após o deploy no GitHub Pages)*

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 + Sass (SCSS) | Estilização e animações |
| JavaScript (ES6+) | Lógica, fetch e renderização |
| JSON | Armazenamento dos dados |
| Devicon | Ícones de tecnologia |
| Font Awesome | Ícones gerais |
| Google Fonts | Tipografia (Syne + DM Sans) |

---

## 📁 Estrutura de pastas

```
portfolio/
├── index.html        → estrutura da página (não edite o conteúdo aqui)
├── data.json         → ✏️ SEUS DADOS — edite aqui!
├── README.md         → documentação do projeto
├── css/
│   ├── style.scss    → estilos fonte (edite aqui no VSCode)
│   └── style.css     → CSS compilado (gerado automaticamente)
└── js/
    └── app.js        → lê o JSON e monta o HTML
```

---

## ✏️ Como atualizar seus dados

Todo o conteúdo do portfólio vem do `data.json`. Você **não precisa mexer no HTML** para atualizar informações.

### Trocar seu título ou cidade
```json
"perfil": {
  "titulo": "Frontend Developer",
  "cidade": "São Paulo, SP — BR"
}
```

### Adicionar uma skill
```json
"skills": [
  { "nome": "Next", "classe": "devicon-nextjs-plain" }
]
```
> Encontre o nome da classe de qualquer tecnologia em: **[devicon.dev](https://devicon.dev)**

### Adicionar um projeto
```json
"projetos": [
  {
    "emoji": "🎮",
    "titulo": "Pokédex LK",
    "descricao": "Pokédex consumindo a PokéAPI com HTML, CSS e JS.",
    "tags": ["HTML", "CSS", "JavaScript", "API"],
    "link": "https://lk-nocturne.github.io/pokedex"
  }
]
```
> Deixe `"link": ""` se o projeto ainda não tiver deploy.

### Adicionar uma experiência
```json
"experiencia": [
  {
    "cargo": "Dev Frontend",
    "empresa": "Nome da Empresa",
    "local": "Cidade, SP",
    "periodo": "2025 – Atual"
  }
]
```

---

## 🚀 Como rodar localmente

**Pré-requisito:** extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VSCode.

```bash
# 1. Clone o repositório
git clone https://github.com/LK-Nocturne/portfolio.git

# 2. Abra a pasta no VSCode
code portfolio

# 3. Clique com botão direito no index.html
#    → "Open with Live Server"
```

> ⚠️ **Não abra o `index.html` direto no navegador** (duplo clique).  
> O `fetch` do `data.json` precisa de um servidor — o Live Server resolve isso.

---

## 🎨 Como editar os estilos (Sass)

**Pré-requisito:** extensão [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) no VSCode.

1. Abra o `css/style.scss`
2. Edite o que quiser
3. Salve — o `style.css` é gerado automaticamente

> **Nunca edite o `style.css` direto** — ele é sobrescrito toda vez que o Sass compila.

---

## 📦 Deploy no GitHub Pages

```bash
# Após qualquer atualização:
git add .
git commit -m "feat: atualiza dados do portfólio"
git push
```

> No GitHub: **Settings → Pages → Branch: main → Save**  
> Seu portfólio fica disponível em `https://lk-nocturne.github.io/portfolio`

---

## 📄 Licença

Projeto pessoal — livre para usar como referência e aprendizado.

---

<p align="center">
  Feito por <strong>Leonardo Morais Cruz</strong> · 
  <a href="https://github.com/LK-Nocturne">@LK-Nocturne</a>
</p>
