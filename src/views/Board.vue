<template>
	<div class="board">
		<div class="inline">
			<router-link to="/"><img src="../assets/logo.png"></router-link>
			<div>Add new task:&nbsp; </div>
			<TaskEditor :task="newTask" :stages="stages" @update="addTask"></TaskEditor>
		</div>
		<BoardStages />
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex';
	import TaskEditor from '../components/TaskEditor.vue';
	import BoardStages from '../components/BoardStages.vue';
	import {GETTERS} from "../store/modules/stages/stages.getters";
	import {ACTIONS} from "../store/modules/stages/stages.actions";

	export default {
		components: {
			TaskEditor,
			BoardStages
		},
		data() {
			return {
				newTask: {title: ''},
			};
		},
		computed: {
			...mapGetters({
				stages: GETTERS.STAGES
			})
		},
		created() {
			this.fetchStages(this.$route.params.id)
				.then(() => this.setDefaultStageForTask());
		},
		methods: {
			...mapActions({
				fetchStages: ACTIONS.FETCH_STAGES,
				setTask: ACTIONS.SET_TASK,
			}),
			addTask(task) {
				if(!this.stages.length) {
					return alert('Please add stages first');
				}
				this.setTask(task)
					.then(() => this.setDefaultStageForTask());
			},
			setDefaultStageForTask() {
				if(this.stages.length) {
					this.newTask = {title: '', stage: this.stages[0].id, board: this.stages[0].board};
				}
			}
		}
	};
</script>
<style lang="scss" scoped>
	.board {
		.inline {
			img {
				width: 64px;
				vertical-align: middle;
				padding-right: 20px;
			}
			* {
				display: inline-block;
				max-width: 50%;
			}
		}
		font-family: Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>