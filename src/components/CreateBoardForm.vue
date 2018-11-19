<template>
	<form @submit.prevent="save">
		<input type="text" :value="board.name" @input="updatedName = $event.target.value">
		<button type="submit">Save</button>
	</form>
</template>

<script>

	export default {
		name: 'CreateBoardForm',
		props: {
			board: Object
		},
		data() {
			return {updatedName: ''};
		},
		methods: {
			save() {
				this.$emit('submit', {
					...this.board,
					name: this.updatedName
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	form {
		* {
			vertical-align: middle;
		}
		input {
			font-size: 16px;
			line-height: 26px;
			padding: 2px 10px;
			width: 200px;
		}
		button {
			font-size: 16px;
			line-height: 26px;
			padding: 2px 5px;
		}
	}
</style>