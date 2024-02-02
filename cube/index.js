//Scene Object Camera Renderer

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({  color:'blue'})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotation.x  =Math.PI/4
mesh.position.x = 2

scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );
camera.position.z = 3;
scene.add( camera )

// Renderer

const canvas = document.querySelector("#canvas")

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene, camera);

// Controls