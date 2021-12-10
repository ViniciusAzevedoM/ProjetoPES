let listAlimentos = [
    {
        nome: "ovo cozido",
        gluten: false,
        caloria: "77.5 cal",
        nutrinentes: "proteína, gordura"
    },
    {
        nome: "pão francês",
        gluten: true,
        caloria: "150 kcal",
        nutrinentes: "carboidrato, proteína"
    },
    {
        nome: "aveia",
        gluten: true,
        caloria: "59.10 kcal",
        nutrinentes: "carboidrato, proteína"
    },
    {
        nome: "salsicha",
        gluten: true,
        caloria: "120 kcal",
        nutrinentes: "carboidrato, proteína e gordura"
    },
    {
        nome: "macarrão",
        gluten: true,
        caloria: "173.8 kcal",
        nutrinentes: "carboidrato, proteína e sódio"
    }
]

let listReceitas = [
    {
        nome: "ovo cozido",
        link: "https://youtu.be/RSKLQo0zAPA"
    },
    {
        nome: "ovo cozido",
        link: "https://youtu.be/TNpkDQe23WI"
    },
    {
        nome: "pão francês",
        link: "https://youtu.be/R1vX5a1Td0s"
    },
    {
        nome: "pão francês",
        link: "https://youtu.be/hw2zvChDdwM"
    },
    {
        nome: "aveia",
        link: "https://youtu.be/DqPPprT5WvE"
    },
    {
        nome: "aveia",
        link: "https://youtu.be/btdh3VJ6Bko"
    },
    {
        nome: "salsicha",
        link: "https://youtu.be/Pta1JOlu5I4"
    },
    {
        nome: "salsicha",
        link: "https://youtu.be/FS1wEDSih8I"
    },
    {
        nome: "macarrão",
        link: "https://youtu.be/9Y_Jo4BnrIs"
    },
    {
        nome: "macarrão",
        link: "https://youtu.be/5I5kpwQoqpA"
    }
    
]

function searchName(name){
    return listAlimentos.filter((element)=>{
        if(element.nome.toLowerCase() === name.toLowerCase()){
            return element;
        }
    });
}
function searchNameR(name){
    return listReceitas.filter((element)=>{
        if(element.nome.toLowerCase() === name.toLowerCase()){
            return element;
        }
    });
}

export { listAlimentos, listReceitas, searchName, searchNameR }