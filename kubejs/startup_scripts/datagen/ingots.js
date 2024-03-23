const ingot_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: gold },
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  steel: { color: steel },
  aluminum: { color: aluminum },
  electrum: { color: electrum },
  constantan: { color: constantan },
  osmium: { color: osmium },
  bronze: { color: bronze },
  zinc: { color: zinc },
  brass: { color: brass },
  enderium: { color: enderium },
  lumium: { color: lumium },
  invar: { color: invar },
  signalum: { color: signalum },
  tungsten: { color: tungsten },
  signar: { color: signar },
  uranium: { color: uranium }
}

global.ingots = [
  'tin',
  'silver',
  'lead',
  'nickel',
  'steel',
  'aluminum',
  'electrum',
  'constantan',
  'osmium',
  'bronze',
  'zinc',
  'brass',
  'enderium',
  'lumium',
  'invar',
  'signalum',
  'tungsten',
  'signar',
  'uranium'
]

StartupEvents.registry('item', (event) => {
  for (const mat of global.ingots) {
    event
      .create(`${mat}_ingot`)
      .tag('forge:ingots')
      .tag(`forge:ingots/${mat}`)
      .tag('minecraft:beacon_payment_items')
    event
      .create(`${mat}_nugget`)
      .texture('layer0', 'kubejs:item/nugget')
      .color(0, ingot_properties[mat].color)
      .tag('forge:nugget')
      .tag(`forge:nugget/${mat}`)
  }
})
