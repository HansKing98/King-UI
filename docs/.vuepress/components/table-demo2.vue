<template>
  <div class="container1">
    <KTables2/>
  </div>
</template>

<script>
	import KTables2 from "../../../src/views/Tables/Tables2"

	export default {
		name: "table-demo2",
		components: {KTables2}
	}
</script>

<style scoped>
  .container1 {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
