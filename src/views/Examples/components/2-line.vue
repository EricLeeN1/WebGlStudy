<template>
    <div class="webgl-box"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.Camera | null = null;
let light: THREE.DirectionalLight | null = null;
let width: number = 0;
let height: number = 0;
const initThree = () => {
    const wrapperDom: any = document.querySelector('.webgl-box');
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
    camera.position.set(0, 1000, 0);
    camera.up.set(0, 0, 1);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
};
const initScene = () => {
    scene = new THREE.Scene();
};

const initLight = () => {
    light = new THREE.DirectionalLight(0xff0000, 1.0);
    light.position.set(100, 100, 200);
    scene!.add(light);
};
const initObject = () => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ vertexColors: true });
    const color1 = new THREE.Color(0x444444);
    const color2 = new THREE.Color(0xff0000);

    const positions = new Float32Array([-100, 0, 100, 100, 0, -100]);
    const colors = new Float32Array([
        color1.r,
        color1.g,
        color1.b,
        color2.r,
        color2.g,
        color2.b,
    ]);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const line = new THREE.Line(geometry, material);
    scene!.add(line);
};

const threeStart = () => {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    renderer!.clear();
    renderer!.render(scene!, camera!);
};

onMounted(() => {
    threeStart();
});
</script>

<style scoped lang="scss">
.webgl-box {
    width: 100%;
    height: 100%;
}
</style>
