
// Global Vars

let subscriptionPlans = [["Basic","$1,997","$247" ],["Growth","$4,997","$497" ],["Pro","$9,997","$997" ]]
let subscriptionPlan = "Pro"
let subscriptionPlanDesc = "<span class='kt-font-bold kt-font-focus'>FlowChat Pro Plan</span> - Software + Coaching + VA"
let subscriptionBilling = "Annual"
let subscriptionBillingPeriod = "/year"
let subscriptionRenewalDate = "March 30, 2022"
let subscriptionPrice = "$7,997.00/year (This plan is worth $8,997.00)"
let subscriptionStatus = "Active"


// Fill page with subscription data
function populateSubscriptionData() {

// Define plan txt
if (subscriptionPlan === "Basic") {
  subscriptionPlanDesc = "<span class='kt-font-bold kt-font-success'>FlowChat Basic Plan</span> - Software"
} else if (subscriptionPlan === "Growth") {
  subscriptionPlanDesc = "<span class='kt-font-bold kt-font-danger'>FlowChat Growth Plan</span> - Software + Coaching"
} else if (subscriptionPlan === "Pro") {
  subscriptionPlanDesc = "<span class='kt-font-bold kt-font-focus'>FlowChat Pro Plan</span> - Software + Coaching + VA"
} ;

  $('#fc-plan').html(subscriptionPlanDesc);
  $('#fc-billing-type').html(subscriptionBilling);
  $('.fc-renewal-date').html(subscriptionRenewalDate);
  $('#fc-subscription-price').html(subscriptionPrice+subscriptionBillingPeriod);
  $('#fc-subscription-status').html(subscriptionStatus);

//check radios on change subscription form
  $("input[name=changePlan][value="+subscriptionPlan+"]").prop('checked', true);
  $("input[name=changeBilling][value="+subscriptionBilling+"]").prop('checked', true);
  $('.fc-subscription-price').html(subscriptionPrice+subscriptionBillingPeriod);
  $('.fc-subscription-price').html(subscriptionPrice+subscriptionBillingPeriod);

//Switch billing period
  if (subscriptionBilling === 'Annual') {
    subscriptionBillingPeriod = "/year"
    $('.fc-basic-price').html(subscriptionPlans[0][1]);
    $('.fc-growth-price').html(subscriptionPlans[1][1]);
    $('.fc-pro-price').html(subscriptionPlans[2][1]);  
  } else {
    subscriptionBillingPeriod = "/month"
    $('.fc-basic-price').html(subscriptionPlans[0][2]);
    $('.fc-growth-price').html(subscriptionPlans[1][2]);
    $('.fc-pro-price').html(subscriptionPlans[2][2]);
  };
  $('.fc-billing-period').html(subscriptionBillingPeriod);

};

populateSubscriptionData();

//calculate value in change modal
function calculateSubscriptionValue() {

  calcSubscriptionPlan = $("input[name='changePlan']:checked").val();
  calcSubscriptionBilling = $("input[name='changeBilling']:checked").val();


  if (calcSubscriptionBilling === 'Annual') {
      calcSubscriptionBillingPeriod = '/year';
      $('.fc-basic-price').html(subscriptionPlans[0][1]);
      $('.fc-growth-price').html(subscriptionPlans[1][1]);
      $('.fc-pro-price').html(subscriptionPlans[2][1]);  
  } else {
      calcSubscriptionBillingPeriod = '/month';
      $('.fc-basic-price').html(subscriptionPlans[0][2]);
      $('.fc-growth-price').html(subscriptionPlans[1][2]);
      $('.fc-pro-price').html(subscriptionPlans[2][2]);
  }
  $('.fc-billing-period').html(calcSubscriptionBillingPeriod);

  if (calcSubscriptionPlan === "Basic") {
    if (calcSubscriptionBilling === 'Annual') {
      $('.fc-subscription-price').html(subscriptionPlans[0][1]+calcSubscriptionBillingPeriod);
    } else {
      $('.fc-subscription-price').html(subscriptionPlans[0][2]+calcSubscriptionBillingPeriod);
    }

  } else if (calcSubscriptionPlan === "Growth") {
    if (calcSubscriptionBilling === 'Annual') {
      $('.fc-subscription-price').html(subscriptionPlans[1][1]+calcSubscriptionBillingPeriod);
    } else {
      $('.fc-subscription-price').html(subscriptionPlans[1][2]+calcSubscriptionBillingPeriod);
    }
  } else if (calcSubscriptionPlan === "Pro") {
    if (calcSubscriptionBilling === 'Annual') {
      $('.fc-subscription-price').html(subscriptionPlans[2][1]+calcSubscriptionBillingPeriod);
    } else {
      $('.fc-subscription-price').html(subscriptionPlans[2][2]+calcSubscriptionBillingPeriod);
    } 
};

console.log('Calculating: ' +  calcSubscriptionPlan, calcSubscriptionBilling);
}



