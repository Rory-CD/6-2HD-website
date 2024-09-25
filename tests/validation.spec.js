import { shallowMount } from '@vue/test-utils'
import ContactPage from '@/components/ContactPage.vue'
import validateContactForm from '@/scripts/validation'

describe('Contact form', () => {
    let wrapper, nameInput, emailInput, msgInput;

    beforeEach(() => {
        // Mount the component before each test
        wrapper = shallowMount(ContactPage);

        // Get the input elements
        nameInput = wrapper.find('#name');
        emailInput = wrapper.find('#email');
        msgInput = wrapper.find('#message');
    });

    it('Accepts valid input', () => {
        // Fill in valid inputs
        nameInput.setValue('Rory Douglas');
        emailInput.setValue('rory@deakin.edu.au');
        msgInput.setValue('Hello there.');

        // Simulate an event
        const event = {
            preventDefault: vi.fn(),
            target: {
                name: nameInput.element,
                email: emailInput.element,
                message: msgInput.element
            }
        };

        // Test validity
        const isValid = validateContactForm(event);
        expect(isValid).toBeTruthy();
    });

    it('Does not accept invalid input', () => {
        // Fill in invalid inputs
        nameInput.setValue('');
        emailInput.setValue('rorys-email');
        msgInput.setValue('');
        
        // Simulate an event
        const event = {
            preventDefault: vi.fn(),
            target: {
                name: nameInput.element,
                email: emailInput.element,
                message: msgInput.element
            }
        };

        // Test validity
        const isValid = validateContactForm(event);
        expect(isValid).toBeFalsy();
    });
});