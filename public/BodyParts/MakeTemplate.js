$(document).ready(function(){
  var rawText=[];
  var listOfExercise;
  var head=document.getElementById('Heading')
  var part=(head.innerText)
  var t='Exercises for '
  part=part.replace(t,'')
  console.log(part)
  var Box=$('.AllExercises')
  function Fetch(){
    $.ajax({
      url:`NameOfExercise?Muscle=${part}`,
      success:function(data){
        listOfExercise=data;
        random();
      }
    });
  }
  Fetch();
  function random(){
    fetch('RandomText.txt')
    .then(response => response.text())
    .then(text => PutVal(text))
  }
  function PutVal(text){
    rawText=text;
    console.log(listOfExercise)
    Append();

  }
  function ShowFullInfo(object){
    object.style.removeProperty('height')
  }
  function Append(){
    for(let i=0;i<listOfExercise.length;i++){
      let Temp=document.createElement('div');
      Temp.className='Template'
      Temp.setAttribute('onmouseover','mouseOver(this)')
      Temp.setAttribute('onmouseout','mouseOut(this)')
      let infotext=document.createElement('div')
      infotext.append(rawText)
      $(infotext).css('visibility','hidden')
      let nameHead=document.createElement('h1')
      nameHead.append(listOfExercise[i].name)
      Temp.append(nameHead)
      Temp.append(infotext)
      Box.append(Temp);
      $(Temp).animate({width:'100%'},450)
    }
  }


})
