// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	// Crafting
	event.shaped('backpacked:backpack', [
	    'LLL',
	    'SIS',
	    'LLL'
	], {
	    L: 'minecraft:leather',
	    S: '#forge:string',
	    I: 'minecraft:iron_ingot'
	})
	event.shaped('cutecore:caramel_apple', [
		'  S',
		' A ',
		'C  '
	], {
		S: '#forge:rods/wooden',
		A: 'minecraft:apple',
		C: '#forge:caramel'
	})
	event.shaped('pamhc2trees:lemon_sapling', [
		'LLL',
		'LLL',
		'LLS'
	], {
		L: '#forge:fruits/lemon',
		S: '#minecraft:saplings'
	})
	event.shaped('pamhc2trees:cherry_sapling', [
		'CCC',
		'CCC',
		'CCS'
	], {
		C: '#forge:fruits/cherry',
		S: '#minecraft:saplings'
	})
	event.shaped('cutecore:strawberry_jello', [
		'ASA',
		'BWB',
		'ASA'
	], {
		A: 'cutecore:agar_agar',
		S: '#forge:sugar',
		B: '#forge:fruits/strawberry',
		W: '#forge:water'
	})
	event.shaped('cutecore:cherry_jello', [
		'ASA',
		'CWC',
		'ASA'
	], {
		A: 'cutecore:agar_agar',
		S: '#forge:sugar',
		C: '#forge:fruits/cherry',
		W: '#forge:water'
	})
	event.shaped('cutecore:lemon_jello', [
		'ASA',
		'LWL',
		'ASA'
	], {
		A: 'cutecore:agar_agar',
		S: '#forge:sugar',
		L: '#forge:fruits/lemon',
		W: '#forge:water'
	})
	event.shaped('4x cutecore:strawberry_glazed_donut', [
		'SWS',
		'WBW',
		'SWS'
	], {
		S: '#forge:sugar',
		W: '#forge:grain/wheat',
		B: '#forge:fruits/strawberry',
	})
	event.shaped('4x cutecore:chocolate_glazed_donut', [
		'SWS',
		'WCW',
		'SWS'
	], {
		S: '#forge:sugar',
		W: '#forge:grain/wheat',
		C: '#forge:chocolatebar',
	})
	event.shaped('4x cutecore:strawberry_pocky', [
		'C',
		'S',
		'W'
	], {
		C: '#forge:chocolatebar',
		S: '#forge:fruits/strawberry',
		W: '#forge:grain/wheat'
	})
	event.shaped('4x cutecore:pocky', [
		'C',
		'W'
	], {
		C: '#forge:chocolatebar',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:cherry_pie', [
		'CSC',
		'WWW'
	], {
		C: '#forge:fruits/cherry',
		S: '#forge:sugar',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:lemon_meringue_pie', [
		'SLE',
		'WWW'
	], {
		S: '#forge:sugar',
		L: '#forge:fruits/lemon',
		E: 'minecraft:egg',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:chocolate_pie', [
		'SCE',
		'WWW'
	], {
		S: '#forge:sugar',
		C: '#forge:chocolatebar',
		E: 'minecraft:egg',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:very_berry_pie', [
		'SMS',
		'CTB',
		'WWW'
	], {
		S: '#forge:sugar',
		M: 'cutecore:magic_dust',
		C: '#forge:fruits/cherry',
		T: '#forge:fruits/strawberry',
		B: 'minecraft:sweet_berries',
		W: '#forge:grain/wheat'
	})
	event.shaped('4x cutecore:marshmallow', [
		'ASA',
		'SWS',
		'ASA'
	], {
		A: 'cutecore:agar_agar',
		S: '#forge:sugar',
		W: '#forge:water'
	})
	event.shaped('4x cutecore:smore', [
		'WW',
		'CM',
		'WW'
	], {
		W: '#forge:grain/wheat',
		C: '#forge:chocolatebar',
		M: 'cutecore:roasted_marshmallow'
	})
	event.shaped('cutecore:pretzel', [
		' W ',
		'WSW',
		' W '
	], {
		W: '#forge:grain/wheat',
		S: '#forge:salt'
	})
	event.shaped('cutecore:chocolate_pretzel', [
		'CWC',
		'WSW',
		'CWC'
	], {
		C: '#forge:chocolatebar',
		W: '#forge:grain/wheat',
		S: '#forge:salt'
	})
	event.shaped('cutecore:white_cake_1', [
		'MMM',
		'SES',
		'WWW'
	], {
		M: '#forge:milk',
		S: '#forge:sugar',
		E: 'minecraft:egg',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:strawberry_cake_1', [
		'MMM',
		'SES',
		'WWW'
	], {
		M: '#forge:milk',
		S: '#forge:fruits/strawberry',
		E: 'minecraft:egg',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:chocolate_cake_1', [
		'MMM',
		'CEC',
		'WWW'
	], {
		M: '#forge:milk',
		C: '#forge:chocolatebar',
		E: 'minecraft:egg',
		W: '#forge:grain/wheat'
	})
	event.shaped('cutecore:red_velvet_cake_1', [
		'MMM',
		'CEC',
		'WBW'
	], {
		M: '#forge:milk',
		C: '#forge:chocolatebar',
		E: 'minecraft:egg',
		W: '#forge:grain/wheat',
		B: '#forge:vegetables/beetroot'
	})
	event.shaped('cozy_comforts:marshmellow_on_a_stick', [
		'M',
		'S'
	], {
		M: '#forge:item/marshmallow',
		S: '#forge:rods/wooden'
	})
	event.shaped('cozy_comforts:blueberry_jam_jar', [
		'BBB',
		'BJB',
		'BBB'
	], {
		B: '#forge:berries/blueberry',
		J: 'cozy_comforts:glass_jar'
	})

	event.shapeless('2x minecraft:string', '#minecraft:wool')
	event.shapeless('pamhc2crops:strawberryseeditem', 'cutecore:strawberry')
	event.shapeless('cutecore:cherry_soda', ['#forge:fruits/cherry', 'minecraft:glass_bottle', '#forge:sugar', '#forge:water'])
	event.shapeless('cutecore:lemonade', ['#forge:fruits/lemon', 'minecraft:glass_bottle', '#forge:sugar', '#forge:water'])
	event.shapeless('cutecore:pink_lemonade', ['#forge:fruits/lemon', '#forge:fruits/cherry', 'minecraft:glass_bottle', '#forge:sugar', '#forge:water'])
	event.shapeless('cutecore:marshmallow', ['#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow', '#forge:item/marshmallow'])
	event.shapeless('cutecore:strawberry_milk', ['#forge:milk', '#forge:fruits/strawberry'])
	event.shapeless('cutecore:hot_cocoa', ['#forge:milk', '#forge:chocolatebar', '#forge:item/marshmallow'])
	event.shapeless('cutecore:ice_cream', ['#forge:milk', '#forge:ices', 'minecraft:egg', '#forge:sugar', 'minecraft:bowl'])
	event.shapeless('cutecore:strawberry_ice_cream', ['#forge:milk', '#forge:ices', 'minecraft:egg', '#forge:sugar', 'minecraft:bowl', '#forge:fruits/strawberry'])
	event.shapeless('cutecore:chocolate_ice_cream', ['#forge:milk', '#forge:ices', 'minecraft:egg', '#forge:sugar', 'minecraft:bowl', '#forge:chocolatebar'])
	event.shapeless('cutecore:ice_cream_sundae', ['#forge:milk', '#forge:ices', 'minecraft:egg', '#forge:sugar', 'minecraft:bowl', '#forge:chocolatebar', '#forge:caramel', '#forge:fruits/cherry', '#forge:fruits/strawberry'])

	// Smelting
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh')

	// Campfire
	event.campfireCooking('cutecore:roasted_marshmallow', 'cozy_comforts:marshmellow')
	event.campfireCooking('cutecore:roasted_marshmallow', 'pamhc2foodcore:marshmellowsitem')

	// Remove recipes here
	event.remove({ id: 'cutecore:caramel_apple_resippy' })
	event.remove({ id: 'cutecore:cherry_soda_resippy' })
	event.remove({ id: 'pamhc2trees:lemon_sapling' })
	event.remove({ id: 'pamhc2trees:cherry_sapling' })
	event.remove({ id: 'cutecore:lemonade_resippy' })
	event.remove({ id: 'cutecore:pink_lemonade_resippy' })
	event.remove({ id: 'cutecore:strawberry_jello_resippy' })
	event.remove({ id: 'cutecore:cherry_jello_resippy' })
	event.remove({ id: 'cutecore:lemon_jello_resippy' })
	event.remove({ id: 'cutecore:strawberry_glazed_donut_resippy' })
	event.remove({ id: 'cutecore:chocolate_glazed_donut_resippy' })
	event.remove({ id: 'cutecore:strawberry_pocky_resippy' })
	event.remove({ id: 'cutecore:pocky_resippy' })
	event.remove({ id: 'cutecore:cherry_pie_resippy' })
	event.remove({ id: 'cutecore:lemon_meringue_pie_resippy' })
	event.remove({ id: 'cutecore:chocolate_pie_resippy' })
	event.remove({ id: 'cutecore:very_berry_pie_resippy' })
	event.remove({ id: 'cutecore:marshmallow_item_resippy' })
	event.remove({ id: 'cutecore:marshmallow_resippy' })
	event.remove({ id: 'cutecore:smore_resippy' })
	event.remove({ id: 'cutecore:strawberry_milk_resippy' })
	event.remove({ id: 'cutecore:hot_cocoa_resippy' })
	event.remove({ id: 'minecraft:red_dye_from_rose_bush' })
	event.remove({ id: 'cutecore:ice_cream_resippy' })
	event.remove({ id: 'cutecore:strawberry_ice_cream_resippy' })
	event.remove({ id: 'cutecore:chocolate_ice_cream_resippy' })
	event.remove({ id: 'cutecore:ice_cream_sundae_resippy' })
	event.remove({ id: 'cutecore:pretzel_resippy' })
	event.remove({ id: 'cutecore:chocolate_pretzel_resippy' })
	event.remove({ id: 'cutecore:white_cake_resippy' })
	event.remove({ id: 'cutecore:strawberry_cake_resippy' })
	event.remove({ id: 'cutecore:chocolate_cake_resippy' })
	event.remove({ id: 'cutecore:red_velvet_cake_resippy' })
	event.remove({ id: 'cozy_comforts:marshmallow_on_a_stick_recipe' })
	event.remove({ id: 'cozy_comforts:blueberry_jam_jar_recipe'})

	// Removed and hidden
	event.remove({ output: 'farmingforblockheads:feeding_trough' })
	event.remove({ output: 'cutecore:magic_mirror_resippy' })
	event.remove({ output: 'modernlife:inset_light' })
	event.remove({ output: 'modernlife:tire'})
})

