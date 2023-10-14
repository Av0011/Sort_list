let asc_btn = document.getElementById('asc');
let desc_btn = document.getElementById('desc');
let reset_btn = document.getElementById('rst');

asc_btn.addEventListener('click',SortAsc);
desc_btn.addEventListener('click',SortDesc);
reset_btn.addEventListener('click',ResetFun);

function SortAsc(){
    let list = document.getElementById('myUl');
    let i;
    let switching = true;
    let ShouldSwitch;

    while(switching){
        switching = false;
        let b = list.getElementsByTagName('li');

        for(i=0;i<(b.length -1);i++){
            ShouldSwitch = false;
            if(b[i].innerHTML.toLocaleLowerCase() > b[i+1].innerHTML.toLowerCase()){
                ShouldSwitch = true;
                break;
            }
        }
        if(ShouldSwitch){
            b[i].parentNode.insertBefore(b[i+1],b[i]);
            switching = true;
        }
    }
}



function SortDesc(){
    let list = document.getElementById('myUl');
    let i;
    let switching = true;
    let ShouldSwitch;

    while(switching){
        switching = false;
        let b = list.getElementsByTagName('li');

        for(i=0;i<(b.length -1);i++){
            ShouldSwitch = false;
            if(b[i].innerHTML.toLocaleLowerCase() < b[i+1].innerHTML.toLowerCase()){
                ShouldSwitch = true;
                break;
            }
        }
        if(ShouldSwitch){
            b[i].parentNode.insertBefore(b[i+1],b[i]);
            switching = true;
        }
    }
}


function ResetFun(){
    location.reload();
}