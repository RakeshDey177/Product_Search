let inputField= document.getElementById("inputField");

inputField.addEventListener("keyup",search);

function search()
{
    const searchbox =document.getElementById("inputField").value.toUpperCase();
    // console.log(searchbox);

    const product=document.querySelectorAll(".product");

    // console.log(products);
    console.log(product);

    const productname=document.getElementsByTagName("h3");

    for(var i=0; i<productname.length; i++)
    {
        var match= product[i].getElementsByTagName("h3")[0];

        console.log(match);

        var val=match.innerHTML.toUpperCase();
            
        console.log(val);
    
        if(val.indexOf(searchbox) > -1)
        {
            product[i].style.display="";
        }
        else
        {
            product[i].style.display="none";
        }
    }
}