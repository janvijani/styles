function onLoad(){
	var name = document.getElementById("name").value;
	// console.log(name);
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status ==200 ) {
			var jsonObj = JSON.parse(xhttp.responseText);
			var flag = 1;
			// console.log(jsonObj.length);
			for (var i = 0; i < jsonObj.length; i++) {
				if (jsonObj[i].name == name) {
					document.getElementById("demo").innerHTML = "Hello "+name+",<br>WP labs attended: "+jsonObj[i].lab_attendence+"<br>WP labs conducted : "+jsonObj[i].labs_conducted+ "<br> WP lectures attended: "+jsonObj[i].lectures_attended+ "<br> WP lectures conducted: " +jsonObj[i].lectures_conducted+;
					break;
				}else{
					flag = 0;
				}
				if (flag == 0) {
					document.getElementById("demo").innerHTML = "Incorrect Name";	
				}
			}
		}
	};
	xhttp.open("GET","data67.json",true);
	xhttp.send(null);
}
