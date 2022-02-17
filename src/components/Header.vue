<template>
    <div class="header">
        <h1><span class="header_title-color">Post's</span> viewer!</h1>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
@import '../assets/_variables.scss';

    .header {
        width: 100%;
        height: 4rem;
        padding: 1rem;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

        &_title-color {
            color: #F25D50;
        }
    }
</style>