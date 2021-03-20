var repeat = true;
while(repeat){
	var reply = prompt("Are we there yet?");
	if(reply.toLowerCase() === "yes" || reply.toLowerCase() === "yeah" || reply.toLowerCase().indexOf("yes") != -1){
		repeat = false;
		alert("Yayyyyyy!");
	}
}