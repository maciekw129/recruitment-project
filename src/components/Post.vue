<template>
    <div class="post">
        <h3 class="post_title">{{title}}</h3>
        <p class="post_content">{{content}}</p>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
      title: String,
      content: String,
  }
}
</script>

<style lang="scss">
    .post {
        width: 80%;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius: 15px;
        background-color: #ffffff;
        padding: 1rem;
        margin: 1rem;

        &_title {
            text-align: center;
            margin-bottom: 0.5rem;
        }
    }
</style>