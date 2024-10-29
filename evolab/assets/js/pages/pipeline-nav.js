//PIPELINE NAV & DRAG


member_pipeline_id   = 888;
attribute_name       = 'memberpipelinestageid';
div_name             = 'Div_member_pipeline_stage_id_';
current_drag_lead_id = '';


// CARD DRAG

function allowDrop(ev) {
  ev.preventDefault();
  if ($(ev.target).attr('element-type') == 'stage-drop-area'){
  }
  if ($.inArray($(ev.target).attr('element-type'), ['NotQualified-area', 'Unresponsive-area', 'DoNotContact-area', 'pipeline-stage']) !== -1){
    $(ev.target).addClass("active");
  }
}


function drag(ev, el) {
  current_drag_lead_id = ev.target.id.replace('item', '').replace('discard', '');
  ev.dataTransfer.setData("text", current_drag_lead_id);
  $('div[class="toolbox-wrap"]').addClass("show");
  showNavPipeline();
}


function drop(ev, el, Paramid) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text").replace('discard', ''); // Keep the discard replace to avoid moving only the name
  data_lead_id = data.replace('item', '');
  MULeadsPipeline.actionMoveLeadCard({ 'lead_id': data_lead_id, 'move_to_member_pipeline_stage_id': Paramid });
  clearStyles();
}


function PipelineStageDrop(ev, el, Paramid) {
  if ($(ev.target).attr('element-type') == 'pipeline-stage') {
    $('th[element-type="pipeline-stage"]').removeClass( "active" );
    alert('REORDER STAGE: Insert Function')
  }
  clearStyles();
}


function clearStyles() {
  $('td[element-type="DoNotContact-area"]').removeClass( "active" );
  $('div[class="toolbox-wrap show"]').removeClass("show");
  $('.table-responsive').removeClass( "active" );
  $(".nav-pipeline").removeClass("show");
  $('td[element-type="stage-drop-area"]').removeClass("active-bg-color");
  current_drag_lead_id = '';
}


function resetTools(ev) {
  if ($.inArray($(ev.target).attr('element-type'), ['NotQualified-area', 'Unresponsive-area', 'DoNotContact-area', 'pipeline-stage']) !== -1){
    $('td[element-type="' + $(ev.target).attr('element-type') + '"]').removeClass("active");
  }
}


// BOTTOM TOOLBOX

function ToolBoxFunctions(ev) {
  if (current_drag_lead_id == '') return;
  lead_status_id = '';

  if ($(ev.target).attr('element-type') == 'NotQualified-area') {
    lead_status_id = 7;
    $('td[element-type="NotQualified-area"]').removeClass( "active" );
  }

  if ($(ev.target).attr('element-type') == 'Unresponsive-area'){
    lead_status_id = 9;
    $('td[element-type="Unresponsive-area"]').removeClass( "active" );
  }

  if ($(ev.target).attr('element-type') == 'DoNotContact-area'){
    lead_status_id = 10;
    $('td[element-type="DoNotContact-area"]').removeClass( "active" );
  }

  if (lead_status_id != ''){ // Change the status of the lead
    $.ajax({url: '../api/datatables/lead.php?action=updateselect&field=lead_status_id&lead_status_id=' + lead_status_id + '&lead_id=' + current_drag_lead_id, success: function(result){
      objResult = result.data;
      if (result != '') console.log(objResult);
      MULeadsPipeline.actionUpdateLeadCard({"lead_id": current_drag_lead_id});
      clearStyles(); // ClearStyles needs to run only inside this function because it will clear the current_drag_lead_id
    }});
  } else {
    clearStyles();
  }
}


// PIPELINE SIDE NAVIGATION

function showNavPipeline(){
  var div = document.getElementById('funnel-container');
  var hasHorizontalScrollbar = div.scrollWidth > div.clientWidth;

  if (hasHorizontalScrollbar==true) {
    $('.nav-pipeline').addClass("show");
  }

}

function navPipeline(side) {

  if (side!='out') {
    $('.nav-pipeline.nav-'+side).addClass('active');

    if (side=='right') {
      $('#funnel-container').animate( { scrollLeft: +5000 }, 8000);
    }
    if (side=='left') {
      $('#funnel-container').animate( { scrollLeft: -5000 }, 8000);
    }
  }

  else {
    $('.nav-pipeline').removeClass('active');
    $('#funnel-container').stop(true,false);
  }

}


// HORIZONTAL DRAG TO SCROLL


  const slider = document.querySelector(".drag-x");
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.addEventListener("mousedown", e => {
    slider.style.cursor = "grabbing";
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
  // EXCEPT FUNNEL ITEMS TO ALLOW DRAGGINGitem522092
  var funnelItem = document.getElementsByClassName("funnel-item");
  for (i=0; i<funnelItem.length; i++){
    funnelItem[i].addEventListener("mouseover", e => { isDown = false; });
    funnelItem[i].addEventListener("mousedown", e => { isDown = false; });
    funnelItem[i].addEventListener("mousemove", e => { isDown = false; });
  };

  var tableHead = document.getElementsByClassName("column-handle");
    for (i=0; i<tableHead.length; i++){
    tableHead[i].addEventListener("mouseover", e => { isDown = false; });
    tableHead[i].addEventListener("mousedown", e => { isDown = false; });
    tableHead[i].addEventListener("mousemove", e => { isDown = false; });
  };




  $('input.card-quick-date').datepicker({
      clearBtn: true,
      orientation: "bottom left",
      autoclose: true,
      todayHighlight: true
  });