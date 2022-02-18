<template>
    <div class="postsList">
        <Post
            v-for="(post, index) in posts"
            :key='post.id'
            :index='index'
            :title='post.title'
            :content='post.body'
            :userId='post.userId'
        ></Post>
    </div>
</template>

<script>
import Post from './Post.vue';
import sliceToChunks from '../helpers/sliceToChunks';
export default {  
  name: 'PostsList',
  components: {
      Post,
  },
  computed: {
      posts() {
          const posts = sliceToChunks(this.$store.getters.posts);
          return posts[this.currentPage - 1];
      },
      currentPage() {
          return this.$store.getters.currentPage;
      }
  },
}
</script>

<style lang="scss">
    .postsList {
        display: grid;
        justify-items: center;
        align-items: start;
        width: 100%;
        padding: 0 2rem;
        margin: 3rem 0;

        @media only screen and (min-width: 500px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }
</style>