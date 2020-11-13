const counter = (function counter() {
    let value = 0;
    return {
      getValue: function() {
        return value;
      },
      changeBy: function(k) {
        value += k;
      },
    }
  })();

  function stepCounter(k) {
    // write your code here
    return {
        increment: function(){
            return counter.changeBy()
            console.log(counter.changeBy())
        },
        decrement: function(){
            return counter.getValue() -= k;
            console.log(counter.getValue() -= k)
        },
        getValue: function(){
            return counter.getValue();
            console.log(counter.getValue())
        }
    }
  }