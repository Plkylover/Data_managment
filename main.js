//Elements for extracting data
let btn = document.getElementsByTagName('button')[0]
let classs_value = document.getElementById('classs');
let value = document.getElementById('value');
let sec = document.getElementById('sec');
let roll_value = document.getElementById('roll');
let h3 = document.getElementsByTagName('h3');
//Elements for feeding data
let data = document.getElementsByClassName('data')[1];
let panel = document.getElementById('panel');
let e_name = document.getElementById('e_name');
let e_classs = document.getElementById('e_classs');
let e_sec = document.getElementById('e_sec');
let e_roll = document.getElementById('e_roll');
let e_pt2 = document.getElementById('e_pt2');
//Defining Objects
const name = {
  "8C29" : 'Ranvijay Raj',
  "8C30" : "Yugansh Raj"
}
const classs = {
  "8C29" : "8",
  "8C30" : "8"
}
const section ={
  "8C29" : "C",
  "8C30" : "C",
}
const roll ={
  "8C29" : "29",
  "8C30" : "30"
}
const pt2 = {
  "8C29" : "85.75%"
}
// setting functions
const extract = ()=>{
  event.preventDefault()
  value.hidden = false
  let single = classs_value.value + sec.value + roll_value.value
  h3[0].innerHTML = `Name: ${name[single]}`
  h3[1].innerHTML = `Class: ${classs[single]}`
  h3[2].innerHTML = `Section: ${section[single]}`
  h3[3].innerHTML = `Roll No. : ${roll[single]}`
  h3[4].innerHTML = `P.T 2 Percentage: ${pt2[single]}`
  classs_value.value = ''
  sec.value = ''
  roll_value.value = ''
}
const show = ()=>{
  if (data.style.display == "none") {
    panel.innerHTML = 'User Panel'
    data.style.display = "block"
  }
  else{
    panel.innerHTML = 'Admin Panel'
    data.style.display = "none"
  }
}
const feed = ()=>{
  event.preventDefault()
  let single = e_classs.value + e_sec.value + e_roll.value
  name[single] = `${e_name.value}`
  classs[single] = `${e_classs.value}`
  section[single] = `${e_sec.value}`
  roll[single] = `${e_roll.value}`
  pt2[single] = `${e_pt2.value}`
  e_classs.value = ''
  e_sec.value = ''
  e_roll.value = ''
  e_name.value = ''
  e_pt2.value = ''
}