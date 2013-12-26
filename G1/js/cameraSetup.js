function cameraSetup() {
    // set the scene size
    var WIDTH = 1000,
        HEIGHT = 600;

    // set some camera attributes
    var VIEW_ANGLE = 45,
        ASPECT = WIDTH / HEIGHT,
        NEAR = 0.1,
        FAR = 10000;



    // выбор рендера по наличию поддержки WebGL
    //renderer = new THREE.CanvasRenderer();
    if (Detector.webgl)
        renderer = new THREE.WebGLRenderer({ antialias: true });
    else
        renderer = new THREE.CanvasRenderer();

    camera = new THREE.PerspectiveCamera(VIEW_ANGLE,
                                    ASPECT,
                                    NEAR,
                                    FAR);
    scene = new THREE.Scene();

    // the camera starts at 0,0,0 so pull it back
    camera.position.z = 300;

    // start the renderer
    renderer.setSize(WIDTH, HEIGHT);

    // get the DOM element to attach to
    // - assume we've got jQuery to hand
    var $container = $('#container');
    // attach the render-supplied DOM element
    $container.append(renderer.domElement);

};