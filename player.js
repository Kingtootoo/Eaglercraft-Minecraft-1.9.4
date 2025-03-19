var player = {
  inventory: [],
  equipShield: function() {
    if (this.inventory.includes('shield')) {
      equippedShield = 'shield';
      console.log("Shield equipped!");
    }
  }
};
