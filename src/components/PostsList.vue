<template>
    <div class="postsList">
        <Post />
        <p>{{posts}}</p>
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
          perPage: 10,
          currentPage: 1,
      };
  },
  computed: {
      posts() {
          return this.$store.getters.posts.length;
      },
  },
  created() {
      this.$store.dispatch('fetchPosts');
  }
}
</script>