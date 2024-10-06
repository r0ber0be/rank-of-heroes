var buttonName = document.getElementById('add-hero-name')

buttonName.addEventListener('click', e => {
  e.preventDefault()
  const nameInput = document.getElementById('name').value

  nameInput == '' 
    ? alert('Insira um nome')
    : nameChanger(nameInput)
  }
)

function nameChanger(newHeroName) {
  document.getElementById('hero-name').innerHTML = newHeroName
}

var buttonXp = document.getElementById('add-experience')

buttonXp.addEventListener('click', e => {
  e.preventDefault()
  const xpInput = document.getElementById('hero-xp').value
  
  xpInput == ''
    ? alert('Insira algum valor')
    : addXp(xpInput)
  }
)

var totalHeroXp = 0
function addXp(xp) {
  totalHeroXp += Number(xp)
  let heroElo = ''

  if(totalHeroXp < 0) {
    totalHeroXp = 0
    heroElo = 'Unranked'
  } else if(totalHeroXp < 1000) {
    heroElo = 'Ferro'
  } else if (totalHeroXp > 1000 && totalHeroXp <= 2000) {
    heroElo = 'Bronze'
  } else if (totalHeroXp > 2000 && totalHeroXp <= 5000) {
    heroElo = 'Prata'
  } else if (totalHeroXp > 5000 && totalHeroXp <= 7000) {
    heroElo = 'Ouro'
  } else if (totalHeroXp > 7000 && totalHeroXp <= 8000) {
    heroElo = 'Platina'
  } else if (totalHeroXp > 8000 && totalHeroXp <= 9000) {
    heroElo = 'Ascendente'
  } else if (totalHeroXp > 9000 && totalHeroXp <= 1000) {
    heroElo = 'Imortal'
  } else {
    heroElo = 'Radiante'
  }
  document.getElementById('hero-level').innerHTML = `${heroElo} (${totalHeroXp}XP)`
}
