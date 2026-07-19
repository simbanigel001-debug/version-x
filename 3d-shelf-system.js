const Interior3DSystem = {
    createPart: function(width, height, depth, x, y, z) {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        ThreeSetup.scene.add(mesh);
        return mesh;
    },

    build: function() {
        console.log("Building 3D Scene.");
        
        // Clear existing objects
        while(ThreeSetup.scene.children.length > 0){ 
            ThreeSetup.scene.remove(ThreeSetup.scene.children[0]); 
        }

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        ThreeSetup.scene.add(ambientLight);
        
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(500, 500, 500);
        ThreeSetup.scene.add(dirLight);

        // Add Test Cube
        this.createPart(500, 500, 500, 0, 0, 0);
    }
};

console.log("I Design - Interior 3D System Loaded");
