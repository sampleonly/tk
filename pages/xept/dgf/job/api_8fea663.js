define("pages/xept/dgf/job/api",function(e,t,d){"use strict";var n=e("api/_xhr"),i=e("vendors/uri/URI");d.exports={remove:function(e){return n.del(i.expand("/xept/dgf/jobs/{id}",{id:e}))},update:function(e){return n.put(i.expand("/xept/dgf/jobs/{id}",{id:e.id}),e)},get:function(e){return n.get(i.expand("/xept/dgf/jobs/{id}",{id:e}))},fetch:function(e){return n.get("/xept/dgf/jobs",e)}}});