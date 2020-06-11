let btn = document.getElementsByTagName("li"),
    result = document.getElementsByClassName("result")[0],
    equal =  document.getElementsByClassName("equal")[0],
    nums = document.getElementsByClassName("num"),
    val,num1,num2,arr;

for(let i=0;i<btn.length;i++){
  btn[i].onclick = () =>{

    if(btn[i].innerText == "C"){
      result.value = 0;
    }else{
      val = btn[i].innerText;
      if(result.value == 0){
        result.value = val;
      }else{
        result.value += val;
        if(btn[i].innerText == "+"){
          equal.onclick = () =>{
            arr = result.value.split("+");
            if(!arr[1]){result.value = arr[0]}else{
              calcResult = parseFloat(arr[0])+parseFloat(arr[1]);
              result.value = calcResult;
              // if(calcResult) {
              //    for(let i=0;i<nums.length;i++){nums[i].onclick=(){alert(1)}}
              //   }
            }
          }
        }
        if(btn[i].innerText == "-"){
          equal.onclick = () =>{
            arr = result.value.split("-");
            if(!arr[1]){result.value = arr[0]}else{
              calcResult = parseFloat(arr[0])-parseFloat(arr[1]);
              result.value = calcResult;
            }
          }
        }
        if(btn[i].innerText == "*"){
          equal.onclick = () =>{
            arr = result.value.split("*");
            if(!arr[1]){result.value = arr[0]}else{
              calcResult = parseFloat(arr[0])*parseFloat(arr[1]);
              result.value = calcResult;
            }
        }
      }
        if(btn[i].innerText == "/"){
          equal.onclick = () =>{
            arr = result.value.split("/");
            if(!arr[1]){result.value = arr[0]}else{
              calcResult = parseFloat(arr[0])/parseFloat(arr[1]);
              result.value = calcResult;
            }
        }
      }
        if(btn[i].innerText == "%"){
          equal.onclick = () =>{
            arr = result.value.split("%");
            if(!arr[1]){result.value = arr[0]}else{
              calcResult = parseFloat(arr[0])%parseFloat(arr[1]);
              result.value = calcResult;
            }
            // for(let i=0;i<nums.length;i++){
            //   nums[i].onclick=()=>{
            //     if(calcResult){result.value = val;calcResult == false}else{result.value+=val}
            //   }
            // }
        }
      }
    }
  }


}
}
