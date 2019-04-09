let assert = require('assert')
let Dice = require('./../index')

const ITERATIONS = 100000

testDieMethod = (dieValue) => {
  describe(`#d${dieValue}`, () => {
    it(`returns less or equal to ${dieValue}`, () => {
      let valid = true
      for(let x=0; x<ITERATIONS; x++) {
        let roll = Dice[`d${dieValue}`]()
        if(roll > dieValue) {
          valid = false
          break
        }
      }
      assert.equal(valid, true)
    })
  
    it('never returns less than 1', () => {
      let valid = true
      for(let x=0; x<ITERATIONS; x++) {
        let roll = Dice[`d${dieValue}`]()
        if(roll < 1) {
          valid = false
          break
        }
      }
      assert.equal(valid, true)
    })
  
    it('returns an array with length equal to quantity', () => {
      let roll = Dice[`d${dieValue}`](3)
      assert.equal(roll.length, 3);
    })
  })
}

testDieMethod(4)
testDieMethod(6)
testDieMethod(8)
testDieMethod(10)
testDieMethod(12)
testDieMethod(20)

describe('#roll', () => {
  it('returns less or equal to maxValue', () => {
      let valid = true
      let maxValue = 15
      for(let x=0; x<ITERATIONS; x++) {
        let roll = Dice.roll(maxValue)
        if(roll > maxValue) {
          valid = false
          break
        }
      }
      assert.equal(valid, true)
  })

  it('never returns less than 1', () => {
    let valid = true
    for(let x=0; x<ITERATIONS; x++) {
      let roll = Dice.roll(4)
      if(roll < 1) {
        valid = false
        break
      }
    }
    assert.equal(valid, true)
  })

  it('returns an array if quantity is more than 1', () => {
    let roll = Dice.roll(6, 3)
    assert.equal(roll.constructor, Array);
  })

  it('returns an array with length equal to quantity', () => {
    let roll = Dice.roll(6, 3)
    assert.equal(roll.length, 3);
  })
})

describe('#advantage', () => {
  let roll = Dice.advantage()

  it('returns a hash', () => {
    assert.equal(roll.constructor, Object);
  })

  it('returns a number for value property', () => {
    assert.equal(isNaN(roll.value), false);
  })

  it('returns an array for rolls property', () => {
    assert.equal(roll.rolls.constructor, Array);
  })

  it('returns a length of 2 for rolls property', () => {
    assert.equal(roll.rolls.length, 2)
  })

  it('returns the higher number from rolls array for value property', () => {
    let higher = roll.rolls.sort(function(a, b){return b - a})[0]
    assert.equal(roll.value, higher)
  })
})

describe('#disadvantage', () => {
  let roll = Dice.disadvantage()

  it('returns a hash', () => {
    assert.equal(roll.constructor, Object);
  })

  it('returns a number for value property', () => {
    assert.equal(isNaN(roll.value), false);
  })

  it('returns an array for rolls property', () => {
    assert.equal(roll.rolls.constructor, Array);
  })

  it('returns a length of 2 for rolls property', () => {
    assert.equal(roll.rolls.length, 2)
  })

  it('returns the lower number from rolls array for value property', () => {
    let higher = roll.rolls.sort()[0]
    assert.equal(roll.value, higher)
  })
})

describe('#percentage', () => {
  it('returns less or equal to maxValue', () => {
      let valid = true
      let maxValue = 100
      for(let x=0; x<ITERATIONS; x++) {
        let roll = Dice.percentage()
        if(roll > maxValue) {
          valid = false
          break
        }
      }
      assert.equal(valid, true)
  })

  it('never returns less than 1', () => {
    let valid = true
    for(let x=0; x<ITERATIONS; x++) {
      let roll = Dice.percentage()
      if(roll < 1) {
        valid = false
        break
      }
    }
    assert.equal(valid, true)
  })

  it('returns an array if quantity is more than 1', () => {
    let roll = Dice.percentage(3)
    assert.equal(roll.constructor, Array);
  })

  it('returns an array with length equal to quantity', () => {
    let roll = Dice.percentage(3)
    assert.equal(roll.length, 3);
  })
})
