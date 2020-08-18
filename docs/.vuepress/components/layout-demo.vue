<template>
  <div class="container1">
    <KLayout/>
  </div>
</template>

<script>
	import KLayout from "../../../src/views/Layouts"

	export default {
		name: "layout-demo",
		components: {KLayout}
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
