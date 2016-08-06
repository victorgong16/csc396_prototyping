window.onload = function() {

	$('#sortable').sortable();
	$('#sortable').disableSelection();

	countTodos();

	// all done btn
	$("#checkAll").click(function(){
		AllDone();
	});

	//create todo
	$('.addButton').on('click', function () {

		var task = document.getElementById('text_input').value;
		if (task != ''){
			createTodo(task);
			countTodos();
		}
	  });
	  
	// mark task as done
	$('.todolist').on('change','#sortable li input[type="checkbox"]',function(){
		console.log("HELLO WORLD");
		if($(this).prop('checked')){
			var doneItem = $(this).parent().parent().find('label').text();
			$(this).parent().parent().parent().addClass('remove');
			done(doneItem);
			countTodos();
		}
	});

	//delete done task from "already done"
	$('.todolist').on('click','.remove-item',function(){
		console.log("THIS BUTTON GOT HERE");
		removeItem(this);
	});
	
	// count tasks
	function countTodos(){
		var count = $("#sortable li").length;
		$('.count-todos').html(count);
	}

	//create task
	function createTodo(text){
		var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" class="glyphicon glyphicon-ok" />'+ text +'</label></div></li>';
		$('#sortable').append(markup);
		$('.add-todo').val('');
	}

	//mark task as done
	function done(doneItem){
		var done = doneItem;
		var markup = '<li>'+ done +'<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
		$('#done-items').append(markup);
		$('.remove').remove();
	}

	//mark all tasks as done
	function AllDone(){
		var myArray = [];

		$('#sortable li').each( function() {
			 myArray.push($(this).text());   
		});
		
		// add to done
		for (i = 0; i < myArray.length; i++) {
			$('#done-items').append('<li>' + myArray[i] + '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
		}
		
		// myArray
		$('#sortable li').remove();
		countTodos();
	}

	//remove done task from list
	function removeItem(element){
		$(element).parent().remove();
	}
};