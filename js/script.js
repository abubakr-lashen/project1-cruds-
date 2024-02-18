let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let mood="create";
let id;







// get price
function getotal(){
 if(price.value !=""){
result=(+price.value+ +taxes.value + +ads.value)- +discount.value;
total.innerHTML=result;
total.style.background="green";
tle=(+price.value+ +taxes.value + +ads.value);
 }
 else{
     total.style.background="#4b4b4b";
     result="";
}
if(total.innerHTML<1){
    total.style.background="red";
}

}
// create date


let data;
if(localStorage.pro!=null){
data=JSON.parse(localStorage.pro);

}
else{
    data=[];
}
submit.onclick=function(){

if(
    title.value !=""&&
    price.value!=""&&
    category.value!=""
){

    newdate={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value.toLowerCase(),
        total:total.innerHTML,
    }


if(mood==="create"){
    
    if(newdate.count > 1){
        for(let i=0;i <newdate.count ; i++)
        {
            data.push(newdate);
        }

    }else{
        data.push(newdate);

    }


}else{
    data[id]=newdate;
    submit.innerHTML="create";
    count.style.display="block";

}

    // seve localstorage
    localStorage.pro=JSON.stringify(data);

    console.log(data)
 
    cleardata()
    readDatat()



}
}





























//    localStorage.clear()
readDatat()

// clear data
function cleardata(){
    title.value="";
    price.value="";
    ads.value="";
    taxes.value="";
    discount.value="";
    count.value="";
    category.value="";
    total.innerHTML="";



}
// read data
function readDatat(){
let table="";
for(let i=0;i < data.length;i++){

    table +=`
    
    
    <tr>
    <td>${i+1}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].taxes}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].total}</td>
    <td>${data[i].category}</td>
    <td><button onclick="updateDate(${i}) "  id="update">update</button></td>
    <td><button onclick="deleteDate(${i}) "  id="delete">delete</button></td>
</tr>
    
    
    `

}
    document.getElementById('tbody').innerHTML=table
let btnDelete = document.getElementById("deleteAll");
if(data.length>0){
    btnDelete.innerHTML=`
    <td><button onclick="deletAll()">delete All (${data.length})</button></td>
    `

}else{
    btnDelete.innerHTML="";
}
}

// delete data
function deleteDate(i){
readDatat()
data.splice(i,1);


localStorage.pro=JSON.stringify(data);



}


// deleteAll
function deletAll(){

    data=[]
    localStorage.pro=JSON.stringify(data);
    
    readDatat()

}


// update Data
function updateDate(i){
    title.value=data[i].title;
    price.value=data[i].price;
    ads.value=data[i].ads;
    taxes.value=data[i].taxes;
    discount.value=data[i].discount;
    count.value=data[i].count;
    category.value=data[i].category;
   submit.innerHTML="update"
count.style.display="none";
scroll({
    top:0,
    behavior:"smooth"
})

   getotal()
  id=i;
mood="update";
}


// getSaerch
let SaerchMood="title";
let saerch=document.getElementById("search");
function getMood(id){
  if(id==="serchtitle"){
    SaerchMood="title";
  }else{
    SaerchMood="category";
  }
console.log(SaerchMood)
saerch.focus();
saerch.placeholder="saerch By  "+SaerchMood;
saerch.value="";

}
function getSaerch(value){
let table="";
for(let i=0;i<data.length;i++){

if(SaerchMood==="title"){
    if(data[i].title.includes(value.toLowerCase())){
    table +=`
    <tr>
    <td>${i+1}</td>
    <td>${data[i].title}</td>
    <td>${data[i].price}</td>
    <td>${data[i].taxes}</td>
    <td>${data[i].ads}</td>
    <td>${data[i].discount}</td>
    <td>${data[i].total}</td>
    <td>${data[i].category}</td>
    <td><button onclick="updateDate(${i}) "  id="update">update</button></td>
    <td><button onclick="deleteDate(${i}) "  id="delete">delete</button></td>
</tr>
    
    `
    }

}else{
    if(data[i].category.includes(value.toLowerCase())){

        table +=`
        
        
        <tr>
        <td>${i+1}</td>
        <td>${data[i].title}</td>
        <td>${data[i].price}</td>
        <td>${data[i].taxes}</td>
        <td>${data[i].ads}</td>
        <td>${data[i].discount}</td>
        <td>${data[i].total}</td>
        <td>${data[i].category}</td>
        <td><button onclick="updateDate(${i}) "  id="update">update</button></td>
        <td><button onclick="deleteDate(${i}) "  id="delete">delete</button></td>
    </tr>
        
        
        `
    
        }
}

}

document.getElementById('tbody').innerHTML=table;

}




