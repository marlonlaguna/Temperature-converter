$(document).ready(function(){


  $("#Celsius").keyup(function(){
    var celsius = parseFloat($("#Celsius").val());
    var fahrenheit = (celsius * (9/5) + 32);
    $("#Fahrenheit").val(String(fahrenheit.toFixed(2)).replace(/\.00$/,''));

  });

  $("#Fahrenheit").keyup(function(){

    var fahrenheit = parseFloat($("#Fahrenheit").val());
    var celsius = (fahrenheit - 32) * (5/9);
  
    $("#Celsius").val(String(celsius.toFixed(2)).replace(/\.00$/,''));

  });
  });