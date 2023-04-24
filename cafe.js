document.getElementById("tableno").style.color = "Green";
//Onchange function
function uppercase(){
    const upp_case =document.getElementById("name");
    upp_case.value=upp_case.value.toUpperCase();
}
function lowercase(){
    const low_case=document.getElementById("email");
    low_case.value=low_case.value.toLowerCase();
}
//console.log('hi')
// Put DOM elements into variables
    const myForm=document.querySelector('#form1');
    const  nameInput =document.querySelector("#name");
    const emailInput=document.querySelector("#email");
    const  mobileno=document.querySelector("#contactno");
    const  timE=document.querySelector("#time");
    const DatE =document.querySelector("#date");
    const TableNo =document.querySelector("#tableno");

    const msg=document.querySelector('.msg');
    const userList=document.querySelector('#users');
    //alert(myForm +nameInput+emailInput+mobileno+timE+DatE+TableNo);

    
// Listen for form submit
    myForm.addEventListener('submit', onSubmit);

    function onSubmit(e){
        e.preventDefault();
      if(nameInput.value==='' || emailInput.value==='' || mobileno === '' || timE ==='' || DatE ==='' ||TableNo===''){
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        
    // Remove error after 3 seconds
        setTimeout(()=>msg.remove(),3000);
      }else{
        const li=document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value} , ${emailInput.value} , ${mobileno.value} , ${timE.value} , ${DatE.value} , ${TableNo.value}`));

        
    // Append to ul
        userList.appendChild(li);
        //clear fields
        nameInput.value='';
        emailInput.value='';
        mobileno.value='';
        timE.value='';
        DatE.value='';
        TableNo.value='';

      }
    }
   
    function display(event){
   
        //By this way can take value from the HTML Element
        const  username =document.getElementById("name").value;
        const useremail =document.getElementById("email").value;
        const userno =document.getElementById("contactno").value;
        const curr_time =document.getElementById("time").value;
        const todays_date =document.getElementById("date").value;
        const table_no =document.getElementById("tableno").value;
        // alert(username +useremail + userno +curr_time+todays_date +table_no ); - by this way we can check data is retrieved 
        // or not
    
        //store data in local storage
        var un =localStorage.setItem("username" ,username);
        var ue=localStorage.setItem("useremail" , useremail);
        var un=localStorage.setItem("userno" , userno);
        var currtm=localStorage.setItem("curr_time" , curr_time);
        var tddate=localStorage.setItem("todays_date" , todays_date);
        var tab_no=localStorage.setItem("table_no" , table_no);
        }

 



 
