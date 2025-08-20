# User Guide

## Table of Contents <!-- omit in toc -->

- [User Guide](#user-guide)
  - [Meta Description](#meta-description)
    - [Index Pages](#index-pages)
  - [Headers](#headers)
  - [Display Post Preview](#display-post-preview)
  - [Warning Blocks](#warning-blocks)
  - [Collapsible Content](#collapsible-content)
  - [Code Blocks](#code-blocks)
  - [Favicon](#favicon)
  - [Mermaid](#mermaid)

## Meta Description

The meta description is a short summary of a website's content used by search engines.

The meta description for a page preferentially uses the `description` you set in the Front Matter. If you don't set one, Hexo-Theme-Ares will automatically generate it in the following order of priority:

1. `page.description`: If you have set the `description` attribute in the Front Matter
2. `page.excerpt`: If `description` does not exist, the theme will use the excerpt. For more details on excerpts, see [here](#display-post-preview)
3. Default value: If neither of the above exists, the theme will use the page title and author as the default description, in the format: `[Post Title] - [Author]`

If you set `description` in the article's Front Matter:

```markdown
---
title: Test
date: 2024-04-01 00:00:00
description: Blah blah blah
---
```

The final generated HTML will be:

```html
<meta name="description" content="Blah blah blah">
```

### Index Pages

> Index pages include the main article index, tag index pages, and category index pages.

The meta description for index pages is simpler. It directly uses the `description` attribute from Hexo's site configuration file `_config.yml`. If it is not set in the site configuration, the theme will use a hardcoded default value: `'A Blog Powered By Hexo'`.

In `_config.yml`:

```yaml
description: "My personal blog, focusing on front-end technology sharing."
```

The final HTML generated on an index page will be:

```html
<meta name="description" content="My personal blog, focusing on front-end technology sharing.">
```

## Headers

Hexo-Theme-Ares only supports three types of headers:

- `h1` for large headers
- `h2` and `h3` for medium headers
- `h4` through `h6` are all small headers

This is done to maintain the simplicity and readability of blog post structure, rather than nesting multiple levels that distract from the content.

## Display Post Preview

If you want to include some article preview text in the blog index, you can include the `<!-- more -->` statement.

All content before the `<!-- more -->` statement will be parsed and displayed in the index.

```markdown
---
title: Test
date: 2024-04-01 00:00:00
desc: Blah blah blah.
---

Text that will appear under the title on the blog homepage.

<!-- more -->

Content that can only be seen when entering the article page.
```

## Warning Blocks

Use a `div` tag with class `danger` to render warning blocks:

```html
<div class="danger">

This is an example!		
		
</div>
```

## Collapsible Content

Use `details` and `summary` tags to create collapsible content:

```html
<details>
<summary>Click to expand</summary>

This is the collapsed content...
Can contain any markdown content

- List items
- Code blocks
- etc.

</details>
```

If `summary` is not specified, it will show the default "Details".

## Code Blocks

The complete syntax for code blocks is:

````markdown
```[language] [title] [url] [link text] [additional options]
code snippet
```
````

Where:

- language: specify the code language
- title: title of the code block
- url: source link of the code
- link text: display text for the link
- additional options: additional options, check [Hexo's doc](https://hexo.io/docs/tag-plugins.html#Code-Block)
- code snippet: the code content

## Favicon

Find `favicon.png` in the `themes/ares/source` directory, rename your desired image to `favicon.png` and replace the original image. The image must be `256 * 256`.

## Mermaid

Currently, to enable Mermaid functionality in Hexo-Theme-Ares, you still need to use the [Hexo-Mermaid-Diagrams](https://github.com/mslxl/hexo-mermaid-diagrams) dependency. The steps are also relatively complex:

1. First, create a `libs` directory in the root directory and install Hexo-Mermaid-Diagrams inside it.

    > You can choose to install directly using NPM.
    >
    > However, since Hexo-Mermaid-Diagrams uses an old version of Mermaid (9.1.7), if you want to use a newer version of Mermaid, you'll need to modify its files. Since the `node_modules` directory is not tracked by Git by default, using NPM installation is **not recommended**.

2. Modify `libs/hexo-mermaid-diagrams/index.html` to:

    ```html
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="./fontawesome-free/css/all.min.css">
      </head>
      <body>
        <div id="container"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js" integrity="sha512-6a80OTZVmEJhqYJUmYd5z8yHUCDlYnj6q9XwB/gKOEyNQV/Q8u+XeSG59a2ZKFEHGTYzgfOQKYEBtrZV7vBr+Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </body>
    </html>
    ```

    > If you find a newer version of `mermaid.min.js`, you can replace the above `<script>` tag yourself.

3. Then delete `libs/hexo-mermaid-diagrams/mermaid.min.js`.

Usage is very simple:

```markdown
{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}
```

For syntax, please refer to the [Mermaid official website](https://mermaid.js.org/intro/).
