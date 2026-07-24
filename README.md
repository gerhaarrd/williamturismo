# Amaral Tour · Rio Drive

Landing page para um guia/motorista privado no Rio de Janeiro. React + TypeScript + Vite + Tailwind CSS v4, pronta para deploy na Vercel.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`, sem `tailwind.config.js` — tokens em `src/index.css`)
- i18n simples em memória (PT-BR / EN) — `src/i18n`

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build de produção localmente
npm run lint      # oxlint
```

## Estrutura

```
src/
  config/site.ts       -> dados de contato (WhatsApp, Instagram, e-mail) — fonte única de verdade
  i18n/                 -> dicionário PT/EN + contexto de idioma (useLang)
  data/                 -> conteúdo dos passeios e da galeria (bilíngue)
  components/            -> uma seção da página por arquivo
  hooks/useReveal.ts     -> animação de entrada ao rolar a página
public/images/           -> fotos otimizadas (jpg + webp), ícones e imagem de Open Graph
assets-raw-whatsapp/     -> fotos originais do WhatsApp (fora do git — apenas referência local)
```

Cada imagem em `public/images` tem um par `.jpg` (fallback) + `.webp` (formato moderno, menor),
servidos via `<picture>`. As miniaturas usadas na galeria ficam em `public/images/thumbs`.

## ⚠️ Antes de publicar

WhatsApp e Instagram já estão com os dados reais. Ainda faltam estes dois **placeholders**:

| Onde | O quê | Arquivo |
| --- | --- | --- |
| E-mail | `contato@amaraltour.com.br` → seu e-mail real | `src/config/site.ts` |
| Domínio do site | `https://amaraltour.vercel.app` → domínio real após o deploy | `src/config/site.ts`, `index.html` (`og:*`, `canonical`, JSON-LD), `public/robots.txt`, `public/sitemap.xml` |

Os textos de FAQ, os passeios e as legendas da galeria também são um ponto de partida — vale revisar
e ajustar para refletir exatamente como você atende (idiomas, forma de pagamento, região de busca, etc.).

## SEO

O site já sai com o básico de SEO on-page pronto:

- Título, meta description e Open Graph com as palavras-chave do negócio (city tour, Rio de Janeiro, Rocinha).
- Dados estruturados (`schema.org/TravelAgency`) em `index.html`, com os 3 pacotes como `Offer` — ajuda o
  Google a entender o site como uma agência de tours e pode habilitar rich snippets.
- `public/robots.txt` e `public/sitemap.xml`.

**Isso ajuda, mas não garante posição no Google** para termos concorridos como "city tour" ou "rio de
janeiro tour" — isso depende muito de fatores fora do site (perfil no Google Business, avaliações,
outros sites linkando pra você, tempo de domínio). A ação com melhor custo-benefício pra aparecer em
buscas locais ("tour na rocinha", "city tour rio de janeiro") é criar e caprichar no
[Perfil da Empresa no Google](https://www.google.com/business/) — endereço/área de atendimento, fotos e,
principalmente, avaliações de clientes. Isso normalmente pesa mais do que qualquer ajuste no código.

Depois de trocar o domínio de `amaraltour.vercel.app` para o domínio final, submeta o site no
[Google Search Console](https://search.google.com/search-console) e reenvie o `sitemap.xml` — sem isso
o Google pode demorar bem mais pra indexar as páginas.

## Deploy na Vercel

1. Suba este repositório para o GitHub/GitLab/Bitbucket.
2. Na Vercel, clique em **New Project** e importe o repositório.
3. A Vercel detecta o preset **Vite** automaticamente (build `vite build`, output `dist`) — não é
   necessário nenhum `vercel.json`.
4. Deploy. Depois, atualize os placeholders da tabela acima com o domínio definitivo.

Ou, via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # produção
```
# williamturismo
