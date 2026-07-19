/* =====================================================
   I Design
   Door Calculation Engine
   Milestone 7
===================================================== */
const DoorEngine = {
    settings: {
        heightAllowance: 104,
        widthAllowance: 4,
        doubleDoorLimit: 600
    },
    generate(compartment) {
        const doors = [];
        const count = this.calculateDoorCount(compartment.width);
        const width = this.calculateDoorWidth(compartment.width, count);
        const height = this.calculateDoorHeight();
        for (let i = 0; i < count; i++) {
            doors.push({
                name: compartment.mirror ? "Mirror Door" : "Door",
                width,
                height
            });
        }
        return doors;
    },
    calculateDoorCount(width) {
        return (width > this.settings.doubleDoorLimit) ? 2 : 1;
    },
    calculateDoorWidth(width, count) {
        return Math.floor((width - this.settings.widthAllowance) / count);
    },
    calculateDoorHeight() {
        return (2700 - this.settings.heightAllowance);
    }
};
console.log("I Design - Door Engine Loaded");
