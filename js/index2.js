let galerry_img = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"];


    function backoption(){
        
        let num =0;
        handelar =  setInterval(()=>{
            document.querySelector(".gallery-tophone .box-imgs img").src =/images/+galerry_img[num] ;
            num++;
            if(num == 8){
                num =  1;
            }
        },3000)
    
    } 
    if(this.innerWidth <= 519 ){

        backoption();
    }
  


