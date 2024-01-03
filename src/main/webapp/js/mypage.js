     /*
      const modal = document.querySelector('.modal');
        const btnOpenModal=document.querySelector('.archivediv.btn-open-modal');
		const btnCloseModal=document.querySelector('.btn-close-modal');
       
        btnOpenModal.addEventListener("click", ()=>{
            modal.style.display="flex";
            console.log("archivediv.btn-open-modal clicked");
        });
        btnCloseModal.addEventListener("click", ()=>{
            modal.style.display="none";
        });
        window.addEventListener('click',  (e) => {
        e.target === modal ?  close() : false
        })
        
         function close(){
			  modal.style.display="none";
			 }
			 
		*/	 
		
		
		
		/*
		document.addEventListener("DOMContentLoaded", function() {
		    const modal = document.querySelector('.modal');
	        const btnOpenModal=document.querySelector('.archivediv.btn-open-modal');
			const btnCloseModal=document.querySelector('.btn-close-modal');
	       
	        btnOpenModal.addEventListener("click", ()=>{
	            modal.style.display="flex";
	            console.log("archivediv.btn-open-modal clicked");
	        });
	        btnCloseModal.addEventListener("click", ()=>{
	            modal.style.display="none";
	        });
	        window.addEventListener('click',  (e) => {
	        e.target === modal ?  close() : false
	        })
	        
	         function close(){
				  modal.style.display="none";
			}
			
			const ratingStars = [...document.getElementsByClassName("rating__star")];
			
			
    if (ratingStars) {
        ratingStars.addEventListener("click", () => {
            console.log("ratingStars clicked");
            // 모달 보여주는 코드
        });
    } else {
        console.log("Element not found");
    }
			
			
			
			function executeRating(stars) {
			  const starClassActive = "rating__star fas fa-star";
			  const starClassInactive = "rating__star far fa-star";
			  const starsLength = stars.length;
			  let i;
				
			  stars.map((star) => {
			    star.onclick = () => {
			      i = stars.indexOf(star);
			console.log("*"+i);
			      if (star.className===starClassInactive) {
			        for (i; i >= 0; --i) stars[i].className = starClassActive;
			      } else {
			        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
			      }
			    };
			  });
			}
			
			executeRating(ratingStars);

});

*/
