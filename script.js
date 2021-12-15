
let btn = document.getElementById('btn');
btn.addEventListener('click',createTask);
var ctr = 1;
async function createTask(event){
    event.preventDefault();
    let content = document.getElementById('task');
    // console.log(content.value);
    if(content.value.length > 0){

        let newItem = document.createElement("li");
        let str = document.createTextNode(content.value);
        newItem.appendChild(str);
        let list = document.querySelector('#list ul');
        let all = document.querySelectorAll('#list ul li')
        await list.appendChild(newItem);

        let count = document.getElementById('ctr');
        // if(all.length >){
            //console.log()
            ctr = all.length;
        // }else{
        //     ctr = 1;
        // }
        count.innerText = ctr + 1  ;
        console.log(all);

    }else{
        alert("Empty task can't be added!!");
    }
}

