<template>
  <h1 class="header">Post's viewer!</h1>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
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

  body {
    background: linear-gradient(200deg, $primaryColor, $secondaryColor) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  };
</style>