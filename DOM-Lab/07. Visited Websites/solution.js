function solve() {
  let clicksOne = 0
  let clicksTwo = 0
  let clicksThree = 0
  let clicksFour = 0
  let clicksFive = 0
  let clicksSix = 0

  function masterControll(clicking, timesClick, div) {
    document.getElementById(timesClick).innerText = `visited ${clicking} times`
    document.getElementById(div).addEventListener("click", onClicking)
    function onClicking() {
      clicking++
      document.getElementById(timesClick).innerText = `visited ${clicking} times`
    }
  }
  masterControll(clicksOne, 'timesClickOne', 'divOne')
  masterControll(clicksTwo, 'timesClickTwo', 'divTwo')
  masterControll(clicksThree, 'timesClickThree', 'divThree')
  masterControll(clicksFour, 'timesClickFour', 'divFour')
  masterControll(clicksFive, 'timesClickFive', 'divFive')
  masterControll(clicksSix, 'timesClickSix', 'divSix')
}