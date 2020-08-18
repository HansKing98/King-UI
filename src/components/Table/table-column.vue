<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'KTableColumn',
        props: {
            name: {
                type: String,
                required: true
            },
            field: {
                type: String,
                required: true
            },
            width: {
                type: Number,
                default: '200'
            }
        }
    }
</script>

<style scoped lang="scss">

</style>