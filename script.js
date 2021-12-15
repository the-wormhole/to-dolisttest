
let btn = document.getElementById('btn');
btn.addEventListener('click',createTask);
let ctr = 1;
function createTask(event){
    event.preventDefault();
    let content = document.getElementById('task');
    // console.log(content.value);
    if(content.value.length > 0){

        let newItem = document.createElement("li");
        newItem.id = ctr;
        let str = document.createTextNode(content.value);
        newItem.appendChild(str);

        let del = document.createElement('button');
        del.type = "submit";
        del.innerText="Delete";
        del.onclick = (event)=>{
            //console.log(event.path[1].id);
            let item = document.getElementById(event.path[1].id);
            item.remove();
            let all = document.querySelectorAll('#list ul li')
            let count = document.getElementById('ctr');
            ctr = all.length;
    
            count.innerText = ctr;
        }

        let ele = document.createElement('input');
        ele.type = "checkbox";
        newItem.appendChild(ele);
        newItem.appendChild(del);

        let list = document.querySelector('#list ul');
        let all = document.querySelectorAll('#list ul li')
        list.appendChild(newItem);

        let count = document.getElementById('ctr');
        ctr = all.length;

        count.innerText = ctr + 1;
        //console.log(all);

    }else{
        alert("Empty task can't be added!!");
    }
}


