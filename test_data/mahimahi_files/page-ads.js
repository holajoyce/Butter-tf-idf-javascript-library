var docCookies = document.cookie.split(';');
var origRefer = null;
for(var i=0;i < docCookies.length;i++) {
	var c = docCookies[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf("original_referrer=") == 0) {
		origRefer = c.substring("original_referrer=".length,c.length);
	}
}
if(origRefer == null){
	document.cookie = "original_referrer=" + document.referrer + "; path=/";
}

var pageAdsParams = {"site_prefix":"epicurious","position_list":"AMS_EPI_RECIPEDETAILS_TEXTOFFER_SLF,AMS_EPI_BNA_RECIPEDETAILS_FORM,AMS_EPI_BNA_RECIPEDETAILS_BANNER,AMS_EPI_GLOBAL_HEADER_SUBSCRIBELINK,AMS_EPI_GLOBAL_NAVBAR","subdomain":"www","url_name":"template_a","ajax":1,"keywords":"","browser_path":"/WEB-INF/interface/templates/template_a.jsp","ad_category_prefix":"WEB-INF","cat_prefixes":",WEB-INF,interface,templates,template_a.jsp"};
var pageAds = {"AMS_EPI_GLOBAL_NAVBAR":"<a class=\"subscribe\" href=\"http://subscribe.bonappetit.com//ams/amsClick?pos_id=3052&campaign_id=8014&creative_id=11355&site_id=798&top_level_section_prefix=WEB-INF&full_url=/WEB-INF/interface/templates/template_a.jsp\" target=\"_blank\"></a>","AMS_EPI_GLOBAL_HEADER_SUBSCRIBELINK":"<div id=\"global_header_subscribeLink\"><a style=\"color: rgb(238, 238, 238); font-size: 10px;\" href=\"http://subscribe.bonappetit.com//ams/amsClick?pos_id=3051&campaign_id=8013&creative_id=11354&site_id=798&top_level_section_prefix=WEB-INF&full_url=/WEB-INF/interface/templates/template_a.jsp\" target=\"_blank\"><span>subscribe</span></a></div>\r\n\r\n\r\n\r\n","AMS_EPI_BNA_RECIPEDETAILS_FORM":" \r\n\r\n<script type=\"text/javascript\" language=\"JavaScript\">var exp = new Date();var exp_time = exp.getTime()+1800000;var by_sync = 0;var init_time = exp.getTime() + 43200000;\r\n\r\n        exp.setTime(exp_time);var value = 10536 + \":\" + exp_time + \":\" + init_time + \":\" + by_sync;document.cookie = \"c_7166_cr=\"+escape(value)+\";expires=\"+exp.toGMTString()+\";path=/;domain=condenastdigital.com;\"\r\n\r\n    </script> \r\n    <script src=\"http://subscribe.epicurious.com/circulation/shared/scripts/validate-functions.js\" language=\"javascript\"></script>\r\n\r\n    <script src=\"http://subscribe.epicurious.com/circulation/shared/scripts/validate-generic.js\" language=\"javascript\"></script>\r\n\r\n    <div id=\"global_embeddedForm\"> \r\n        <div class=\"autosubs wide\" style=\"margin:auto; padding:2px; clear:both;\"> \r\n            <form target=\"_new\" onsubmit=\"return validateFrm(this);\" class=\"frm_regsub\" name=\"frm_regsub\" id=\"frm_regsub\" action=\"https://subscribe.bonappetit.com/subscribe/processSubscription\" method=\"post\" style=\"position:relative; margin:0px;padding:7px\">\r\n\r\n               <input type=\"hidden\" name=\"offer_id\" value=\"72602\" />\r\n<input type=\"hidden\" name=\"host_offer_id\" value=\"72602\" />\r\n<input type=\"hidden\" name=\"source_code\" value=\"\" />\r\n<input type=\"hidden\" name=\"parent_trans_id\" value=\"\" />\r\n<input type=\"hidden\" name=\"offer_term\" value=\"99852_0\" />\r\n<input type=\"hidden\" name=\"country_code\" value=\"US\" />\r\n<input type=\"hidden\" name=\"pt_id\" value=\"6\" />\r\n<input type=\"hidden\" name=\"general_optin\" value=\"Y\" />\r\n<input type=\"hidden\" name=\"pos_name\" value=\"AMS_EPI_BNA_RECIPEDETAILS_FORM\">\r\n<input type=\"hidden\" name=\"segment_name\" value=\"\"> \r\n<input type=\"hidden\" name=\"referral_source\" value=\"\" />\r\n\r\n\r\n                <div style=\"position:relative; width:100%;\"> \r\n                    <div style=\"background: #dedede; width:80px; height:108px;\"> \r\n                        <img style=\"position:relative; top:0px; left:-3px; width:80px; height:108px;\" src=\"http://subscribe.condenet.com/images_covers/cover_bonap_80.jpg\">\r\n\r\n                    </div> \r\n                    <img src=\"http://subscribe.epicurious.com/circulation/bonappetit/images/EPI_BNA_embed_367x108.v3a.jpg\" style=\"position:absolute; right:0px; top:0px; width:367px; height:108px;\">\r\n\r\n                </div> \r\n                <div class=\"frm_offer\" style=\"position:relative;padding-left:65px;\"> \r\n                    <b style=\"color:#000\">12 issues (one year) for just $19.99. Tablet access included.<br></b><br> \r\n                    <span>* Plus applicable sales tax</span> \r\n                </div> \r\n                \r\n                \r\n                \r\n                <div id=\"frm_error_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;text-align:center;\"></div>\r\n\r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                        <label>First Name</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0; padding:0; margin:0\"> \r\n                        <input style=\"float:right;margin-bottom:3px;width:338px;\" class=\"required txt_name\" title=\"First Name\" value=\"\" name=\"first_name\">\r\n\r\n                    </fieldset> \r\n                    <p id=\"firstName_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                    <label>Last Name</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0; padding:0; margin:0\"> \r\n                    <input style=\"float:right;margin-bottom:3px;width:338px;\" class=\"row addressRow rqrd lastname\" title=\"Last Name\" value=\"\" name=\"last_name\">\r\n\r\n                    </fieldset> \r\n                    <p id=\"lastName_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                    <label>Address 1</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0;padding:0; margin:0\"> \r\n                    <input style=\"float:right;margin-bottom:3px;width:338px;\" class=\"required txt_address1\" title=\"Address\" value=\"\" name=\"address\">\r\n\r\n                    </fieldset> \r\n                    <p id=\"address1_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                    <label>Address 2</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0;padding:0; margin:0\"> \r\n                    <input style=\"float:right; margin-bottom:3px;width:338px;\" class=\"txt_address2\" title=\"Address Line 2\" value=\"\" name=\"address2\">\r\n\r\n                    </fieldset> \r\n                    <p id=\"address2_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                    <label>City</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0;padding:0; margin:0\"> \r\n                    <input style=\"float:right;margin-bottom:3px;width:338px;\" class=\"required txt_city\" title=\"City\" value=\"\" name=\"city\">\r\n\r\n                    </fieldset> \r\n                    <p id=\"city_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                        <label>State</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0;padding:0; margin:0;position:relative; height:22px;\"> \r\n                        <select class=\"required sel_state\" title=\"State\" name=\"state\" style=\"position:absolute; right:70px; top:0px;height:18px; padding:0;width:272px;\">\r\n\r\n                                <option value=\"\">choose</option> \r\n                                <option value=\"\">-----------</option> \r\n                                <option value=\"AL\">Alabama</option> \r\n                                <option value=\"AK\">Alaska</option> \r\n                                <option value=\"AZ\">Arizona</option> \r\n                                <option value=\"AR\">Arkansas</option> \r\n                                <option value=\"CA\">California</option> \r\n                                <option value=\"CO\">Colorado</option> \r\n                                <option value=\"CT\">Connecticut</option> \r\n                                <option value=\"DE\">Delaware</option> \r\n                                <option value=\"DC\">Dist. of Columbia</option> \r\n                                <option value=\"FL\">Florida</option> \r\n                                <option value=\"GA\">Georgia</option> \r\n                                <option value=\"HI\">Hawaii</option> \r\n                                <option value=\"ID\">Idaho</option> \r\n                                <option value=\"IL\">Illinois</option> \r\n                                <option value=\"IN\">Indiana</option> \r\n                                <option value=\"IA\">Iowa</option> \r\n                                <option value=\"KS\">Kansas</option> \r\n                                <option value=\"KY\">Kentucky</option> \r\n                                <option value=\"LA\">Louisiana</option> \r\n                                <option value=\"ME\">Maine</option> \r\n                                <option value=\"MD\">Maryland</option> \r\n                                <option value=\"MA\">Massachusetts</option> \r\n                                <option value=\"MI\">Michigan</option> \r\n                                <option value=\"MN\">Minnesota</option> \r\n                                <option value=\"MS\">Mississippi</option> \r\n                                <option value=\"MO\">Missouri</option> \r\n                                <option value=\"MT\">Montana</option> \r\n                                <option value=\"NE\">Nebraska</option> \r\n                                <option value=\"NV\">Nevada</option> \r\n                                <option value=\"NH\">New Hampshire</option> \r\n                                <option value=\"NJ\">New Jersey</option> \r\n                                <option value=\"NM\">New Mexico</option> \r\n                                <option value=\"NY\">New York</option> \r\n                                <option value=\"NC\">North Carolina</option> \r\n                                <option value=\"ND\">North Dakota</option> \r\n                                <option value=\"OH\">Ohio</option> \r\n                                <option value=\"OK\">Oklahoma</option> \r\n                                <option value=\"OR\">Oregon</option> \r\n                                <option value=\"PA\">Pennsylvania</option> \r\n                                <option value=\"RI\">Rhode Island</option> \r\n                                <option value=\"SC\">South Carolina</option> \r\n                                <option value=\"SD\">South Dakota</option> \r\n                                <option value=\"TN\">Tennessee</option> \r\n                                <option value=\"TX\">Texas</option> \r\n                                <option value=\"UT\">Utah</option> \r\n                                <option value=\"VT\">Vermont</option> \r\n                                <option value=\"VA\">Virginia</option> \r\n                                <option value=\"WA\">Washington</option> \r\n                                <option value=\"WV\">West Virginia</option> \r\n                                <option value=\"WI\">Wisconsin</option> \r\n                                <option value=\"WY\">Wyoming</option> \r\n                                <option value=\"AA\">APO/FPO AA</option> \r\n                                <option value=\"AE\">APO/FPO AE</option> \r\n                                <option value=\"AP\">APO/FPO AP</option> \r\n                                <option value=\"AS\">American Samoa</option> \r\n                                <option value=\"GU\">Guam</option> \r\n                                <option value=\"MP\">Northern Mariana Isls</option> \r\n                                <option value=\"PW\">Palau</option> \r\n                                <option value=\"PR\">Puerto Rico</option> \r\n                                <option value=\"VI\">US Virgin Islands</option> \r\n                        </select> \r\n                        <input class=\"required zipcode txt_postalCode\" title=\"Zip Code\" value=\"\" name=\"postal_code\" style=\"float:right;margin:0 0 3px 0;width:41px;\">\r\n\r\n                        <label style=\"float:right;line-height:18px;margin:0 4px 3px 0;font-size:11px\">Zip</label> \r\n                    </fieldset> \r\n                    <p id=\"state_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                    <p id=\"zip_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div class=\"frm_row\" style=\"position:relative; clear:both; zoom:1; width:100%;\"> \r\n                    <h4 style=\"float:left;  font-weight:normal;padding:0; margin:0\"> \r\n                    <label>E-mail</label> \r\n                    </h4> \r\n                    <fieldset style=\"border:0;padding:0; margin:0\"> \r\n                    <input style=\"float:right;margin-bottom:3px;width:338px;\" class=\"required email txt_email\" title=\"Email Address\" value=\"\" name=\"email\">\r\n\r\n                    </fieldset> \r\n                    <p id=\"email_err_6\" style=\"display:none;margin:0px;margin-bottom:3px;color:#c00;\"></p> \r\n                </div> \r\n                <div style=\"position:relative; height:48px; padding: 0 3px 10px 6px;\"> \r\n                    <a onclick=\"s_objectID=&quot;http://www.condenast.com/services/privacy/#privacypolicy_2\";return this.s_oc?this.s_oc(e):true\" style=\"height:33px;line-height:3em;display:block;position:absolute;top:0;right:30px\" target=\"_blank\" class=\"privacy\" href=\"http://www.condenast.com/services/privacy/#privacypolicy\">\r\n\r\n                    Privacy Policy \r\n                    </a> \r\n                   \r\n<a href=\"https://subscribe.bonappetit.com/subscribe/bonappetit/72438?source=EpiIntDft\" class=\"nonusa\" target=\"_blank\" style=\"height:33px;line-height:3em;display:block\" onclick=\"s_objectID=&quot;https://subscribe.bonappetit.com/subscribe/bonappetit/72438?source=EpiIntDft&amp;&quot;;return this.s_oc?this.s_oc(e):true\">\r\nOrders Outside the USA\r\n</a> \r\n                    <input type=\"submit\" style=\"position:absolute; right:0px; bottom:0px\" class=\"submit\" name=\"\" value=\"Submit\" alt=\"Submit\">\r\n\r\n                </div> \r\n                \r\n                \r\n            </form> \r\n        </div> \r\n    </div>\n\n","AMS_EPI_RECIPEDETAILS_TEXTOFFER_SLF":"<a href=\"http://subscribe.bonappetit.com//ams/amsClick?pos_id=3065&campaign_id=6284&creative_id=9703&site_id=798&top_level_section_prefix=WEB-INF&full_url=/WEB-INF/interface/templates/template_a.jsp\" target=\"_blank\" class=\"subLnk\">subscribe to SELF</a>\r\n","AMS_EPI_BNA_RECIPEDETAILS_BANNER":"<img src=\"http://subscribe.epicurious.com/circulation/shared/ads/EPI_BNA_banner_666x73.v3.jpg\" alt=\"subscribe to Bon AppÃ©tit\" /></a>\r\n\r\n\r\n"};