onEvent('entity.loot_tables', event => {
	event.addEntity('minecraft:turtle', table => {
		table.addPool(pool => {
			pool.rolls = 2
			pool.addItem('minecraft:scute', 1)
			pool.addItem('minecraft:seagrass', 4)
		})
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')

	// Diets
	event.add('diet:sugars', 'cutecore:caramel')
	event.add('diet:fruits', ['cutecore:strawberry', 'cutecore:cherries', 'cutecore:lemon', 'cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry', 'pizzacraft:pineapple'])
	event.add('diet:vegetables', ['pizzacraft:onion', 'pizzacraft:corn', 'pizzacraft:cucumber', 'sushigocrafting:cucumber', 'pizzacraft:pepper', 'pizzacraft:tomato'])
	event.add('diet:proteins', ['sushigocrafting:soy_bean'])
	
	// Groups
	event.add('forge:citrusfruits', 'cutecore:lemon')
	event.add('forge:crops', ['cutecore:strawberry', 'cutecore:cherries', 'cutecore:lemon', 'cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:berries', ['cutecore:strawberry', 'cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:fruits', ['cutecore:strawberry', 'cutecore:cherries', 'cutecore:lemon', 'cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:vinegar_ingredients', ['cutecore:strawberry', 'cutecore:cherries', 'cutecore:lemon', 'cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry', 'pizzacraft:tomato', 'farmersdelight:tomato', 'pizzacraft:pineapple'])
	event.add('forge:vegetables', ['pizzacraft:onion', 'pizzacraft:cucumber', 'sushigocrafting:cucumber', 'pizzacraft:pepper', 'pizzacraft:tomato'])
	event.add('forge:rootvegetables', ['pizzacraft:onion'])
	event.add('forge:carbs', ['pizzacraft:corn'])
	event.add('forge:flour_plants', ['pizzacraft:corn', 'sushigocrafting:soy_bean'])
	event.add('forge:grain', ['pizzacraft:corn', 'sushigocrafting:soy_bean'])
	event.add('forge:protein', ['pizzacraft:corn'])
	event.add('forge:peppers', ['pizzacraft:pepper'])
	event.add('forge:salad_ingredients', ['pizzacraft:tomato', 'farmersdelight:tomato'])
	event.add('forge:paper_plants', ['pizzacraft:pineapple'])

	// Caramel
	event.add('forge:caramel', 'cutecore:caramel')
	event.add('forge:caramel/caramel', 'cutecore:caramel')
	
	// Strawberry
	event.add('forge:crops/strawberry', 'cutecore:strawberry')
	event.add('forge:berries/strawberry', 'cutecore:strawberry')
	event.add('forge:fruits/strawberries', 'cutecore:strawberry')
	event.add('forge:fruits/strawberry', 'cutecore:strawberry')
	event.add('forge:vinegar_ingredients/strawberries', 'cutecore:strawberry')
	event.add('forge:vinegar_ingredients/strawberry', 'cutecore:strawberry')

	// Cherry
	event.add('forge:crops/cherry', 'cutecore:cherries')
	event.add('forge:fruits/cherry', 'cutecore:cherries')
	event.add('forge:vinegar_ingredients/cherry', 'cutecore:cherries')

	// Lemon
	event.add('forge:citrusfruits/lemon', 'cutecore:lemon')
	event.add('forge:crops/lemon', 'cutecore:lemon')
	event.add('forge:fruits/lemon', 'cutecore:lemon')
	event.add('forge:vinegar_ingredients/lemon', 'cutecore:lemon')

	// Chocolate
	event.add('forge:chocolatebar', ['create:bar_of_chocolate', 'cutecore:chocolate'])
	event.add('forge:chocolatebar/chocolate', ['create:bar_of_chocolate', 'cutecore:chocolate'])

	// Marshmallow
	event.add('forge:item/marshmallow', ['pamhc2foodcore:marshmellowsitem', 'cutecore:marshmallow'])
	event.add('forge:marshmellows', ['cozy_comforts:marshmellow', 'cutecore:marshmallow'])
	event.add('forge:marshmellows/marshmellows', ['cozy_comforts:marshmellow', 'cutecore:marshmallow'])

	// Salt
	event.add('forge:salt', 'cutecore:pink_salt')
	event.add('forge:salt/salt', 'cutecore:pink_salt')

	// Blueberry
	event.add('forge:berries/blueberry', ['cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:crops/blueberry', ['cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:fruits/blueberries', ['cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:fruits/blueberry', ['cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:vinegar_ingredients/blueberries', ['cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:vinegar_ingredients/blueberry', ['cozy_comforts:wild_blueberrys', 'cozy_comforts:blueberry'])
	event.add('forge:item/blueberry', ['cozy_comforts:wild_blueberrys', 'pamhc2crops:blueberryitem'])

	// Onion
	event.add('forge:onions', 'pizzacraft:onion')
	event.add('forge:onions/onion', 'pizzacraft:onion')
	event.add('forge:rootvegetables/onion', 'pizzacraft:onion')
	event.add('forge:vegetables/onion', 'pizzacraft:onion')

	// Corn
	event.add('forge:carbs/corn', 'pizzacraft:corn')
	event.add('forge:crops/corn', 'pizzacraft:corn')
	event.add('forge:flour_plants/corn', 'pizzacraft:corn')
	event.add('forge:grain/corn', 'pizzacraft:corn')
	event.add('forge:protein/corn', 'pizzacraft:corn')

	// Cucumber
	event.add('forge:crops/cucumber', ['pizzacraft:cucumber', 'sushigocrafting:cucumber'])
	event.add('forge:salad_ingredients/cucumber', ['pizzacraft:cucumber', 'sushigocrafting:cucumber'])
	event.add('forge:vegetables/cucumber', ['pizzacraft:cucumber', 'sushigocrafting:cucumber'])

	// Tomato
	event.add('forge:salad_ingredients/tomato', ['pizzacraft:tomato', 'farmersdelight:tomato'])
	event.add('forge:vegetables/tomato', 'pizzacraft:tomato')
	event.add('forge:vinegar_ingredients/tomato', ['pizzacraft:tomato', 'farmersdelight:tomato'])

	// Pineapple
	event.add('forge:paper_plants/pineapple', 'pizzacraft:pineapple')
	event.add('forge:vinegar_ingredients/pineapple', 'pizzacraft:pineapple')

	// Soy Bean
	event.add('forge:crops/soybean', 'sushigocrafting:soy_bean')
	event.add('forge:flour_plants/soybean', 'sushigocrafting:soy_bean')
	event.add('forge:grain/soybean', 'sushigocrafting:soy_bean')
})