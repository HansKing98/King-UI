<template>
    <div class="k-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'KLayout',
        data() {
            return {
                layoutClass: {
                    kHasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach(vm => {
                if (vm.$options.name === 'KSider') {
                    this.layoutClass.kHasSider = true
                }
            })
        }
    }
</script>
<style scoped lang="scss">
    .k-layout {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.kHasSider {
            flex-direction: row;
        }
    }

</style>