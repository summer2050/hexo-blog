# 配置项

## 目录 <!-- omit in toc -->

- [配置项](#配置项)
  - [菜单](#菜单)
    - [链接配置](#链接配置)
    - [功能按钮配置](#功能按钮配置)
  - [i18n](#i18n)
  - [评论](#评论)
  - [友情链接](#友情链接)
  - [Google Analytics](#google-analytics)
  - [本地搜索](#本地搜索)

> 首先你要清楚，Hexo 的配置文件有**两个**：
> 
> - Hexo 配置文件，位于根目录正下方的 `_config.yml`
> - 主题配置文件，位于 `themes/ares` 目录内的 `_config.yml`

## 菜单

在主题配置文件中，你可以自由配置菜单栏的内容和布局。主题将导航栏分为了 `primary`（主导航）和 `secondary`（副导航）两个部分，每个部分都可以包含链接（`links`）和功能按钮（`buttons`）。

### 链接配置

链接（`links`）用于配置具体的页面导航。每个链接都包含以下三个关键字段：

- `type`：链接类型，可以是 `internal`（内部链接）或 `external`（外部链接）
- `key`：用于多语言的键名，与 `themes/ares/languages` 目录下的语言文件相对应
- `path`：链接的实际 URL 路径

以下是完整的链接配置示例：

```yaml
# 导航栏配置，定义了主次导航栏的内容和布局。
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

### 功能按钮配置

功能按钮（`button`）用于配置一些特殊功能，如语言切换或搜索。每个按钮包含以下三个关键字段：

- `type`：按钮类型，目前仅支持 `component`
- `key`：用于多语言的键名，例如 `language`、`search`
- `component`：主题内置的组件名称，目前支持 `language-switcher` 和 `search`

以下是完整的功能按钮配置示例：

```yaml
# 导航栏配置，定义了主次导航栏的内容和布局。
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

> **注意**：旧版菜单配置中的 `home`、`archive` 等键名已不再使用，请参考新的配置结构进行更新。

> 如果你想要创建归档、分类、标签页面，并且想要启动 i18n 的话，可以参考[这里](#i18n)。
>
> 或者不想要启动 i18n 的话，你可以选择去安装：
>
> ```bash
> npm install --save hexo-generator-index hexo-generator-archive hexo-generator-category hexo-generator-tag
> ```
>
> 关于它们的配置项，请自行去对应的仓库内查看。

```yaml
# 导航栏布局配置，决定了不同功能按钮在导航栏中的位置分布
nav:
  pages:          # 导航栏上层：基础页面导航
    - home        # 首页
    - archive     # 归档
    - categories  # 分类
    - tags        # 标签
    - about       # 关于
  
  external:       # 导航栏中层：外部链接
    - github      # GitHub 链接
    - rss         # RSS 订阅
  
  utility:        # 导航栏下层：实用工具
    - friends     # 友情链接
    - languages   # 语言切换菜单
    - search      # 搜索功能
```

## i18n

> 以下示例中使用的 `zh` 或 `en` 仅作为语言代码示范，您可以将其替换为任何语言代码，只需确保这些代码与 `themes/ares/languages` 目录下对应的 `yaml` 文件名**保持一致**即可。

如果想要把网站 i18n 化，那就需要安装以下依赖：

```bash
npm install --save hexo-generator-plus
```

> 值得注意的是，该依赖**也可以生成索引、归档、分类和标签页面。**
>
> 如果这些功能也是你想要的，那么可以参考[该仓库的 `README`](https://github.com/kiwirafe/hexo-generator-plus) 来进行配置：
>
> ```yaml
> generator_plus:
>   pagination_dir: 'page'      # 分页目录
>   generators: ["index", "archive", "category", "tag"]
>
>   index_generator:            # 索引生成器
>     per_page: 10              # 每页显示的文章数
>     order_by: -date           # 文章排序
>
>   archive_generator:          # 归档生成器
>     per_page: 10
>     order_by: -date
>
>   category_generator:         # 分类生成器
>     per_page: 10
>     order_by: -date
>     enable_index_page: false  # 是否生成索引页面
>
>   tag_generator:              # 标签生成器
>     per_page: 10
>     order_by: -date
>     enable_index_page: false
> ```

接着在 Hexo 配置文件中添加以下内容：

```yaml
# Hexo 原有的
language: [zh, en]
new_post_name: :title.md

# 如果你安装了 Hexo-Abbrlink
permalink: posts/:abbrlink.html
abbrlink:
  rep: hex

# Hexo-Generator-Plus 的配置
generator_plus:
  language: [zh, en]
```

然后在主题配置文件中配置以下内容：

> Hexo-Theme-Ares 对于 i18n 的逻辑为：
>
> 1. 如果当前的语言是默认语言，那么完整的网址会是 `网站域名/`
>    - 例：`https://cytrogen.icu/`
> 2. 如果当前的语言并非默认语言，那么完整的网址会是 `网站域名/语言/`
>    - 例：`https://cytrogen.icu/en/`

> 目前 Hexo-Theme-Ares 主题在多语言文章的 URL 路径显示上存在**局限性**，无法按照 `网站域名/语言/_posts/xxx.html` 的格式进行展示，而是统一以 `网站域名/_posts/xxx.html` 的默认格式呈现。

```yaml
default_lang: 你想要的默认语言
```

对于博客根目录的 `source` 目录结构，必须是这样的：

```
source/
├── _posts/                     # 默认语言的所有博文
│   └── *.md                    # 不能有子目录
├── en/                         # 英文版特定内容
│   └── 与 source 目录结构相同
├── archives/                   # 归档页面
│   └── index.md                # layout: archive
├── categories/                 # 分类页面
│   └── index.md                # layout: category-index
└── tags/                       # 标签页面
    └── index.md                # layout: tag-index
```

> 对于上述目录中各个 `index.md` 文件，需要在文件头部添加相应的页面信息。
> 
> 例如归档页面的 `index.md` 应包含以下内容：
>
> ```markdown
> ---
> title: 归档
> date:
> lang: zh
> layout: archive
> ---
> ```

## 评论

Hexo-Theme-Ares 支持 [Disqus](https://disqus.com/) 评论插件。

请在主题配置项中这样设置：

```yaml
disqus: 你的 Website Name
```

## 友情链接

在主题配置文件中添加友情链接：

```yaml
friend_links:
    - name: 第一个友链
      url: https://example.com
      description: 巴拉巴拉巴拉
      lang: zh
    - name: 第二个友链
      url: https://example2.com
      description: 巴拉巴拉巴拉
      lang: zh
```

然后在 `source` 目录下创建 `friends/index.md` 文件：

```markdown
---
title: 友情链接
lang: zh
date:
layout: friendlinks
---

你想要在友情链接页面中说的话。
```

## Google Analytics

在主题配置文件中添加 `ga` 设置项来启动 Google Analytics：

```yaml
ga: G-xxxxxxxxxx
```

## 本地搜索

安装依赖项 [Hexo-Generator-Search](https://github.com/wzpan/hexo-generator-search)：

```bash
npm install --save hexo-generator-search
```

将 `search/search.xml` 移动至项目根目录（只需要移动 `search.xml`，不需要移动 `search` 目录）。

在 Hexo 配置文件中添加以下内容：

```yaml
search:
  path: search.xml
  field: post
  content: true
  template: ./search.xml
```

再在 `themes/ares/_config.yml` 中添加 `fas` 设置项，填入注册好的 FontAwesome Kit 名（使用免费版即可）：

```yaml
fas: xxxxxxxxxx
```
