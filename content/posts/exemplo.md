---
title: "Guia Completo de Markdown para Posts"
date: "09-08-2026"
description: "Aprenda todas as formas de estilizar seus posts usando Markdown"
image: "/images/default.jpg"
slug: "guia-markdown"
tags: ["markdown", "tutorial"]
---

# Guia Completo de Markdown para Posts

Bem-vindo ao guia de Markdown! Aqui você encontrará todas as maneiras de estilizar seu conteúdo usando apenas Markdown puro.

## Estrutura de um Post

Todo post começa com um cabeçalho YAML entre `---`. Este cabeçalho define metadados importantes:

```yaml
---
title: "Título do seu post"
date: "09-08-2026"
description: "Descrição curta para aparecer na lista"
image: "/images/seu-arquivo.jpg"
slug: "url-do-seu-post"
tags: ["tag1", "tag2"]
---
```

## Títulos e Subtítulos

Use `#` para criar títulos em diferentes níveis:

- `#` = Título principal (H1)
- `##` = Subtítulo (H2)
- `###` = Sub-subtítulo (H3)
- `####` = E assim por diante

## Formatação de Texto

### Texto com Ênfase

Você pode fazer o texto **negrito** usando `**texto**` ou `__texto__`.

Também pode fazer *itálico* usando `*texto*` ou `_texto_`.

E até mesmo ***negrito e itálico*** combinados com `***texto***`.

Também é possível fazer ~~tachado~~ com `~~texto~~`.

## Listas

### Lista Não Ordenada

Listas sem ordem usam `-`, `*` ou `+`:

- Item um
- Item dois
  - Item aninhado
  - Outro aninhado
- Item três

### Lista Ordenada

Listas ordenadas usam números:

1. Primeiro item
2. Segundo item
   1. Sub-item ordenado
   2. Outro sub-item
3. Terceiro item

## Links e Referências

Você pode criar [links simples](https://nextjs.org) usando `[texto](url)`.

Ou referências como [Next.js][nextjs] e depois definir a URL embaixo.

[nextjs]: https://nextjs.org

## Código

### Código Inline

Use uma crase para código inline: `const x = 10;`

### Blocos de Código

Use três crases para blocos de código com destaque de sintaxe:

```javascript
function somarNumeros(a, b) {
    return a + b;
}

const resultado = somarNumeros(5, 3);
console.log(resultado); // 8
```

Você pode especificar a linguagem para melhor destaque:

```python
def greet(name):
    print(f"Olá, {name}!")

greet("Mundo")
```

```html
<div class="container">
    <p>Estrutura HTML é suportada</p>
</div>
```

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}
```

## Blocos de Citação

Use `>` para criar blocos de citação:

> "O código limpo sempre parece ter sido escrito por alguém que se importa"
> — Robert C. Martin

Você pode ter múltiplos níveis:

> Uma citação
> > Uma citação dentro de uma citação
> > > E mais uma

## Imagens

Insira imagens usando a sintaxe de link com `!`:

```markdown
![Descrição alternativa](/images/seu-arquivo.jpg)
```

A descrição alternativa (alt text) é importante para acessibilidade.

### Exemplo de Imagem

![Livros e desenvolvimento](/images/livros.jpg)

Você pode inserir imagens em qualquer lugar do seu post. As imagens devem estar na pasta `/public/images/`.

**Imagens disponíveis:**
- `/images/default.jpg` - Imagem padrão
- `/images/filmes.jpg` - Para posts sobre filmes
- `/images/livros.jpg` - Para posts sobre livros
- `/images/musica.jpg` - Para posts sobre música
- `/images/cozy.jpg` - Para posts relaxantes
- `/images/wikipedia.jpg` - Para posts informativos

## Tabelas

| Linguagem | Ano | Uso |
|-----------|-----|-----|
| JavaScript | 1995 | Web |
| Python | 1991 | IA, Dados |
| Go | 2009 | Backend |
| Rust | 2010 | Sistemas |

## Linhas Horizontais

Use `---` ou `***` ou `___` para criar uma linha divisória:

---

Útil para separar seções visualmente.

## Listas de Tarefas

- [x] Aprender Markdown
- [x] Criar primeiro post
- [ ] Compartilhar com amigos
- [ ] Ganhar mil seguidores

## Dicas Importantes

> 💡 **Dica:** Sempre adicione uma descrição em seus posts para que apareça bem na lista de artigos.

> ⚠️ **Aviso:** A imagem do post deve estar em `/public/images/` para funcionar corretamente.

> ✅ **Boa prática:** Use slugs descritivos e em minúsculas, sem acentos.
