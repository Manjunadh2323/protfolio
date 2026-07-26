const canvas = document.getElementById("hero-canvas");


if(canvas){

    const scene = new THREE.Scene();


    const camera = new THREE.PerspectiveCamera(
        45,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    );


    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha:true,
        antialias:true
    });


    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight
    );


    camera.position.z = 5;



    // Glass cube

    const geometry = new THREE.BoxGeometry(
        1.8,
        1.8,
        1.8
    );


    const material = new THREE.MeshPhysicalMaterial({

        color:0x38bdf8,

        transparent:true,

        opacity:0.35,

        roughness:0.1,

        metalness:0.8

    });



    const cube = new THREE.Mesh(
        geometry,
        material
    );


    scene.add(cube);



    // Lighting

    const light = new THREE.PointLight(
        0x38bdf8,
        3,
        10
    );


    light.position.set(
        2,
        2,
        3
    );


    scene.add(light);



    // Animation

    function animate(){

        requestAnimationFrame(animate);


        cube.rotation.x += 0.005;

        cube.rotation.y += 0.008;


        renderer.render(
            scene,
            camera
        );

    }


    animate();


}