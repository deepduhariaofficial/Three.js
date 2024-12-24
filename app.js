// Set up basic Three.js components: scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a WebGL renderer and append it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create a simple cube geometry and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera so that the cube is visible
camera.position.z = 5;

// Set up the animation loop to rotate the cube and render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Call the animate function to start the animation loop
animate();

// Adjust the renderer size when the window is resized
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
