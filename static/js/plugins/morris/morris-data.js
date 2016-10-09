// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            events: 666
        }, {
            period: '2010 Q2',
            events: 778
        }, {
            period: '2010 Q3',
            events: 312
        }, {
            period: '2010 Q4',
            events: 767
        }, {
            period: '2011 Q1',
            events: 810
        }, {
            period: '2011 Q2',
            events: 670
        }, {
            period: '2011 Q3',
            events: 820
        }, {
            period: '2011 Q4',
            events: 173
        }, {
            period: '2012 Q1',
            events: 687
        }, {
            period: '2012 Q2',
            events: 432
        }],
        xkey: 'period',
        ykeys: ['events'],
        labels: ['events'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

});
