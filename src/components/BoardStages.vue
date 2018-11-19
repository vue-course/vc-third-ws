<template>
	<div class="board-stages">
		<h2>Board Stages</h2>
		<StageEditor :stage="newStage" @update="createStage"></StageEditor>
		<div class="stages-list">
			<Stage v-for="stage in stages"
			       @update-stage="setStage"
			       @update-task="setTask"
			       :key="stage.id"
			       :stage="stage"
			></Stage>
		</div>
	</div>
</template>

<script>
	import Stage from "./Stage.vue";
	import {mapGetters, mapActions} from 'vuex';
	import StageEditor from "./StageEditor";
	import {GETTERS} from "../store/modules/stages/stages.getters";
	import {ACTIONS} from "../store/modules/stages/stages.actions";


	export default {
		name: 'BoardStages',
		components: {StageEditor, Stage},
		data() {
			return {
				newStage: {name: 'New Stage'}
			};
		},
		computed: {
			...mapGetters({
				stages: GETTERS.STAGES
			})
		},
		methods: {
			...mapActions({
				setStage: ACTIONS.SET_STAGE,
				setTask: ACTIONS.SET_TASK,
			}),
			createStage(newStage) {
				this.setStage(newStage);
				this.newStage = {name: 'New Stage'};
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.board-stages {
		background-color: #e2eac9;

		h2 {
			font-weight: normal;
			text-align: center;
		}

		.stages-list {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>