
function slide(imarray,div_id){
//Just need to provide the "image files path array" and provide the "division id" to place the slide show 

var it = 0;
function change_image_plus(element_id)
		{
			document.getElementById(element_id).src = imarray[it];
			it+=1;
			if(it===imarray.length)
				it=0;
		}
function change_image_minus(element_id)
		{
			document.getElementById(element_id).src = imarray[it];
			it-=1;
			if(it===-1)
				it=imarray.length-1;
		}	

	var div = document.getElementById(div_id);
		div.innerHTML = ''
		div.className = "relative";

	var im = document.createElement('IMG');
		im.src=imarray[it];
		im.id="slide_image";
		im.className="im_style";
	var bu_plus=document.createElement('BUTTON');
		
	    bu_plus.innerHTML=">"
	    
	    bu_plus.className="inside button_slide";
	    bu_plus.style="right:0px";
	    bu_plus.addEventListener("click", function (){
	    change_image_plus("slide_image")
	});

	var bu_minus=document.createElement('BUTTON');
	    bu_minus.innerHTML="<";
	    bu_minus.className="inside button_slide";
	    bu_minus.style="left:0px";
	    bu_minus.addEventListener("click", function (){
	    change_image_minus("slide_image")
	});

	div.appendChild(bu_plus);
	div.appendChild(bu_minus);
	div.appendChild(im);
}

