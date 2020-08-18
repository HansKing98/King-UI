<template>
    <div class="k-layout-demo">
        <h3>布局 1</h3>
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
        <h3>布局 2</h3>
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
        <h3>布局 3</h3>
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
        <h3>布局 4</h3>
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
    </div>
</template>

<script>
    import KLayout from '../components/Layout/layout'
    import KHeader from '../components/Layout/header'
    import KContent from '../components/Layout/content'
    import KFooter from '../components/Layout/footer'
    import KSider from '../components/Layout/sider'

    export default {
        components: {KLayout, KHeader, KContent, KFooter, KSider}
    }
</script>
<style lang="scss" scoped>
    .k-layout-demo {
        margin-top: 32px;
    }

    .d-layout {
        height: 280px;
        background-color: red;
    }
    .d-header, .d-content, .d-footer, .d-sider {
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
    }
    .d-header {
        height: 64px;
        background-color: #7dbcea;
    }
    .d-content {
        background-color: #118ee9;
    }
    .d-footer {
        height: 64px;
        background-color: #7dbcea;
    }
    .d-sider {
        background-color: #3aa0e9;
    }
</style>