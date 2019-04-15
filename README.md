##################
# Datatable Edit #
##################

*****************
** Instalation **
*****************

Requirement : 
 JS : 
 - bootstrap
 - Jquery
 - Datatable
 CSS : 
 - Bootstrap + theme

Add the datatable.edit.js call after the other JS.

*****************
** Get started **
*****************

Visual parameters :
	- you can modify the parameters of the button design (Style, Title and text) with the global parameters at the start of the file

New parameters for datatable initialization :
 Boolleans :
editable: boolean, use the edit datatable
showAddButton: boolean, show the button add
deleteforCancelButton: can be boolean or function tel if the button cancel must be delete in edition
showDeleteButton:  boolean, show the button delete
showEditButton:  boolean, show the button edit

 Function : 
Each function have the sames parameters :
	table : the dataTable
	data : the object of the line
	tr : the object dom
editRow: Function launch when you click on the button edit :
	- In this unction you can change the format of the cell you want to edit
	- return false if the line cant be edited else return true
saveRow: Function launch when you click on the button save :
	- In this unction you put the action you want to make for the line you've edited
	- if return false the line stay in edit mode
	- If return true the line is set
	- the object data is used by the line after saving
deleteRow: Function launch when you click on the button delete :
	- In this function you put the action you want to make when you delete a line
	- if return false the line stay in the table
	- If return true the line is deleted from the table and the data
getNewData: 
	- return an object for a new line