const taka=document.getElementById("tk");
const usdolar=document.getElementById("dolar");
const indianrupi=document.getElementById("indianRs");
const omaniRial=document.getElementById("omaniRial");


taka.addEventListener("input",bdTktoOthers);
function bdTktoOthers(){
    const bdtk = parseFloat(taka.value);
    const usd=bdtk*0.012;
    const ir = bdtk*0.86;
    const or = bdtk*0.0045;
    
    usdolar.value = usd;
    indianrupi.value=ir;
    omaniRial.value=or;
}



usdolar.addEventListener("input",usdTktoOthers);
function usdTktoOthers(){
    const usd = parseFloat(usdolar.value);
    const bdtk=usd*84.73;
    const ir = usd*73.23;
    const or = usd*0.38;
    
    taka.value = bdtk;
    indianrupi.value=ir;
    omaniRial.value=or;
}

indianrupi.addEventListener("input",inrTOothers);
function  inrTOothers(){
    const ir= parseFloat(indianrupi.value);
    const bdtk = ir*1.15;
    const usd = ir*0.013;
    const or=ir*0.0052;
    taka.value = bdtk;
    usdolar.value = usd;
    omaniRial.value=or;

}

omaniRial.addEventListener("input",omaniRialtoother);
function omanitoother(){

    const or = parseFloat(omaniRial.value);
    const bdtk = or*220.21;
    const usd  = or*2.60;
    const ir  = or*192.62;
    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;

}


function main(){
    bdTktoOthers();
    usdTktoOthers();
    inrTOothers();
    omanitoother();
}
main();