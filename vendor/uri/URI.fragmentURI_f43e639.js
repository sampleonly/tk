define("vendor/uri/URI.fragmentURI",function(t,r,n){!function(e,i){"use strict";"object"==typeof r?n.exports=i(t("vendor/uri/URI")):"function"==typeof define&&define.amd?define(["./URI"],i):i(e.URI)}(this,function(t){"use strict";var r=t.prototype,n=r.fragment,e=r.build;t.fragmentPrefix="!";var i=t._parts;return t._parts=function(){var r=i();return r.fragmentPrefix=t.fragmentPrefix,r},r.fragmentPrefix=function(t){return this._parts.fragmentPrefix=t,this},r.fragment=function(r,e){var i,f=this._parts.fragmentPrefix,s=this._parts.fragment||"";return r===!0?(i=s.substring(0,f.length)!==f?t(""):new t(s.substring(f.length)),this._fragmentURI=i,i._parentURI=this,i):void 0!==r&&"string"!=typeof r?(this._fragmentURI=r,r._parentURI=r,this._parts.fragment=f+r.toString(),this.build(!e),this):("string"==typeof r&&(this._fragmentURI=void 0),n.call(this,r,e))},r.build=function(t){var r=e.call(this,t);return t!==!1&&this._parentURI&&this._parentURI.fragment(this),r},t})});