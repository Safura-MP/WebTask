(function ()
{
    let display_screen=document.querySelector('.display_screen');
    let buttons=document.querySelectorAll('.button');
    let equal_btn=document.querySelector('.equal');
    let clear_btn=document.querySelector('.all_clear');
    let delete_btn=document.querySelector('.Delete')



    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            display_screen.value+=value;
        })
    });
    equal_btn.addEventListener('click',function(e){
        if(display_screen===""){
            display_screen="";
        }
        else{
            let result=eval(display_screen.value);
            display_screen.value=result;
        }
    })
    clear_btn.addEventListener('click',function(e)
    {
        
        display_screen.value="";
    })

    delete_btn.addEventListener('click',function(e)
    {
        display_screen.value=display_screen.value.substr(0,display_screen.value.length-1);
    })

})();
