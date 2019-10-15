$(document).ready(function() {
	var boxid=0;
   $("#add_new_date").click(function(){ 
	var add_div = '';
	var ticket_sale_end = '';
	var ticket_sale_end_hour  = '';
	var ticket_sale_end_minutes  = '';
	var ticket_sale_end_formate = '' ;
	var door_open_hour = '';
	var door_open_minutes = '';
	var door_open_formate = '';
	var event_start_date = '' ;
	var event_start_hour = '' ;
	var event_start_minuutes = '' ;
	var event_start_formate = '' ;
	var event_end_hour = '' ;
	var event_end_minutes = '' ;
	var event_end_formate = '' ;

	boxid= boxid+1
	add_div = '<div class="ticket-bdr mt-3" id="event_box'+boxid+'">'+
				'<div class="row">'+
					'<div class="col-md-6">'+
								'<div class="ticker__sale1 sale_s d-flex lh_2 justify-content-between">'+
									'<div><p class="sale-end">Ticket sale ends</p></div>'+
									'<div class="d-flex req_p">'+
									'<div><input type="text" id="ticket_sale_end'+boxid+'" class="form-control" name="tkt_sale_end'+boxid+'" style="width: 88px;"></div>'+
									'<div><p>at</p></div>'+
									'<div>'+
										'<select class="form-control" id="ticket_sale_end_hour'+boxid+'" name="sale_end_hour_'+boxid+'">'+
												'<option value="1">1</option>'+
												'<option value="2">2</option>'+
												'<option value="3">3</option>'+
												'<option value="4">4</option>'+
												'<option value="5">5</option>'+
											'</select>'+
									'</div>'+
									'<div><p>:</p></div>'+
									'<div>'+
										'<select class="form-control" id="ticket_sale_end_minutes'+boxid+'" name="sale_end_min'+boxid+'">'+
												'<option value="00">00</option>'+
												'<option value="02">02</option>'+
												'<option value="03">03</option>'+
												'<option value="04">04</option>'+
												'<option value="05">05</option>'+
											'</select>'+
									'</div>'+
									'<div>'+
										'<select class="form-control" id="ticket_sale_end_formate'+boxid+'" name="sale_end_formate'+boxid+'">'+
												'<option value="AM">AM</option>'+
												'<option value="PM">PM</option>'+
											'</select>'+
									'</div>'+
								'</div>'+
								'</div>'+
								'<div class="ticker__sale2 d-flex justify-content-between lh_2 mt-3">'+
									'<div><p class="door-opn">Door Opens</p></div>'+
									'<div class="d-flex req_p">'+
										'<div>'+
											'<select class="form-control" id="door_open_hour'+boxid+'"  name="door_open'+boxid+'">'+
													'<option value="1">1</option>'+
													'<option value="2">2</option>'+
													'<option value="3">3</option>'+
													'<option value="4">4</option>'+
													'<option value="5">5</option>'+
												'</select>'+
										'</div>'+
										'<div><p>:</p></div>'+
										'<div>'+
											'<select class="form-control" name="door_open_minutes'+boxid+'">'+
													'<option value="00">00</option>'+
													'<optionvalue="02">02</option>' +
													'<option value="03">03</option>'+
													'<option value="04">04</option>'+
													'<option value="05">05</option>'+
												'</select>'+
										'</div>'+
										'<div style="padding-right: 0;" name="door_open_formate'+boxid+'">'+
											'<select class="form-control">'+
													'<option value="AM">AM</option>'+
													'<option value="PM">PM</option>'+
												'</select>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
				
							'<div class="col-md-6">'+
								'<div class="ticker__sale1 sale_s d-flex lh_2 justify-content-between">'+
									'<div><p class="door-opn mr-2">Event Start</p></div>'+
									'<div class="d-flex req_p">'+
									'<div><input type="text" class="form-control" name="event_start_date'+boxid+'"  style="width: 100px;"></div>'+
									'<div><p>at</p></div>'+
									'<div>'+
										'<select class="form-control" name="event_start_hour'+boxid+'">'+
												'<option> value="1"1</option>'+
												'<option value="2">2</option>'+
												'<option value="3">3</option>'+
												'<option value="4">4</option>'+
												'<option value="5">5</option>'+
											'</select>'+
									'</div>'+
									'<div><p>:</p></div>'+
									'<div>'+
										'<select class="form-control" name="event_start_minutes'+boxid+'">'+
												'<option value="00">00</option>'+
												'<option value="02">02</option>'+
												'<option value="03">03</option>'+
												'<option value="04">04</option>'+
												'<option value="05">05</option>'+
											'</select>'+
									'</div>'+
									'<div>'+
										'<select class="form-control" name="event_start_formate'+boxid+'">'+
												'<option value="AM">AM</option>'+
												'<option value="PM">PM</option>'+
											'</select>'+
									'</div>'+
								'</div>'+
								'</div>'+
								'<div class="ticker__sale2 d-flex justify-content-between lh_2 mt-3">'+
									'<div><p class="door-opn mr-2">Event End</p></div>'+
									'<div class="d-flex req_p">'+
									'<div><input type="text" class="form-control" name="event_end_date'+boxid+'" style="width: 100px;"></div>'+
									'<div><p>at</p></div>'+
									
									'<div>'+
										'<select class="form-control" name="event_end_hour'+boxid+'">'+
												'<option value="1">1</option>'+
												'<option value="2">2</option>'+
												'<option value="3">3</option>'+
												'<option value="4">4</option>'+
												'<option value="5">5</option>'+
											'</select>'+
									'</div>'+
									'<div><p>:</p></div>'+
									'<div>'+
										'<select class="form-control" name="event_end_minutes'+boxid+'">'+
												'<option value="00">00</option>'+
												'<option value="02">02</option>'+
												'<option value="03">03</option>'+
												'<option value="04">04</option>'+
												'<option value="05">05</option>'+
											'</select>'+
									'</div>'+
									'<div>'+
										'<select class="form-control" name="event_end_formate'+boxid+'">'+
												'<option value="AM">AM</option>'+
												'<option value="PM">PM</option>'+
											'</select>'+
									'</div>'+
								'</div>'+
								'</div>'+
								'<div class="text-right mt-2 delete-event-box">'+
									'<a href="javascript:void(0)" class="mr-2" style="font-size: 13px;">Delete</a>'+
								'</div>'+
						
							'</div>'+
						'</div>'+
					'</div>';

		$("#add_div").append(add_div);


})
// delete-event-box

	$('#add_div').on('click', ".delete-event-box",function(){
		$(this).closest(".ticket-bdr").remove();

})

});