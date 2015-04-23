$.ZqUI=(function(){
	var select=function($selector){
		if( $selector.data('_ZqUI') ){
			return false;
		}
		var $wrapper=$('<div></div>').addClass('_zqui-select-wrapper');
		var $con=$('<div></div>').addClass('_zqui-select').appendTo($wrapper);
		var $selectedcon=$('<div></div>').addClass('_zqui-selected-wrapper').appendTo($con);
		var $selected = $('<div></div>').addClass('_zqui-selected').appendTo($selectedcon);
		$selectedcon.on('click',function(){
			if( $listcon.data('status')==='hide' ){
				$listcon.show().trigger('show');
			}else{
				$listcon.hide().trigger('hide');
			}
		});
		
		var $listcon = $('<ul></ul>').addClass('_zqui-select-list').appendTo($con).hide().data('status','hide');
		
		$listcon.on('hide',function(){$(this).data('status','hide')}).on('show',function(){$(this).data('status','show')});
		
		$listcon.delegate('._zqui-select-option','click',function(){
			//$('option[value='+$(this).attr('_value')+']',$selector).click();
			$('._zqui-select-option',$listcon).removeClass('_zqui-option-selected');
			$(this).addClass('_zqui-option-selected');
			$selected.html($(this).html());
			$listcon.hide().trigger('hide');;
			
			$selector.val($(this).attr('_value'));
			$selector.change();
			
		});
		$('option',$selector).each(function(){
			var $this = $(this);
			var $option=$('<li></li>').addClass('_zqui-select-option').attr({
				_value:$this.attr('value'),
			})
			.html($this.html())
			.appendTo($listcon);
			if( $this.is(':selected') ){
				$option.addClass('_zqui-option-selected');
				$selected.html($this.html());
			}
		});
		$wrapper.insertBefore($selector);
		$selector.hide().data('_ZqUI',1);
	};
	var checkbox = function($checkbox){
		if( $checkbox.data('_ZqUI') ){
			return false;
		}
		$checkbox.hide();
		var $wrapper=$('<div></div>').addClass('_zqui-checkbox-wrapper');
		var $checkboxUI=$('<div></div>').addClass('_zqui-checkbox').html("√").appendTo($wrapper);
		$checkboxUI.data('checked',$checkbox.is(':checked'));
		$checkboxUI.data('checked') && $checkboxUI.addClass('_zqui-checked');
		$checkboxUI.click(function(){
			$checkboxUI.data('checked',!$checkboxUI.data('checked'));
			$checkboxUI.toggleClass('_zqui-checked');
			$checkbox.click();
		});
		$wrapper.insertBefore($checkbox);
		$checkbox.data('_ZqUI',1);
	};
	var radios =function($radios){
		if( $radios.data('_ZqUI') ){
			return false;
		}
		var $wrapper=$('<div></div>').addClass('_zqui-radios-wrapper');
		var $con=$('<div></div>').addClass('_zqui-radios').appendTo($wrapper);
		
		var $listcon = $('<ul></ul>').addClass('_zqui-radio-list clrfix').appendTo($con);
		
		$listcon.delegate('._zqui-radio-option','click',function(){
			$(':radio:checked[value!="'+$(this).attr('_value')+'"]',$radios).removeAttr('checked');
			$(':radio[value="'+$(this).attr('_value')+'"]',$radios).click();
			$('._zqui-radio-option',$listcon).removeClass('_zqui-option-rochecked');
			$(this).addClass('_zqui-option-rochecked');
		});
		$(':radio',$radios).each(function(){
			var $this = $(this);
			var $option=$('<li></li>').addClass('_zqui-radio-option').attr({
				_value:$this.attr('value'),
			})
			.html($this.attr('label'))
			.appendTo($listcon);
			if( $this.is(':checked') ){
				$option.addClass('_zqui-option-rochecked');
			}
		});
		$wrapper.appendTo($radios);
		$radios.data('_ZqUI',1);
		$(':radio',$radios).hide();
		
	};
	return {
		select:select,
		checkbox:checkbox,
		radios:radios
	};
})();
