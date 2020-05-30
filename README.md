### 使用方法
```
npm install vue-bottom-actionsheet --save
```

### main.js
```js
import 'vue-bottom-actionsheet/lib/vue-bottom-actionsheet.css'
import vueActionsheet from 'vue-bottom-actionsheet'
Vue.use(vueActionsheet)
```

### vue页面中使用
```vue
<my-actionsheet v-model="show" :actions="actions" @confirm="confirm" cancel-text="知道了"></my-actionsheet>
```

### API

| 名称        | 类型              | 默认值 |
| ----------- | ----------------- | ------ |
| show        | Boolean           | false  |
| actions     | Array菜单项数组          | [] |
| cancelText  | 取消按钮文案 | 取消  |
### 方法

| 方法名  | 返回值           |
| ------- | ---------------- |
| confirm | index 菜单项数组下标|

