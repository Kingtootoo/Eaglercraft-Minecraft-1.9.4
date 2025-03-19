var playerInventory = [];
var equippedShield = null;

function gameLoop() {
  // Main game loop where mechanics will be checked, updated, and rendered.
  checkForShieldUse();
}

function checkForShieldUse() {
  if (equippedShield) {
    // Handle shield blocking
    renderShieldBlock();
  }
}

function renderShieldBlock() {
  // Rendering shield blocking position, using textures or animations.
  console.log("Shield is blocking!");
}
