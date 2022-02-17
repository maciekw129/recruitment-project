<template>
    <div class="postsList">
        <Post
            v-for="post in posts"
            :key='post.id'
            :title='post.title'
            :content='post.body'
        ></Post>
    </div>
</template>

<script>
import Post from './Post.vue';

export default {  
  name: 'PostsList',
  components: {
      Post,
  },

  data() {
      return {
          currentPage: 1,
      };
  },

  computed: {
      posts() {
          return this.$store.getters.posts[this.currentPage - 1];
      },
      pages() {
          return this.$store.getters.pages;
      }
  },

  created() {
      this.$store.dispatch('fetchPosts');
  }
}
</script>

<style lang="scss">
    .postsList {
        display: grid;
        justify-items: center;
        width: 100%;
        margin: 5rem 0;

        @media only screen and (min-width: 500px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }
</style>