# Hexo Theme Ares

![](/source/favicon.png)

[中文](/README.md)

## DEMO

[Click here to view.](https://hexo-theme-ares-demo.netlify.app/)

## Getting Started

Run the following commands to quickly start and run this Hexo theme:

> Windows users are recommended to use **Git Bash**.

```bash
# Initialize blog project
hexo init blog
cd blog

# Install Ares theme
git clone https://github.com/cytrogen/hexo-theme-ares.git themes/ares
sed -i.bak "s/theme: landscape/theme: ares/g" _config.yml && rm _config.landscape.yml
rm -r themes/landscape

# Install dependencies
npm install --save hexo-renderer-pug

# Install plugins
npm install --save hexo-generator-feed hexo-generator-sitemap hexo-browsersync
npm uninstall --save hexo-renderer-marked && npm install --save hexo-renderer-markdown-it-plus

# Start Hexo server
hexo server
```

## Documentation

You can find related documentation in the `docs/` directory. 

Specifically, you might be interested in the following documentation:

- [Usage Guide](/docs/en/guide.md)
- [Configuration Options](/docs/en/configuration.md)

## TODO

- [x] Better friend links block
- [ ] Better local search functionality
- [ ] Better documentation
- [ ] Better code blocks
  - [ ] More language support
  - [X] Code block expand/collapse
  - [X] Code block height limit
- [ ] Remove unnecessary dependencies, CDNs, etc.
- [ ] Add more analytics tools support
- [ ] Add more plugins
  - [ ] Reading time estimation
  - [ ] Mermaid diagrams
  - [ ] FontAwesome without requiring user Kit registration
  - [ ] Image lazy loading
- [X] Internationalization support
  - [ ] Better URL path format for multilingual articles
- [x] Theme DEMO

## Author and Acknowledgments

This theme was forked from [Hexo-Theme-Hermes](https://github.com/claymcleod/hexo-theme-hermes) and moderately modified.

[Hexo-Theme-Apollo](https://github.com/sun4cs/hexo-theme-apollo) is the foundation of it all. They laid the solid foundation for this theme, for which they deserve great credit.
