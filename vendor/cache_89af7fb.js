define("vendor/cache",function(t,e,i){!function(){function t(e,i,o){this.maxSize_=e||-1,this.debug_=i||!1,this.storage_=o||new t.BasicCacheStorage,this.fillFactor_=.75,this.stats_={},this.stats_.hits=0,this.stats_.misses=0,this.log_("Initialized cache with size "+e)}t.Priority={LOW:1,NORMAL:2,HIGH:4},t.BasicCacheStorage=function(){this.items_={},this.count_=0},t.BasicCacheStorage.prototype.get=function(t){return this.items_[t]},t.BasicCacheStorage.prototype.set=function(t,e){"undefined"==typeof this.get(t)&&this.count_++,this.items_[t]=e},t.BasicCacheStorage.prototype.size=function(){return this.count_},t.BasicCacheStorage.prototype.remove=function(t){var e=this.get(t);return"undefined"!=typeof e&&this.count_--,delete this.items_[t],e},t.BasicCacheStorage.prototype.keys=function(){var t,e=[];for(t in this.items_)e.push(t);return e},t.LocalStorageCacheStorage=function(t){this.prefix_="cache-storage."+(t||"default")+".";var e=this.prefix_.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");this.regexp_=new RegExp("^"+e)},t.LocalStorageCacheStorage.prototype.get=function(t){var e=window.localStorage[this.prefix_+t];return e?JSON.parse(e):null},t.LocalStorageCacheStorage.prototype.set=function(t,e){window.localStorage[this.prefix_+t]=JSON.stringify(e)},t.LocalStorageCacheStorage.prototype.size=function(){return this.keys().length},t.LocalStorageCacheStorage.prototype.remove=function(t){var e=this.get(t);return delete window.localStorage[this.prefix_+t],e},t.LocalStorageCacheStorage.prototype.keys=function(){var t,e=[];for(t in window.localStorage)t.match(this.regexp_)&&e.push(t.replace(this.prefix_,""));return e},t.prototype.getItem=function(t){var e=this.storage_.get(t);null!=e&&(this.isExpired_(e)?(this.removeItem(t),e=null):e.lastAccessed=(new Date).getTime());var i=e?e.value:null;return i?(this.stats_.hits++,this.log_("Cache HIT for key "+t)):(this.stats_.misses++,this.log_("Cache MISS for key "+t)),i},t._CacheItem=function(e,i,o){if(!e)throw new Error("key cannot be null or empty");this.key=e,this.value=i,o=o||{},o.expirationAbsolute&&(o.expirationAbsolute=o.expirationAbsolute.getTime()),o.priority||(o.priority=t.Priority.NORMAL),this.options=o,this.lastAccessed=(new Date).getTime()},t.prototype.setItem=function(e,i,o){if(null!=this.storage_.get(e)&&this.removeItem(e),this.addItem_(new t._CacheItem(e,i,o)),this.log_("Setting key "+e),this.maxSize_>0&&this.size()>this.maxSize_){var r=this;setTimeout(function(){r.purge_.call(r)},0)}},t.prototype.clear=function(){for(var t=this.storage_.keys(),e=0;e<t.length;e++)this.removeItem(t[e]);this.log_("Cache cleared")},t.prototype.getStats=function(){return this.stats_},t.prototype.toHtmlString=function(){for(var t=this.size()+" item(s) in cache<br /><ul>",e=this.storage_.keys(),i=0;i<e.length;i++){var o=this.storage_.get(e[i]);t=t+"<li>"+o.key.toString()+" = "+o.value.toString()+"</li>"}return t+="</ul>"},t.prototype.resize=function(t){this.log_("Resizing Cache from "+this.maxSize_+" to "+t);var e=this.maxSize_;this.maxSize_=t,t>0&&(0>e||e>t)&&this.size()>t&&this.purge_(),this.log_("Resizing done")},t.prototype.purge_=function(){var t=new Array,e=Math.round(this.maxSize_*this.fillFactor_);this.maxSize_<0&&(e=this.size()*this.fillFactor_);for(var i=this.storage_.keys(),o=0;o<i.length;o++){var r=i[o],s=this.storage_.get(r);this.isExpired_(s)?this.removeItem(r):t.push(s)}if(t.length>e)for(t=t.sort(function(t,e){return t.options.priority!=e.options.priority?e.options.priority-t.options.priority:e.lastAccessed-t.lastAccessed});t.length>e;){var n=t.pop();this.removeItem(n.key)}this.log_("Purged cached")},t.prototype.addItem_=function(t,e){try{this.storage_.set(t.key,t)}catch(i){if(e)throw this.log_("Failed setting again, giving up: "+i.toString()),i;this.log_("Error adding item, purging and trying again: "+i.toString()),this.purge_(),this.addItem_(t,!0)}},t.prototype.removeItem=function(t){var e=this.storage_.remove(t);return this.log_("removed key "+t),e&&e.options&&e.options.callback&&setTimeout(function(){e.options.callback.call(null,e.key,e.value)},0),e?e.value:null},t.prototype.removeWhere=function(t){for(var e=this.storage_.keys(),i=0;i<e.length;i++){var o=e[i],r=this.storage_.get(o);t(o,r.value)===!0&&this.removeItem(o)}},t.prototype.size=function(){return this.storage_.size()},t.prototype.isExpired_=function(t){var e=(new Date).getTime(),i=!1;if(t.options.expirationAbsolute&&t.options.expirationAbsolute<e&&(i=!0),!i&&t.options.expirationSliding){var o=t.lastAccessed+1e3*t.options.expirationSliding;e>o&&(i=!0)}return i},t.prototype.log_=function(t){this.debug_&&console.log(t)};var e=this;"undefined"!=typeof i&&i.exports?i.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):e.Cache=t}()});