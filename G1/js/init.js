function init() {
    //cameraSetup();
    // создаем камеру
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    // задаем позицию камеры
    camera.position.z = 20;
    camera.position.y = 4;
    // создаем сцену
    scene = new THREE.Scene();

    // создаем землю
    //createGroundfloor();
    var material = new THREE.MeshBasicMaterial({
        color: 0x555555,
        wireframe: false,
    });
    geometry = new THREE.CubeGeometry(300, 1, 300);  // форма куба с размерами
    groundFloor = new THREE.Mesh(geometry, material);  // объект из формы и материала
    groundFloor.position.y = -5;
    scene.add(groundFloor); // добавляем в сцену

    tank = new THREE.Object3D();
    material1 = new THREE.MeshBasicMaterial({
        color: 0x005f00,
        wireframe: false,
    });
    material2 = new THREE.MeshBasicMaterial({
        color: 0x405f40,
        wireframe: false,
    });

    // корпус
    geometry = new THREE.CubeGeometry(6, 2, 10);
    tankMesh1 = new THREE.Mesh(geometry, material1);
    tank.add(tankMesh1);

    // башня
    geometry = new THREE.CubeGeometry(3, 2, 5);
    tankMesh2 = new THREE.Mesh(geometry, material2);
    tankMesh2.position.y = 2.3;
    tank.add(tankMesh2);

    // дуло
    geometry = new THREE.CubeGeometry(1, 1, 5);
    tankMesh3 = new THREE.Mesh(geometry, material1);
    tankMesh3.position.y = 2;
    tankMesh3.position.z = -5;
    tank.add(tankMesh3);

    tank.rotation.y = 3.141 / 3;



    tank2 = new THREE.Object3D();
    material1 = new THREE.MeshBasicMaterial({
        color: 0x00005f,
        wireframe: false,
    });
    material2 = new THREE.MeshBasicMaterial({
        color: 0x40405f,
        wireframe: false,
    });

    geometry = new THREE.CubeGeometry(6, 2, 10);
    tankMesh1 = new THREE.Mesh(geometry, material1);
    tank2.add(tankMesh1);

    geometry = new THREE.CubeGeometry(3, 2, 5);
    tankMesh2 = new THREE.Mesh(geometry, material2);
    tankMesh2.position.y = 2.3;
    tank2.add(tankMesh2);

    geometry = new THREE.CubeGeometry(1, 1, 5);
    tankMesh3 = new THREE.Mesh(geometry, material1);
    tankMesh3.position.y = 2;
    tankMesh3.position.z = -5;
    tank2.add(tankMesh3);

    tank2.rotation.y = -3.141 / 3;
    tank2.position.z = -10;
    tank2.position.x = 10;



    scene.add(tank);
    scene.add(tank2);

    material2 = new THREE.MeshBasicMaterial({
        color: 0x405f40,
        wireframe: false,
    });

    geometry = new THREE.SphereGeometry(1);
    bulletMesh = new THREE.Mesh(geometry, material2);

    // выбор рендера по наличию поддержки WebGL
    //renderer = new THREE.CanvasRenderer();
    if (Detector.webgl)
        renderer = new THREE.WebGLRenderer({ antialias: true });
    else
        renderer = new THREE.CanvasRenderer();

    renderer.setSize(window.innerWidth , window.innerHeight - 80);

    //document.body.appendChild(renderer.domElement);
    
    // get the DOM element to attach to
    // - assume we've got jQuery to hand
    var $container = $('#container');
    var $wrap = $('#wrap');
    //renderer.setSize($wrap.width, $wrap.height);
    // attach the render-supplied DOM element
    $container.append(renderer.domElement);

}
