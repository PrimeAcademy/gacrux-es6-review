$(document).ready(onReady);

class Color {

  constructor(english, japanese, german, hexcode) {
    this.en = english;
    this.jp = japanese;
    this.de = german;
    this.hexcode = hexcode; 
  }

}

function onReady() {
  console.log('ready!');

  const languages = new Map();
  languages.set('en', 'English');
  languages.set('jp', 'Japanese');
  languages.set('de', 'German');

  const colors = [];
  colors.push( new Color('blue', 'あお', 'blau', '#0000FF'));
  colors.push( new Color('red', 'あか', 'rot', '#BB0000'));
  colors.push( new Color('yellow', 'き', 'gelb', '#FFFF00'));
  colors.push( new Color('purple', 'むらさき', 'violet', '#800080'));
  colors.push( new Color('green', 'みどり', 'grün', '#008000'));
  
  fillInLanguages();
  fillInColorSelect();

  $('#btn-guess-color').on('click', function(event) {
    event.preventDefault();
    checkGuess();
  })

  $('#lang-select').on('change', fillInColorSelect);

  let randomColor = getRandomColor();
  console.log(randomColor);
  $('#color').css('background-color', randomColor.hexcode).data(randomColor);



  function checkGuess() {
    let languageKey = $('#lang-select').val();
    let colorSelected = $('#color-select').val();
    console.log(colorSelected);
    let correctColor = $('#color').data();
    $('#feedback').empty();
    if (colorSelected === correctColor.en){
      $('#feedback').append(`<p>That's correct, the color is ${correctColor[languageKey]}!`);
      console.log('Woot!');
    }
    else {
      $('#feedback').append(`<p>Sorry, that's not correct. Try again.`);
      console.log('Sorry!');
    }
  }


  function getRandomColor(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
  }

  function fillInColorSelect() {
    let languageKey = $('#lang-select').val();
    $('#color-select').empty();
    for( let color of colors) {
      $('#color-select').append(`<option value="${color.en}">${color[languageKey]}</option>`);
    }
  }

  function fillInLanguages(){
    for( [languageKey, name] of languages.entries() ){
      $('#lang-select').append(`<option value="${languageKey}">${name}</option>`);
    }
  }
}