function cancelSubscription(){

  subscriptionStatus = 'Pending Cancelation';
  reasonsForCanceling = $("#reasonsForCanceling").val();
  cancelationMessage = $("#cancelationMessage").val();

  $('#alertSubscriptionCanceled').removeClass('kt-hidden').removeClass('alert-warning').addClass('alert-danger');
  $('.fc-cancel-link').addClass('kt-hidden');
  $('.fc-reactivate-link').removeClass('kt-hidden');

  $('#alertText').html("Your account will be canceled on " + subscriptionRenewalDate + ".");

  $('#fc-subscription-status').html("<span class='kt-font-danger'>" + subscriptionStatus + "</span>");

  console.log('Cancel: ' +  subscriptionStatus, reasonsForCanceling,cancelationMessage );
};


function pauseSubscription(){

  subscriptionStatus = 'Pending Pause';
  reasonsForCanceling = $("#reasonsForCanceling").val();
  cancelationMessage = $("#cancelationMessage").val();

  $('#alertSubscriptionCanceled').removeClass('kt-hidden').removeClass('alert-warning').addClass('alert-danger');
  $('.fc-cancel-link').addClass('kt-hidden');
  $('.fc-reactivate-link').removeClass('kt-hidden');

  $('#alertText').html("Your subscription will be paused on " + subscriptionRenewalDate + ". It will definitely canceled 60 days after this date.");

  $('#fc-subscription-status').html("<span class='kt-font-danger'>" + subscriptionStatus + "</span>");
  console.log('Pause: ' +  subscriptionStatus, reasonsForCanceling,cancelationMessage );
};


function changeSubscription(){

  subscriptionStatus = 'Active';
  subscriptionPlan = $("input[name='changePlan']:checked").val();
  subscriptionBilling = $("input[name='changeBilling']:checked").val();

if (subscriptionPlan === "Basic") {
  if (subscriptionBilling === 'Annual') {
    subscriptionPrice = subscriptionPlans[0][1]
    subscriptionBillingPeriod = '/year'
  } else {
    subscriptionPrice = subscriptionPlans[0][2]
    subscriptionBillingPeriod = '/month'
  }

} else if (subscriptionPlan === "Growth") {
  if (subscriptionBilling === 'Annual') {
    subscriptionPrice = subscriptionPlans[1][1]
    subscriptionBillingPeriod = '/year'
  } else {
    subscriptionPrice = subscriptionPlans[1][2]
    subscriptionBillingPeriod = '/month'
  }
} else if (subscriptionPlan === "Pro") {
  if (subscriptionBilling === 'Annual') {
    subscriptionPrice = subscriptionPlans[2][1]
    subscriptionBillingPeriod = 'year'
  } else {
    subscriptionPrice = subscriptionPlans[2][2]
    subscriptionBillingPeriod = '/month'
  } 
};

  populateSubscriptionData();

  $('#alertSubscriptionCanceled').removeClass('kt-hidden alert-danger').addClass('alert-brand');
  $('#alertText').html("Your subscription changed to " + subscriptionPlan + ".");
  $('.fc-cancel-link').removeClass('kt-hidden');
  $('.fc-reactivate-link').addClass('kt-hidden');

  $('#fc-subscription-status').html(subscriptionStatus);
  console.log('Changing: ' +  subscriptionPlan, subscriptionBilling, subscriptionPrice  );
};
