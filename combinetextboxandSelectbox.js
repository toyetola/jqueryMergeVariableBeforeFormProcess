 <script>
 
//Author: Oyetola Taiwo

		    	$(document).ready(function(){
		    
		    javascript:void(document.oncontextmenu=null);
		        
		    $('#sub').click(function(evt){
		        if($('#domain-search').val() != null && $('#domain-search').val() != ""){
		        var c = $('#domain-search').val();
		        var d = $('#selectdomain').find('option:selected').text();
		        $('#domain-search').val(c+d);
		        }else{
		            alert("Type a domain name");
		            evt.preventDefault();
		        }
		    });
		 });   
		</script>
