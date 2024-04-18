import { describe, expect, it } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';
import { mount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';
import routes from '@/router/routes/index.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const factory = (options = {}) => mount(AboutView, {
    global: {
        plugins: [router],
    },
    ...options,
});

describe('About', async () => {
    it('queryParamExists to be true when setQueryParam is called', async () => {
        const wrapper = factory();
        expect(wrapper.vm.queryParamExists).toBe(false);
        await wrapper.find('a').trigger('click');
        await new Promise((resolve) => { setTimeout(resolve, 0); });
        expect(wrapper.vm.queryParamExists).toBe(true);
    });
});
