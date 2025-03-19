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
var equippedShield = false;
var isBlocking = false;

function gameLoop() {
  // Main game loop logic
  
  if (equippedShield) {
    if (isBlocking) {
      renderShieldBlock();
    } else {
      renderShield();
    }
  }
}

function renderShield() {
  // Render the shield in the player's hand using the shield texture
  ctx.drawImage(shieldTexture, playerX, playerY, 50, 80); // Adjust position and size as needed
}

function renderShieldBlock() {
  // Render the shield in the blocking position using the shield blocking texture
  ctx.drawImage(shieldBlockTexture, playerX, playerY, 50, 80); // Adjust position and size as needed
}
