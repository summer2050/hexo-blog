# Hexo Theme Ares

![](source/favicon.png)

[ENGLISH](/docs/en/README.md)

## DEMO

[点击这里查看。](https://hexo-theme-ares-demo.netlify.app/)

## 开始使用

运行以下命令即可快速启动并运行这个 Hexo 主题：

> Windows 用户推荐使用 **Git Bash**。

```bash
# 初始化博客项目
hexo init blog
cd blog

# 安装 Ares 主题
git clone https://github.com/cytrogen/hexo-theme-ares.git themes/ares
sed -i.bak "s/theme: landscape/theme: ares/g" _config.yml && rm _config.landscape.yml
rm -r themes/landscape

# 安装依赖项
npm install --save hexo-renderer-pug

# 安装插件
npm install --save hexo-generator-feed hexo-generator-sitemap hexo-browsersync
npm uninstall --save hexo-renderer-marked && npm install --save hexo-renderer-markdown-it-plus

# 启动 Hexo server
hexo server
```

## 文档

您可以在 `docs/` 目录中找到相关文档。具体来说，您可能会对以下方面的文档感兴趣：

- [使用说明](docs/guide.md)
- [配置项](docs/configuration.md)

## TODO

- [X] 更好的友情链接区块
- [ ] 更好的本地搜索功能
- [ ] 更好的文档
- [ ] 更好的代码块
  - [ ] 更多的语言支持
  - [X] 代码块展开/关闭
  - [X] 代码块高度限制
- [ ] 去除多余的依赖项、CDN 等
- [ ] 添加更多的分析工具支持
- [ ] 添加更多的插件
  - [ ] 阅读时间估计
  - [ ] Mermaid 图
  - [ ] FontAwesome 不需要用户另外注册 Kit
  - [ ] 图片懒加载
- [X] 国际化支持
  - [ ] 更好的多语言文章 URL 路径格式
- [X] 主题 DEMO

## 作者与鸣谢

本主题是从 [Hexo-Theme-Hermes](https://github.com/claymcleod/hexo-theme-hermes) fork 而来，并进行了适度修改。

[Hexo-Theme-Apollo](https://github.com/sun4cs/hexo-theme-apollo) 则是这一切的基础。他们为本主题打下了坚实的基础，对此他们功不可没。
