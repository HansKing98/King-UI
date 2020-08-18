<template>
    <div class="k-menu-wrapper">
        <div class="k-menu" :class="{'k-menu-vertical': vertical}">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "kMenu",
        data() {
            return {
                selectedPath: [],
                selectedItem: ''
            }
        },
        props: {
            selected: {
                type: String
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        provide() {
            return {
                root: this
            }
        },
        computed: {
        },
        mounted() {
            this.listenToChildren()

        },
        updated() {
            this.listenToChildren()
        },
        methods: {
            listenToChildren() {
                this.selectedItem = this.selected
                this.$children.forEach(vm => {
                    if (vm.name === this.selected) {
                        vm.selected = true
                    } else {
                        vm.selected = false
                    }
                })
            },
            updateSelected(name) {
                this.$emit('update:selected', name)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../styles/var";

    .k-menu {
        display: flex;
        font-size: $font-size;
        &.k-menu-vertical {
            display: inline-flex;
            flex-direction: column;
        }
    }
</style>