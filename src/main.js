console.log('js file connected!');
console.log('success');


$('.btn').click(ble);

function ble(evt){
    console.log(evt.target.innerHTML, '被點擊');
}