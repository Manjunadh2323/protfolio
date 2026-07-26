const canvas = document.getElementById("hero-canvas");

if (canvas) {

    const scene = new THREE.Scene();


    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );


    camera.position.z = 5;



    // Renderer
    const renderer = new THREE.WebGLRenderer({

        canvas: canvas,
        alpha: true,
        antialias: true

    });


    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight
    );


    renderer.setPixelRatio(window.devicePixelRatio);



    // 3D Object
    const geometry = new THREE.IcosahedronGeometry(1.3, 1);


    const material = new THREE.MeshStandardMaterial({

        color: 0x00ff99,

        metalness:0.7,

        roughness:0.25,

    });


    const shape = new THREE.Mesh(
        geometry,
        material
    );


    scene.add(shape);



    // Lights

    const light = new THREE.PointLight(
        0x00ff99,
        5,
        10
    );


    light.position.set(
        2,
        2,
        3
    );


    scene.add(light);



    const ambient = new THREE.AmbientLight(
        0xffffff,
        1
    );


    scene.add(ambient);



    // Animation

    function animate(){

        requestAnimationFrame(animate);


        shape.rotation.x += 0.008;

        shape.rotation.y += 0.01;


        renderer.render(
            scene,
            camera
        );

    }


    animate();



    // Resize

    window.addEventListener(
        "resize",
        ()=>{

            camera.aspect =
            canvas.clientWidth /
            canvas.clientHeight;


            camera.updateProjectionMatrix();


            renderer.setSize(
                canvas.clientWidth,
                canvas.clientHeight
            );

        }
    );

}