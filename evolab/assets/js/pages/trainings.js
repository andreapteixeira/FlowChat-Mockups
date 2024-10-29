// Class definition
var KTWizardDemo = function () {
    // Base elements
    var wizardEl;
    var wizard;

    // Private functions
    var initWizard = function () {
        // Initialize form wizard
        wizard = new KTWizard('trainings_wizard', {
            startStep: 1,
            clickableSteps: false //Enable/disable manually clicking step titles
        });

        // Change event
        wizard.on('change', function(wizard) {
            KTUtil.scrollTop();
        });
    }



    return {
        // public functions
        init: function() {
            wizardEl = KTUtil.get('trainings_wizard');
            initWizard();
        }
    };
}();

jQuery(document).ready(function() {
    KTWizardDemo.init();
});
