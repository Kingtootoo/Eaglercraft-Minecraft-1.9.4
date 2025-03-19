function initializeGame() {
  // Initialize game settings, world loading, etc.
  loadShieldTextures();
}

function loadShieldTextures() {
  // Load shield textures for display (not used directly in crafting, just for visuals)
  var shieldTexture = new Image();
  shieldTexture.src = 'assets/textures/shield.png';
}
var shieldTexture, shieldBlockTexture;

function loadShieldTextures() {
  // Load the shield texture for holding in the inventory
  shieldTexture = new Image();
  shieldTexture.src = 'assets/textures/shield.png'; // Path to the shield texture

  // Load the shield texture for blocking
  shieldBlockTexture = new Image();
  shieldBlockTexture.src = 'assets/textures/shield_block.png'; // Path to the shield blocking texture

  // Log to confirm textures are loaded
  shieldTexture.onload = function() {
    console.log("Shield texture loaded");
  };

  shieldBlockTexture.onload = function() {
    console.log("Shield blocking texture loaded");
  };
}
