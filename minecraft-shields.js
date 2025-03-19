function craftShield() {
  if (hasRequiredMaterials()) {
    playerInventory.push('shield');
    alert('Shield crafted!');
  } else {
    alert('Not enough materials!');
  }
}

function hasRequiredMaterials() {
  // Check if the player has enough materials for crafting the shield
  return playerInventory.includes('wooden_planks') && playerInventory.includes('iron_ingot');
}
