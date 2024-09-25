import { shallowMount } from '@vue/test-utils'
import Navbar from '@/Navbar.vue'

describe('Navbar', () => {
    const expectedLinks = ['ACCOMMODATION', 'EAT/DRINK', 'EVENTS', 'AMENITIES', 'OFFERS', 'CONTACT'];

    it('displays all links', () => {
        // Mount the component
        const wrapper = shallowMount(Navbar);

        // Find all the nav-link elements
        const navLinks = wrapper.findAll('.nav-link');

        // Check that the number of links matches the expected length
        expect(navLinks.length).toBe(expectedLinks.length);

        // Iterate over the links and check if the text matches the expected links
        navLinks.forEach((link, index) => {
            expect(link.text()).toBe(expectedLinks[index]);
        });
    });
});