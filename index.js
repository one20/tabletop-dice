class Dice {
  roll(maxValue, quantity=1) {
    let values = []
    for(let a = 0; a<quantity; a++) {
      let randomValue = Math.round(Math.random() * (maxValue - 1)) + 1
      values.push( randomValue )
    }

    return quantity > 1 ? values : values[0]
  }

  d4(quantity=1) {
    return this.roll(4, quantity)
  }

  d6(quantity=1) {
    return this.roll(6, quantity)
  }

  d8(quantity=1) {
    return this.roll(8, quantity)
  }

  d10(quantity=1) {
    return this.roll(10, quantity)
  }

  d12(quantity=1) {
    return this.roll(12, quantity)
  }

  d20(quantity=1) {
    return this.roll(20, quantity)
  }

  advantage() {
    let values = this.d20(2);
    let highest = values.sort(function(a, b){return b - a})[0]

    return {
      value: highest,
      rolls: values
    }
  }

  disadvantage() {
    let values = this.d20(2);
    let lowest = values.sort()[0]

    return {
      value: lowest,
      rolls: values
    }
  }

  percentage(quantity=1) {
    return this.roll(100, quantity)
  }
}

module.exports = new Dice()
