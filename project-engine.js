/* =====================================================
   I Design
   Project Engine
===================================================== */
const Project = {
    compartments: [],
    generatedParts: [],
    
    addCompartment(data) {
        const compartment = {
            width: data.width,
            type: data.type,
            hasDoors: data.hasDoors,
            backingMaterial: data.backingMaterial,
            drawers: { enabled: false, quantity: 0, addDrawer: (q) => { this.drawers.enabled = true; this.drawers.quantity = q; } },
            addDrawer(quantity, type) {
                this.drawers.enabled = true;
                this.drawers.quantity = quantity;
            }
        };
        this.compartments.push(compartment);
        return compartment;
    }
};
console.log("I Design - Project Engine Loaded");
