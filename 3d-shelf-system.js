/* =====================================================
   I Design
   3D Interior System
   Milestone 10
===================================================== */
const Interior3DSystem = {
    objects: [],
    clear() {
        this.objects.forEach(object => { ThreeSetup.scene.remove(object); });
        this.objects = [];
    },
    createPart(width, height, depth, x, y, z, color, name) {
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshStandardMaterial({ color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.name = name;
        ThreeSetup.scene.add(mesh);
        this.objects.push(mesh);
        return mesh;
    },
   /* Inside 3d-shelf-system.js */
const Interior3DSystem = {
    build() {
        console.log("Building 3D Scene...");
        
        // 1. Clear existing objects so they don't stack up
        while(ThreeSetup.scene.children.length > 0){ 
            ThreeSetup.scene.remove(ThreeSetup.scene.children[0]); 
        }

        // 2. Add Lighting (Crucial for visibility!)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        ThreeSetup.scene.add(ambientLight);
        
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(500, 500, 500);
        ThreeSetup.scene.add(dirLight);

        // 3. Add a test box to verify rendering
        const geometry = new THREE.BoxGeometry(500, 500, 500);
        const material = new THREE.MeshStandardMaterial({ color: 0x4a90e2 });
        const cube = new THREE.Mesh(geometry, material);
        ThreeSetup.scene.add(cube);
    }
};
console.log("I Design - Interior 3D System Loaded");
            if (compartment.drawers && compartment.drawers.enabled) {
                for (let i = 0; i < compartment.drawers.quantity; i++) {
                    this.createPart(width - 60, 120, 450, x + width/2, 200 + (i * 150), -200, 0x444444, "Drawer Box");
                }
            }
            x += width;
        });
        App.notify("3D interior generated");
    }
};
console.log("I Design - Interior 3D System Loaded");
