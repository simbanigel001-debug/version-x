/* 3d-shelf-system.js - Clean Version */
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
        console.log("Building 3D Scene from Project Data...");
        
        // 1. Clear existing objects
        while(ThreeSetup.scene.children.length > 0){ 
            ThreeSetup.scene.remove(ThreeSetup.scene.children[0]); 
        }

        // 2. Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        ThreeSetup.scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(500, 500, 500);
        ThreeSetup.scene.add(dirLight);

        // 3. Iterate through Project compartments and build them
        Project.compartments.forEach((comp, index) => {
            const xOffset = index * 600; // Position compartments side-by-side
            
            // Build the Carcass (Cabinet structure)
            // Using 600mm width as a base for now
            this.createPart(580, 2000, 550, xOffset, 1000, 0); 
            
            // If Backing Material is needed
            if (comp.backingMaterial === 'Carcass' || comp.backingMaterial === 'Masonite') {
                this.createPart(580, 2000, 20, xOffset, 1000, -275);
            }
        });
    }

console.log("I Design - Interior 3D System Loaded");
