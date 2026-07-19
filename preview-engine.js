/* =====================================================
   I Design
   Preview Engine
===================================================== */
const PreviewEngine = {
    render() {
        Interior3DSystem.build();
    }
};
// Add placeholder for missing systems to prevent crashes
const LayoutOptimizer = { optimise: (layout) => layout };
const DimensionSystem = { update: () => {} };
