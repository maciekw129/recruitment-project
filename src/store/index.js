import { createStore } from 'vuex';
import axios from 'axios';
import sliceToChunks from '../helpers/sliceToChunks';

export default createStore({
    state: {
        posts: [],
        currentPage: 1,
    },

    getters: {
        posts: state => {
            return state.posts;
        },
        pages: state => {
            return state.posts.length;
        },
        currentPage: state => {
            return state.currentPage;
        }
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
        }
    },

    actions: {
        async fetchPosts ({ commit }) {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
                const data = sliceToChunks(response.data);
                console.log(data)
                commit('SET_POSTS', data);
            } catch(error) {
                console.log(error);
            }
        },
        nextPage ({ commit }) {
            commit('NEXT_PAGE');
        },
        previousPage ({ commit }) {
            commit('PREVIOUS_PAGE');
        }
    }

});

