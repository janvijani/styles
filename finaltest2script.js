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
					
					var labper= (jsonObj[i].lab_attendence*100)/jsonObj[i].labs_conducted;
					var lecper = (jsonObj[i].lectures_attended*100)/jsonObj[i].lectures_conducted;
					var per= labper+lecper/2;
					document.getElementById("demo").innerHTML = "Hello "+name+",<br>WP labs attended: "+jsonObj[i].lab_attendence+"<br>WP labs conducted : "+jsonObj[i].labs_conducted+ "<br> WP lectures attended: "+jsonObj[i].lectures_attended+ "<br> WP lectures conducted: " +jsonObj[i].lectures_conducted+ "<br> total attendence: "+ per;
					
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
	xhttp.open("GET","finaldata67.json",true);
	xhttp.send(null);
}

