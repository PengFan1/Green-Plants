var timer = null,
    loading = document.getElementById("loading")

    
function hide(){
	loading.style.display = "none";
}

function start(){
	setTimeout("hide()",1500);
	
}

start();