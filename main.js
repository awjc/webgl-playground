import WebGL from 'three/addons/capabilities/WebGL.js';
import * as THREE from 'three';

function initialize() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00dcaf } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  return {scene, camera, renderer, cube};
}

let clock = new THREE.Clock();
let delta = 0;
let interval = 1 / 30;

function animate(vars) {
  const {scene, camera, renderer, cube} = vars;
	// requestAnimationFrame( () => animate(vars) );
	update({cube});
	renderer.render( scene, camera );
}

function update({cube}) {
  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}


if ( WebGL.isWebGLAvailable() ) {
	// Initiate function or other initializations here
  const vars = initialize();
	animate(vars);
} else {
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}
