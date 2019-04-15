	
	$(document).ready(function() {
		
		
		var showColumnEdit = true;
		var showAddButtonBool = true;
		$('#example').DataTable( {
			autoWidth: false,
			paging: false,
			data : getData(),
			order: [[1, 'asc' ]],
			columns: [
				{ title: 'Name', data: 'name'},
				{ title: 'Position', data: 'job'},
				{ title: 'Office', data: 'city'},
				{ title: 'Age', data: 'age'},
				{ title: 'Start date', data: 'date'},
				{ title: 'Salary', data: 'salary'}
				
			],
			editable: showColumnEdit,
			showAddButton: showAddButtonBool,
			editRow: editRow,
			saveRow: saveRow,
			deleteRow: deleteRow,
			getNewData: getNewData,
			deleteforCancelButton:deleteforCancelButton,
			showDeleteButton: true, // boolean or function,
			showEditButton: true // boolean or function
		} );

	} );
	
	
	/**
	 * Function executed when a line is set in edition
	 * 
	 * Return false when the edition cant be done
	 */
	var editRow = function(table, data, tr) {
    	
    	
		// Name
		var input = $('<input type="text" class="form-control input-xs" value="'+data.name+'">');
		table.editCell(tr.cells[1], input);

		//job
		var input2 = $('<input type="text" class="form-control input-xs" value="'+data.job+'">');
		table.editCell(tr.cells[2], input2);

		//city
		var input3 = $('<input type="text" class="form-control input-xs" style="width:100%" value="'+data.city+'">');
		table.editCell(tr.cells[3], input3);
		
		//age
		var input4 = $('<input type="text" class="form-control input-xs" style="width:100%" value="'+data.age+'">');
		table.editCell(tr.cells[4], input4);
		
		//start date
		var input5 = $('<input type="text" class="form-control input-xs" style="width:100%" value="'+data.date+'">');
		table.editCell(tr.cells[5], input5);
		
		//salary
		var input6 = $('<input type="text" class="form-control input-xs" style="width:100%" value="'+data.salary+'">');
		table.editCell(tr.cells[6], input6);
		
		return true;
	}
	
	/**
	 * Return true if the button suppress must be show in edition
	 */
	var deleteforCancelButton = function(table, data, tr) {
		if (data.id != 'new') {
			return false;
		}
		return true;
	};	

	
	
	 /**
	 * Function executed when you save a line
	 * 
	 * Return false when the save cant be done
	 */
	var saveRow = function(table, data, tr, row) {
		data.name = $(tr.cells[1]).find('input').val();
		data.job = $(tr.cells[2]).find('input').val();
		data.city = $(tr.cells[3]).find('input').val();
		data.age = $(tr.cells[4]).find('input').val();
		data.date = $(tr.cells[5]).find('input').val();
		data.salary = $(tr.cells[6]).find('input').val();

		console.log(data);
		return true;
	}
	
	
	/**
	 * Function executed when you supress a line
	 * 
	 * Return false when the supression cant be done
	 */
	var deleteRow = function(table, data, tr) {
		if(data.id!='new'){
			return true;
		} else {
			return true;
		}
	}
	
	/**
	 * Return the object of new value
	 */
	var getNewData = function() {
		return {
			'id':'new',
	        'name': '',
	        'job': '',
	        'city': '',
	        'age': '',
	        'date': '',
	        'salary': ''
	    };
	}
	
	var getData = function(){
		return [{
			name : 'Tiger Nixon',
			job : 'System Architect',
			city : 'Edinburgh',
			age : 61,
			date : '2011/04/25',
			salary : 320800},
			{
			name : 'Garrett Winters',
			job : 'Accountant',
			city : 'Tokyo',
			age : 63,
			date : '2011/07/25',
			salary : 170750},
			{
			name : 'Ashton Cox',
			job : 'Junior Technical Author',
			city : 'San Francisco',
			age : 66,
			date : '2009/01/12',
			salary : 86000},
			{
			name : 'Cedric Kelly',
			job : 'Senior Javascript Developer',
			city : 'Edinburgh',
			age : 22,
			date : '2012/03/29',
			salary : 433060},
			{
			name : 'Airi Satou',
			job : 'Accountant',
			city : 'Tokyo',
			age : 33,
			date : '2008/11/28',
			salary : 162700},
			{
			name : 'Brielle Williamson',
			job : 'Integration Specialist',
			city : 'New York',
			age : 61,
			date : '2012/12/02',
			salary : 372000},
			{
			name : 'Herrod Chandler',
			job : 'Sales Assistant',
			city : 'San Francisco',
			age : 59,
			date : '2012/08/06',
			salary : 137500},
			{
			name : 'Rhona Davidson',
			job : 'Integration Specialist',
			city : 'Tokyo',
			age : 55,
			date : '2010/10/14',
			salary : 327900},
			{
			name : 'Colleen Hurst',
			job : 'Javascript Developer',
			city : 'San Francisco',
			age : 39,
			date : '2009/09/15',
			salary : 205500},
			{
			name : 'Sonya Frost',
			job : 'Software Engineer',
			city : 'Edinburgh',
			age : 23,
			date : '2008/12/13',
			salary : 103600},
			{
			name : 'Jena Gaines',
			job : 'Office Manager',
			city : 'London',
			age : 30,
			date : '2008/12/19',
			salary : 90560},
			{
			name : 'Quinn Flynn',
			job : 'Support Lead',
			city : 'Edinburgh',
			age : 22,
			date : '2013/03/03',
			salary : 342000},
			{
			name : 'Charde Marshall',
			job : 'Regional Director',
			city : 'San Francisco',
			age : 36,
			date : '2008/10/16',
			salary : 470600},
			{
			name : 'Haley Kennedy',
			job : 'Senior Marketing Designer',
			city : 'London',
			age : 43,
			date : '2012/12/18',
			salary : 313500},
			{
			name : 'Tatyana Fitzpatrick',
			job : 'Regional Director',
			city : 'London',
			age : 19,
			date : '2010/03/17',
			salary : 385750},
			{
			name : 'Michael Silva',
			job : 'Marketing Designer',
			city : 'London',
			age : 66,
			date : '2012/11/27',
			salary : 198500},
			{
			name : 'Paul Byrd',
			job : 'Chief Financial Officer (CFO)',
			city : 'New York',
			age : 64,
			date : '2010/06/09',
			salary : 725000},
			{
			name : 'Gloria Little',
			job : 'Systems Administrator',
			city : 'New York',
			age : 59,
			date : '2009/04/10',
			salary : 237500},
			{
			name : 'Bradley Greer',
			job : 'Software Engineer',
			city : 'London',
			age : 41,
			date : '2012/10/13',
			salary : 132000},
			{
			name : 'Dai Rios',
			job : 'Personnel Lead',
			city : 'Edinburgh',
			age : 35,
			date : '2012/09/26',
			salary : 217500},
			{
			name : 'Jenette Caldwell',
			job : 'Development Lead',
			city : 'New York',
			age : 30,
			date : '2011/09/03',
			salary : 345000},
			{
			name : 'Yuri Berry',
			job : 'Chief Marketing Officer (CMO)',
			city : 'New York',
			age : 40,
			date : '2009/06/25',
			salary : 675000},
			{
			name : 'Caesar Vance',
			job : 'Pre-Sales Support',
			city : 'New York',
			age : 21,
			date : '2011/12/12',
			salary : 106450},
			{
			name : 'Doris Wilder',
			job : 'Sales Assistant',
			city : 'Sidney',
			age : 23,
			date : '2010/09/20',
			salary : 85600},
			{
			name : 'Angelica Ramos',
			job : 'Chief Executive Officer (CEO)',
			city : 'London',
			age : 47,
			date : '2009/10/09',
			salary : 1200000},
			{
			name : 'Gavin Joyce',
			job : 'Developer',
			city : 'Edinburgh',
			age : 42,
			date : '2010/12/22',
			salary : 92575},
			{
			name : 'Jennifer Chang',
			job : 'Regional Director',
			city : 'Singapore',
			age : 28,
			date : '2010/11/14',
			salary : 357650},
			{
			name : 'Brenden Wagner',
			job : 'Software Engineer',
			city : 'San Francisco',
			age : 28,
			date : '2011/06/07',
			salary : 206850},
			{
			name : 'Fiona Green',
			job : 'Chief Operating Officer (COO)',
			city : 'San Francisco',
			age : 48,
			date : '2010/03/11',
			salary : 850000},
			{
			name : 'Shou Itou',
			job : 'Regional Marketing',
			city : 'Tokyo',
			age : 20,
			date : '2011/08/14',
			salary : 163000},
			{
			name : 'Michelle House',
			job : 'Integration Specialist',
			city : 'Sidney',
			age : 37,
			date : '2011/06/02',
			salary : 95400},
			{
			name : 'Suki Burks',
			job : 'Developer',
			city : 'London',
			age : 53,
			date : '2009/10/22',
			salary : 114500},
			{
			name : 'Prescott Bartlett',
			job : 'Technical Author',
			city : 'London',
			age : 27,
			date : '2011/05/07',
			salary : 145000},
			{
			name : 'Gavin Cortez',
			job : 'Team Leader',
			city : 'San Francisco',
			age : 22,
			date : '2008/10/26',
			salary : 235500},
			{
			name : 'Martena Mccray',
			job : 'Post-Sales support',
			city : 'Edinburgh',
			age : 46,
			date : '2011/03/09',
			salary : 324050},
			{
			name : 'Unity Butler',
			job : 'Marketing Designer',
			city : 'San Francisco',
			age : 47,
			date : '2009/12/09',
			salary : 85675},
			{
			name : 'Howard Hatfield',
			job : 'Office Manager',
			city : 'San Francisco',
			age : 51,
			date : '2008/12/16',
			salary : 164500},
			{
			name : 'Hope Fuentes',
			job : 'Secretary',
			city : 'San Francisco',
			age : 41,
			date : '2010/02/12',
			salary : 109850},
			{
			name : 'Vivian Harrell',
			job : 'Financial Controller',
			city : 'San Francisco',
			age : 62,
			date : '2009/02/14',
			salary : 452500},
			{
			name : 'Timothy Mooney',
			job : 'Office Manager',
			city : 'London',
			age : 37,
			date : '2008/12/11',
			salary : 136200},
			{
			name : 'Jackson Bradshaw',
			job : 'Director',
			city : 'New York',
			age : 65,
			date : '2008/09/26',
			salary : 645750},
			{
			name : 'Olivia Liang',
			job : 'Support Engineer',
			city : 'Singapore',
			age : 64,
			date : '2011/02/03',
			salary : 234500},
			{
			name : 'Bruno Nash',
			job : 'Software Engineer',
			city : 'London',
			age : 38,
			date : '2011/05/03',
			salary : 163500},
			{
			name : 'Sakura Yamamoto',
			job : 'Support Engineer',
			city : 'Tokyo',
			age : 37,
			date : '2009/08/19',
			salary : 139575},
			{
			name : 'Thor Walton',
			job : 'Developer',
			city : 'New York',
			age : 61,
			date : '2013/08/11',
			salary : 98540},
			{
			name : 'Finn Camacho',
			job : 'Support Engineer',
			city : 'San Francisco',
			age : 47,
			date : '2009/07/07',
			salary : 87500},
			{
			name : 'Serge Baldwin',
			job : 'Data Coordinator',
			city : 'Singapore',
			age : 64,
			date : '2012/04/09',
			salary : 138575},
			{
			name : 'Zenaida Frank',
			job : 'Software Engineer',
			city : 'New York',
			age : 63,
			date : '2010/01/04',
			salary : 125250},
			{
			name : 'Zorita Serrano',
			job : 'Software Engineer',
			city : 'San Francisco',
			age : 56,
			date : '2012/06/01',
			salary : 115000},
			{
			name : 'Jennifer Acosta',
			job : 'Junior Javascript Developer',
			city : 'Edinburgh',
			age : 43,
			date : '2013/02/01',
			salary : 75650},
			{
			name : 'Cara Stevens',
			job : 'Sales Assistant',
			city : 'New York',
			age : 46,
			date : '2011/12/06',
			salary : 145600},
			{
			name : 'Hermione Butler',
			job : 'Regional Director',
			city : 'London',
			age : 47,
			date : '2011/03/21',
			salary : 356250},
			{
			name : 'Lael Greer',
			job : 'Systems Administrator',
			city : 'London',
			age : 21,
			date : '2009/02/27',
			salary : 103500},
			{
			name : 'Jonas Alexander',
			job : 'Developer',
			city : 'San Francisco',
			age : 30,
			date : '2010/07/14',
			salary : 86500},
			{
			name : 'Shad Decker',
			job : 'Regional Director',
			city : 'Edinburgh',
			age : 51,
			date : '2008/11/13',
			salary : 183000},
			{
			name : 'Michael Bruce',
			job : 'Javascript Developer',
			city : 'Singapore',
			age : 29,
			date : '2011/06/27',
			salary : 183000},
			{
			name : 'Donna Snider',
			job : 'Customer Support',
			city : 'New York',
			age : 27,
			date : '2011/01/25',
			salary : 112000
		}]
	}