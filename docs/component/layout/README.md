# 布局 - Layout

## 引入

```bash
import {Layout, Header, Footer, Content, Sider} from 'king-ui'
```

## 预览

<ClientOnly>
<layout-demo/>
</ClientOnly>

## 代码

<details style="">
  <summary style="margin-top: 32px; outline: none">点击查看代码</summary>
  
```vue

<!-- 布局 1 -->
<k-layout class="d-layout">
    <k-header class="d-header">
        header
    </k-header>
    <k-content class="d-content">
        content
    </k-content>
    <k-footer class="d-footer ">
        footer
    </k-footer>
</k-layout>

<!-- 布局 2 -->
<k-layout class="d-layout">
    <k-header class="d-header">
        header
    </k-header>
    <k-layout>
        <k-sider class="d-sider">sider</k-sider>
        <k-content class="d-content" style="width: 300px;">
            content
        </k-content>
    </k-layout>
    <k-footer class="d-footer ">
        footer
    </k-footer>
</k-layout>

<!-- 布局 3 -->
<k-layout class="d-layout">
    <k-header class="d-header">
        header
    </k-header>
    <k-layout>
        <k-content class="d-content" style="width: 300px;">
            content
        </k-content>
        <k-sider class="d-sider">sider</k-sider>
    </k-layout>
    <k-footer class="d-footer ">
        footer
    </k-footer>
</k-layout>

<!-- 布局 4 -->
<k-layout class="d-layout">
    <k-sider class="d-sider">sider</k-sider>
    <k-layout style="width: 300px">
        <k-header class="d-header">
            header
        </k-header>
        <k-content class="d-content">
            content
        </k-content>
        <k-footer class="d-footer">
            footer
        </k-footer>
    </k-layout>
</k-layout>

```   
</details>

## API

无


--- 

::: tip
由于该组件采用了 `flex-grow` 来占满剩余空间，如果需要调整宽度，只能通过调大宽度的方式来挤压另外一个，比如当 Sider 和 Content 同行时，需要通过调大宽度来控制两者的宽度。
举例子来说，总宽度为 100px，要想让 sider 占 20px，需要给定它旁边元素的宽度 80px。
:::
