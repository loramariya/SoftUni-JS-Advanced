function constructionCrew(worker) {
    if(worker.dizziness){
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
        worker.dizziness = !worker.dizziness;
    }
    return worker;
}

console.log(constructionCrew({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false }));