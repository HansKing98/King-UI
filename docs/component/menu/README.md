# 菜单 - Menu

## 引入

```bash
import {Menu, SubMenu, MenuItem} from 'king-ui'
```

> 各组件如何配合使用请看代码。

## 预览

<ClientOnly>
<menu-demo/>
</ClientOnly>

## 代码

```vue
<k-menu :selected.sync="selected" class="menu-demo-wrapper">
    <k-menu-item name="draw">绘画</k-menu-item>
    <k-menu-item name="opera">歌剧</k-menu-item>
    <k-sub-menu name="sub1">
        <template slot="title">
            音乐
        </template>
        <k-sub-menu name="sub2">
            <template slot="title">古典音乐</template>
            <k-menu-item name="baLuoKe">巴洛克主义</k-menu-item>
            <k-sub-menu name="sub3">
                <template slot="title">
                    浪漫主义
                </template>
                <k-menu-item name="liSiTe">李斯特</k-menu-item>
                <k-menu-item name="brams">勃拉姆斯</k-menu-item>
            </k-sub-menu>
            <k-menu-item name="classic">古典主义</k-menu-item>
        </k-sub-menu>
        <k-menu-item name="rock">摇滚</k-menu-item>
        <k-menu-item name="rb">R&B</k-menu-item>
    </k-sub-menu>
</k-menu>
```

## API

<table>
    <thead>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </thead>
    <tbody>
      <tr>
        <td>name</td>
        <td>传给 <code>MenuItem</code> 和 <code>SubMenu</code>，标识 <code>MenuItem</code> 和 <code>SubMenu</code>，必传</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>传给 <code>Menu</code>，代表点击的那一项的 name，点击后赋值给 selected</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>vertical</td>
        <td>传给 <code>Menu</code>，开始垂直版本</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
    </tbody> 
</table>

### SubMenu 示例

下方代码，title 的 slot 将作为标题展示，剩余两项为点击标题的展示结果。

```
 <k-sub-menu name="sub2">
    <template slot="title">古典音乐</template>
    <k-menu-item name="baLuoKe">巴洛克主义</k-menu-item>
    <k-menu-item name="classic">古典主义</k-menu-item>
</k-sub-menu>
```
