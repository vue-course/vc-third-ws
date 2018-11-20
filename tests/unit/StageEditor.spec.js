import {shallowMount} from '@vue/test-utils'
import StageEditor from '../../src/components/StageEditor.vue';

describe('StageEditor.vue', () => {
	it('renders props.stage.name inside form when passed', () => {
		const stage = {name: 'test'};
		const wrapper = shallowMount(StageEditor, {
			propsData: {stage}
		});
		expect(wrapper.contains('form')).toBeTruthy();
		expect(wrapper.find('input').element.value).toMatch(stage.name);
	});


	it('renders h3 when passed view mode passed', () => {
		const stage = {name: 'test'};
		const wrapper = shallowMount(StageEditor, {
			propsData: {stage, viewMode: true}
		});
		expect(wrapper.find('h3').text()).toMatch(stage.name);
	});


	it('view mode changed to form on double click', () => {
		const stage = {name: 'test'};
		const wrapper = shallowMount(StageEditor, {
			propsData: {stage, viewMode: true}
		});
		expect(wrapper.contains('form')).toBeFalsy();

		wrapper.find('h3').trigger('dblclick');
		expect(wrapper.contains('form')).toBeTruthy();
	});

});
