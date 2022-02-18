<template>
    <Header/>
    <PostsList/>
</template>

<script>
import Header from './components/Header.vue';
import PostsList from './components/PostsList.vue';

export default {
  components: {
    Header,
    PostsList,
  },
  created() {
      this.$store.dispatch('fetchPosts');
  },
}
</script>

<style lang="scss">
  @import 'assets/_variables.scss';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $primaryFont;
  };

  #app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    background-color: hsl(0, 0, 95);
    width: 100%;
  };
</style>