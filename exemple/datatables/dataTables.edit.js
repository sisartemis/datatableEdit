(function () {
	    var DataTablePrototype = $.prototype.DataTable;
	
	    $.prototype.DataTable = function (options) {
	    	var _textCancel = 'X';
	    	var _textAdd = '+';
	    	var _textDelete = 'Del';
	    	var _textEdit = 'Edit';
	    	var _textSave = 'Save';
			
	    	var _classCancel = 'font-size: 30px;padding: 0 2px 5px 2px;line-height: 0.7;';
	    	var _classAdd = 'font-size: 30px;padding: 0 2px 5px 2px;line-height: 0.7;';
	    	var _classDelete = '';
	    	var _classEdit = '';
	    	var _classSave = '';

	    	var _titleCancel = 'Cancel';
	    	var _titleAdd = 'Add';
	    	var _titleDelete = 'Delete';
	    	var _titleEdit = 'Edit';
	    	var _titleSave = 'Save';
			
	    	var _editable = false;
	    	
	    	if (options && options.editable) {
	    		_editable = true;
	    		
	    		// Add a column with the eddition button
	    		options.columns.unshift({
	    			title: options.showAddButton ? '<button type="button" title="'+_titleAdd+'" class="btn btn-success btn-xs add" style="'+_classAdd+'">'+_textAdd+'</button>' : '',
	    			orderable: false,
	    			searchable: false,
	    			className: 'editable-table-button-cell',
	    			render : function(data, type, row) {
	    				var showDeleteButton = !options.hasOwnProperty('showDeleteButton') || ((typeof options.showDeleteButton === 'boolean' && options.showDeleteButton) || (typeof options.showDeleteButton === 'function' && options.showDeleteButton(row)))
	    				var showEditButton = !options.hasOwnProperty('showEditButton') || ((typeof options.showEditButton === 'boolean' && options.showEditButton) || (typeof options.showEditButton === 'function' && options.showEditButton(row)))
	    				var showSaveButton = options.hasOwnProperty('showSaveButton') && ((typeof options.showSaveButton === 'boolean' && options.showSaveButton) || (typeof options.showSaveButton === 'function' && options.showSaveButton(row)))
	    				return '<button type="button" class="btn btn-default btn-xs delete" style="display: '+(showDeleteButton? 'inline-block;':'none;')+_classDelete+'" title="'+_titleDelete+'"><span>'+_textDelete+'</span></button>&nbsp;<button type="button" class="btn btn-default btn-xs edit" title="'+_titleEdit+'" style="display: '+(showEditButton? 'inline-block;':'none;')+_classEdit+'"><span>'+_textEdit+'</span></button>&nbsp<button type="button" class="btn btn-default btn-xs save" title='+_titleSave+' style="display: '+(showSaveButton? 'inline-block;':'none;')+_classSave+'"><span>'+(showSaveButton? 'inline-block;':'none;')_textSave+'</span></button>';
	    			}
	    		});
	    	}
	    	
	        var _this = DataTablePrototype.apply(this, arguments);
	        
	        if (_editable) {
		        // Edit Row
		        if (options.editRow && typeof options.editRow === 'function') {
		        	_this.editRow = options.editRow;
		        } else {
		        	_this.editRow = function() { return true; };
		        }
		        
		        // Save Row
		        if (options.saveRow && typeof options.saveRow === 'function') {
		        	_this.saveRow = options.saveRow;
		        } else {
		        	_this.saveRow = function() { return true; };
		        }
		        
		        // Delete Row
		        if (options.deleteRow && typeof options.deleteRow === 'function') {
		        	_this.deleteRow = options.deleteRow;
		        } else {
		        	_this.deleteRow = function() { return true; };
		        }
		        
		        // Get new
		        if (options.getNewData && typeof options.getNewData === 'function') {
		        	_this.getNewData = options.getNewData;
		        } else {
		        	_this.getNewData = function() { return {}; };
		        }
		        
		        // deleteforCancelButton
		        if (options.hasOwnProperty('deleteforCancelButton') && typeof options.deleteforCancelButton === 'function') {
		        	_this.deleteforCancelButton = options.deleteforCancelButton;
		        	
		        } else if (options.hasOwnProperty('deleteforCancelButton') && typeof options.deleteforCancelButton === 'boolean') {
		        	_this.deleteforCancelButton = function() { return options.deleteforCancelButton; };
		        	
		        } else {
		        	_this.deleteforCancelButton = function() { return false; };
		        }
		        
		        // showSaveButton
		        if (options.hasOwnProperty('showSaveButton') && typeof options.showSaveButton === 'function') {
		        	_this.showSaveButton = options.showSaveButton;
		        	
		        } else if (options.hasOwnProperty('showSaveButton') && typeof options.showSaveButton === 'boolean') {
		        	_this.showSaveButton = function() { return options.showSaveButton; };
		        	
		        } else {
		        	_this.showSaveButton = function() { return true; };
		        }
		        
		        // Fonction Refresh
		        _this.refresh = function (tr) {
		            if (tr) {
		                _this.row(tr).invalidate();
		                return;
		            }
		
		            var rows = _this.rows();
		            rows[0].forEach(function(index) {
		                _this.row(index).invalidate();
		            });
		        }
		
		        // Fonction edit
		        _this.editCell = function(cell, content) {
		            if (!cell || !content)
		                return;
		
		            var _cell = (typeof cell.node === 'function') ? cell : _this.cell(cell);
		            var node = $(_cell.node());
		
		            node.empty();
		
		            if (typeof content === 'string') {
		                node.html(content);
		                return;
		            }
		
		            if ($(content).length) {
		                node.append($(content));
		            }
		        }
		
		        // Event Edit
		        _this.on('click', 'tbody td button.edit', function(e) {
		            var row = _this.row($(this).closest('tr'));
		            var tr = row.node();
		            // If the button save is set, it use the personnalized
		            // in the function setSaveButton to use the same image.
		            
		            var classNameSaveButton = $(this).closest('td').find('button.save').children('span').html();
		            $(this).closest('td').find('button.save').css({'display':'none'});
		            
		            if (_this.editRow(_this, row.data(), tr)) {
		            	
		            	setSaveButton($(this), classNameSaveButton, _this.showSaveButton(row.data()));
		            	if (!_this.deleteforCancelButton(_this, row.data(), tr)) {
		            		setCancelButton($(this).closest('td').find('button:not(.save)'));
		            	}
		            }
		        });
		        
		        // Event Save
		        _this.on('click', 'tbody td button.save', function(e) {
		            var row = _this.row($(this).closest('tr'));
		            var tr = row.node();
		
		            if (_this.saveRow(_this, row.data(), tr, row)) {
		            	row.invalidate();
		            }
		        });
		        
		        // Event Delete
		        _this.on('click', 'tbody td button.delete', function(e) {
		            var row = _this.row($(this).closest('tr'));
		            var tr = row.node();
		
		            if (_this.deleteRow(_this, row.data(), tr, row)) {
		            	
		            	// Referme les selectpicker
		            	$(tr).find('.selectpicker').trigger('hide.bs.select');
		            
		            	row.remove().draw();
		            }
		        });
		        
		        // Event Cancel
		        _this.on('click', 'tbody td button.cancel', function(e) {
		            var row = _this.row($(this).closest('tr'));
		
		        	row.invalidate();
		        });
		        
		        // Event Add
		        _this.on('click', 'thead th button.add', function(e) {
		        	
		        	// Add a line and set it in edition
		        	_this.row.add( _this.getNewData() ).draw().nodes().to$().find('button.edit').trigger('click');
		        });
	        }
	
	        return _this;
	    }
	   
	    
	    /**
	     * Transform the button edit in save
	     */
	    var setSaveButton = function(btn$, image, showSaveButton) {
	    	
	    	btn$.removeClass('edit delete cancel').addClass('save');
	    	if(!image || image=='undefined'){
	    		btn$.find('span').html(_textSave);
	    		btn$.attr('title', 'Save');
	        } else {
	        	var title = null;
	        	if(image == 'fas fa-long-arrow-alt-down' || image == 'fas fa-long-arrow-alt-up' ){
					title = 'Echanger'
				}
	        	
	        	btn$.find('span').html(image);
	        	btn$.attr('title', title);
	        }
	    	
	    	if (showSaveButton) {
	    		btn$.show();
	    		btn$.blur();
	    	} else {
	    		btn$.hide();
	    	}
	    }
	    
	    /**
	     * Transform the delete button in cancel 
	     */
	    var setCancelButton = function(btn$) {
	    	
	    	btn$.removeClass('edit delete save').addClass('cancel');
	    	btn$.find('span').html('X');
	    	btn$.attr('title', _titleCancel);
	    	btn$.show();
	    	btn$.blur();
	    }
})();