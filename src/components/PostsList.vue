<template>
    <div class="postsList" v-if="chunkedPosts">
        <Post
            v-for="(post, index) in chunkedPosts"
            :key='post.id'
            :index='index'
            :title='post.title'
            :content='post.body'
            :userId='post.userId'
            :length='chunkedPosts.length'
        ></Post>
    </div>
    <Loading v-else/>
    <PaginationBar v-if="chunkedPosts"/>
</template>

<script>
import Post from './Post.vue';
import sliceToChunks from '../helpers/sliceToChunks';
import Loading from './Loading.vue';
import PaginationBar from './PaginationBar.vue';

export default {  
  name: 'PostsList',
  components: {
      Post,
      Loading,
      PaginationBar,
  },
  computed: {
      chunkedPosts() {
          const chunked = sliceToChunks(this.$store.getters.posts);
          return chunked[this.currentPage - 1];
      },
      currentPage() {
          return this.$store.getters.currentPage;
      },
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