class heroi {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atack() {
    let atack;
    if (this.type == 'mago') {
      atack = 'magia✨';
    } else if (this.type == 'guerreiro') {
      atack = 'espada🗡️';
    } else if (this.type == 'monge') {
      atack = 'artes marciais👊';
    } else {
      atack = 'shuriken🎇';
    }

    const result = document.querySelector('.result');
    result.innerHTML = `<p>O ${this.type} atacou usando ${atack}</p>`;
  }

  create() {
    document.querySelector('.heroStatus h1').innerHTML = this.name;
    document.querySelector('.heroStatus p').innerHTML = `idade: ${this.age}`;

    let chosedHero;
    if (this.type == 'mago') {
      chosedHero = '🧙‍♂️';
    } else if (this.type == 'guerreiro') {
      chosedHero = '🦸‍♂️';
    } else if (this.type == 'monge') {
      chosedHero = '🦹‍♂️';
    } else {
      chosedHero = '🐱‍👤';
    }

    document.querySelector('.heroStatus span').innerHTML = chosedHero;
  }
}

let heroi1;

function createHero() {
  let heroName = document.querySelector('#heroName').value;
  let heroAge = document.querySelector('#heroAge').value;
  let heroType = document.querySelector('input[name="heroType"]:checked').value;

  if (heroName == '' || heroAge == '') {
    alert('Preencha as informções corretamente!');
  } else {
    heroi1 = new heroi(heroName, heroAge, heroType);

    heroi1.create();

    document.querySelector('.heroStatus').style.display = 'flex';
    document.querySelector('.afterRes').style.display = 'none';
  }
}

function heroAtack() {
  heroi1.atack();
}
