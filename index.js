



const selectPlan = (planNumber) => {
    const plán1 = document.querySelector("#plan1");
    plán1.classList.remove("plan--selected"); //zruší plan selected)//
    const plán2 = document.querySelector("#plan2");
    plán2.classList.remove("plan--selected");
    const plán3 = document.querySelector("#plan3");
    plán3.classList.remove("plan--selected");
  
    const plány = document.querySelector(`#plan${planNumber}`); //vybere číslo plánu//

    plány.classList.add('plan--selected'); //přidá plan celected//
};

 /*selectPlan(1);
  selectPlan(2);*/
