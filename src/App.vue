<template>
    <Header/>
    <PostsList/>
</template>

<script>
import Header from './components/Header.vue';
import PostsList from './components/PostsList.vue';

export default {
  name: 'App',
  components: {
    Header,
    PostsList,
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
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    background: linear-gradient(200deg, $primaryColor, $secondaryColor) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  };
</style>