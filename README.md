# Elevar Home — Guia de Publicação

## Antes de tudo: adicione a imagem do produto

Coloque o arquivo da imagem neste caminho dentro do projeto:

```
public/images/suporte-notebook.jpg
```

A imagem que você usou se chama `SUPORTE_NOTEBOOK_1.jpg` — renomeie para `suporte-notebook.jpg`.

---

## Opção A — Publicar pelo site do Vercel (sem precisar instalar nada)

1. Acesse https://vercel.com e crie uma conta gratuita (pode entrar com Google)
2. No painel, clique em **"Add New Project"**
3. Escolha **"Deploy from your computer"** ou arraste a pasta `elevar-home` inteira
4. Clique em **Deploy**
5. Em ~1 minuto você recebe a URL pública (ex: `elevar-home.vercel.app`)

---

## Opção B — Publicar via GitHub (recomendado para atualizações fáceis)

### 1. Crie conta no GitHub
Acesse https://github.com e crie uma conta gratuita.

### 2. Crie um repositório
- Clique em **"New repository"**
- Nome: `elevar-home`
- Deixe **público** ou **privado** (ambos funcionam no Vercel gratuito)
- Clique em **"Create repository"**

### 3. Faça upload dos arquivos
- Na página do repositório, clique em **"uploading an existing file"**
- Arraste toda a pasta `elevar-home` para lá
- Clique em **"Commit changes"**

### 4. Conecte ao Vercel
- Acesse https://vercel.com → **"Add New Project"**
- Clique em **"Import Git Repository"**
- Selecione o repositório `elevar-home`
- Clique em **Deploy**

### 5. Pronto!
Você receberá uma URL como `elevar-home.vercel.app`.

---

## Como atualizar a página no futuro

### Se usou o GitHub:
1. Edite os arquivos no computador
2. Faça upload das alterações no GitHub (substituindo os arquivos)
3. O Vercel detecta automaticamente e republica em ~30 segundos

### Se usou upload direto no Vercel:
1. Acesse seu projeto no painel do Vercel
2. Clique em **"Deployments"** → **"Deploy"**
3. Faça novo upload da pasta atualizada

---

## Domínio personalizado (opcional, gratuito no Vercel)

Se quiser usar `elevarhome.com.br` em vez de `elevar-home.vercel.app`:

1. Registre o domínio no Registro.br (~R$40/ano)
2. No painel do Vercel, vá em **Settings → Domains**
3. Digite seu domínio e siga as instruções para apontar o DNS
4. Em até 24h o domínio estará ativo com HTTPS automático

---

## Estrutura do projeto

```
elevar-home/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── suporte-notebook.jpg   ← coloque a imagem aqui
├── src/
│   ├── index.css
│   ├── main.tsx
│   └── pages/
│       └── Home.tsx               ← página principal
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
