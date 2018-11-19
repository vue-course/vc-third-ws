<template>
	<div class="task">
		<router-link to="/">Back</router-link>
		<TaskEditor v-if="!loading" :task="task" :stages="stages" @update="addTask"></TaskEditor>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex';
	import TaskEditor from '../components/TaskEditor.vue';
	import {ACTIONS} from "../store/modules/stages/stages.actions";
	import {GETTERS} from "../store/modules/stages/stages.getters";

	export default {
		components: {
			TaskEditor,
		},
		data() {
			return {
				loading: true,
			};
		},
		mounted() {
			this.fetchTask(this.$route.params.id)
				.then(() => this.loading = false);
		},
		computed: {
			...mapGetters({
				task: GETTERS.CURRENT_TASK,
				stages: GETTERS.STAGES
			})
		},
		methods: {
			...mapActions({
				fetchTask: ACTIONS.FETCH_TASK,
				setTask: ACTIONS.SET_TASK
			}),
			addTask(task) {
				return this.setTask(task)
					.then(() => this.$router.push({name: 'board', params: {id: task.board}}));
			},
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