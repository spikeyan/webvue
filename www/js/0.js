webpackJsonp([0],{7:function(n,e,t){"use strict";function r(n){return function(){var e=n.apply(this,arguments);return new Promise(function(n,t){function r(o,i){try{var u=e[o](i),c=u.value}catch(n){return void t(n)}if(!u.done)return Promise.resolve(c).then(function(n){r("next",n)},function(n){r("throw",n)});n(c)}return r("next")})}}function o(){return new Promise(function(n,e){setTimeout(function(){n()},3e3)})}var i=function(){var n=r(regeneratorRuntime.mark(function n(e){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(100),n.next=3,o();case 3:console.log(e),r=t(0),r(2e3);case 6:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),u=t(1),c={template:t(8),data:function(){return{hello:"hi im from controller"}},methods:{go:function(){i(this.hello)}},mounted:function(){u("div div").trigger("click")}};n.exports=c},8:function(n,e){n.exports='<div v-on:click="go">\r\n    hi im com\'s index page {{hello}}\r\n</div>'}});