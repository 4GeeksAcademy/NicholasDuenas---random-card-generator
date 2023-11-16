/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Everything is working");

  document.querySelector(".numbers").innerHTML = generate_new_number();
  let suit = generate_new_suit();
  for(let elem of document.querySelectorAll("#bot, #top")){
    elem.innerHTML = suit
  }
  // console.log(document.querySelectorAll("#bot, #top"));
};

const suits = ["&hearts;", "&diams;", "&clubs;"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function generate_new_suit() {
  let random_num = Math.floor(Math.random() * suits.length);
  console.log(random_num);
  let index = suits[random_num];
  return index;
}

function generate_new_number() {
  let random_num = Math.floor(Math.random() * values.length);
  console.log(random_num);
  console.log(values.toString(values[random_num]));
  return values[random_num];
}
