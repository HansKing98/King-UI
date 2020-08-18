# 输入框 - Input

## 引入 

```bash
import {Input} from 'king-ui'
```

## 使用方法

和普通 input 框使用一致，支持 `v-model` 的写法。

## 预览

<ClientOnly>
<input-demo/>
</ClientOnly>

## 代码

::: details 点击查看源码
```vue 
<k-input placeholder="正常" v-model="message"></k-input>
<k-input placeholder="禁用" disabled></k-input>
<k-input placeholder="只读" read-only value="我是只读"></k-input>
<k-input placeholder="错误信息在默认位置" error-position="right" error="错误信息"></k-input>
<k-input placeholder="错误信息在下方" error-position="bottom" error="错误信息"></k-input>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| disabled | 禁用 input 框 | Boolean | false |
| readOnly | 只读属性 | Boolean | false |
| error | 展示错误信息 | String | - |
| errorPosition | 错误信息的位置，支持 `left` 和 `bottom` | String | left |

