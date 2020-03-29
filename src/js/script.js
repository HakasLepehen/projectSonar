
	function OnSelectionChange(select) {
		var selname = select.options[select.selectedIndex];

		switch (selname.value) {
			    case 'ГАЗ':
			      document.getElementById("result").innerHTML="111111111111111111111";
			      break;

			    case 'ВАЗ':
			      document.getElementById("result").innerHTML="222222222222222222";
			      break;

			    case 'ЛАДА':
			      document.getElementById("result").innerHTML="33333333333333333";
			      break;

			    case 'ВАДА':
			      document.getElementById("result").innerHTML="44444444444444444444444444444444";
			      break;
		}
	}
