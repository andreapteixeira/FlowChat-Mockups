'use strict';
// Class definition

var datatableSubAccountsCheckout = function() {
	// Private functions

	// demo initializer
	var subAccountsCheckout = function() {

		var dataJSONArray = JSON.parse(
			'[{"lead_id":"0000","name":"April Lavigne","email":"april.lavigne@gmail.com","profilepic":"100_8.jpg","subscription":"Basic Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Active"},\
			{"lead_id":"0001","name":"Steve Martin","email":"steve.martin@gmail.com","profilepic":"100_7.jpg","subscription":"Free Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Cancelled"},\
			{"lead_id":"0002","name":"Samuel L. Jackson","email":"bad.motherf@gmail.com","profilepic":"100_6.jpg","subscription":"Pro Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Pending Cancelation"},\
			{"lead_id":"0003","name":"Roxy watson","email":"roxyw@gmail.com","profilepic":"100_9.jpg","subscription":"Basic Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Active"},\
			{"lead_id":"0004","name":"Luka Doncic","email":"luka@gmail.com","profilepic":"100_10.jpg","subscription":"Basic Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Active"},\
			{"lead_id":"0005","name":"Robert Rodriguez","email":"arobert-rodrigues@gmail.com","profilepic":"100_11.jpg","subscription":"Basic Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Active"},\
			{"lead_id":"0006","name":"Thomas Stewart","email":"thomas@gmail.com","profilepic":"100_12.jpg","subscription":"Basic Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Active"},\
			{"lead_id":"0007","name":"Jack Johnson","email":"johnson.jack@gmail.com","profilepic":"100_13.jpg","subscription":"Basic Plan","started":"28 February 2003 for $199","renewal":"1 June 2023 for $199","status":"Active"}]');

		
			var datatable = $('#datatable_subaccounts_checkout').KTDatatable({
			// datasource definition
			data: {
				type: 'local',
				source: dataJSONArray,
				pageSize: 10,
			},

			toolbar: {
				items: {
					pagination: {
						pageSizeSelect: [10, 20, 30, 50, 100, 250, 500, 1000],
					},
				},
			},

			// layout definition
			layout: {
				scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
				height: 400, // datatable's body's fixed height
				footer: false, // display/hide footer
			},

			// column sorting
			sortable: true,

			pagination: false,

			search: {
				input: $('#generalSearch'),
			},

			// columns definition
			columns: [
				{
					field: 'name',
					title: 'Name',
					template: function(row) {
						return '\
						<div class="d-flex flex-row align-items-center" style="line-height:1;">\
							<div class="mr-2">\
								<a href="#" class="kt-media kt-media--sm kt-media--circle"><img src="assets/media/users/'+row.profilepic+'" alt=""></a>\
							</div>\
							<div class="">\
								<a href="#" class="kt-font-bold">'+row.name+'</a>\
								<div class=""><small>'+row.email+'</small></div>\
							</div>\
						</div>\
						'
					},
				}, {
					field: 'subscription',
					title: 'Subscription',
					template: function(row) {
						return row.subscription;
					},
				}, {
					field: 'started',
					title: 'Started On',
					template: function(row) {
						return row.started;
					},
				}, {
					field: 'renewal',
					title: 'Renewal',
					template: function(row) {
						return row.renewal;
					},
				}, {
					field: 'status',
					title: 'Status',
					// callback function support for column rendering
					template: function(row) {

						let currentStatus;

						if ( row.status === "Active") {
							currentStatus = '<span class="btn btn-label-success">'+row.status+'</span>';
						} else if ( row.status === "Pending Cancelation") {
							currentStatus = '<span class="btn btn-label-warning">'+row.status+'</span>';
						} else if ( row.status === "Cancelled") {
							currentStatus = '<span class="btn btn-label-danger">'+row.status+'</span>';
						} else {
							currentStatus = '<span class="btn btn-label-dark">Not Defined</span>';
						}
						return currentStatus;
					},
				}, {
					field: 'Actions',
					title: 'Actions',
					sortable: false,
					width: 50,
					overflow: 'visible',
					autoHide: false,
					template: function() {
						return '\
						<div class="dropdown">\
							<a href="javascript:;" class="btn btn-secondary btn-elevate btn-icon btn-icon-sm" data-toggle="dropdown">\
                                <i class="fas fa-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-times"></i> Cancel Subscription</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-file-text-o"></i> Invoices</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-usd"></i> Stripe Account</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-user"></i> Impersonate</a>\
						  	</div>\
						</div>\
					';
					},
				}],
		});

		$('#kt_form_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'status');
		});

		$('#kt_form_type').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'type');
		});

		$('#kt_form_status,#kt_form_type').selectpicker();

	};

	return {
		// Public functions
		init: function() {
			// init dmeo
			subAccountsCheckout();
		}
	};
}();

jQuery(document).ready(function() {
	datatableSubAccountsCheckout.init();
});
