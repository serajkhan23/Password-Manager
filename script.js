console.log("Working");
document.querySelector(".btn").addEventListener("click",(e)=>
{
    e.preventDefault()//isse form submit nhi hoga
    console.log("clicked");
    console.log(username.value,password.value)
    let passwords=localStorage.getItem("passwords")
    console.log(passwords);
    if(passwords)
    {
        let json=[]
    }
})