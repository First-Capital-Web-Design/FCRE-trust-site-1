$(document).ready(function(){

var suneet = '<div class="board-member-header">' +
                        '<h1>Suneet Singal</h1>' +
                        '<h2>Chairman, CEO</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>First Capital is led by its Chairman and CEO, Suneet Singal. Mr. Singal began his real estate' +
                        ' finance career in 2001 in lending origination before forming First Capital in 2003. In 2006, Mr. Singal' +
                        ' acquired and merged with a real estate lending platform, Amerifund Financial, and grew the combined ' +
                        'company to over $1 billion a year in originations in both retail and wholesale as a direct lender with ' +
                        'business in over 40 states. After the real estate market turn in 2007-08, Mr. Singal, through First Capital,' +
                        ' mapped over 12 projects in California encompassing the following asset types: industrial, retail, multifamily, ' +
                        'senior assisted living, hospitality and mixed use with aggregate values of over $250 million. Mr. Singal has' +
                        'finance and development experience in multiple asset classes, ranging from residential and commercial retail and wholesale ' +
                        'loan origination, underwriting and securitization, and development to the acquisition of raw unentitled land, entitlement ' +
                        ' completion and map approvals, bond financing, infrastructure build-out and vertical construction, real estate asset ' +
                        'rehab, and asset lease-up to stabilization. Mr. Singal holds a Bachelor of Arts degree in Finance from California State ' +
                        'University-Sacramento with a concentration in Investments.</p>' +
                        '</div>';

var name2 = '<div class="board-member-header">' +
                        '<h1>Keith Spears</h1>' +
                        '<h2>Board Member</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. Spears is an alternative asset professional with a particular expertise in private equity. ' +
                        'Over a 27-year career, Keith has worked on over 100 transactions and investments that range from $1.0 million ' +
                        'to well over a $10 billion in size. He has led the due diligence effort on over 50 fund and co-investment ' +
                        'opportunities and he has generated top quartile performance on behalf of his clients.</p> <p>At First Capital, Keith is ' +
                        'responsible for day-today operations and focuses on corporate development opportunities for the firm. He was formerly ' +
                        'one of the founders of Lagacy Equity Advisors, a boutique private equity fund-of-fund and co-invest advisory firm which ' +
                        'focused on social impact investments.</p>' +
                        '</div>';

var name3 = '<div class="board-member-header">' +
                        '<h1>Michael B. McCook</h1>' +
                        '<h2>Board Member</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. McCook with nearly 40 years as a distinguished leader in the residential development finance ' +
                        'industry, McCook now provides expert advice to his consulting clients, and insightful leadership as a ' +
                        'director on several international development company boards. With broad ecperience and a deep contact network ' +
                        'in equity investment, acquisitions, development, and asset management for large institutional real estate porfolios ' +
                        'in the US, Mexico, Europe, Asia, and South America, his dynamic, driven leadership style has delivered impressive returns ' +
                        'for major pension fund investors including the California Public Employee Retirement System(CalPERS), Prudential Insurance ' +
                        'Company of America, and privately held equity firms.</p><p>Mr. McCook\'s experience spans single-family residential development, ' +
                        'muilti-family residential, industrial, office and agricultural porfolios exceeding $30 billion in market value. As an independent ' +
                        'board member, McCook provides direction on corporate governance, audi oversight and strategic forward planning. Previously, ' +
                        'Mr. McCook provided strategic consulting services to the largest shopping center owner in the Philippines; advised on IPO for DB Reality, ' +
                        'Mumbai, India in early 2010; succesfully placed $200 million equity facility to acquire the Sahara Hotel in Las Vegas, Nevada.</p>' +
                        '</div>';

var name4 = '<div class="board-member-header">' +
                        '<h1>Javier G. Van de Steeg</h1>' +
                        '<h2>Board Member</h2>' +
                        '</div>' +
                        '<div class="board-member-info">' +
                        '<p>Mr. Van de Steeg is President and co-founder of Asset Preservation, Inc. and has been involved in the §1031 ' +
                        'exchange industry for 25 yeard. Javier focused on creating a company that is an industry leader in securing its client\'s funds and property. This was accomplished in 1993 through the majority acquisition of the company by Stewart Title Company of Houston, TX.</p><p>Asset Preservation, Inc. is a subsidiary of Stewart Title Company. API is a respectednational leader in the IRC §1031 "Qualified Intermediary" industry, efficiently facilitating over 150,000 exchanges throughout the US. API\'s Attorneys, CPA\'s and Senior Exchange Counselors are available to process exchanges from standard delayed exchanges to complex reverse and improvement exchanges. Our Commercial Division was created specifically to provide the added service required to deal in complex commercial, multi-site transactions and work with Fortune 500 companies.' +
                        '</p>' +
                        '</div>';


        $(".name").click(function(){

          console.log("hello");

             $(".name").removeClass("name-active");
             $(this).addClass("name-active");

             if($(this).hasClass("suneet-tab")){
               $(".board-info-container").html(suneet);
             } else if ($(this).hasClass("name2-tab")) {
               $(".board-info-container").html(name2);
             } else if ($(this).hasClass("name3-tab")) {
               $(".board-info-container").html(name3);
             } else if ($(this).hasClass("name4-tab")) {
               $(".board-info-container").html(name4);
             } else if ($(this).hasClass("name5-tab")) {
               $(".board-info-container").html(name5);
             }
        });

});
