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
    const vertices = new Float32Array([-500, 0, 0, 500, 0, 0]);
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    for (let i = 0; i <= 20; i++) {
        const line1 = new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2 }),
        );
        line1.position.z = i * 50 - 500;
        scene!.add(line1);

        const line2 = new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2 }),
        );
        line2.position.x = i * 50 - 500;
        line2.rotation.y = (90 * Math.PI) / 180;
        scene!.add(line2);
    }
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
    cursor: pointer;
}
</style>
