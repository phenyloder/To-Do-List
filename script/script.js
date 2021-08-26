let parr=document.getElementById('text_box')
let add=document.getElementById('click');

let element=document.getElementById('list1');
var mHTML="";
var ind;

const listed=(task)=>{
    listedHTML=`<span><i class="fa fa-trash-o de" data-index="0" id="${ind}" onclick="deleted(id)" style="font-size:24px"></i></span><li  class="design">${task}</li><br>`;
    mHTML += listedHTML;
    ind++;
}

var arr=localStorage.getItem("todo");
    var new_tasks_object;
    if(arr==null){
        new_tasks_object=[];
    }else{
        new_tasks_object=JSON.parse(arr);
    }
    ind=0;
    new_tasks_object.forEach(listed);
    element.innerHTML=mHTML;

add.addEventListener('click',()=>{
    var task=parr.value;
    if (parr.value.length === 0){
        alert("Enter A Task First!");
    }
    var arr=localStorage.getItem("todo");
    var new_tasks_object;
    if(arr==null){
        new_tasks_object=[];
    }else{
        new_tasks_object=JSON.parse(arr);
    }
    if(arr!=null && !arr.includes(task)){
        new_tasks_object.push(task);
    }
    localStorage.setItem("todo",JSON.stringify(new_tasks_object));
    parr.value="";
    mHTML="";
    ind=0;
    new_tasks_object.forEach(listed);
    element.innerHTML=mHTML;
})
function deleted(i){
    var arr=localStorage.getItem("todo");
     if(arr==null){
        new_tasks_object=[];
    }else{
        arr.slice(i,1);
        new_tasks_object=JSON.parse(arr);
    }
    new_tasks_object.splice(i,1);
    localStorage.setItem("todo",JSON.stringify(new_tasks_object));
    mHTML="";
    ind=0;
    new_tasks_object.forEach(listed);
    element.innerHTML=mHTML;
}
