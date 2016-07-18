$(document).ready(function(){

var prospectus = "<h3 style='text-align:center; margin-top: 40px;'>First Capital Real Estate Incorporated Prospectus</h3>" +
                        "<div class='form-object'>Download Prospectus PDF</div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated February 5, 2016 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated December 2, 2015</div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated November 2, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated October 5, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated September 3, 2015 </div>" +
                        "<div class='form-object'>Download Supplement No.2, September 10, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated August 4, 2015 </div>" +
                        "<div class='form-object'>Download Monthly Pricing Supplement, Dated July 7, 2015 </div>";

var sec = "<h3 style='text-align:center; margin-top: 40px;'>SEC Filings - First Capital Real Estate Trust Incorporated</h3>" +
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
                   "<div class='form-object'>10-Q     Filing Date: 2015-06-30 Comprehensive quarterly financial report filed with the SEC.</div>" ;

var xbrl = "<h3 style='text-align:center; margin-top: 40px;'>Download XBRL Exhibits - First Capital Real Estate Trust Incorporated</h3>" +
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




        $(".form-tab").click(function(){

             $(".form-tab").removeClass("form-tab-active");
             $(this).addClass("form-tab-active");

             if($(this).hasClass("prospectus-tab")){
               $(".form-object-container").html(prospectus);
             } else if ($(this).hasClass("sec-tab")) {
               $(".form-object-container").html(sec);
             } else if ($(this).hasClass("xbrl-tab")) {
               $(".form-object-container").html(xbrl);
             }
        });

});
