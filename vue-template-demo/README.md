# vue-pc-template

> A Vue.js Template project

### 依赖
1、normalize.css(初始化css)
```
npm install --save normalize.css
// main.js
import 'normalize.css'
```
2、element-ui
```
npm install element-ui -S
// main.js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```
3、vuex
```
npm install vuex --save
// 参考store及main.js
```

4、axios
```
npm install axios --save
// 参考api及main.js
```
5、eventBus
```
// 参考utils eventBus.js
```
6、sass
```
npm install sass-loader@7.3.1 --save-dev // 高版本会报错
npm install node-sass --save-dev //（@4.13.0）
```
