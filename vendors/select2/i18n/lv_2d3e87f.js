define("vendors/select2/i18n/lv",function(){!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/lv",[],function(){function e(e,n,u,i){return 11===e?n:e%10===1?u:i}return{inputTooLong:function(n){var u=n.input.length-n.maximum,i="Lūdzu ievadiet par  "+u;return i+=" simbol"+e(u,"iem","u","iem"),i+" mazāk"},inputTooShort:function(n){var u=n.minimum-n.input.length,i="Lūdzu ievadiet vēl "+u;return i+=" simbol"+e(u,"us","u","us")},loadingMore:function(){return"Datu ielāde…"},maximumSelected:function(n){var u="Jūs varat izvēlēties ne vairāk kā "+n.maximum;return u+=" element"+e(n.maximum,"us","u","us")},noResults:function(){return"Sakritību nav"},searching:function(){return"Meklēšana…"}}}),{define:e.define,require:e.require}}()});