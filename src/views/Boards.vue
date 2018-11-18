<template>
	<div class="boards">
		<div>
			<h3>Add Board:</h3>
			<CreateBoardForm @update="fetchBoards"></CreateBoardForm>
		</div>

		<div class="boards-list">
			<router-link v-for="board in boards" :to="{name: 'board', params: {id: board.id}}"
			             class="board-item">
				{{board.name}}
			</router-link>
		</div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from "vuex";
	import CreateBoardForm from "../components/CreateBoardForm";
	import {GETTERS} from '../store/modules/boards/boards.getters';
	import {ACTIONS} from '../store/modules/boards/boards.actions';

	export default {
		components: {CreateBoardForm},
		computed: {
			...mapGetters({
				boards: GETTERS.BOARDS
			})
		},
		created() {
			this.fetchBoards();
		},
		methods: {
			...mapActions({
				fetchBoards: ACTIONS.FETCH_BOARDS
			})
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