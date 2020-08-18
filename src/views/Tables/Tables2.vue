<template>
  <div id="app">
    <k-table
      :data-source="dataSource"
      :selected-items.sync="selectedItems"
      :sort-directions.sync="sortDirections"
    >
      <template slot="k-column">
        <k-table-column name="姓名" field="name"> </k-table-column>
      </template>
      <template slot="k-column">
        <k-table-column name="年龄" field="age"></k-table-column>
      </template>
      <template slot="k-column">
        <k-table-column name="住址" field="address"></k-table-column>
      </template>
      <template slot="k-column">
        <k-table-column name="操作" field="id">
          <template slot-scope="source">
            <button @click="sayHi(source);">编辑</button>
          </template>
        </k-table-column>
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
  name: "tables2",
  components: { KTable: Table, KTableColumn: TableColumn },
  data() {
    return {
      dataSource: [],
      selectedItems: [],
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
      }
    ];
  },
  methods: {
    sayHi(source) {
      alert("hi");
      alert(JSON.stringify(source));
    }
  }
};
</script>
