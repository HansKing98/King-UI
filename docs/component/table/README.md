# 表格 - Table

## 引入

```
import {Table, TableColumn} from 'king-ui'
```

## 预览

<ClientOnly>
<table-demo2/>
</ClientOnly>

## API 

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| dataSource | 要展示在表格的数据，每一项的 key 值需要和 `TableColumn` 的 name 相对应 | Array | - |
| bordered | 是否需要边框 | Boolean | false |
| striped | 是否开启斑马纹 | Boolean | true |
| size | 控制表格的大小，可以传 big 、 middle 、small | Boolean | Big |
| sortDirections | 可以控制每一项的排序规则，可选 asc，desc，true | String | Boolean | - |
| height | 接收 String 类型的数字，指定表格的高度，传此项开启固定表头的功能。如指定此项，请为 dataSource 数据的每一个对象都添加一个 width 属性来控制宽度 | String | - |
| loading | 表示表格数据正在加载 | Boolean | false | 
| selectedItems | 请传一个空的数组，如果传此值，将展示最左侧的 `checkbox` ，选中的值会被加入进入| Array | - |

:::warning
使用 `selectedItems` 这个属性的时候也要加 `.sync` 这个修饰符，不然点击没有效果。
::: 

### sortDirections 使用举例

```js
sortDirections: {
    name: "asc",
    address: true
}
```

### 关于 `TableColumn`

`Table` 中的每一项都要这么传

```vue
<template slot="k-column">
    <k-table-column name="姓名" field="name">
    </k-table-column>
</template>
```

slot 的名字一定要是 k-column，内部 `k-table-column` 的姓名将按顺序展示在表格的头部，field 的内容和 dataSource 数据中的每一项相对应。

如果你想传 html 元素进去，也是可以的，请按照下面的示例。

```
<template slot="k-column">
    <k-table-column name="姓名" field="id"> 
        <template slot-scope="source">
         <button @click="edit(source)">编辑</button>
        </template>
    </k-table-column>
</template>
```
