var counter = 0 ;

function addItem(){

    var data_field = document.getElementById("item"); 
    var data = data_field.value ;
    var parent = document.getElementById("main-content");
    var child = document.getElementById("add-item-row");
    
    if(data==""){
        alert("please fill the field");
    }else{

    var main = document.createElement("div");
    main.classList.add("row");
    console.log(main);
    main.setAttribute("id" , "row"+counter)

    main.innerHTML=  '<div class="col-lg-1"></div>'+
    '<div class="col-lg-1"><input type="checkbox" onclick="validate(row'+counter+')"></div>'+
    '<div class="col-lg-7"><input class="no-decoration" disabled type="text" value="'+data+'"/></div>'+
    '<div class="col-lg-1 small"><i class="fas fa-pen" onclick="edit(row'+counter+')"></i></div>'+
    '<div class="col-lg-1"><i class="far fa-times-circle" onclick="remove(row'+counter+')"></i></div>' ;

    parent.insertBefore(main , child);   
    counter++ ;                   
    data_field.value = "";
}
}
function validate(element){

    var item = document.getElementById(element.id);
    var arr = item.querySelectorAll("input");
    var isChecked = arr[0].checked ;
    if(isChecked){
        arr[1].style.textDecoration = "line-through";
    }else if(!isChecked){
        arr[1].style.textDecoration = "none";
    }

}

function edit(element){

    var row = document.getElementById(element.id);
    var arr = row.querySelectorAll("input");
    arr[1].disabled = false ;
    arr[1].addEventListener("change" , function my(){
        arr[1].disabled = true ;
    });

}

function remove(element){
    var row = document.getElementById(element.id);
    row.remove();
}

function edit_head(element){

    var field = document.getElementById(element);
    field.disabled = false ;
   /* field.addEventListener("change" , function my(){
        field.disabled = true ;
    });*/
}

function disable(context){

    var field = document.getElementById(context.id);
    field.disabled = true ;
}

