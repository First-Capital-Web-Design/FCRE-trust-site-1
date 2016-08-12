$(document).ready(function(){

var prospectus = 	"<div class='form-head'><h3>First Capital Real Estate Incorporated Prospectus</h3></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/United_Realty_Trust_Prospectus.pdf'>Download Prospectus PDF</a> <p>Last Updated: 05/08/2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/NAV_Pricing_Supplement_2516.pdf'>Download Monthly Pricing Supplement</a> <p>Dated February 5, 2016</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/NAV_Pricing_Supplement_12215.pdf'>Download Monthly Pricing Supplement</a> <p>Dated December 2, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/Pricing_Supplement_1122015.pdf'>Download Monthly Pricing Supplement</a> <p>Dated November 2, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015SEPT.pdf'>Download Monthly Pricing Supplement</a> <p>Dated October 5, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015AUG.pdf'>Download Monthly Pricing Supplement</a> <p>Dated September 3, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/URTISupp2(September).pdf'>Download Supplement No.2</a> <p>September 10, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015JUL.pdf'>Download Monthly Pricing Supplement</a> <p>Dated August 4, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015JUN.pdf'>Download Monthly Pricing Supplement</a> <p>Dated July 7, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/urt-424b3_061015_v1.pdf'>Download Supplement No.1</a> <p>June 10, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015MAY.pdf'>Download Monthly Pricing Supplement</a> <p>Dated June 1, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015APR.pdf'>Download Monthly Pricing Supplement</a> <p>Dated April 2, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015MAR.pdf'>Download Monthly Pricing Supplement</a> <p>Dated March 2, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/FWPFebruary24-2015.pdf'>Download Free Writing Prospectus</a> <p>Dated February 24, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/FWPFebruary19-2015.pdf'>Download Free Writing Prospectus</a> <p>Dated February 19, 2015</p></div>" +
									"<div class='form-object'><a target='_blank' href='forms/prospectus-and-supplements/MonthlySupplement-2015FEB.pdf'>Download Monthly Pricing Supplement</a> <p>Dated February 2, 2015</p></div>";

var sec =         "<div class='form-head'><h3>SEC Filings - First Capital Real Estate Trust Incorporated</h3></div>" +
                  "<div class='form-object'><a target='_blank' href='https://www.sec.gov/Archives/edgar/data/1536256/000114420416113353/0001144204-16-113353-index.htm'>8-K Filing Date: 2016-07-18</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                  "<div class='form-object'><a target='_blank' href='https://www.sec.gov/Archives/edgar/data/1536256/000114420416113168/0001144204-16-113168-index.htm'>8-K Filing Date: 2016-07-15</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8K__Township_Nine_2816.pdf'>8-K Filing Date: 2016-02-08</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8K_RREAF_Portfolio_12312015.pdf'>8-K Filing Date: 2015-12-31</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8K__Offering_Extension_12042015.pdf'>8-K Filing Date: 2015-12-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8KA_11232015.pdf'>8-K/A Filing Date: 2015-11-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8-K-EYTermination(11-17).pdf'>8-K Filing Date: 2015-11-17</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8-KA-EYTermination(10-26).pdf'>8-K/A Filing Date: 2015-10-26</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8-K-EYTermination(10-16).pdf'>8-K Filing Date: 2015-10-16</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8K-2015-10-09.pdf'>8-K Filing Date: 2015-10-09</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/Amended8-K(9-25).pdf'>8-K/A Filing Date: 2015-09-25</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/8K(9-21).pdf'>8-K Filing Date: 2015-09-21</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/URTI10-Q(June 30).pdf'>10-Q Filing Date: 2015-06-30</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_070215.htm'>8-K Filing Date: 2015-07-02</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_062215.htm'>8-K Filing Date: 2015-06-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-defr14a_061715.htm'>DEFR14A Filing Date: 2015-05-29</a> <p>Revised definitive proxy soliciting materials</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt_10q_033115.pdf'>10-Q Filing Date: 2015-05-20</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-nt10q_033115.htm'>NT 10-Q Filing Date: 2015-05-15</a> <p>Notification of inability to timely file Form 10-Q.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_050615.htm'>8-K Filing Date: 2015-05-06</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-def14a_061715.htm'>DEF 14A Filing Date: 2015-04-30</a> <p>Proxy Statement.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_041315.htm'>8-K Filing Date: 2015-04-16</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-nt10k_123114.htm'>NT 10-K Filing Date: 2015-04-01</a> <p>Notification of inability to timely file Form 10-K.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10k_123114.htm'>10-K Filing Date: 2015-04-01</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_022415.htm'>8-K Filing Date: 2015-02-24</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_022315.htm'>8-K Filing Date: 2015-02-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_022315_2.htm'>8-K Filing Date: 2015-02-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_021115.htm'>8-K Filing Date: 2015-02-11</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10ka_123113.htm'>10-K/A Filing Date: 2015-01-21</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-posam_011515.htm'>POS AM Filing Date: 2015-01-16</a> <p>Post-Effective amendments for registration statement.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_011515.htm'>8-K Filing Date: 2015-01-15</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_011315.htm'>8-K Filing Date: 2015-01-14</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_121614.htm'>8-K Filing Date: 2014-12-22</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10q_093014.htm'>10-Q Filing Date: 2014-11-07</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_092314.htm'>8-K Filing Date: 2014-09-23</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10q_063014.htm'>10-Q Filing Date: 2014-08-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8ka_052114.htm'>8-K/A Filing Date: 2014-08-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_061614.htm'>8-K Filing Date: 2014-06-16</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_052814.htm'>8-K Filing Date: 2014-05-28</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10q_033114.htm'>10-Q Filing Date: 2014-05-01</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10k_123113.htm'>10-K Filing Date: 2014-03-31</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-10q_093013.htm'>10-Q Filing Date: 2013-11-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/urt-8k_092013.htm'>8-K Filing Date: 2013-09-20</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/Unassociated Document.htm'>10-Q Filing Date: 2013-08-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v347942_8k.htm'>8-K Filing Date: 2013-06-17</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v344171_10q.htm'>10-Q Filing Date: 2013-05-14</a> <p>Comprehensive quarterly financial report filed with the SEC. </p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v343971_8ka.htm'>8-K/A Filing Date: 2013-05-06</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v340545_8k.htm'>8-K Filing Date: 2013-04-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v340551_8k.htm'>8-K Filing Date: 2013-04-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v338657_10k.htm'>10-K Filing Date: 2013-03-29</a> <p>Comprehensive annual financial report filed with the SEC.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v338490_8k.htm'>8-K Filing Date: 2013-03-21</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v331342_8k.htm'>8-K Filing Date: 2013-01-04</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v329781_8k.htm'>8-K Filing Date: 2012-12-06</a> <p>Report for corporate changes or financial reports for unscheduled events.</p></div>" +
                   "<div class='form-object'><a target='_blank' href='forms/sec-filings/v329781_8k.htm'>10-Q Filing Date: 2012-11-14</a> <p>Comprehensive quarterly financial report filed with the SEC.</p></div>";

var xbrl =        "<div class='form-head'><h3>Download XBRL Exhibits - First Capital Real Estate Trust Incorporated</h3></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/urt-20150331.zip'>10-Q Q1 2015</a> <p>Filing Date 2015-05-20</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2014-10-K.zip'>10-K 2014</a> <p>Filing Date 2015-03-31</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/urt-20140930.zip'>10-Q Q3 2014</a> <p>Filing Date 2014-11-07</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/urt-20140630.zip'>10-Q Q2 2014</a> <p>Filing Date 2014-08-14</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/urt-20140331.zip'>10-Q Q1 2014</a> <p>Filing Date 2014-05-01</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2013-10-K.zip'>10-K 2013</a> <p>Filing Date 2014-03-31</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2013-urt-20130930.zip'>10-Q Q3 2013</a> <p>Filing Date 2013-11-14</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2013-urt-20130630.zip'>10-Q Q2 2013</a> <p>Filing Date 2013-08-14</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2013-cik1536256-20130331.zip'>10-Q Q1 2013</a> <p>Filing Date 2013-05-14</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2012-10-K.zip'>10-K 2012</a> <p>Filing Date 2013-03-29</p></div>" +
                  "<div class='form-object'><a href='forms/xbrl-exhibits/2012-Q4-10-Q.zip'>10-Q Q4 2012</a> <p>Filing Date 2012-11-14</p></div>" ;

var corporateGovernance =
                 "<div class='form-head'><h3>Corporate Charter</h3></div>" +
                 "<div class='form-object'><a target='_blank' href='forms/corporate-governance/URTI-Articles-of-Amendment-and-Restatement.July.15th.2014.pdf'>Download URTI Articles of Amendment and Restatement</a> <p>July 15th 2014</p></div>" +
                 "<div class='form-object'><a target='_blank' href='forms/corporate-governance/URTI-Articles-of-Amendment-and-Restatement.June.13th.2013.pdf'>Download URTI Articles of Amendment and Restatement</a> <p>June 13th 2013</p></div>" +
                 "<div class='form-head'><h3>Committee Charters</h3></div>" +
                 "<div class='form-object'><a target='_blank' href='forms/corporate-governance/Audit Committee Charter.doc'>Download Audit Committee Charter</a> <p>Filing Date: 2013-04-30</p></div>" +
                 "<div class='form-object'><a target='_blank' href='forms/corporate-governance/Compensation Committee Charter.doc'>Download Compensation Committee Charter</a> <p>Filing Date: 2013-04-30</p></div>" ;

var materialsAndForms = "<div class='form-head'><h3>Forms</h3></div>" +
          "<div class='form-object'><a target='_blank' href='forms/materials-and-forms/Form8937-2015.pdf'>Download Form 8937 - 2014</a></div>" +
          "<div class='form-object'><a target='_blank' href='forms/materials-and-forms/Form8937-2014.pdf'>Download Form 8937 - 2013</a></div>" +
          "<div class='form-object'><a target='_blank' href='forms/materials-and-forms/FCRETI_Subscription_Agreement.pdf'>Download Subscription Agreement</a></div>" +
          "<div class='form-object'><a target='_blank' href='forms/materials-and-forms/FCRETI_Additional_Subscription_Agreement.pdf'>Download Additional Subscription Agreement</a></div>" ;


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
