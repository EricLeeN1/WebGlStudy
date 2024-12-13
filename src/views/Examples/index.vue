<template>
    <div class="webgl-wrapper">
        <h3 class="title">webgl</h3>
        <!-- <FirstBox /> -->
        <!-- <SecondLine /> -->
        <!-- <ThirdNet /> -->
        <FourMove />
    </div>
</template>

<script setup lang="ts">
// import FirstBox from './components/1-Box.vue';
// import SecondLine from './components/2-line.vue';
// import ThirdNet from './components/3-net.vue';
import FourMove from './components/4-move.vue';
</script>

<style scoped lang="scss">
.webgl-wrapper {
    height: 100vh;
    width: 100vw;
    position: relative;

    .title {
        position: absolute;
        left: 30px;
        top: 30px;
        color: #fff;
    }
}
</style>
