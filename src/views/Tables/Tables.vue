<template>
    <div id="app">
        <k-table :data-source="dataSource" :height="500">
            <template slot="k-column">
                <k-table-column name="姓名" field="name">
                </k-table-column>
            </template>
            <template slot="k-column">
                <k-table-column name="年龄" field="age" ></k-table-column>
            </template>
            <template slot="k-column">
                <k-table-column name="住址" field="address"></k-table-column>
            </template>
        </k-table>
    </div>
</template>
<script>
    import KTable from '../../components/Table/table'
    import KTableColumn from '../../components/Table/table-column'

    export default {
        name: 'tables',
        components: {KTable, KTableColumn},
        data() {
            return {
                columns: [
                    {name: '姓名', field: 'name', width: 50},
                    {name: '年龄', field: 'age', width: 80},
                    {name: '住址', field: 'address', width: 80},
                ],
                dataSource: [],
                selected: [],
                sortDirections: {
                    name: 'asc',
                    address: true
                }
            }
        },
        mounted() {
            this.dataSource = [
                {id: 1, name: '周杰伦', age: 40, address: '台北'},
                {id: 2, name: '周杰', age: 40, address: '湖北', description: 'hello world'},
                {id: 3, name: '杰伦', age: 40, address: '山东'},
                {id: 4, name: '周伦', age: 40, address: '福建'},
                {id: 5, name: '伦', age: 40, address: '杭州'},
                {id: 6, name: '文哲', age: 40, address: '山东'},
                {id: 7, name: '勃拉姆斯', age: 40, address: '国外'},
            ]

        },
        methods: {
        },
    }
</script>
<style lang="scss">

    .sticky {
        position: fixed;
    }
</style>
