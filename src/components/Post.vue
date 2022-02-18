<template>
    <div class="post">
        <p class="post_author">author: {{authorName}}</p>
        <h3 class="post_title">{{title}}</h3>
        <p 
            v-if='isShortened' 
            class="post_content"
        >{{shortenedContent}} &nbsp;&nbsp;<span class="post_show-hide" @click='isShortened = !isShortened'>show more</span></p>
        <p 
            v-else 
            class="post_content"
        >{{content}} &nbsp;&nbsp;<span class="post_show-hide" @click='isShortened = !isShortened'>hide</span></p>
        <button 
            class="post_delete-button"
            @click="deletePost"
        >X</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
      title: String,
      content: String,
      index: Number,
      userId: Number,
  },
  data() {
      return {
          isShortened: true,
          authorName: '',
      }
  },
  methods: {
      deletePost() {
          this.$store.dispatch('deletePost', {
              number: this.index,
          })
      },
  },
  computed: {
      shortenedContent() {
          const words = this.content.split(' ').slice(0, 6)
          return words.join(' ') + '...';
      },
      buttonText() {
          return this.isShortened ? 'show more' : 'hide';
      },
  },
  beforeMount() {
      axios.get('https://jsonplaceholder.typicode.com/users/' + this.userId)
      .then(response => {
          this.authorName = response.data.name;
      })
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
        padding: 2rem;
        margin: 1rem;

        &_title {
            text-align: center;
            margin: 0.5rem 0;
        }

        &_author {
            font-size: 0.8rem;
        }

        &_delete-button {
            @extend %styled-button;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0 0.5rem;
            font-size: 0.75rem;
            border: 1px solid black;
        }

        &_show-hide {
            display: inline;
            text-decoration: underline $secondaryColor;
            transition: text-decoration 0.2s linear;
             &:hover {
                 cursor: pointer;
                 text-decoration-color: $primaryColor;
                 transition: text-decoration 0.2s linear;
             }
        }
    }
</style>