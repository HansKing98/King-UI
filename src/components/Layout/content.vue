<template>
    <div class="k-content">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'KContent'
    }
</script>
<style scoped lang="scss">
   .k-content {
       flex-grow: 1;
   }
</style>