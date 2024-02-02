import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

//Scene Object Camera Renderer

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1,1,1);
let colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];

// Create a cube with different colors for each side
const materials = colors.map(color => new THREE.MeshBasicMaterial({ color: color }));

// const material = new THREE.MeshBasicMaterial({  color:'blue'})
const mesh = new THREE.Mesh(geometry, materials)
// mesh.rotation.x  =Math.PI/4
// mesh.position.x = 2

scene.add(mesh);

gsap.to(mesh.position, {duration: 1, delay: 1, x:2});

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight);
camera.position.z = 3;
scene.add( camera )

// Renderer

const canvas = document.querySelector("#canvas")

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
const clock = new THREE.Clock();

// Controls
const animate = () => {
    console.log("Animation");
    mesh.rotation.x += Math.PI * 0.01;
    mesh.rotation.y +=  Math.PI * 0.011;
    const elapsedTime = clock.getElapsedTime()

    mesh.position.x = Math.sin(elapsedTime);
    mesh.position.y = Math.cos(elapsedTime);
    renderer.render(scene, camera);
    window.requestAnimationFrame( animate );
}


animate();
// the animate function will be called based on the fps of the screen that is beng used.
