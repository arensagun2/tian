// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.shaped('backpacked:backpack', [
	    'LLL',
	    'SIS',
	    'LLL'
	], {
	    L: 'minecraft:leather',
	    S: '#forge:string',
	    I: 'minecraft:iron_ingot'
	})
	event.shapeless('2x minecraft:string', '#minecraft:wool')
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh')
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})