<template>
    <div class="header">
        <h1 class="header_title">Post's viewer!</h1>
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
        width: 70%;
        height: 4rem;
        padding: 1rem;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 15px 15px;
        background-color: hsl(0, 0, 95);
    }
</style>