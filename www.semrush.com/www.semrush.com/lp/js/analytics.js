$(document).ready(function() {


    // Try-product buttons
    // TODO: delete?

    $("#try-product__1").click(function() {
        //ga('send', 'event', 'Try-it_btn', 'btn 1');
        dataLayer.push({
            event: "semrush",
            eventCategory: "Try-it_btn",
            eventAction: "btn 1",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#try-product__2").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Try-it_btn",
            eventAction: "btn 2",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#try-product__3").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Try-it_btn",
            eventAction: "btn 3",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#try-product__4").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Try-it_btn",
            eventAction: "btn 4",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#try-product__5").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Try-it_btn",
            eventAction: "btn 5",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#try-product__6").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Try-it_btn",
            eventAction: "btn 6",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Scroll-to-header buttons

    $("#scrollTo__1").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Scroll-to-top_btn",
            eventAction: "btn 1",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#scrollTo__2").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Scroll-to-top_btn",
            eventAction: "btn 2",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#scrollTo__3").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Scroll-to-top_btn",
            eventAction: "btn 3'",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Forgot link

    $(".forgot-link").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Forgot link",
            eventAction: "forgot link'",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Prices button

    $("#prices").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Prices_btn",
            eventAction: "prices 1",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Popup buttons

    $("#submit_btn").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Pop-up_btn",
            eventAction: "Submit_btn",
            eventLabel: "",
            eventValue: null,
        });

        // Check email: business or not
        var emailValue = $("#input_email").val();
        var allowEamailTemplates = ['yahoo', 'mail', 'gmail', 'rambler', 'outlook', 'zoho', 'protonmail', 'gmx', 'plusnet', 'hotmail', 'yandex', 'icloud', 'live'];
        var regexp = new RegExp('@(' + allowEamailTemplates.join('|') + ')\.[a-z]{2,3}$', 'g');;
        if (!!emailValue.match(regexp)) {
            dataLayer.push({
                event: "semrush",
                eventCategory: "Email_check",
                eventAction: "not business",
                eventLabel: "",
                eventValue: null,
            });
        } else {
            //ga('send', 'event', 'Email_check', 'business');
            dataLayer.push({
                event: "semrush",
                eventCategory: "Email_check",
                eventAction: "business",
                eventLabel: "",
                eventValue: null,
            });
        }
    });

    $("#login_btn").click(function() {
        //ga('send', 'event', 'Pop-up_btn', 'Login_btn');
        dataLayer.push({
            event: "semrush",
            eventCategory: "Pop-up_btn",
            eventAction: "Login_btn",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Popup buttons (NEW)

    $("button[data-test='sso-register']").click(function() {
        //ga('send', 'event', 'Pop-up_btn', 'Submit_btn');
        dataLayer.push({
            event: "semrush",
            eventCategory: "Pop-up_btn",
            eventAction: "Submit_btn",
            eventLabel: "",
            eventValue: null,
        });

        // Check email: business or not
        var emailValue = $("input[data-sso='sso-email']").val();
        var allowEamailTemplates = ['yahoo', 'mail', 'gmail', 'rambler', 'outlook', 'zoho', 'protonmail', 'gmx', 'plusnet', 'hotmail', 'yandex', 'icloud', 'live'];
        var regexp = new RegExp('@(' + allowEamailTemplates.join('|') + ')\.[a-z]{2,3}$', 'g');;
        if (!!emailValue.match(regexp)) {
            dataLayer.push({
                event: "semrush",
                eventCategory: "Email_check",
                eventAction: "not business",
                eventLabel: "",
                eventValue: null,
            });
        } else {
            dataLayer.push({
                event: "semrush",
                eventCategory: "Email_check",
                eventAction: "business",
                eventLabel: "",
                eventValue: null,
            });
        }
    });

    $("button[data-test='sso-login']").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Pop-up_btn",
            eventAction: "Login_btn",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Side-bar buttons

    $("#support-link").click(function() {
        //ga('send', 'event', 'side-bar links', 'support-link');
        dataLayer.push({
            event: "semrush",
            eventCategory: "side-bar links",
            eventAction: "support-link",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#demo-link").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "side-bar links",
            eventAction: "demo-link",
            eventLabel: "",
            eventValue: null,
        });
    });

    $("#sales-link").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "side-bar links",
            eventAction: "sales-link",
            eventLabel: "",
            eventValue: null,
        });
    });


    // Cookies btn

    $(".gdpr_button").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "cookies",
            eventAction: "accept",
            eventLabel: "",
            eventValue: null,
        });
    });

    //
    $("#submitBtn").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Button_form",
            eventAction: "Submit_form",
            eventLabel: "",
            eventValue: null,
        });
    });
    //
    $(".top_button").click(function() {
        dataLayer.push({
            event: "semrush",
            eventCategory: "Button_top'",
            eventAction: "To_form",
            eventLabel: "",
            eventValue: null,
        });
    });
});