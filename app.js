const calendar = [
    {
        weekday:"lunes", 
        hour: "7:30 am",
        activity: "ejercicio",
        description: "nadar"
    },
    {
        weekday:"lunes", 
        hour: "8:30 am",
        activity: "comer",
        description: "comprar frutas"
    },
    {
        weekday:"martes", 
        hour: "7:30 am",
        activity: "ejercicio",
        description: "nadar"
    },
    {
        weekday:"miercoles", 
        hour: "7:30 am",
        activity: "ejercicio",
        description: "nadar"
    }, 
    {
        weekday:"jueves",
        hour: "7:30 am",
        activity: "perritas",
        description: "caminar 3km"
    },
    {
        weekday:"viernes", 
        hour: "7:00 am",
        activity: "perritas",
        description: "caminar 3km"
    },
    {
        weekday:"lunes",
        hour: "9:00 am",
        activity: "estudiar",
        description: "css: animation, transform"
    },
    {
        weekday:"martes",
        hour: "9:00 am",
        activity: "estudiar",
        description: "Javascript"
    },
    {
        weekday:"miercoles",
        hour: "9:00 am",
        activity: "estudiar",
        description: "Javascript"
    },
    {
        weekday:"jueves",
        hour: "9:00 am",
        activity: "estudiar",
        description: "Javascript"
    },
    {
        weekday:"viernes",
        hour: "9:00 am",
        activity: "estudiar",
        description: "Javascript"
    }, 
    {
        weekday:"lunes",
        hour: "2:00pm",
        activity: "estudiar",
        description: "Javascript"
    },
    {
        weekday:"martes",
        hour: "4:00pm",
        activity: "estudiar",
        description: "Ingles"
    },
    {
        weekday:"miercoles",
        hour: "4:00pm",
        activity: "estudiar",
        description: "Ingles"
    },
    {
        weekday:"jueves",
        hour: "4:00pm",
        activity: "estudiar",
        description: "Ingles"
    },
    {
        weekday:"viernes",
        hour: "4:00pm",
        activity: "estudiar",
        description: "Ingles"
    },
    {
        weekday:"lunes",
        hour: "5:30pm",
        activity: "perritas",
        description: "Caminar 1Km"
    },
    {
        weekday:"martes",
        hour: "5:30pm",
        activity: "perritas",
        description: "Caminar 1Km"
    },
    {
        weekday:"miercoles",
        hour: "5:30pm",
        activity: "perritas",
        description: "Caminar 1Km"
    },
    {
        weekday:"jueves",
        hour: "5:30pm",
        activity: "perritas",
        description: "Caminar 1Km"
    },
    {
        weekday:"viernes",
        hour: "5:30pm",
        activity: "perritas",
        description: "Caminar 1Km"
    }
]

const icons = {
    perritas: "./src/dog.png",
    comer: "./src/food.png",
    ejercicio:"./src/swimming.png",
    estudiar : "./src/laptop.png"
}


const monday = document.querySelector(".monday")
const tuesday = document.querySelector(".tuesday")
const wednesday = document.querySelector(".wednesday")
const thuesday = document.querySelector(".thuesday")
const friday = document.querySelector(".friday")

const study = document.querySelector(".study")
const food = document.querySelector(".food")
const walkingDog = document.querySelector(".walkingDog")
const exercise = document.querySelector(".exercise")


calendar.forEach(item => {
    const activity = document.createElement("div")
    activity.className="activity glassmorphism"
    const title = document.createElement("p")
    title.className="title"
    title.textContent= item.activity
    const description = document.createElement("div")
    description.className="description glassmorphism"
    const hour = document.createElement("h3")
    hour.textContent=item.hour
    const pdescription = document.createElement("p")
    pdescription.textContent=item.description

    description.append(hour, pdescription)
    activity.append(title, description)

    switch (item.weekday) {
        case "lunes":
            monday.append(activity)
            break;
        case "martes":
            tuesday.append(activity)
            break;
        case "miercoles":
            wednesday.append(activity)
            break;
        case "jueves":
            thuesday.append(activity)
            break;
        case "viernes":
            friday.append(activity)
            break;
    
        default:
            break;
    }

    activity.addEventListener("click", ()=> {
        activity.classList.toggle("end")
    })
}) 

let counterExercise = 0
let counterFood = 0
let counterWalkingDog = 0
let counterStudy = 0
for (let i = 0; i < calendar.length; i++) {
    const element = calendar[i].activity;
    switch (element) {
        case "ejercicio":
            counterExercise += 1 
            break;
        case "comer":
            counterFood += 1 
            break;
        case "perritas":
            counterWalkingDog += 1 
            break;
        case "estudiar":
            counterStudy += 1 
            break;
        default:
            break;
    }
}

function addColor (counter, div) {
    if(counter < 1){
        div.classList.add("red")
    } else{
        div.classList.add("green")
    }
}

addColor(counterStudy,study)
addColor(counterWalkingDog,walkingDog)
addColor(counterExercise,exercise)
addColor(counterFood,food)


exercise.textContent=counterExercise
food.textContent=counterFood
walkingDog.textContent=counterWalkingDog
study.textContent=counterStudy



