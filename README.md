# How to set up the project

## 1. Assets

Yarn
- https://yarnpkg.com/

Gulp 4.0.0 Info
- https://fettblog.eu/gulp-4-parallel-and-series/

Google Fonts
- https://fonts.google.com


## 2. Structure

目录结构为:

```
.
├── .gitignore
├── README.md
├── assets
├── dist
├── gulpfile.js
├── index.html
├── package.json
├── scripts
├── stylesheets
├── yarn.lock
└── tslint.json
```

`.gitignore` 文件中放置需要忽略的目录或文件  
`assets` 中是资料目录可以放置 `fonts` `images` 等  
`dists` 中是 gulp 生成的目标目录  
`gulpfile.js` 是 gulp 的代码，可进行编辑定制 gulp 的自动化流程  
`package.json` 里是 gulpfile.js 中用到的 package  
`scripts` 中放置 js 代码  
`stylesheets` 中放置 SCSS 代码  
`tslint.json` ts file 的配置文件

## 3. Set up environment

```
Dependencies: Nodejs, yarn
```

Install yarn
```
brew install yarn
```

Install packages
```
yarn install
yarn add packagename
```

### 4. Run the project

Run the gulp for build
```
(yarn/npm) gulp
```

Run the gulp for development
```
(yarn/npm) gulp serve
```

Run the gulp for production, will compress the css file
```
(yarn/npm) gulp production
```
