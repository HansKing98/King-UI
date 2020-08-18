<template>
  <div id="app">
    <k-table :data-source="dataSource" :height="500" style="">
      <template slot="k-column">
        <k-table-column width="200" name="姓名" field="name"> </k-table-column>
      </template>
      <template slot="k-column">
        <k-table-column width="100" name="年龄" field="age"></k-table-column>
      </template>
      <template slot="k-column">
        <k-table-column name="住址" field="address"></k-table-column>
      </template>
    </k-table>
  </div>
</template>
<script>
import Table from '../../components/Table/table'
import TableColumn from '../../components/Table/table-column'

console.log(Table);
console.log(TableColumn);
export default {
  name: "demo",
  components: { KTable: Table, KTableColumn: TableColumn },
  data() {
    return {
      dataSource: [],
      selected: [],
      sortDirections: {
        name: "asc",
        address: true
      }
    };
  },
  mounted() {
    this.dataSource = [
      {
        id: 1,
        name: "Edward King 0",
        age: 0,
        address: "London Park Lane no 0"
      },
      {
        id: 2,
        name: "Edward King 1",
        age: 0,
        address: "London Park Lane no 1"
      },
      {
        id: 3,
        name: "Edward King 2",
        age: 0,
        address: "London Park Lane no 2"
      },
      {
        id: 4,
        name: "Edward King 3",
        age: 0,
        address: "London Park Lane no 3"
      },
      {
        id: 5,
        name: "Edward King 4",
        age: 0,
        address: "London Park Lane no 4"
      },
      {
        id: 6,
        name: "Edward King 5",
        age: 0,
        address: "London Park Lane no 5"
      },
      {
        id: 7,
        name: "Edward King 6",
        age: 0,
        address: "London Park Lane no 6"
      },
      {
        id: 8,
        name: "Edward King 7",
        age: 0,
        address: "London Park Lane no 7"
      },
      {
        id: 9,
        name: "Edward King 8",
        age: 0,
        address: "London Park Lane no 8"
      },
      {
        id: 10,
        name: "Edward King 9",
        age: 0,
        address: "London Park Lane no 9"
      },
      {
        id: 11,
        name: "Edward King 10",
        age: 0,
        address: "London Park Lane no 10"
      },
      {
        id: 12,
        name: "Edward King 11",
        age: 0,
        address: "London Park Lane no 11"
      },
      {
        id: 13,
        name: "Edward King 12",
        age: 0,
        address: "London Park Lane no 12"
      }
    ];
  },
  methods: {}
};
</script>
<style lang="scss">
#app {
  border-radius: 4px;
  border: 1px solid #ddd;
}
.k-table-wrapper {
  padding-top: 100px;
}
</style>
