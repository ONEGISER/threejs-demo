const loader1 = new VTKLoader();
    loader1.load('models/vtk/cube_ascii.vtp', function (geometry) {

        geometry.computeVertexNormals();
        geometry.center();

        const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(- 0.025, 0, 0);
        mesh.scale.multiplyScalar(0.01);


        scene.add(mesh);

    });

    const loader2 = new VTKLoader();
    loader2.load('models/vtk/cube_binary.vtp', function (geometry) {

        geometry.computeVertexNormals();
        geometry.center();

        const material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(0.025, 0, 0);
        mesh.scale.multiplyScalar(0.01);


        scene.add(mesh);

    });

    const loader3 = new VTKLoader();
    loader3.load('models/vtk/cube_no_compression.vtp', function (geometry) {

        geometry.computeVertexNormals();
        geometry.center();

        const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(0.075, 0, 0);
        mesh.scale.multiplyScalar(0.01);


        scene.add(mesh);

    });