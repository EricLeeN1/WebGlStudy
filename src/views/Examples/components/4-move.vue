<template>
    <div class="webgl-box"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.Camera | null = null;
let light: THREE.Light | null = null;
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
    camera.position.set(0, 0, 600);
    camera.up.set(0, 1, 0);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
};
const initScene = () => {
    scene = new THREE.Scene();
};

const initLight = () => {
    light = new THREE.AmbientLight(0xffffff);
    light.position.set(100, 100, 200);
    scene!.add(light);
    light = new THREE.PointLight(0x00ff00);
    light.position.set(0, 0, 300);
    scene!.add(light);
};
const initObject = () => {
    const geometry = new THREE.CylinderGeometry(100, 150, 400);
    const material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    scene!.add(mesh);
};

const animation = () => {
    renderer!.clear();
    camera!.position.x = camera!.position.x + 1;
    renderer!.render(scene!, camera!);
    requestAnimationFrame(animation);
};

const threeStart = () => {
    initThree();
    initCamera();
    initScene();
    initLight();
    initObject();
    animation();
};

onMounted(() => {
    threeStart();
});
</script>

<style scoped lang="scss">
.webgl-box {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
</style>
