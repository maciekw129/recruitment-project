<template>
    <div class="pagination-bar">
        <div class="pagination-bar_numbers-container">
            <div 
            class="pagination-bar_number"
            v-for="index in pages"
            v-bind:class="{ underline: index === currentPage }"
            @click="setPage(index)"
            :key="index"
        >{{index}}</div>
        </div>
        <div>
            <button 
                class="pagination-bar_button" 
                @click="previousPage"
                :disabled="currentPage === 1"
                :class="{ disabled: currentPage === 1}" 
            >&lt;</button>
            <button 
                class="pagination-bar_button"
                @click="nextPage"
                :disabled="currentPage === pages"
                :class="{ disabled: currentPage === pages}" 
            >&gt;</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PaginationBar',
  computed: {
      pages() {
          return this.$store.getters.pages;
      },
      currentPage() {
          return this.$store.getters.currentPage;
      }
  },
  methods: {
      nextPage() {
          this.$store.dispatch('nextPage');
          window.scrollTo(0, 0);
      },
      previousPage() {
          this.$store.dispatch('previousPage');
          window.scrollTo(0, 0);
      },
      setPage(number) {
          this.$store.dispatch('setPage', {
              number: number,
          });
          window.scrollTo(0, 0);
      },
  }
}
</script>

<style lang="scss">
@import '../assets/_variables.scss';

    .pagination-bar {
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &_numbers-container {
            display: flex;
        }

        &_number {
            padding: 0 0.5rem;
            margin: 1rem 0.25rem;
            text-align: center;
            transition: color 0.2s linear;

            &:hover {
                cursor: pointer;
                color: $primaryColor;
                transition: color 0.2s linear;
            }
        }

        &_button {
            background: none;
            border: 1.5px solid $primaryColor;
            padding: 0.3rem 1rem;
            margin: 0 1rem; 
            border-radius: 50px;
            transition: background-color 0.2s linear;

            &:hover {
                cursor: pointer;
                background-color: $primaryColor;
                transition: background-color 0.2s linear;
            }
        }};
    
    .underline {
        color: $primaryColor;
    };

    .disabled {
        border-color: gray;

        &:hover {
            cursor: auto;
            background-color: hsl(0, 0, 95);
        }
    }
</style>