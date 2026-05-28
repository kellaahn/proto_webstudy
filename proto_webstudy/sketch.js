
let imgState = 0;

document.querySelector('.old').addEventListener('click', function() {
  imgState = 1;
  this.style.display = 'none';
  const young = document.querySelector('.young');
  young.src = 'locoyou.png';
  young.style.display = 'block';
});

document.querySelector('.young').addEventListener('click', function() {
  if (imgState === 1) {
    imgState = 2;
    this.src = 'locoyou2.png';
  } else if (imgState === 2) {
    imgState = 0;
    this.style.display = 'none';
    document.querySelector('.old').style.display = 'block';
  }
});


document.querySelector('.but_3').addEventListener('click', function() {
  const sch = document.querySelector('.sch');
  if (sch.style.color === 'red') {
    sch.style.color = '';
    sch.style.fontSize = '';
    this.style.backgroundColor = '';
    this.style.color = '';
  } else {
    sch.style.color = 'red';
    sch.style.fontSize = '40px';
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
  }
});


document.querySelector('.but_2').addEventListener('click', function() {
  const height = document.querySelector('.height');
  if (height.style.color === 'red') {
    height.style.color = '';
    height.style.fontSize = '';
    this.style.backgroundColor = '';
    this.style.color = '';
  } else {
    height.style.color = 'red';
    height.style.fontSize = '40px';
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
  }
});


document.querySelector('.but_1').addEventListener('click', function() {
  const name = document.querySelector('.name');
  if (name.style.color === 'red') {
    name.style.color = '';
    name.style.fontSize = '';
    this.style.backgroundColor = '';
    this.style.color = '';
  } else {
    name.style.color = 'red';
    name.style.fontSize = '40px';
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
  }
});
