<template>
    <div class="post">
        <h3 class="post_title">{{title}}</h3>
        <p class="post_content">{{content}}</p>
        <button 
            class="post_delete-button"
            @click="deletePost"
        >x</button>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
      title: String,
      content: String,
      index: Number,
  },
  methods: {
      deletePost() {
          this.$store.dispatch('deletePost', {
              number: this.index,
          })
      }
  }
}
</script>

<style lang="scss">
@import '../assets/_variables.scss';
    .post {
        position: relative;
        width: 90%;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius: 15px;
        background-color: #ffffff;
        padding: 1rem;
        margin: 1rem;

        &_title {
            text-align: center;
            margin-bottom: 0.5rem;
        }

        &_delete-button {
            @extend %styled-button;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
        }
    }
</style>