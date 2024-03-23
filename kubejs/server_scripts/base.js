ServerEvents.recipes(event =>{
    event.shaped(Item.of('minecraft:enchanted_book', '{StoredEnchantments: [{id: "minecraft:efficiency", lvl: 1s}]}'), [    
        'OOO', 
        'OOO',
        'OOO'  
        ], {
        O: 'minecraft:obsidian',
      })
})