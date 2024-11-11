$(document).ready(function() {
    let rightcard = false;
    let tempblock;
    let tempblock2;
    
    //show tooltip
    $('#tooltip-trigger').tooltip({
        title: function() {
            return $('#tooltip-content').html();
        },
        html: true,
        trigger: 'click'
    });
    
    // Open panel and show list of Actions
    $('.trigger-button, .plus-button').click(function() {
        $('#kt_quick_panel').toggleClass('kt-quick-panel--open');
        
        $(".kt-offcanvas-panel-overlay").remove();
        
        $('#canvas').show();
    });
    
    // Close panel
    $('#kt_quick_panel_close_btn').click(function() {
        $('#kt_quick_panel').removeClass('kt-quick-panel--open');
        $('#kt_quick_panel').removeClass('kt-offcanvas-panel--on');
        
        //
        $(".kt-offcanvas-panel-overlay").remove();
        
        $('#canvas').hide();
    });
    
    
    $("body").on('click', '.block', function() {
        //Hide First Panel
        $('#kt_quick_panel').removeClass('kt-quick-panel--open');
        $('#kt_quick_panel').removeClass('kt-offcanvas-panel--on');
        
        // Show Blocks Panel
        $('#kt_quick_panel__actions').toggleClass('kt-quick-panel__actions--open');
    });
    
    
    // Close Panel for Actions
    $('#kt_quick_panel_close_actions_btn, .cancel-btn, .save-btn').click(function() {
        $('#kt_quick_panel__actions').removeClass('kt-quick-panel__actions--open');
    });
    
    $('.plus-button').click(function() {
        $('#kt_quick_panel').toggleClass('kt-quick-panel--open');
        
        $(".kt-offcanvas-panel-overlay").remove();
        
        $('#canvas').show();
    });
    
    
    $("#blocklist").html(`
        <h4>Add an Action to the Workflow</h4><br>

        <div class="form-group">
            <div class="kt-input-icon kt-input-icon--left">
                <input type="text" class="form-control" placeholder="Search..." id="workflowSearch">
                <span class="kt-input-icon__icon kt-input-icon__icon--left">
                    <span><i class="la la-search"></i></span>
                </span>
            </div>
        </div>

        <br>
        
        <button id="kt_quick_panel_close_btn" class="kt-quick-panel__close">
            &times;
        </button>
        
        <!-- This is where we show all our actions from all social platforms; FB/IG/LI/X/-->
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="1">
            <div class="blockin">
                <div class="blocktext">
                    <div class="blockdesc">
                        <div class="card-header action_sortable_handle" id="fb_qualify_with_audience_heading_1">
                            <div style="font-size:1rem;font-family: 'Roboto'">
                                <div class="bt-drag-action">
                                    <i class="fas fa-grip-lines-vertical mr-3"></i>
                                </div>
                                <i class="fab fa-facebook color-facebook"></i> Facebook: Qualify Profile with Audience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="2">
            <div class="blockin">
                <div class="blocktext">
                    <div class="blockdesc">
                        <div class="card-header action_sortable_handle" id="fb_qualify_profile_only">
                            <div style="font-size:1rem;font-family: 'Roboto'">
                                <div class="bt-drag-action">
                                    <i class="fas fa-grip-lines-vertical mr-3"></i>
                                </div>
                                <i class="fab fa-facebook color-facebook"></i> Facebook: Qualify Profile
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="3">
            <div class="blockin">
                <div class="blocktext">
                    <div class="blockdesc">
                        <div class="card-header action_sortable_handle" id="fb_like_a_profile_post">
                            <div style="font-size:1rem;font-family: 'Roboto'">
                                <div class="bt-drag-action">
                                    <i class="fas fa-grip-lines-vertical mr-3"></i>
                                </div>
                                <i class="fab fa-facebook color-facebook"></i> Facebook: Like a Profile Post
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="4">
            <div class="blockin">
                <div class="blocktext">
                    <div class="blockdesc">
                        <div class="card-header action_sortable_handle" id="fb_like_a_profile_post">
                            <div style="font-size:1rem;font-family: 'Roboto'">
                                <div class="bt-drag-action">
                                    <i class="fas fa-grip-lines-vertical mr-3"></i>
                                </div>
                                <i class="fas fa-user-cog"></i> Move Lead to Another Stage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="blockelem create-flowy noselect">
            <input type="hidden" name="blockelemtype" class="blockelemtype" value="5">
            <div class="blockin">
                <div class="blocktext">
                    <div class="blockdesc">
                        <div class="card-header action_sortable_handle" id="fb_like_a_profile_post">
                            <div style="font-size:1rem;font-family: 'Roboto'">
                                <div class="bt-drag-action">
                                    <i class="fas fa-grip-lines-vertical mr-3"></i>
                                </div>
                                <i class="fas fa-user-cog"></i> Change Lead Status
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
    
    flowy($("#canvas")[0], drag, release, snapping);
    
    function addEventListenerMulti(type, listener, selector) {
        $(selector).on(type, listener);
    }
    
    function snapping(drag, first) {
        $(drag).find(".grabme").remove();
        $(drag).find(".blockin").remove();
        const blockType = parseInt($(drag).find(".blockelemtype").val()) ?? 0;
        
        switch (blockType) {
            case 1:
                $(drag).append(`
                    <div class="action_sortable_handle" id="fb_qualify_with_audience_heading_1">
                        <div class="card-title pl-2 collapsed" style="font-size:1rem;">
                           
                            <p class="card_description">
                                <i class="fab fa-facebook color-facebook"></i> <span class="card_title">Facebook: Qualify Profile with Audience<br>
                                <span style="text-align: left;">Audience: Marketing Agencies</span>
                            </p>
                        </div>
                    </div>
                `);
                break;
            case 2:
                $(drag).append(`
                    <div class="action_sortable_handle" id="fb_qualify_profile_only">
                        <div class="card-title pl-2 collapsed" style="font-size:1rem;">
                            <i class="fab fa-facebook color-facebook"></i> Facebook: Qualify Profile
                        </div>
                    </div>
                `);
                break;
            case 3:
                $(drag).append(`
                     <div class="action_sortable_handle" id="fb_like_a_profile_post">
                        <div class="card-title pl-2 collapsed" style="font-size:1rem;">
                            <i class="fab fa-facebook color-facebook"></i> Facebook: Like a Profile Post
                        </div>
                    </div>
                `);
                break;
            case 4:
                $(drag).append(`
                     <div class="action_sortable_handle" id="move_lead_to_another_stage">
                        <div class="card-title pl-2 collapsed" style="font-size:1rem;">
                            <i class="fa fa-user-cog color-facebook"></i> Move Lead to Another Stage
                        </div>
                    </div>
                `);
                break;
            case 5:
                $(drag).append(`
                     <div class="action_sortable_handle" id="fb_like_a_profile_post">
                        <div class="card-title pl-2 collapsed" style="font-size:1rem;">
                            <i class="fa fa-user-cog color-facebook"></i> Change Lead Status
                        </div>
                    </div>
                `);
                break;
                
            
            default:
                break;
        }
        
        $(drag).append(`
            <div class="blocks_action">
                <div class="plus-button">+</div>
<!--                <div class="end-button">END</div>-->
            </div>
        `);
        
        return true;
    }
    
    function drag(block) {
        $(block).addClass("blockdisabled");
        tempblock2 = block;
    }
    
    function release() {
        if (tempblock2) {
            $(tempblock2).removeClass("blockdisabled");
            $(tempblock2).addClass("viewable-blocks");
            $(".trigger-container").hide();
        }
    }
    
    const disabledClick = function() {
        $(".navactive").addClass("navdisabled").removeClass("navactive");
        $(this).addClass("navactive").removeClass("navdisabled");
        
        if ($(this).attr("id") === "triggers") {
            $("#blocklist").html(`
               <div class="action_sortable_handle" id="fb_qualify_with_audience_heading_1">
                    <div class="card-title py-2 collapsed" style="font-size:1rem; cursor: ns-resize">
<!--                        <div class="bt-drag-action">-->
<!--                            <i class="fas fa-grip-lines-vertical mr-3"></i>-->
<!--                        </div>-->
                        <i class="fab fa-facebook color-facebook"></i> Facebook: Qualify Profile with Audience
                    </div>
                </div>
            `);
        }
        // More conditions for 'actions', 'loggers', etc., as needed
    };
    
    $("#removeblock").on("click", function() {
        flowy.deleteBlocks();
    });
    
    let aclick = false;
    let noinfo = false;
    
    const beginTouch = function(event) {
        aclick = true;
        noinfo = false;
        if ($(event.target).closest(".create-flowy").length) {
            noinfo = true;
        }
    };
    
    const checkTouch = function() {
        aclick = false;
    };
    
    const doneTouch = function(event) {
        if (event.type === "mouseup" && aclick && !noinfo) {
            if (!rightcard && $(event.target).closest(".block").length && !$(event.target).closest(".block").hasClass("dragging")) {
                tempblock = $(event.target).closest(".block")[0];
                rightcard = true;
                $("#properties").addClass("expanded");
                $("#propwrap").addClass("itson");
                $(tempblock).addClass("selectedblock");
            }
        }
    };
    
    $(document).on("mousedown", beginTouch)
    .on("mousemove", checkTouch)
    .on("mouseup", doneTouch);
    
    addEventListenerMulti("touchstart", beginTouch, ".block");
    
    
});
