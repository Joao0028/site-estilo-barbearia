function calcular(){

    var n1 =Number(document.querySelector(".n1").value)
    var n2 =Number(document.querySelector(".n2").value)
    var n3 =Number(document.querySelector(".n3").value)
    var n4 =Number(document.querySelector(".n4").value)
    var n5 =Number(document.querySelector(".n5").value)
    var n6 =Number(document.querySelector(".n6").value)
    var n7 =Number(document.querySelector(".n7").value)
    var n8 =Number(document.querySelector(".n8").value)
    var n9 =Number(document.querySelector(".n9").value)
    var n10 =Number(document.querySelector(".n10").value)
    var media = (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10)
    var resultado = document.querySelector(".display")
    
  
    resultado.innerHTML +=`A soma dos números acima é igual á ${media}. <br><br>`
  
}
