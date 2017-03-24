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
					document.getElementById("demo").innerHTML = "Hello "+name+",<br>WP Marks : "+jsonObj[i].wp+"<br>MPMC Marks : "+jsonObj[i].mpmc;
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
	xhttp.open("GET","data.json",true);
	xhttp.send(null);
}
