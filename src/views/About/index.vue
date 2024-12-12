<template>
    <div class="webgl-wrapper">
        <h3 class="title">webgl</h3>
    </div>
</template>

<script setup lang="ts">
// http://www.hewebgl.com/article/getarticle/56
import * as THREE from 'three';

let scene: any = null;
let renderer: any = null;
let camera: any = null;
let cube: any = null;
let width: any = null;
let height: any = null;
const initThree = () => {
    const wrapperDom: any = document.querySelector('.webgl-wrapper');
    width = wrapperDom.clientWidth;
    height = wrapperDom.clientHeight;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    wrapperDom.appendChild(renderer.domElement);
    renderer.setClearColor(0xffffff, 1.0);
};

const initScene = () => {
    scene = new THREE.Scene(); // 场景
};

const initCamera = () => {
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    // camera.position.x = 0;
    // camera.position.y = 1000;
    camera.position.z = 5;
    // camera.up.x = 0;
    // camera.up.y = 0;
    // camera.up.z = 1;
    // camera.lookAt({
    //     x: 0,
    //     y: 0,
    //     z: 0,
    // });
};

// const initLight = () => {
//     light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
//     light.position.set(100, 100, 200);
//     scene.add(light);
// };
const initObject = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
};

const render = () => {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
};

const threeStart = () => {
    initThree();
    initCamera();
    initScene();
    initObject();
    render();
};
const initCanvas = () => {
    const wrapperDom: any = document.querySelector('.webgl-wrapper');
    const scene = new THREE.Scene(); // 场景

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
    ); // 透视相机

    const renderer = new THREE.WebGLRenderer(); // 渲染器

    renderer.setSize(window.innerWidth, window.innerHeight);

    wrapperDom.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
    }
    render();
};
onMounted(() => {
    console.log(initCanvas);
    threeStart();
});
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
    #canvas {
        width: 100%;
        height: 100%;
        background: gray;
    }
}
</style>
