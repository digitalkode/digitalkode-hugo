## DIGITALKODE

A digitalkode theme build with [Hugo](https://gohugo.io/) 🍜

## HOW TO 

At the root of your Hugo project, run:

```bash
git submodule add https://github.com/digitalkode/digitalkode-hugo.git themes/digitalkode-hugo
```

Next, copy the contents of the [`exampleSite/config.toml`](https://github.com/digitalkode/digitalkode-hugo/blob/master/exampleSite/config.toml) to your site's `config.toml`. Make sure to read all the comments, as there a few nuances with Hugo themes that require some changes to that file.

The most important change you will need to make to the `config.toml` is removing [this line](https://github.com/jakewies/hugo-theme-codex/blob/master/exampleSite/config.toml#L2):

```
themesDir = "../../" 
```

It only exists in the example site so that the demo can function properly.

Finally, run:

```
hugo server -D 
```
