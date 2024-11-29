function clearDisplay() { 
    document.getElementById('screen').value = '';
}
function addValue(val){
    let v = document.getElementById('screen')
    v.value=v.value+val;
}
function calc(){
    let v = document.getElementById('screen').value
    let result = eval(v)
    document.getElementById('screen').value=result
}
function backspace() {
    const v = document.getElementById('screen'); 
    v.value = v.value.slice(0, -1);
}