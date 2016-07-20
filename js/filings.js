$(document).ready(function(){

var prospectus = "<div class='form-head'><h3>First Capital Real Estate Incorporated Prospectus</h3></div>" +
                        "<div class='form-object'>Download Prospectus PDF</div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated February 5, 2016 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated December 2, 2015</div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated November 2, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated October 5, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated September 3, 2015 </div>" +
                        "<div class='form-object'>Download Supplement No.2, September 10, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated August 4, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated July 7, 2015 </div>";

var sec = "<div class='form-head'><h3>SEC Filings - First Capital Real Estate Trust Incorporated</h3></div>" +
                   "<div class='form-object'>8-K     Filing Date: 2016-02-08 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K     Filing Date: 2015-12-31 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K     Filing Date: 2015-12-04 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K/A     Filing Date: 2015-11-23 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K     Filing Date: 2015-11-17 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K/A     Filing Date: 2015-10-26 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K     Filing Date: 2015-10-16 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K     Filing Date: 2015-10-09 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K/A     Filing Date: 2015-09-25 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>8-K     Filing Date: 2015-09-21 Report for corporate changes or financial reports for unscheduled events.</div>" +
                   "<div class='form-object'>10-Q     Filing Date: 2015-06-30 Comprehensive quarterly financial report filed with the SEC.</div>";

var xbrl = "<div class='form-head'><h3>Download XBRL Exhibits - First Capital Real Estate Trust Incorporated</h3></div>" +
          "<div class='form-object'>10-Q Q1 2015 Filing Date 2015-05-20</div>" +
          "<div class='form-object'>10-K 2014 Filing Date 2015-03-31</div>" +
          "<div class='form-object'>10-Q Q3 2014 Filing Date 2014-11-07</div>" +
          "<div class='form-object'>10-Q Q2 2014 Filing Date 2014-08-14</div>" +
          "<div class='form-object'>10-Q Q1 2014 Filing Date 2014-05-01</div>" +
          "<div class='form-object'>10-K 2013 Filing Date 2014-03-31</div>" +
          "<div class='form-object'>10-Q Q3 2013 Filing Date 2013-11-14</div>" +
          "<div class='form-object'>10-Q Q2 2013 Filing Date 2013-08-14</div>" +
          "<div class='form-object'>10-Q Q1 2013 Filing Date 2013-05-14</div>" +
          "<div class='form-object'>10-K 2012 Filing Date 2013-03-29</div>" +
          "<div class='form-object'>10-Q Q4 2012 Filing Date 2012-11-14</div>" ;

var corporateGovernance = "<div class='form-head'><h3>Corporate Charter</h3></div>" +
           "<div class='form-object'>Download     URTI Articles of Amendment and Restatement - July 15th 2014</div>" +
           "<div class='form-object'>Download     URTI Articles of Amendment and Restatement - June 13th 2013</div>" +
           "<div class='form-head'><h3>Committee Charters</h3></div>" +
           "<div class='form-object'>Download     URTI Articles of Amendment and Restatement - June 13th 2013</div>" +
           "<div class='form-object'>Download     Compensation Committee Charter. Filing Date: 2013-04-30</div>" ;

var materialsAndForms = "<div class='form-head'><h3>Forms</h3></div>" +
          "<div class='form-object'>Download     Form 8937 - 2014</div>" +
          "<div class='form-object'>Download     Form 8937 - 2013</div>" +
          "<div class='form-object'>Download     Subscription Agreement</div>" +
          "<div class='form-object'>Download     Additional Subscription Agreement</div>" ;


        $(".form-tab").click(function(){

             $(".form-tab").removeClass("form-tab-active");
             $(this).addClass("form-tab-active");

             if($(this).hasClass("prospectus-tab")){
               $(".form-object-container").html(prospectus);
             } else if ($(this).hasClass("sec-tab")) {
               $(".form-object-container").html(sec);
             } else if ($(this).hasClass("xbrl-tab")) {
               $(".form-object-container").html(xbrl);
             } else if ($(this).hasClass("corporate-governance-tab")) {
               $(".form-object-container").html(corporateGovernance);
             } else if ($(this).hasClass("materials-tab")) {
               $(".form-object-container").html(materialsAndForms);
             }
        });

});
