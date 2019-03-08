$(document).ready(function(){
  let Mus;
  let Data;
  let Sel2=document.getElementById('sel2')
  Sel2.onclick=function(){
    var promise1=new Promise(function(resolve,reject){
      Mus=Sel2.options[Sel2.selectedIndex].value
      resolve("Success")
    })
    promise1.then(function(value){
      console.log(value)
      console.log(Mus);
      $.ajax({
        url: `Exercise?muscle=${Mus}`,
        success: function(result){
            Data=result;
            DisplayDropDown(result)
        }});
    })
  }
  function DisplayDropDown(result){
    let block=document.getElementById('sel3');
    function func1(){
      let options
      for( let i=0;i<result.length;i++){
      let name=result[i].name
      options+= '<option value='+i +'>'+ name +'</option>'
    }
    block.innerHTML=options;
    }
    func1();
  }
  let btn=document.getElementById('btn')
  btn.onclick=function(){
      let RAL;
      if($('#RepInp').val()!=1)
        RAL=($('#WeightInp').val()*(1+$('#RepInp').val()/30)).toFixed(3);
      else RAL=$('#WeightInp').val();
      console.log(RAL)
      let AAL=Number(Math.abs(25-$('#AgeInp').val())*RAL*15/(700));
      let e=document.getElementById('sel3')
      AAL=Number(AAL)+Number(RAL)
      let index=e.selectedIndex;
      let res;
      let value
      console.log(AAL,index,Data[index].Beginner);
      (AAL<Data[index].Beginner)?res=1:(AAL<Data[index.Novice])?res=2:(AAL<Data[index].Inter)?res=3:(AAL<Data[index].Advanced)?res=4:res=5
      if(res==1)
        value=0.5;
      else if(res==2){
        if((AAL-Data[index].Beginner)/(Data[index].Novice-Data[index].Beginner)>0.5)
          value=1.5;
        else {
          value=1;
        }
      }
      else if(res==3){
        if((AAL-Data[index].Novice)/(Data[index].Inter-Data[index].Novice)>0.67)
          value=3;
        else if((AAL-Data[index].Novice)/(Data[index].Inter-Data[index].Novice)>0.33) {
          value=2.5;
        }
        else{
          value=2
        }
      }
      else if(res==4){
        if((AAL-Data[index].Inter)/(Data[index].Advanced-Data[index].Inter)>0.5)
          value=4;
        else{
          value=3.5
        }
      }
      else if(res==5){
        if((AAL-Data[index].Advanced)/(Data[index].Expert-Data[index].Advanced)>0.7)
          value=5;
        else{
          value=4.5
        }
      }
      console.log(value,res);
      Display(value);
  }
  function Display(value){
    let inner='';
    for(let i=0;i<Math.floor(value);i++){
      inner+='<i class="fa fa-star fa-3x" aria-hidden="true"></i>'
    }
    if(value-Math.floor(value)==0.5)
      inner+='<i class="fa fa-star-half-o fa-3x" aria-hidden="true"></i>'
    value=5-Math.ceil(value);
    for(let i=0;i<Math.floor(value);i++){
      inner+='<i class="fa fa-star-o fa-3x" aria-hidden="true"></i>'
    }
    $('#RESULT').html(inner);
  }
})
