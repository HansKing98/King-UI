<template>
  <div class="container1">
    <Menus/>
  </div>
</template>

<script>
	import Menus from "../../../src/views/Menus"

	export default {
		name: "input-demo",
		components: {Menus}
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
