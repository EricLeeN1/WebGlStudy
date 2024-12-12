<template>
    <div class="home-wrapper">
        <h3>Home</h3>
        <canvas id="canvas" ref="canvasRef" width="600" height="600"></canvas>
    </div>
</template>

<script setup lang="ts">
import beauty from '@/assets/imgs/beauty.jpg';
const initCanvas = () => {
    // const canvasRef: any = ref<HTMLCanvasElement>();
    const canvasRef: any = document.getElementById('canvas');

    const ctx = canvasRef?.getContext('2d');
    const img = new Image();
    img.src = beauty;
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    };
};
onMounted(() => {
    initCanvas();
});
</script>

<style scoped lang="scss">
.home-wrapper {
    #canvas {
        background: red;
    }
}
</style>
