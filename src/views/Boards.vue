<template>
	<div class="boards">
		<div>
			<h3>Add Board:</h3>
			<CreateBoardForm @update="getBoards"></CreateBoardForm>
		</div>

		<div class="boards-list">
			<router-link v-for="board in getBoards" :to="{name: 'board', params: {id: board.id}}"
			             class="board-item">
				{{board.name}}
			</router-link>
		</div>
	</div>
</template>
<script>
    import { mapGetters } from "vuex";
	import CreateBoardForm from "../components/CreateBoardForm";
	// boards getter here
	export default {
		components: {CreateBoardForm},
		data() {
			return {
				boards: []
			};
		},
        computed: {
            ...mapGetters(["getBoards"])
        },
		mounted() {
			this.getBoards();
		},
		methods: {
			getBoards() {
				this.$boards.getBoards().then(boards => this.boards = boards);
			}
		}
	};
</script>
<style lang="scss" scoped>
	.boards {
		.boards-list {
			margin-top: 20px;
		}
		.board-item {
			display: inline-block;
			box-sizing: border-box;
			width: 31%;
			padding: 10px;
			text-align: center;
			border: 1px dashed #ccc;
			font-size: 22px;
		}
	}
</style>