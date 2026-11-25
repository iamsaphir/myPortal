 document.getElementById("myCheck").onclick = function() {
            let name = document.getElementById("nameId").value
            let math = Number(document.getElementById("mathId").value)
            let english = Number(document.getElementById("englishId").value)
            let french = Number(document.getElementById("frenchId").value)
            let physics = Number(document.getElementById("physicsId").value)
            let studentId = Number(document.getElementById("studentId").value)

            let average = (math+english+french+physics)/4
            

             if (name === "" || math === "" || english === "" || french === "" || physics === "" || studentId === "") {
                 document.getElementById("myH2").textContent= `Please fill all the fields.`
                 document.getElementById("myH2").style.color= "red"
            } else if (studentId.length <4) {
              document.getElementById("myH2").textContent= `Your student iD must contain more than 4 numbers.`
              document.getElementById("myH2").style.color= "red"
            } else if (average >=90 && average === 100 ) {
                document.getElementById("myH1").textContent= `Excellent performance ${name}!
                Average: ${average}%`

            }
            else if (average >= 80 && average <= 89) {
             document.getElementById("myH1").textContent= ` Very good ${name}!
              Average: ${average}% `
            } else if (average >= 70 && average <= 79) { 
              document.getElementById("myH1").textContent= `Good ${name}!
              Average: ${average}% `
            } else if (average >= 60 && average <= 69) {
                document.getElementById("myH1").textContent= `You pass ${name}!
              Average: ${average}% `
            } else {
                document.getElementById("myH1").textContent= `You need improvment ${name}!
              Average: ${average}% `
            }
          
           
          }
