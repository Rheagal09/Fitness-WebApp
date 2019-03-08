$(document).ready(function(){
  $('#btn').click(function(){
    let Height=$('#HeightInp').val()
    let Weight=$('#WeightInp').val()
    let Fat=$('#FatInp').val()
    let FatFreeMass=$('#FFM')
    FatFreeMass.val((Weight*(1-Fat/100)).toFixed(3));
    let FFMI=$('#FFMI')
    FFMI.val((FatFreeMass.val()/((Height/100)*(Height/100))).toFixed(3))
    let NFFMI=$('#NFFMI')
    NFFMI.val(parseFloat(FFMI.val()+6.1*(1.8-Height)));
    let BF=$('#BF')
    BF.val(Weight*Fat/100)
  })
})
