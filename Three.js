heart.material = new THREE.MeshBasicMaterial({color: 0xff5555});
originHeart = Array.from(heart.geometry.attributes.position.array);
sampler = new THREE.MeshSurfaceSampler(heart).build();
init();
renderer.setAnimationLoop(render);