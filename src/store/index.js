import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        posts: [],
        currentPage: 1,
        isLoading: true,
    },

    getters: {
        posts: state => {
            return state.posts;
        },
        pages: state => {
            return Math.ceil(state.posts.length / 10);
        },
        currentPage: state => {
            return state.currentPage;
        },
    },

    mutations: {
        SET_POSTS (state, posts) {
            state.posts = posts;
        },
        NEXT_PAGE (state) {
            state.currentPage += 1;
        },
        PREVIOUS_PAGE (state) {
            state.currentPage -= 1;
        },
        SET_PAGE (state, number) {
            state.currentPage = number.number;
        },
        DELETE_POST (state, payload) {
            state.posts.splice(payload, 1);
        }

    },

    actions: {
        async fetchPosts ({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                commit('SET_POSTS', response.data);
                this.isLoading
            } catch(error) {
                console.log(error);
            }
        },
        nextPage ({ commit }) {
            commit('NEXT_PAGE');
        },
        previousPage ({ commit }) {
            commit('PREVIOUS_PAGE');
        },
        setPage ({ commit }, number) {
            commit('SET_PAGE', number);
        },
        deletePost ({commit}, payload) {
            commit('DELETE_POST', payload);
        }
    }

});

