function t({onlyFirst:t=!1}={}){const e=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(e,t?void 0:"g")}class e{constructor(t){this.size=void 0,this.entries=[],this.cursor=0,this.size=t}push(t){""!==t.trim()&&(t!==this.entries[this.entries.length-1]?(this.entries.push(t),this.entries.length>this.size&&this.entries.shift(),this.cursor=this.entries.length):this.cursor=this.entries.length)}rewind(){this.cursor=this.entries.length}getPrevious(){const t=Math.max(0,this.cursor-1);return this.cursor=t,this.entries[t]}getNext(){const t=Math.min(this.entries.length,this.cursor+1);return this.cursor=t,this.entries[t]}}for(var i="(?:"+["\\|\\|","\\&\\&",";;","\\|\\&","\\<\\(",">>",">\\&","[&;()|<>]"].join("|")+")",s="",r=0;r<4;r++)s+=(Math.pow(16,8)*Math.random()).toString(16);var n=function(t,e,r){var n=function(t,e,r){var n=new RegExp(["("+i+")","((\\\\['\"|&;()<> \\t]|[^\\s'\"|&;()<> \\t])+|\"((\\\\\"|[^\"])*?)\"|'((\\\\'|[^'])*?)')*"].join("|"),"g"),h=t.match(n).filter(Boolean),o=!1;return h?(e||(e={}),r||(r={}),h.map(function(t,n){if(!o){if(RegExp("^"+i+"$").test(t))return{op:t};for(var l=r.escape||"\\",a=!1,u=!1,c="",p=!1,m=0,f=t.length;m<f;m++){var d=t.charAt(m);if(p=p||!a&&("*"===d||"?"===d),u)c+=d,u=!1;else if(a)d===a?a=!1:c+="'"==a?d:d===l?'"'===(d=t.charAt(m+=1))||d===l||"$"===d?d:l+d:"$"===d?g():d;else if('"'===d||"'"===d)a=d;else{if(RegExp("^"+i+"$").test(d))return{op:t};if(RegExp("^#$").test(d))return o=!0,c.length?[c,{comment:t.slice(m+1)+h.slice(n+1).join(" ")}]:[{comment:t.slice(m+1)+h.slice(n+1).join(" ")}];d===l?u=!0:c+="$"===d?g():d}}return p?{op:"glob",pattern:c}:c}function g(){var i,r,n,h;if("{"===t.charAt(m+=1)){if("}"===t.charAt(m+=1))throw new Error("Bad substitution: "+t.substr(m-2,3));if((i=t.indexOf("}",m))<0)throw new Error("Bad substitution: "+t.substr(m));r=t.substr(m,i-m),m=i}else/[*@#?$!_\-]/.test(t.charAt(m))?(r=t.charAt(m),m+=1):(i=t.substr(m).match(/[^\w\d_]/))?(r=t.substr(m,i.index),m+=i.index-1):(r=t.substr(m),m=t.length);return n=r,void 0===(h="function"==typeof e?e(n):e[n])&&""!=n?h="":void 0===h&&(h="$"),"object"==typeof h?""+s+JSON.stringify(h)+s:""+h}}).reduce(function(t,e){return void 0===e?t:t.concat(e)},[])):[]}(t,e,r);return"function"!=typeof e?n:n.reduce(function(t,e){if("object"==typeof e)return t.concat(e);var i=e.split(RegExp("("+s+".*?"+s+")","g"));return t.concat(1===i.length?i[0]:i.filter(Boolean).map(function(t){return RegExp("^"+s).test(t)?JSON.parse(t.split(s)[1]):t}))},[])};const h=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531]],o=[[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]];let l=new Uint8Array(65536);l.fill(1),l[0]=0,l.fill(0,1,32),l.fill(0,127,160),l.fill(2,4352,4448),l[9001]=2,l[9002]=2,l.fill(2,11904,42192),l[12351]=1,l.fill(2,44032,55204),l.fill(2,63744,64256),l.fill(2,65040,65050),l.fill(2,65072,65136),l.fill(2,65280,65377),l.fill(2,65504,65511);for(let t=0;t<h.length;++t)l.fill(0,h[t][0],h[t][1]+1);function a(t,e=!0){let i;const s=[],r=/\w+/g;for(;i=r.exec(t);)s.push(e?i.index:i.index+i[0].length);return s}function u(t,e){const i=a(t,!0).reverse().find(t=>t<e);return null==i?0:i}function c(t,e,i){let s=0,r=0;for(let n=0;n<e;++n)"\n"===t.charAt(n)?(r=0,s+=1):(r+=1,r===i&&(r=0,s+=1));return{row:s,col:r}}function p(e,i){return c(e,e.replace(t(),"").length,i).row+1}function m(t){return null!=t.match(/[^\\][ \t]$/m)}function f(t){return""===t.trim()||m(t)?"":n(t).pop()||""}function d(t,e){if(t.length>=e[0].length)return t;const i=t;t+=e[0].slice(t.length,t.length+1);for(let s=0;s<e.length;s++){if(!e[s].startsWith(i))return null;if(!e[s].startsWith(t))return i}return d(t,e)}class g extends EventTarget{emitEof(){this.dispatchEvent(new Event("eof"))}emitInterrupt(){this.dispatchEvent(new Event("interrupt"))}onEof(t){this.addEventListener("eof",t)}onInterrupt(t){this.addEventListener("interrupt",t)}}class v extends g{constructor(t){var i,s,r,n;super(),this.history=void 0,this.terminal=void 0,this.disposables=[],this.enableAutocomplete=void 0,this.maxAutocompleteEntries=void 0,this.enableIncompleteInput=void 0,this.autocompleteHandlers=[],this.active=!1,this.input="",this.cursor=0,this.activePrompt=null,this.activeCharPrompt=null,this.writingPromise=null,this.remainKeys="",this.terminalSize={cols:0,rows:0},this.toSingleWidth=t=>function(t,e){let i="",s=0;for(let n=0;n<t.length;++n){const h=(r=t.charCodeAt(n))<32?0:r<127?1:r<65536?l[r]:function(t,e){let i,s=0,r=e.length-1;if(t<e[0][0]||t>e[r][1])return!1;for(;r>=s;)if(i=s+r>>1,t>e[i][1])s=i+1;else{if(!(t<e[i][0]))return!0;r=i-1}return!1}(r,o)?0:r>=131072&&r<=196605||r>=196608&&r<=262141?2:1;0!==h?(2===h?s+h>e?(i+=" ",s+=1,n--):(i+=t[n],i+=" ",s+=h):(i+=t[n],s+=h),s===e&&(s=0)):"\n"===t[n]&&(s=0)}var r;return i}(function(t){let e="",i=0;for(const s of t)if("\t"===s){const t=8-i%8;e+=" ".repeat(t),i+=t}else e+=s,i+=1,"\n"===s&&(i=0);return e}(t),this.terminal.cols),this.history=new e(null!=(i=null==t?void 0:t.historySize)?i:10),this.enableAutocomplete=null==(s=null==t?void 0:t.enableAutocomplete)||s,this.maxAutocompleteEntries=null!=(r=null==t?void 0:t.maxAutocompleteEntries)?r:100,this.enableIncompleteInput=null==(n=null==t?void 0:t.enableIncompleteInput)||n}activate(t){this.terminal=t,this.attach()}dispose(){this.detach()}addAutocompleteHandler(t,...e){this.autocompleteHandlers.push({fn:t,args:e})}removeAutocompleteHandler(t){const e=this.autocompleteHandlers.findIndex(e=>e.fn===t);-1!==e&&this.autocompleteHandlers.splice(e,1)}async read(t,e="> "){return await this.writingPromise,new Promise((i,s)=>{void 0===t?(this.terminal.select(0,this.terminal.buffer.active.cursorY,this.terminal.buffer.active.cursorX),t=this.terminal.getSelection(),this.terminal.clearSelection()):this.terminal.write(t),this.activePrompt={prompt:t,continuationPrompt:e,resolve:i,reject:s},this.input="",this.cursor=0,this.active=!0,this.remainKeys.length>0&&this.handleTermData(this.remainKeys)})}readChar(t){return new Promise((e,i)=>{this.terminal.write(t),this.activeCharPrompt={prompt:t,resolve:e,reject:i}})}abortRead(t="aborted"){null==this.activePrompt&&null==this.activeCharPrompt||this.terminal.write("\r\n"),null!=this.activePrompt&&(this.activePrompt.reject(t),this.activePrompt=null),null!=this.activeCharPrompt&&(this.activeCharPrompt.reject(t),this.activeCharPrompt=null),this.active=!1}async println(t){return this.print(t+"\n")}async print(t){const e=t.replace(/[\r\n]+/g,"\n");return this.writingPromise=this.internalWrite(e.replace(/\n/g,"\r\n")),this.writingPromise}printWide(t,e=2){if(0==t.length)return this.println("");const i=t.reduce((t,e)=>Math.max(t,e.length),0)+e,s=Math.floor(this.terminalSize.cols/i),r=Math.ceil(t.length/s);let n=0;for(let e=0;e<r;++e){let e="";for(let r=0;r<s;++r)if(n<t.length){let s=t[n++];s+=" ".repeat(i-s.length),e+=s}this.println(e)}}attach(){this.terminal&&(this.disposables.push(this.terminal.onData(t=>this.handleTermData(t))),this.disposables.push(this.terminal.onResize(t=>this.handleTermResize(t))),this.terminalSize={cols:this.terminal.cols,rows:this.terminal.rows})}detach(){this.disposables.forEach(t=>t.dispose()),this.disposables=[]}async internalWrite(t){return new Promise(e=>{this.terminal.write(t,e)})}applyPrompts(t){return((this.activePrompt||{}).prompt||"")+t.replace(/\n/g,"\n"+((this.activePrompt||{}).continuationPrompt||""))}applyPromptOffset(e,i){return this.applyPrompts(e.substring(0,i)).replace(t(),"").length}clearInput(){const t=this.applyPrompts(this.input),e=p(t,this.terminalSize.cols),i=this.applyPromptOffset(this.input,this.cursor),{row:s}=c(t,i,this.terminalSize.cols),r=e-s-1;for(let t=r;t<0;++t)this.terminal.write("[2K[F");for(let t=0;t<r;++t)this.terminal.write("[E");this.terminal.write("\r[K");for(let t=1;t<e;++t)this.terminal.write("[F[K")}setInput(t,e=!0){e&&this.clearInput();const i=this.applyPrompts(t);this.print(i),this.cursor>t.length&&(this.cursor=t.length);const s=this.applyPromptOffset(t,this.cursor),r=p(i,this.terminalSize.cols),{col:n,row:h}=c(i,s,this.terminalSize.cols),o=r-h-1;0!==h&&0===n&&this.terminal.write("[E"),this.terminal.write("\r");for(let t=0;t<o;++t)this.terminal.write("[F");for(let t=0;t<n;++t)this.terminal.write("[C");this.input=t}printAndRestartPrompt(t){const e=this.cursor;this.setCursor(this.input.length),this.terminal.write("\r\n");const i=()=>{this.cursor=e,this.setInput(this.input)},s=t();null==s?i():s.then(i)}setCursor(t){t<0&&(t=0),t>this.input.length&&(t=this.input.length);const e=this.applyPrompts(this.input),i=this.applyPromptOffset(this.input,this.cursor),{col:s,row:r}=c(e,i,this.terminalSize.cols),n=this.applyPromptOffset(this.input,t),{col:h,row:o}=c(e,n,this.terminalSize.cols);if(o>r)for(let t=r;t<o;++t)this.terminal.write("[B");else for(let t=o;t<r;++t)this.terminal.write("[A");if(h>s)for(let t=s;t<h;++t)this.terminal.write("[C");else for(let t=h;t<s;++t)this.terminal.write("[D");this.cursor=t}handleCursorMove(t){if(t>0){const e=Math.min(t,this.input.length-this.cursor);this.setCursor(this.cursor+e)}else if(t<0){const e=Math.max(t,-this.cursor);this.setCursor(this.cursor+e)}}handleCursorErase(t){if(t){if(this.cursor<=0)return;const t=this.input.substring(0,this.cursor-1)+this.input.substring(this.cursor);this.clearInput(),this.cursor-=1,this.setInput(t,!1)}else{const t=this.input.substring(0,this.cursor)+this.input.substring(this.cursor+1);this.setInput(t)}}handleCursorInsert(t){const e=this.input.substring(0,this.cursor)+t+this.input.substring(this.cursor);this.cursor+=t.length,this.setInput(e)}async handleReadComplete(){this.history&&this.history.push(this.input),await this.internalWrite("\r\n"),this.activePrompt&&(this.activePrompt.resolve(this.input),this.activePrompt=null),this.active=!1}handleTermResize(t){const{rows:e,cols:i}=t;this.clearInput(),this.terminalSize={cols:i,rows:e},this.setInput(this.input,!1)}handleTermData(t){if(this.active&&0!==t.length){if(null!=this.activeCharPrompt)return this.activeCharPrompt.resolve(t),this.activeCharPrompt=null,void this.terminal.write("\r\n");if(t.length>3&&27!==t.charCodeAt(0)){for(let e=0;e<t.length;e++)if(this.handleData(t[e]),"\r"===t[e]){this.remainKeys=t.substring(e+1);break}}else this.handleData(t),this.remainKeys=""}}handleData(t){if(!this.active)return;const e=t.charCodeAt(0);let i;if(27==e)switch(t.substring(1)){case"[A":if(this.history){const t=this.history.getPrevious();t&&(this.setInput(t),this.setCursor(t.length))}break;case"[B":if(this.history){let t=this.history.getNext();t||(t=""),this.setInput(t),this.setCursor(t.length)}break;case"[D":this.handleCursorMove(-1);break;case"[C":this.handleCursorMove(1);break;case"[3~":this.handleCursorErase(!1);break;case"[F":this.setCursor(this.input.length);break;case"[H":this.setCursor(0);break;case"b":i=u(this.input,this.cursor),null!=i&&this.setCursor(i);break;case"f":i=function(t,e){const i=a(t,!1).find(t=>t>e);return null==i?t.length:i}(this.input,this.cursor),null!=i&&this.setCursor(i);break;case"":i=u(this.input,this.cursor),null!=i&&(this.setInput(this.input.substring(0,i)+this.input.substring(this.cursor)),this.setCursor(i))}else if(e<32||127===e)switch(t){case"\r":this.enableIncompleteInput&&""!=(s=this.input).trim()&&((s.match(/'/g)||[]).length%2!=0||(s.match(/"/g)||[]).length%2!=0||""==(null==(r=s.split(/(\|\||\||&&)/g).pop())?void 0:r.trim())||s.endsWith("\\")&&!s.endsWith("\\\\"))?this.handleCursorInsert("\n"):this.handleReadComplete();break;case"":this.handleCursorErase(!0);break;case"\t":if(this.enableAutocomplete){if(this.autocompleteHandlers.length>0){const t=this.input.substring(0,this.cursor),e=m(t),i=function(t,e){const i=n(e);let s=i.length-1,r=i[s]||"";return""===e.trim()?(s=0,r=""):m(e)&&(s+=1,r=""),t.reduce((t,{fn:e,args:r})=>{try{return t.concat(e(s,i,...r))}catch(e){return console.error("Auto-complete error:",e),t}},[]).filter(t=>t.startsWith(r))}(this.autocompleteHandlers,t);if(i.sort(),0===i.length)e||this.handleCursorInsert(" ");else if(1===i.length){const e=f(t);this.handleCursorInsert(i[0].substring(e.length)+" ")}else if(i.length<=this.maxAutocompleteEntries){const e=d(t,i);if(e){const i=f(t);this.handleCursorInsert(e.substring(i.length))}this.printAndRestartPrompt(()=>{this.printWide(i)})}else this.printAndRestartPrompt(()=>this.readChar(`Display all ${i.length} possibilities? (y or n)`).then(t=>{"y"!=t&&"Y"!=t||this.printWide(i)}))}}else this.handleCursorInsert("\t");break;case"":this.setCursor(this.input.length),this.terminal.write("^C\r\n"+((this.activePrompt||{}).prompt||"")),this.input="",this.cursor=0,this.history&&this.history.rewind(),this.emitInterrupt();break;case"":this.setCursor(this.input.length),this.terminal.write("^D\r\n"+((this.activePrompt||{}).prompt||"")),this.input="",this.cursor=0,this.history&&this.history.rewind(),this.abortRead(),this.emitEof()}else this.handleCursorInsert(t);var s,r}}export{v as LocalEchoAddon};
//# sourceMappingURL=index.modern.js.map
