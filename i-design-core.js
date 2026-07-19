/**
 * I Design | Master Core
 * This file contains the full architecture and must load first.
 */
window.iDesign = window.iDesign || {};
window.iDesign.modules = {};
window.iDesign.isReady = false;

window.iDesign.register = function(name, module) {
    this.modules[name] = module;
    console.log(`[I Design] Module registered: ${name}`);
};

window.iDesign.Log = (function() {
    const DEBUG = true; 
    return {
        info: function(msg) { if (DEBUG) console.log(`[I Design] ${msg}`); },
        error: function(msg) { console.error(`[I Design ERROR] ${msg}`); }
    };
})();

window.iDesign.init = function() {
    console.log("[I Design] Initializing System...");
    Object.keys(this.modules).forEach(key => {
        if (typeof this.modules[key].init === 'function') {
            this.modules[key].init();
        }
    });
    this.isReady = true;
};
console.log("[I Design] Master Core initialized.");
