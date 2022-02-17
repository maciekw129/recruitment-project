import { createStore } from 'vuex';
import axios from 'axios';
import sliceToChunks from '../helpers/sliceToChunks';

export default createStore({
    state: {
        posts: [],
    },

    getters: {
        posts: state => {
            return state.posts;
        }
    },

    mutations: {
        SET_POSTS (state, posts) {
            state.posts = posts;
        }
    },

    actions: {
        async fetchPosts ({ commit }) {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
                const data = sliceToChunks(response.data);
                commit('SET_POSTS', data);
            } catch(error) {
                console.log(error);
            }
        }
    }

});

