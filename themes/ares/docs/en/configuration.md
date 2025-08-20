# Configuration Options

## Table of Contents <!-- omit in toc -->

- [Configuration Options](#configuration-options)
  - [Menu](#menu)
    - [Link Configuration](#link-configuration)
    - [Function Button Configuration](#function-button-configuration)
  - [i18n](#i18n)
  - [Comments](#comments)
  - [Blogroll](#blogroll)
  - [Google Analytics](#google-analytics)
  - [Local Search](#local-search)

> First, you should understand that there are **two** configuration files in Hexo:
> 
> - Hexo configuration file, located at `_config.yml` in the root directory
> - Theme configuration file, located at `_config.yml` in the `themes/ares` directory

## Menu

In the theme configuration file, you can freely configure the content and layout of the menu bar. The theme divides the navigation bar into `primary` and `secondary` sections, each of which can contain `links` and `buttons`.

### Link Configuration

Links are used to configure specific page navigation. Each link contains the following three key fields:

- `type`: The link type, which can be `internal` or `external`
- `key`: The key name for multi-language support, corresponding to the language files in the `themes/ares/languages` directory
- `path`: The actual URL path of the link

Here is a complete example of link configuration:

```yaml
# Navigation bar configuration, defining the content and layout of the primary and secondary navigation bars.
nav:
  primary:
    links:
      - type: internal
        key: home
        path: /
  
  secondary:
    links:
      - type: internal
        key: archive
        path: /archives
      - type: internal
        key: categories
        path: /categories
      - type: internal
        key: tags
        path: /tags
      - type: external
        key: github
        path: https://github.com/cytrogen/hexo-theme-ares
```

### Function Button Configuration

Function buttons (`button`) are used to configure special functions, such as language switching or search. Each button contains the following three key fields:

- `type`: The button type, currently only `component` is supported
- `key`: The key name for multi-language support, such as `language` or `search`
- `component`: The name of a built-in theme component, currently supporting `language-switcher` and `search`

Here is a complete example of function button configuration:

```yaml
# Navigation bar configuration, defining the content and layout of the primary and secondary navigation bars.
nav:
  primary:
    buttons:
      - type: component
        key: language
        component: language-switcher
      - type: component
        key: search
        component: search
```

> **Note**: The `home`, `archive`, etc., keys from the old menu configuration are no longer in use. Please update your configuration according to the new structure.

> If you want to create archive, category, and tag pages, and want to enable i18n, you can refer to [here](#i18n).
>
> Or if you don't want to enable i18n, you can choose to install:
>
> ```bash
> npm install --save hexo-generator-index hexo-generator-archive hexo-generator-category hexo-generator-tag
> ```
>
> For their configuration options, please check the corresponding repositories.

```yaml
# Navigation bar layout configuration, determining the position distribution of different function buttons in the navigation bar
nav:
  pages:          # Navigation bar upper layer: basic page navigation
    - home        # Homepage
    - archive     # Archive
    - categories  # Categories
    - tags        # Tags
    - about       # About
  
  external:       # Navigation bar middle layer: external links
    - github      # GitHub link
    - rss         # RSS feed
  
  utility:        # Navigation bar lower layer: utility tools
    - friends     # Blogroll
    - languages   # Language switching menu
    - search      # Search function
```

## i18n

> The `en` or `zh` used in the following examples are just language code demonstrations. You can replace them with any language code, as long as these codes **match** the corresponding `yaml` filename in the `themes/ares/languages` directory.

If you want to internationalize your website, you need to install the following dependency:

```bash
npm install --save hexo-generator-plus
```

> Note that this dependency **can also generate index, archive, category, and tag pages.**
>
> If you want these features as well, you can refer to [the repository's `README`](https://github.com/kiwirafe/hexo-generator-plus) for configuration:
>
> ```yaml
> generator_plus:
>   pagination_dir: 'page'      # Pagination directory
>   generators: ["index", "archive", "category", "tag"]
>
>   index_generator:            # Index generator
>     per_page: 10              # Number of posts per page
>     order_by: -date           # Post sorting
>
>   archive_generator:          # Archive generator
>     per_page: 10
>     order_by: -date
>
>   category_generator:         # Category generator
>     per_page: 10
>     order_by: -date
>     enable_index_page: false  # Whether to generate index page
>
>   tag_generator:              # Tag generator
>     per_page: 10
>     order_by: -date
>     enable_index_page: false
> ```

Then add the following to the Hexo configuration file:

```yaml
# Original Hexo configuration
language: [en, zh]
new_post_name: :title.md

# If you have installed Hexo-Abbrlink
permalink: posts/:abbrlink.html
abbrlink:
  rep: hex

# Hexo-Generator-Plus configuration
generator_plus:
  language: [en, zh]
```

Then configure the following in the theme configuration file:

> Hexo-Theme-Ares' i18n logic is:
>
> 1. If the current language is the default language, the complete URL will be `site-domain/`
>    - Example: `https://cytrogen.icu/`
> 2. If the current language is not the default language, the complete URL will be `site-domain/language/`
>    - Example: `https://cytrogen.icu/en/`

> Currently, Hexo-Theme-Ares has **limitations** in displaying multilingual article URL paths, and cannot display them in the format `site-domain/language/_posts/xxx.html`, instead showing them in the default format `site-domain/_posts/xxx.html`.

```yaml
default_lang: your desired default language
```

For the `source` directory structure in the blog root directory, it must be like this:

```
source/
├── _posts/                     # All blog posts in default language
│   └── *.md                    # No subdirectories allowed
├── zh/                         # Chinese-specific content
│   └── Same structure as source directory
├── archives/                   # Archive page
│   └── index.md                # layout: archive
├── categories/                 # Categories page
│   └── index.md                # layout: category-index
└── tags/                       # Tags page
    └── index.md                # layout: tag-index
```

> For each `index.md` file in the above directory, you need to add corresponding page information in the file header.
> 
> For example, the archive page's `index.md` should contain:
>
> ```markdown
> ---
> title: Archive
> date:
> lang: en
> layout: archive
> ---
> ```

## Comments

Hexo-Theme-Ares supports the [Disqus](https://disqus.com/) comment plugin.

Please set it up in the theme configuration like this:

```yaml
disqus: your Website Name
```

## Blogroll

Add links to others' blogs in the theme configuration file:

```yaml
friend_links:
    - name: First Friend Link
      url: https://example.com
      description: blah blah blah
      lang: en
    - name: Second Friend Link
      url: https://example2.com
      description: blah blah blah
      lang: en
```

Then create `friends/index.md` file in the `source` directory:

```markdown
---
title: Blogroll
lang: en
date:
layout: friendlinks
---

What you want to say on the blogroll page.
```

## Google Analytics

Add the `ga` configuration item in the theme configuration file to enable Google Analytics:

```yaml
ga: G-xxxxxxxxxx
```

## Local Search

Install the dependency [Hexo-Generator-Search](https://github.com/wzpan/hexo-generator-search):

```bash
npm install --save hexo-generator-search
```

Move `search/search.xml` to the project root directory (only move `search.xml`, not the `search` directory).

Add the following to the Hexo configuration file:

```yaml
search:
  path: search.xml
  field: post
  content: true
  template: ./search.xml
```

Then add the `fas` configuration item in `themes/ares/_config.yml`, fill in your registered FontAwesome Kit name (free version is sufficient):

```yaml
fas: xxxxxxxxxx
```
