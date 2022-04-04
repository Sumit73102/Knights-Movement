
	// Javascript program to find number of possible moves of knight
	
	function myFunction() {
		//document.getElementById("main").reset();
		//console.log("Hey");
		document.getElementById("00").innerHTML="";
	}
	let n = 8;
	
	// To calculate possible moves
	function findPossibleMoves(p, q)
	{
		let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
		let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

		//let count = 0;

		// Check if each possible move is valid or not
		for (let i = 0; i < 8; i++) {

			// Position of knight after move
			let x = p + X[i];
			let y = q + Y[i];

			// count valid moves
			if (x >= 0 && y >= 0 && x < n && y < n ){
				let k1=(8*x)+y-q;
				s=k1.toString();
				if(k1<10){
				    s="0".concat(s);
				}
				document.getElementById(s).innerHTML="\u265E";
			}
		}

		// Return number of possible moves
	}
	function clean(){
		for(let i=0;i<64;i++){
			let s=i.toString();
			if(i<10){
				s="0".concat(s);
			}
			document.getElementById(s).innerHTML="";
			document.getElementById(s).style.opacity=1;
		}
	}
	function take(k){
		clean();
		document.getElementById(k).innerHTML="\u265E";
		document.getElementById(k).style.opacity=0.2;
		const t=parseInt(k);
		//document.getElementById("3").innerHTML=t;
		findPossibleMoves(t/8,t%8);
	}
	