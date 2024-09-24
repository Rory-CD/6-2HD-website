import { shallowMount } from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'

describe('HomePage', () => {
    it('displays heading', () => {
        // Mount the component
        const wrapper = shallowMount(HomePage);

        // Check if the text is rendered correctly
        const h1Text = wrapper.find('h1').text();
        expect(h1Text).toBe('Stay with style');
    });
});