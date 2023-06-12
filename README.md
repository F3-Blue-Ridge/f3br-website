
<h1 align="center">
    <img src="assets/img/logo/f3-blueridge-dark.svg#gh-dark-mode-only">
    <img src="assets/img/logo/f3-blueridge-light.svg#gh-light-mode-only">
</h1>
<p align="center">
  <i align="center">The public-facing website for the F3 Blue Ridge region.</i>
</p>
<p align="center">  
<a href="https://github.com/F3-Blue-Ridge/f3br-website/actions/workflows/jekyll.yml">
    <img src="https://github.com/F3-Blue-Ridge/f3br-website/actions/workflows/jekyll.yml/badge.svg">
    </a>
</p>

<br />

## Theme
Based on the Jekyll Bootstrap 5 Theme [repo](https://github.com/jonaharagon/jekyll-bootstrap-theme )   (see there for additional info on usage).



## Local development

### 1. Clone this repository:

```
git clone https://github.com/F3-Blue-Ridge/f3br-website
```


### 2. Navigate to the directory

```
cd f3br-website
```

### 3. Install dependencies locally

```
yarn run assets:clean && yarn upgrade && yarn run assets:install
```

### 4. Run

Build and host locally for local development:
```
bundle exec jekyll serve
```

Or build and host locally for local development with Livereload:
```
bundle exec jekyll serve -l
```

Or generate the site for production
```
bundle exec jekyll build
```


## Bug reports, feature requests, etc

This is an ongoing project and weI welcome contributions and suggestions! Feel free to submit a [PR](https://github.com/F3-Blue-Ridge/f3br-website/pulls), [issue](https://github.com/F3-Blue-Ridge/f3br-website/issues) or [discussion topic](https://github.com/orgs/F3-Blue-Ridge/discussions).

If you need any help with development, you can reach out to Tink via the F3 Blue Ridge Slack instance or here at [@bingles](https://www.github.com/bingles)
