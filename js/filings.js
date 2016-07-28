$(document).ready(function(){

var prospectus = 	"<div class='form-head'><h3>First Capital Real Estate Incorporated Prospectus</h3></div>" +
									"<div class='form-object'><a href='#'>Download Prospectus PDF</a> <p>Last Updated: 05/08/2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated February 5, 2016</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated December 2, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated November 2, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated October 5, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated September 3, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Supplement No.2</a> <p>September 10, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated August 4, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated July 7, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Supplement No.1</a> <p>June 10, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated June 1, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated April 2, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated March 2, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Free Writing Prospectus</a> <p>Dated February 24, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Free Writing Prospectus</a> <p>Dated February 19, 2015</p></div>" +
									"<div class='form-object'><a href='#'>Download Monthly Pricing Supplement</a> <p>Dated February 2, 2015</p></div>";

var sec =         "<div class='form-head'><h3>SEC Filings - First Capital Real Estate Trust Incorporated</h3></div>" +
                  "<div class='form-object'><a href='#'>8-K Filing Date: 2016-07-18</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                  "<div class='form-object'><a href='#'>8-K Filing Date: 2016-07-15</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2016-02-08</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-12-31</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-12-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K/A Filing Date: 2015-11-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-11-17</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K/A Filing Date: 2015-10-26</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-10-16</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-10-09</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K/A Filing Date: 2015-09-25</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-09-21</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2015-06-30</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-07-02</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-06-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>DEFR14A Filing Date: 2015-05-29</a> <p>Revised definitive proxy soliciting materials</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2015-05-20</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>NT 10-Q Filing Date: 2015-05-15</a> <p>Notification of inability to timely file Form 10-Q.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-05-06</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>DEF 14A Filing Date: 2015-04-30</a> <p>Proxy Statement.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-04-16</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>NT 10-K Filing Date: 2015-04-01</a> <p>Notification of inability to timely file Form 10-K.</p></div>" +
                   "<div class='form-object'><a href='#'>10-K Filing Date: 2015-04-01</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-02-24</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-02-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-02-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-02-11</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-K/A Filing Date: 2015-01-21</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>POS AM Filing Date: 2015-01-16</a> <p>Post-Effective amendments for registration statement.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-01-15</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2015-01-14</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2014-12-22</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2014-11-07</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2014-09-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2014-08-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K/A Filing Date: 2014-08-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2014-06-16</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2014-05-28</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2014-05-01</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>10-K Filing Date: 2014-03-31</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2013-11-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2013-09-20</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2013-08-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2013-06-17</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2013-05-14</a> <p>Comprehensive quarterly financial report filed with the SEC. </p></div>" +
                   "<div class='form-object'><a href='#'>8-K/A Filing Date: 2013-05-06</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2013-04-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2013-04-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-K Filing Date: 2013-03-29</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2013-03-21</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2013-01-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>8-K Filing Date: 2012-12-06</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a href='#'>10-Q Filing Date: 2012-11-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>";

var xbrl =        "<div class='form-head'><h3>Download XBRL Exhibits - First Capital Real Estate Trust Incorporated</h3></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q1 2015</a> <p>Filing Date 2015-05-20</p></div>" +
                  "<div class='form-object'><a href='#'>10-K 2014</a> <p>Filing Date 2015-03-31</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q3 2014</a> <p>Filing Date 2014-11-07</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q2 2014</a> <p>Filing Date 2014-08-14</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q1 2014</a> <p>Filing Date 2014-05-01</p></div>" +
                  "<div class='form-object'><a href='#'>10-K 2013</a> <p>Filing Date 2014-03-31</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q3 2013</a> <p>Filing Date 2013-11-14</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q2 2013</a> <p>Filing Date 2013-08-14</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q1 2013</a> <p>Filing Date 2013-05-14</p></div>" +
                  "<div class='form-object'><a href='#'>10-K 2012</a> <p>Filing Date 2013-03-29</p></div>" +
                  "<div class='form-object'><a href='#'>10-Q Q4 2012</a> <p>Filing Date 2012-11-14</p></div>" ;

var corporateGovernance =
                 "<div class='form-head'><h3>Corporate Charter</h3></div>" +
                 "<div class='form-object'><a href='#'>Download URTI Articles of Amendment and Restatement</a> <p>July 15th 2014</p></div>" +
                 "<div class='form-object'><a href='#'>Download URTI Articles of Amendment and Restatement</a> <p>June 13th 2013</p></div>" +
                 "<div class='form-head'><h3>Committee Charters</h3></div>" +
                 "<div class='form-object'><a href='#'>Download Audit Committee Charter</a> <p>Filing Date: 2013-04-30</p></div>" +
                 "<div class='form-object'><a href='#'>Download Compensation Committee Charter</a> <p>Filing Date: 2013-04-30</p></div>" ;

var materialsAndForms = "<div class='form-head'><h3>Forms</h3></div>" +
          "<div class='form-object'><a href='#'>Download Form 8937 - 2014</a></div>" +
          "<div class='form-object'><a href='#'>Download Form 8937 - 2013</a></div>" +
          "<div class='form-object'><a href='#'>Download Subscription Agreement</a></div>" +
          "<div class='form-object'><a href='#'>Download Additional Subscription Agreement</a></div>" ;


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
