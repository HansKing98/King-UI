<template>
    <div class="k-sider">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'KSider'
    }
</script>
<style scoped lang="scss">
    .k-sider {
        flex-grow: 1;
    }
</style>