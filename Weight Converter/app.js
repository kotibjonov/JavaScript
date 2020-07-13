document.getElementById('lbsInput')
.addEventListener('input', function(e){
let lbs = e.target.value;
document.getElementById('gramsOutput')
.innerHTML = lbs*1000;
document.getElementById('pnOutput')
.innerHTML = lbs/2.205;
document.getElementById('ozOutput')
.innerHTML = lbs/35.274;
});
