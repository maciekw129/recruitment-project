<template>
    <div class="loading">
      <div class="loading_one"></div>
      <div class="loading_two"></div>
      <div class="loading_three"></div>
    </div>
</template>

<style lang="scss">
    .loading {
    display: flex;
    justify-content: space-evenly;
    width: 100px;
    margin-top: 10rem;

    & div {
        content: '';
        height: 10px;
        width: 10px;
        background-color: black;
        border-radius: 50%;
    }

    @keyframes loading {
        from {
            opacity: 100%;
        }
        to {
            opacity: 0%;
        }
    }

    &_one {
        animation: 1s infinite alternate loading;
    }
    &_two {
        animation: 1s infinite alternate loading;
        animation-delay: 0.5s;
    }
    &_three {
        animation: 1s infinite alternate loading;
        animation-delay: 1s;
    }
};
</style>