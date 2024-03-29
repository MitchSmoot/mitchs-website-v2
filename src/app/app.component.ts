import { Component } from '@angular/core';
import * as THREE from 'three';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({

})
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight)
camera.position.setZ(30);
renderer.render(scene, camera);
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial()
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}

animate()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mitchs-website-v2';
}
 