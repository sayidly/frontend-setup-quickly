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

Install Nodejs and Yarn first
```
Dependencies: Nodejs, yarn
```

Install yarn
```
brew install yarn
```

May need to clean the cache before install the packages
```
yarn cache clean
rm yarn.lock
```

Install packages
```
yarn install
yarn add packagename
```

May need to upgrade the package after install packages
```
yarn upgrade --latest
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

## Error

```
gyp: No Xcode or CLT version detected!
gyp ERR! configure error
```

Solution

1. First, get the location of the installed command-line tools by running the command below:
```bash
xcode-select --print-path
```
2. Remove the old command-line tools.
```bash
sudo rm -r -f /Library/Developer/CommandLineTools
```
3. Install the latest command-line tools
```bash
xcode-select --install
```
