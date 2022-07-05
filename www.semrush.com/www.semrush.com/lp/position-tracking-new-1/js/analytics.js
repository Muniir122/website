$(document).ready(function() {

    $(".cta_line_button").click(function() {
        dataLayer.push({
            event: 'semrush',
            eventCategory: 'cta_line_button',
            eventAction: 'click:take-trial',
            'eventLabel': 'pt-new-en',
            'eventValue': null
        });
    });

    $(".cta_hero_button").click(function() {
        dataLayer.push({
            event: 'semrush',
            eventCategory: 'cta_hero_button',
            eventAction: 'click:take-trial',
            'eventLabel': 'pt-new-en',
            'eventValue': null
        });
    });

    $(".cta_footer_button").click(function() {
        dataLayer.push({
            event: 'semrush',
            eventCategory: 'cta_footer_button',
            eventAction: 'click:take-trial',
            'eventLabel': 'pt-new-en',
            'eventValue': null
        });
    });



});