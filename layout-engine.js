/* =====================================================
   I Design
   Automatic Layout Engine
   Milestone 6
===================================================== */
const LayoutEngine = {
    generate(options) {
        const width = options.width;
        const compartments = options.compartments || 3;
        const layout = [];
        let remaining = width;
        if (options.hanging) {
            const hangingWidth = Math.min(800, remaining);
            layout.push({ width: hangingWidth, type: "hanging", hasDoors: true });
            remaining -= hangingWidth;
        }
        const remainingCount = compartments - layout.length;
        if (remainingCount > 0) {
            const sectionWidth = Math.floor(remaining / remainingCount);
            for (let i = 0; i < remainingCount; i++) {
                layout.push({ width: sectionWidth, type: options.open ? "open" : "folding", hasDoors: true });
            }
        }
        return layout;
    }
};
console.log("I Design - Layout Engine Loaded");
