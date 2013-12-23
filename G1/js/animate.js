function animate() {
    requestAnimationFrame(animate);

    if (bullet.toCreate == true) {
        scene.add(bulletMesh);
        bullet.toCreate = false;
        bullet.rotationY = tank.rotation.y
        bulletMesh.position.z = tank.position.z - 7 * Math.cos(bullet.rotationY);
        bulletMesh.position.x = tank.position.x - 7 * Math.sin(bullet.rotationY);
        bulletMesh.position.y = 2;



    }

    distance = (bulletMesh.position.z - tank.position.z) * (bulletMesh.position.z - tank.position.z)
        +
        (bulletMesh.position.x - tank.position.x) * (bulletMesh.position.x - tank.position.x);

    if (distance < 3000) {
        bulletMesh.position.z -= 1 * Math.cos(bullet.rotationY);
        bulletMesh.position.x -= 1 * Math.sin(bullet.rotationY);
    }

    if (distance > 3000) {
        bulletMesh.position.y = 1000;
    }

    if (KeyboardJS.activeKeys().indexOf('a') > -1) {
        tank.rotation.y += 0.03;
    }

    if (KeyboardJS.activeKeys().indexOf('d') > -1) {
        tank.rotation.y += -0.03;
    }

    if (KeyboardJS.activeKeys().indexOf('s') > -1) {
        tank.position.z += 1 * Math.cos(tank.rotation.y);
        tank.position.x += 1 * Math.sin(tank.rotation.y);
    }

    if (KeyboardJS.activeKeys().indexOf('w') > -1) {
        tank.position.z -= 1 * Math.cos(tank.rotation.y);
        tank.position.x -= 1 * Math.sin(tank.rotation.y);
    }

    if (KeyboardJS.activeKeys().indexOf('left') > -1) {
        tank2.rotation.y += 0.03;
    }

    if (KeyboardJS.activeKeys().indexOf('right') > -1) {
        tank2.rotation.y += -0.03;
    }

    if (KeyboardJS.activeKeys().indexOf('down') > -1) {
        tank2.position.z += 1 * Math.cos(tank2.rotation.y);
        tank2.position.x += 1 * Math.sin(tank2.rotation.y);
    }

    if (KeyboardJS.activeKeys().indexOf('up') > -1) {
        tank2.position.z -= 1 * Math.cos(tank2.rotation.y);
        tank2.position.x -= 1 * Math.sin(tank2.rotation.y);
    }


    renderer.render(scene, camera);

}