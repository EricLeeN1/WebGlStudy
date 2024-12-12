<template>
    <div class="webgl-wrapper">
        <h3 class="title">webgl</h3>
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
let scene: any = null;
let renderer: any = null;
let camera: any = null;
let light: any = null;
let width: any = null;
let height: any = null;
const wrapperDom: any = document.querySelector('.webgl-wrapper');
console.log(wrapperDom);

const initScene = () => {
    scene = new THREE.Scene(); // 场景
};
const initThree = () => {
    console.log(wrapperDom);
    width = wrapperDom.clientWidth;
    height = wrapperDom.clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias: true,
    });
    renderer.setSize(width, height);
    wrapperDom.appendChild(renderer.domElement);
    renderer.setClearColor(0xffffff, 1.0);
};

const initCamera = () => {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 1000;
    camera.position.z = 0;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0,
    });
};

const initLight = () => {
    light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
    light.position.set(100, 100, 200);
    scene.add(light);
};
const initObject = () => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
    });
    const color1 = new THREE.Color(0x444444),
        color2 = new THREE.Color(0xff0000);

    // 线的材质可以由2点的颜色决定
    const p1 = new THREE.Vector3(-100, 0, 100);
    const p2 = new THREE.Vector3(100, 0, -100);
    geometry.vertices.push(p1);
    geometry.vertices.push(p2);
    geometry.colors.push(color1, color2);

    const line = new THREE.Line(geometry, material, THREE.LinePieces);
    scene.add(line);
};

const render = () => {
    renderer.clear();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
};

const threeStart = () => {
    initThree();
    initCamera();
    initScene();
    initLight();
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
    // initThree();
    threeStart();
    initCanvas();
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
