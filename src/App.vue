<template>
  <div></div>
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
  };

  body {
    background: linear-gradient(200deg, $primaryColor, $secondaryColor) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: $primaryFont;
  };
</style>