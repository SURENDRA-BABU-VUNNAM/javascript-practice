// project-2 solution

let form =document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const height= parseFloat(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results");

    if (height==="" ||height<0 || isNaN(height)){
        result.innerHTML= `please give me a vaild height ${height}`
    } else if (weight==="" ||weight<0 || isNaN(weight)){
        result.innerHTML= `please give me a vaild weight ${weight}`
    } else {
        let BMI =  (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<p>${BMI}</p>`
        let weight_category = document.createElement("p")
        result.appendChild(weight_category)

        if(BMI<18.6){
            weight_category.innerText = "you are under weight"
            }else if(BMI>18.6 && BMI<24.9){
                weight_category.innerText = "you are normal weight"
            }else{
                weight_category.innerText = "you are over weight"
            }
    }
})

