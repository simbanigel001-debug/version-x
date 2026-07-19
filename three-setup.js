/* =====================================================
   I Design
   3D Setup Environment
===================================================== */
const ThreeSetup = {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000),
    renderer: new THREE.WebGLRenderer({ antialias: true }),

    init() {
        this.renderer.setSize(document.querySelector('.canvas-area').clientWidth, 500);
        document.querySelector('.canvas-area').appendChild(this.renderer.domElement);
        this.camera.position.set(0, 1000, 2000);
        this.camera.lookAt(0, 1000, 0);
        this.animate();
    },
    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
};
ThreeSetup.init();
