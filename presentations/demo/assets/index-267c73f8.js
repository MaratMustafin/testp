(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="153",oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hl=0,Fs=1,fl=2,yo=1,pl=2,vn=3,On=0,Ct=1,_n=2,In=0,Ci=1,ks=2,Os=3,zs=4,ml=5,Ti=100,gl=101,vl=102,Bs=103,Hs=104,_l=200,xl=201,yl=202,Sl=203,So=204,Eo=205,El=206,Ml=207,bl=208,Tl=209,Al=210,wl=0,Rl=1,Cl=2,xs=3,Ll=4,Pl=5,Dl=6,Ul=7,Mo=0,Il=1,Nl=2,yn=0,Fl=1,kl=2,Ol=3,zl=4,Bl=5,bo=300,Di=301,Ui=302,ys=303,Ss=304,Ur=306,Es=1e3,Jt=1001,Ms=1002,wt=1003,Gs=1004,Or=1005,Ht=1006,Hl=1007,qi=1008,Nn=1009,Gl=1010,Vl=1011,Us=1012,To=1013,Pn=1014,Dn=1015,Yi=1016,Ao=1017,wo=1018,jn=1020,Wl=1021,Qt=1023,Xl=1024,ql=1025,Kn=1026,Ii=1027,Yl=1028,Ro=1029,$l=1030,Co=1031,Lo=1033,zr=33776,Br=33777,Hr=33778,Gr=33779,Vs=35840,Ws=35841,Xs=35842,qs=35843,jl=36196,Ys=37492,$s=37496,js=37808,Ks=37809,Zs=37810,Js=37811,Qs=37812,ea=37813,ta=37814,na=37815,ia=37816,ra=37817,sa=37818,aa=37819,oa=37820,la=37821,Vr=36492,Kl=36283,ca=36284,ua=36285,da=36286,Po=3e3,Zn=3001,Zl=3200,Jl=3201,Ql=0,ec=1,Jn="",He="srgb",on="srgb-linear",Do="display-p3",Wr=7680,tc=519,nc=512,ic=513,rc=514,sc=515,ac=516,oc=517,lc=518,cc=519,ha=35044,fa="300 es",bs=1035,xn=2e3,Cr=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,Ts=180/Math.PI;function $i(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function uc(r,e){return(r%e+e)%e}function qr(r,e,t){return(1-t)*r+t*e}function pa(r){return(r&r-1)===0&&r!==0}function As(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],g=n[5],p=n[8],v=i[0],m=i[3],f=i[6],M=i[1],_=i[4],y=i[7],E=i[2],A=i[5],D=i[8];return s[0]=a*v+o*M+l*E,s[3]=a*m+o*_+l*A,s[6]=a*f+o*y+l*D,s[1]=c*v+d*M+u*E,s[4]=c*m+d*_+u*A,s[7]=c*f+d*y+u*D,s[2]=h*v+g*M+p*E,s[5]=h*m+g*_+p*A,s[8]=h*f+g*y+p*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*s,g=c*s-a*l,p=t*u+n*h+i*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-d*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(d*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=g*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Xe;function Uo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const ma={};function Xi(r){r in ma||(ma[r]=!0,console.warn(r))}function Li(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const dc=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hc=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function fc(r){return r.convertSRGBToLinear().applyMatrix3(hc)}function pc(r){return r.applyMatrix3(dc).convertLinearToSRGB()}const mc={[on]:r=>r,[He]:r=>r.convertSRGBToLinear(),[Do]:fc},gc={[on]:r=>r,[He]:r=>r.convertLinearToSRGB(),[Do]:pc},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return on},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=mc[e],i=gc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let ci;class Io{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=Lr("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vc=0;class No{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jr(i[a].image)):s.push(jr(i[a]))}else s=jr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Io.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class Ft extends ni{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Jt,i=Jt,s=Ht,a=qi,o=Qt,l=Nn,c=Ft.DEFAULT_ANISOTROPY,d=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=$i(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Zn?He:Jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Zn:Po}set encoding(e){Xi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?He:Jn}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=bo;Ft.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],g=l[5],p=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(g+1)/2,E=(f+1)/2,A=(d+h)/4,D=(u+v)/4,U=(p+m)/4;return _>y&&_>E?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=D/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=U/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=D/s,i=U/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-v)/M,this.z=(h-d)/M,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qn extends ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Xi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?He:Jn),this.texture=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new No(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fo extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=s[a+0],g=s[a+1],p=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=g,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==h||c!==g||d!==p){let m=1-o;const f=l*h+c*g+d*p+u*v,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const E=Math.sqrt(_),A=Math.atan2(E,f*M);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const y=o*M;if(l=l*m+h*y,c=c*m+g*y,d=d*m+p*y,u=u*m+v*y,m===1-o){const E=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=E,c*=E,d*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=s[a],h=s[a+1],g=s[a+2],p=s[a+3];return e[t]=o*p+d*u+l*g-c*h,e[t+1]=l*p+d*h+c*u-o*g,e[t+2]=c*p+d*g+o*h-l*u,e[t+3]=d*p-o*u-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),u=o(s/2),h=l(n/2),g=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*g*p,this._y=c*g*u-h*d*p,this._z=c*d*p+h*g*u,this._w=c*d*u-h*g*p;break;case"YXZ":this._x=h*d*u+c*g*p,this._y=c*g*u-h*d*p,this._z=c*d*p-h*g*u,this._w=c*d*u+h*g*p;break;case"ZXY":this._x=h*d*u-c*g*p,this._y=c*g*u+h*d*p,this._z=c*d*p+h*g*u,this._w=c*d*u-h*g*p;break;case"ZYX":this._x=h*d*u-c*g*p,this._y=c*g*u+h*d*p,this._z=c*d*p-h*g*u,this._w=c*d*u+h*g*p;break;case"YZX":this._x=h*d*u+c*g*p,this._y=c*g*u+h*d*p,this._z=c*d*p-h*g*u,this._w=c*d*u-h*g*p;break;case"XZY":this._x=h*d*u-c*g*p,this._y=c*g*u-h*d*p,this._z=c*d*p+h*g*u,this._w=c*d*u+h*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(a-i)*g}else if(n>o&&n>u){const g=2*Math.sqrt(1+n-o-u);this._w=(d-l)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(s+c)/g}else if(o>u){const g=2*Math.sqrt(1+o-n-u);this._w=(s-c)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+u-n-o);this._w=(a-i)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,d=l*n+o*t-s*i,u=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+d*-o-u*-a,this.y=d*l+h*-a+u*-s-c*-o,this.z=u*l+h*-o+c*-a-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new z,ga=new ei;class ji{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ui.copy(e.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)dn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(dn)}else i.boundingBox===null&&i.computeBoundingBox(),ui.copy(i.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ir.subVectors(this.max,Bi),di.subVectors(e.a,Bi),hi.subVectors(e.b,Bi),fi.subVectors(e.c,Bi),Tn.subVectors(hi,di),An.subVectors(fi,hi),Bn.subVectors(di,fi);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Bn.z,Bn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Bn.z,0,-Bn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Bn.y,Bn.x,0];return!Zr(t,di,hi,fi,ir)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,di,hi,fi,ir))?!1:(rr.crossVectors(Tn,An),t=[rr.x,rr.y,rr.z],Zr(t,di,hi,fi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new z,new z,new z,new z,new z,new z,new z,new z],dn=new z,ui=new ji,di=new z,hi=new z,fi=new z,Tn=new z,An=new z,Bn=new z,Bi=new z,ir=new z,rr=new z,Hn=new z;function Zr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Hn.fromArray(r,s);const o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),d=n.dot(Hn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const yc=new ji,Hi=new z,Jr=new z;class Ir{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(Jr)),this.expandByPoint(Hi.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new z,Qr=new z,sr=new z,wn=new z,es=new z,ar=new z,ts=new z;class ko{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qr.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sr),o=wn.dot(this.direction),l=-wn.dot(sr),c=wn.lengthSq(),d=Math.abs(1-a*a);let u,h,g,p;if(d>0)if(u=a*l-o,h=a*o-l,p=s*d,u>=0)if(h>=-p)if(h<=p){const v=1/d;u*=v,h*=v,g=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),g=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),g=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),g=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),g=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),g=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qr).addScaledVector(sr,h),g}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,i,s){es.subVectors(t,e),ar.subVectors(n,e),ts.crossVectors(es,ar);let a=this.direction.dot(ts),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(ar.crossVectors(wn,ar));if(l<0)return null;const c=o*this.direction.dot(es.cross(wn));if(c<0||l+c>a)return null;const d=-o*wn.dot(ts);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,i,s,a,o,l,c,d,u,h,g,p,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,u,h,g,p,v,m)}set(e,t,n,i,s,a,o,l,c,d,u,h,g,p,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=g,f[7]=p,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,g=a*u,p=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=g+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+g*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,g=l*u,p=c*d,v=c*u;t[0]=h+v*o,t[4]=p*o-g,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=g*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,g=l*u,p=c*d,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=p+g*o,t[1]=g+p*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,g=a*u,p=o*d,v=o*u;t[0]=l*d,t[4]=p*c-g,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=g*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*c,p=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=p*u+g,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=g*u+p,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,g=a*c,p=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=g*u-p,t[2]=p*u-g,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sc,e,Ec)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Rn.crossVectors(n,It),Rn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Rn.crossVectors(n,It)),Rn.normalize(),or.crossVectors(It,Rn),i[0]=Rn.x,i[4]=or.x,i[8]=It.x,i[1]=Rn.y,i[5]=or.y,i[9]=It.y,i[2]=Rn.z,i[6]=or.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],g=n[13],p=n[2],v=n[6],m=n[10],f=n[14],M=n[3],_=n[7],y=n[11],E=n[15],A=i[0],D=i[4],U=i[8],x=i[12],T=i[1],W=i[5],Z=i[9],R=i[13],N=i[2],H=i[6],J=i[10],X=i[14],$=i[3],ee=i[7],K=i[11],Se=i[15];return s[0]=a*A+o*T+l*N+c*$,s[4]=a*D+o*W+l*H+c*ee,s[8]=a*U+o*Z+l*J+c*K,s[12]=a*x+o*R+l*X+c*Se,s[1]=d*A+u*T+h*N+g*$,s[5]=d*D+u*W+h*H+g*ee,s[9]=d*U+u*Z+h*J+g*K,s[13]=d*x+u*R+h*X+g*Se,s[2]=p*A+v*T+m*N+f*$,s[6]=p*D+v*W+m*H+f*ee,s[10]=p*U+v*Z+m*J+f*K,s[14]=p*x+v*R+m*X+f*Se,s[3]=M*A+_*T+y*N+E*$,s[7]=M*D+_*W+y*H+E*ee,s[11]=M*U+_*Z+y*J+E*K,s[15]=M*x+_*R+y*X+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],g=e[14],p=e[3],v=e[7],m=e[11],f=e[15];return p*(+s*l*u-i*c*u-s*o*h+n*c*h+i*o*g-n*l*g)+v*(+t*l*g-t*c*h+s*a*h-i*a*g+i*c*d-s*l*d)+m*(+t*c*u-t*o*g-s*a*u+n*a*g+s*o*d-n*c*d)+f*(-i*o*d-t*l*u+t*o*h+i*a*u-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],g=e[11],p=e[12],v=e[13],m=e[14],f=e[15],M=u*m*c-v*h*c+v*l*g-o*m*g-u*l*f+o*h*f,_=p*h*c-d*m*c-p*l*g+a*m*g+d*l*f-a*h*f,y=d*v*c-p*u*c+p*o*g-a*v*g-d*o*f+a*u*f,E=p*u*l-d*v*l-p*o*h+a*v*h+d*o*m-a*u*m,A=t*M+n*_+i*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=M*D,e[1]=(v*h*s-u*m*s-v*i*g+n*m*g+u*i*f-n*h*f)*D,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*f+n*l*f)*D,e[3]=(u*l*s-o*h*s-u*i*c+n*h*c+o*i*g-n*l*g)*D,e[4]=_*D,e[5]=(d*m*s-p*h*s+p*i*g-t*m*g-d*i*f+t*h*f)*D,e[6]=(p*l*s-a*m*s-p*i*c+t*m*c+a*i*f-t*l*f)*D,e[7]=(a*h*s-d*l*s+d*i*c-t*h*c-a*i*g+t*l*g)*D,e[8]=y*D,e[9]=(p*u*s-d*v*s-p*n*g+t*v*g+d*n*f-t*u*f)*D,e[10]=(a*v*s-p*o*s+p*n*c-t*v*c-a*n*f+t*o*f)*D,e[11]=(d*o*s-a*u*s-d*n*c+t*u*c+a*n*g-t*o*g)*D,e[12]=E*D,e[13]=(d*v*i-p*u*i+p*n*h-t*v*h-d*n*m+t*u*m)*D,e[14]=(p*o*i-a*v*i-p*n*l+t*v*l+a*n*m-t*o*m)*D,e[15]=(a*u*i-d*o*i+d*n*l-t*u*l-a*n*h+t*o*h)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,u=o+o,h=s*c,g=s*d,p=s*u,v=a*d,m=a*u,f=o*u,M=l*c,_=l*d,y=l*u,E=n.x,A=n.y,D=n.z;return i[0]=(1-(v+f))*E,i[1]=(g+y)*E,i[2]=(p-_)*E,i[3]=0,i[4]=(g-y)*A,i[5]=(1-(h+f))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(p+_)*D,i[9]=(m-M)*D,i[10]=(1-(h+v))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=pi.set(i[0],i[1],i[2]).length();const a=pi.set(i[4],i[5],i[6]).length(),o=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const c=1/s,d=1/a,u=1/o;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=d,$t.elements[5]*=d,$t.elements[6]*=d,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=xn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let g,p;if(o===xn)g=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Cr)g=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=xn){const l=this.elements,c=1/(t-e),d=1/(n-i),u=1/(a-s),h=(t+e)*c,g=(n+i)*d;let p,v;if(o===xn)p=(a+s)*u,v=-2*u;else if(o===Cr)p=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new z,$t=new yt,Sc=new z(0,0,0),Ec=new z(1,1,1),Rn=new z,or=new z,It=new z,va=new yt,_a=new ei;class Nr{constructor(e=0,t=0,n=0,i=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class Oo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mc=0;const xa=new z,mi=new ei,fn=new yt,lr=new z,Gi=new z,bc=new z,Tc=new ei,ya=new z(1,0,0),Sa=new z(0,1,0),Ea=new z(0,0,1),Ac={type:"added"},Ma={type:"removed"};class Lt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new z,t=new Nr,n=new ei,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new Xe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return xa.copy(e).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Gi,lr,this.up):fn.lookAt(lr,Gi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(fn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ac)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ma)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ma)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),g=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new z,pn=new z,ns=new z,mn=new z,gi=new z,vi=new z,ba=new z,is=new z,rs=new z,ss=new z;let cr=!1;class Zt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),pn.subVectors(n,t),ns.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(pn),l=jt.dot(ns),c=pn.dot(pn),d=pn.dot(ns),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const h=1/u,g=(c*l-o*d)*h,p=(a*d-o*l)*h;return s.set(1-g-p,p,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,s,a,o,l){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,mn),l.setScalar(0),l.addScaledVector(s,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),pn.subVectors(e,t),jt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return cr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cr=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;gi.subVectors(i,n),vi.subVectors(s,n),is.subVectors(e,n);const l=gi.dot(is),c=vi.dot(is);if(l<=0&&c<=0)return t.copy(n);rs.subVectors(e,i);const d=gi.dot(rs),u=vi.dot(rs);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(gi,a);ss.subVectors(e,s);const g=gi.dot(ss),p=vi.dot(ss);if(p>=0&&g<=p)return t.copy(s);const v=g*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(vi,o);const m=d*p-g*u;if(m<=0&&u-d>=0&&g-p>=0)return ba.subVectors(s,i),o=(u-d)/(u-d+(g-p)),t.copy(i).addScaledVector(ba,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(n).addScaledVector(gi,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wc=0;class Ki extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Ci,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=So,this.blendDst=Eo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={h:0,s:0,l:0},ur={h:0,s:0,l:0};function as(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Yt.workingColorSpace){if(e=uc(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=as(a,s,e+1/3),this.g=as(a,s,e),this.b=as(a,s,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,t=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return Yt.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Rt(Mt.r*255,0,255))*65536+Math.round(Rt(Mt.g*255,0,255))*256+Math.round(Rt(Mt.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,i=Mt.g,s=Mt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=He){Yt.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,i=Mt.b;return e!==He?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Kt),Kt.h+=e,Kt.s+=t,Kt.l+=n,this.setHSL(Kt.h,Kt.s,Kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kt),e.getHSL(ur);const n=qr(Kt.h,ur.h,t),i=qr(Kt.s,ur.s,t),s=qr(Kt.l,ur.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new et;et.NAMES=zo;class Bo extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new z,dr=new qe;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ha,this.updateRange={offset:0,count:-1},this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=nr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=nr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=nr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=nr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ho extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rc extends nn{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Go extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cc=0;const Bt=new yt,os=new Lt,_i=new z,Nt=new ji,Vi=new ji,_t=new z;class Sn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?Go:Ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new en(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Nt.min,Vi.min),Nt.expandByPoint(_t),_t.addVectors(Nt.max,Vi.max),Nt.expandByPoint(_t)):(Nt.expandByPoint(Vi.min),Nt.expandByPoint(Vi.max))}Nt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)_t.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(e,c),_t.add(_i)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<o;T++)c[T]=new z,d[T]=new z;const u=new z,h=new z,g=new z,p=new qe,v=new qe,m=new qe,f=new z,M=new z;function _(T,W,Z){u.fromArray(i,T*3),h.fromArray(i,W*3),g.fromArray(i,Z*3),p.fromArray(a,T*2),v.fromArray(a,W*2),m.fromArray(a,Z*2),h.sub(u),g.sub(u),v.sub(p),m.sub(p);const R=1/(v.x*m.y-m.x*v.y);isFinite(R)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(g,-v.y).multiplyScalar(R),M.copy(g).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(R),c[T].add(f),c[W].add(f),c[Z].add(f),d[T].add(M),d[W].add(M),d[Z].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,W=y.length;T<W;++T){const Z=y[T],R=Z.start,N=Z.count;for(let H=R,J=R+N;H<J;H+=3)_(n[H+0],n[H+1],n[H+2])}const E=new z,A=new z,D=new z,U=new z;function x(T){D.fromArray(s,T*3),U.copy(D);const W=c[T];E.copy(W),E.sub(D.multiplyScalar(D.dot(W))).normalize(),A.crossVectors(U,W);const R=A.dot(d[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=R}for(let T=0,W=y.length;T<W;++T){const Z=y[T],R=Z.start,N=Z.count;for(let H=R,J=R+N;H<J;H+=3)x(n[H+0]),x(n[H+1]),x(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,g=n.count;h<g;h++)n.setXYZ(h,0,0,0);const i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,d=new z,u=new z;if(e)for(let h=0,g=e.count;h<g;h+=3){const p=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let g=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*d;for(let f=0;f<d;f++)h[p++]=c[g++]}return new nn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Sn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],g=e(h,n);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const g=c[u];d.push(g.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,g=u.length;h<g;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new yt,Gn=new ko,hr=new Ir,Aa=new z,xi=new z,yi=new z,Si=new z,ls=new z,fr=new z,pr=new qe,mr=new qe,gr=new qe,wa=new z,Ra=new z,Ca=new z,vr=new z,_r=new z;class Un extends Lt{constructor(e=new Sn,t=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(ls.fromBufferAttribute(u,e),a?fr.addScaledVector(ls,d):fr.addScaledVector(ls.sub(t),d))}t.add(fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(hr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(hr,Aa)===null||Gn.origin.distanceToSquared(Aa)>(e.far-e.near)**2))&&(Ta.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const m=h[p],f=a[m.materialIndex],M=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=M,E=_;y<E;y+=3){const A=o.getX(y),D=o.getX(y+1),U=o.getX(y+2);i=xr(this,f,e,n,c,d,u,A,D,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let m=p,f=v;m<f;m+=3){const M=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);i=xr(this,a,e,n,c,d,u,M,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const m=h[p],f=a[m.materialIndex],M=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let y=M,E=_;y<E;y+=3){const A=y,D=y+1,U=y+2;i=xr(this,f,e,n,c,d,u,A,D,U),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=p,f=v;m<f;m+=3){const M=m,_=m+1,y=m+2;i=xr(this,a,e,n,c,d,u,M,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lc(r,e,t,n,i,s,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===On,o),l===null)return null;_r.copy(o),_r.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_r);return c<t.near||c>t.far?null:{distance:c,point:_r.clone(),object:r}}function xr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,xi),r.getVertexPosition(l,yi),r.getVertexPosition(c,Si);const d=Lc(r,e,t,n,xi,yi,Si,vr);if(d){i&&(pr.fromBufferAttribute(i,o),mr.fromBufferAttribute(i,l),gr.fromBufferAttribute(i,c),d.uv=Zt.getInterpolation(vr,xi,yi,Si,pr,mr,gr,new qe)),s&&(pr.fromBufferAttribute(s,o),mr.fromBufferAttribute(s,l),gr.fromBufferAttribute(s,c),d.uv1=Zt.getInterpolation(vr,xi,yi,Si,pr,mr,gr,new qe),d.uv2=d.uv1),a&&(wa.fromBufferAttribute(a,o),Ra.fromBufferAttribute(a,l),Ca.fromBufferAttribute(a,c),d.normal=Zt.getInterpolation(vr,xi,yi,Si,wa,Ra,Ca,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new z,materialIndex:0};Zt.getNormal(xi,yi,Si,u.normal),d.face=u}return d}class Zi extends Sn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,g=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(u,2));function p(v,m,f,M,_,y,E,A,D,U,x){const T=y/D,W=E/U,Z=y/2,R=E/2,N=A/2,H=D+1,J=U+1;let X=0,$=0;const ee=new z;for(let K=0;K<J;K++){const Se=K*W-R;for(let B=0;B<H;B++){const ne=B*T-Z;ee[v]=ne*M,ee[m]=Se*_,ee[f]=N,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[f]=A>0?1:-1,d.push(ee.x,ee.y,ee.z),u.push(B/D),u.push(1-K/U),X+=1}}for(let K=0;K<U;K++)for(let Se=0;Se<D;Se++){const B=h+Se+H*K,ne=h+Se+H*(K+1),re=h+(Se+1)+H*(K+1),he=h+(Se+1)+H*K;l.push(B,ne,he),l.push(ne,re,he),$+=6}o.addGroup(g,$,x),g+=$,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(r){const e={};for(let t=0;t<r.length;t++){const n=Ni(r[t]);for(const i in n)e[i]=n[i]}return e}function Pc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vo(r){return r.getRenderTarget()===null?r.outputColorSpace:on}const Dc={clone:Ni,merge:At};var Uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ic=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uc,this.fragmentShader=Ic,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wo extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Mi=1;class Nc extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Gt(Ei,Mi,e,t);i.layers=this.layers,this.add(i);const s=new Gt(Ei,Mi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Ei,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Ei,Mi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ei,Mi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Ei,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,d=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=u,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Xo extends Ft{constructor(e,t,n,i,s,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fc extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Xi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?He:Jn),this.texture=new Xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zi(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:In});s.uniforms.tEquirect.value=t;const a=new Un(i,s),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=Ht),new Nc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const cs=new z,kc=new z,Oc=new Xe;class Xn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cs.subVectors(n,t).cross(kc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oc.getNormalMatrix(e),i=this.coplanarPoint(cs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ir,yr=new z;class qo{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],u=i[6],h=i[7],g=i[8],p=i[9],v=i[10],m=i[11],f=i[12],M=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,h-c,m-g,y-f).normalize(),n[1].setComponents(l+s,h+c,m+g,y+f).normalize(),n[2].setComponents(l+a,h+d,m+p,y+M).normalize(),n[3].setComponents(l-a,h-d,m-p,y-M).normalize(),n[4].setComponents(l-o,h-u,m-v,y-_).normalize(),t===xn)n[5].setComponents(l+o,h+u,m+v,y+_).normalize();else if(t===Cr)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(yr.x=i.normal.x>0?e.max.x:e.min.x,yr.y=i.normal.y>0?e.max.y:e.min.y,yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yo(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const u=c.array,h=c.usage,g=r.createBuffer();r.bindBuffer(d,g),r.bufferData(d,u,h),c.onUploadCallback();let p;if(u instanceof Float32Array)p=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=r.SHORT;else if(u instanceof Uint32Array)p=r.UNSIGNED_INT;else if(u instanceof Int32Array)p=r.INT;else if(u instanceof Int8Array)p=r.BYTE;else if(u instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,u){const h=d.array,g=d.updateRange;r.bindBuffer(u,c),g.count===-1?r.bufferSubData(u,0,h):(t?r.bufferSubData(u,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):r.bufferSubData(u,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,d)):u.version<c.version&&(s(u.buffer,c,d),u.version=c.version)}return{get:a,remove:o,update:l}}class Is extends Sn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,u=e/o,h=t/l,g=[],p=[],v=[],m=[];for(let f=0;f<d;f++){const M=f*h-a;for(let _=0;_<c;_++){const y=_*u-s;p.push(y,-M,0),v.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){const _=M+c*f,y=M+c*(f+1),E=M+1+c*(f+1),A=M+1+c*f;g.push(_,y,A),g.push(y,E,A)}this.setIndex(g),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qc="vec3 transformed = vec3( position );",Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$c=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Nu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vu=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ju=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ud=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,th=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ih=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ah=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ch=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,We={alphamap_fragment:Bc,alphamap_pars_fragment:Hc,alphatest_fragment:Gc,alphatest_pars_fragment:Vc,aomap_fragment:Wc,aomap_pars_fragment:Xc,begin_vertex:qc,beginnormal_vertex:Yc,bsdfs:$c,iridescence_fragment:jc,bumpmap_pars_fragment:Kc,clipping_planes_fragment:Zc,clipping_planes_pars_fragment:Jc,clipping_planes_pars_vertex:Qc,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:ru,common:su,cube_uv_reflection_fragment:au,defaultnormal_vertex:ou,displacementmap_pars_vertex:lu,displacementmap_vertex:cu,emissivemap_fragment:uu,emissivemap_pars_fragment:du,encodings_fragment:hu,encodings_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:vu,envmap_physical_pars_fragment:Cu,envmap_vertex:_u,fog_vertex:xu,fog_pars_vertex:yu,fog_fragment:Su,fog_pars_fragment:Eu,gradientmap_pars_fragment:Mu,lightmap_fragment:bu,lightmap_pars_fragment:Tu,lights_lambert_fragment:Au,lights_lambert_pars_fragment:wu,lights_pars_begin:Ru,lights_toon_fragment:Lu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Du,lights_phong_pars_fragment:Uu,lights_physical_fragment:Iu,lights_physical_pars_fragment:Nu,lights_fragment_begin:Fu,lights_fragment_maps:ku,lights_fragment_end:Ou,logdepthbuf_fragment:zu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Hu,logdepthbuf_vertex:Gu,map_fragment:Vu,map_pars_fragment:Wu,map_particle_fragment:Xu,map_particle_pars_fragment:qu,metalnessmap_fragment:Yu,metalnessmap_pars_fragment:$u,morphcolor_vertex:ju,morphnormal_vertex:Ku,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:rd,clearcoat_normal_fragment_begin:sd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:od,iridescence_pars_fragment:ld,output_fragment:cd,packing:ud,premultiplied_alpha_fragment:dd,project_vertex:hd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:_d,shadowmap_vertex:xd,shadowmask_pars_fragment:yd,skinbase_vertex:Sd,skinning_pars_vertex:Ed,skinning_vertex:Md,skinnormal_vertex:bd,specularmap_fragment:Td,specularmap_pars_fragment:Ad,tonemapping_fragment:wd,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Ld,uv_pars_fragment:Pd,uv_pars_vertex:Dd,uv_vertex:Ud,worldpos_vertex:Id,background_vert:Nd,background_frag:Fd,backgroundCube_vert:kd,backgroundCube_frag:Od,cube_vert:zd,cube_frag:Bd,depth_vert:Hd,depth_frag:Gd,distanceRGBA_vert:Vd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:$d,meshbasic_vert:jd,meshbasic_frag:Kd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:eh,meshnormal_vert:th,meshnormal_frag:nh,meshphong_vert:ih,meshphong_frag:rh,meshphysical_vert:sh,meshphysical_frag:ah,meshtoon_vert:oh,meshtoon_frag:lh,points_vert:ch,points_frag:uh,shadow_vert:dh,shadow_frag:hh,sprite_vert:fh,sprite_frag:ph},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},an={basic:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:At([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:At([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:At([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:At([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:At([ue.points,ue.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:At([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:At([ue.common,ue.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:At([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:At([ue.sprite,ue.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:At([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:At([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};an.physical={uniforms:At([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Sr={r:0,b:0,g:0};function mh(r,e,t,n,i,s,a){const o=new et(0);let l=s===!0?0:1,c,d,u=null,h=0,g=null;function p(m,f){let M=!1,_=f.isScene===!0?f.background:null;switch(_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0),r.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),M=!0;break}(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ur)?(d===void 0&&(d=new Un(new Zi(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:Ni(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,d.material.toneMapped=_.colorSpace!==He,(u!==_||h!==_.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,u=_,h=_.version,g=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Un(new Is(2,2),new ti({name:"BackgroundMaterial",uniforms:Ni(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_.colorSpace!==He,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||g!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,h=_.version,g=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Sr,Vo(r)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:p}}function gh(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function u(N,H,J,X,$){let ee=!1;if(a){const K=v(X,J,H);c!==K&&(c=K,g(c.object)),ee=f(N,X,J,$),ee&&M(N,X,J,$)}else{const K=H.wireframe===!0;(c.geometry!==X.id||c.program!==J.id||c.wireframe!==K)&&(c.geometry=X.id,c.program=J.id,c.wireframe=K,ee=!0)}$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(ee||d)&&(d=!1,U(N,H,J,X),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function g(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function p(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,H,J){const X=J.wireframe===!0;let $=o[N.id];$===void 0&&($={},o[N.id]=$);let ee=$[H.id];ee===void 0&&(ee={},$[H.id]=ee);let K=ee[X];return K===void 0&&(K=m(h()),ee[X]=K),K}function m(N){const H=[],J=[],X=[];for(let $=0;$<i;$++)H[$]=0,J[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:X,object:N,attributes:{},index:null}}function f(N,H,J,X){const $=c.attributes,ee=H.attributes;let K=0;const Se=J.getAttributes();for(const B in Se)if(Se[B].location>=0){const re=$[B];let he=ee[B];if(he===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),re===void 0||re.attribute!==he||he&&re.data!==he.data)return!0;K++}return c.attributesNum!==K||c.index!==X}function M(N,H,J,X){const $={},ee=H.attributes;let K=0;const Se=J.getAttributes();for(const B in Se)if(Se[B].location>=0){let re=ee[B];re===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));const he={};he.attribute=re,re&&re.data&&(he.data=re.data),$[B]=he,K++}c.attributes=$,c.attributesNum=K,c.index=X}function _(){const N=c.newAttributes;for(let H=0,J=N.length;H<J;H++)N[H]=0}function y(N){E(N,0)}function E(N,H){const J=c.newAttributes,X=c.enabledAttributes,$=c.attributeDivisors;J[N]=1,X[N]===0&&(r.enableVertexAttribArray(N),X[N]=1),$[N]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),$[N]=H)}function A(){const N=c.newAttributes,H=c.enabledAttributes;for(let J=0,X=H.length;J<X;J++)H[J]!==N[J]&&(r.disableVertexAttribArray(J),H[J]=0)}function D(N,H,J,X,$,ee,K){K===!0?r.vertexAttribIPointer(N,H,J,$,ee):r.vertexAttribPointer(N,H,J,X,$,ee)}function U(N,H,J,X){if(n.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const $=X.attributes,ee=J.getAttributes(),K=H.defaultAttributeValues;for(const Se in ee){const B=ee[Se];if(B.location>=0){let ne=$[Se];if(ne===void 0&&(Se==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),Se==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),ne!==void 0){const re=ne.normalized,he=ne.itemSize,me=t.get(ne);if(me===void 0)continue;const Te=me.buffer,ke=me.type,De=me.bytesPerElement,st=n.isWebGL2===!0&&(ke===r.INT||ke===r.UNSIGNED_INT||ne.gpuType===To);if(ne.isInterleavedBufferAttribute){const Ge=ne.data,F=Ge.stride,at=ne.offset;if(Ge.isInstancedInterleavedBuffer){for(let be=0;be<B.locationSize;be++)E(B.location+be,Ge.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let be=0;be<B.locationSize;be++)y(B.location+be);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let be=0;be<B.locationSize;be++)D(B.location+be,he/B.locationSize,ke,re,F*De,(at+he/B.locationSize*be)*De,st)}else{if(ne.isInstancedBufferAttribute){for(let Ge=0;Ge<B.locationSize;Ge++)E(B.location+Ge,ne.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ge=0;Ge<B.locationSize;Ge++)y(B.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Ge=0;Ge<B.locationSize;Ge++)D(B.location+Ge,he/B.locationSize,ke,re,he*De,he/B.locationSize*Ge*De,st)}}else if(K!==void 0){const re=K[Se];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(B.location,re);break;case 3:r.vertexAttrib3fv(B.location,re);break;case 4:r.vertexAttrib4fv(B.location,re);break;default:r.vertexAttrib1fv(B.location,re)}}}}A()}function x(){Z();for(const N in o){const H=o[N];for(const J in H){const X=H[J];for(const $ in X)p(X[$].object),delete X[$];delete H[J]}delete o[N]}}function T(N){if(o[N.id]===void 0)return;const H=o[N.id];for(const J in H){const X=H[J];for(const $ in X)p(X[$].object),delete X[$];delete H[J]}delete o[N.id]}function W(N){for(const H in o){const J=o[H];if(J[N.id]===void 0)continue;const X=J[N.id];for(const $ in X)p(X[$].object),delete X[$];delete J[N.id]}}function Z(){R(),d=!0,c!==l&&(c=l,g(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:R,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:W,initAttributes:_,enableAttribute:y,disableUnusedAttributes:A}}function vh(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,d){r.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,u){if(u===0)return;let h,g;if(i)h=r,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,c,d,u),t.update(d,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function _h(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=a||e.has("OES_texture_float"),E=_&&y,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function xh(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Xn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const g=u.length!==0||h||n!==0||i;return i=h,n=u.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,g){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?d(null):c();else{const M=s?0:n,_=M*4;let y=f.clippingState||null;l.value=y,y=d(p,h,_,g);for(let E=0;E!==_;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,g,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const f=g+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=g;_!==v;++_,y+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yh(r){let e=new WeakMap;function t(a,o){return o===ys?a.mapping=Di:o===Ss&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ys||o===Ss)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fc(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Sh extends Wo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,La=[.125,.215,.35,.446,.526,.582],Yn=20,us=new Sh,Pa=new et;let ds=null;const qn=(1+Math.sqrt(5))/2,bi=1/qn,Da=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,qn,bi),new z(0,qn,-bi),new z(bi,0,qn),new z(-bi,0,qn),new z(qn,bi,0),new z(-qn,bi,0)];class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ds=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds),e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Yi,format:Qt,colorSpace:on,depthBuffer:!1},i=Ia(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eh(s)),this._blurMaterial=Mh(s,e,t)}return i}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Pa),d.toneMapping=yn,d.autoClear=!1;const g=new Bo({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),p=new Un(new Zi,g);let v=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(Pa),v=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):M===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Er(i,M*_,f>2?_:0,_,_),d.setRenderTarget(i),v&&d.render(p,o),d.render(e,o)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Da[(i-1)%Da.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Un(this._lodPlanes[i],c),h=c.uniforms,g=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Yn-1),v=s/p,m=isFinite(s)?1+Math.floor(d*v):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let M=0;for(let D=0;D<Yn;++D){const U=D/v,x=Math.exp(-U*U/2);f.push(x),D===0?M+=x:D<m&&(M+=2*x)}for(let D=0;D<f.length;D++)f[D]=f[D]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=p,h.mipInt.value=_-n;const y=this._sizeLods[i],E=3*y*(i>_-wi?i-_+wi:0),A=4*(this._cubeSize-y);Er(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(u,us)}}function Eh(r){const e=[],t=[],n=[];let i=r;const s=r-wi+1+La.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-wi?l=La[a-r+wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],g=6,p=6,v=3,m=2,f=1,M=new Float32Array(v*p*g),_=new Float32Array(m*p*g),y=new Float32Array(f*p*g);for(let A=0;A<g;A++){const D=A%3*2/3-1,U=A>2?0:-1,x=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];M.set(x,v*p*A),_.set(h,m*p*A);const T=[A,A,A,A,A,A];y.set(T,f*p*A)}const E=new Sn;E.setAttribute("position",new nn(M,v)),E.setAttribute("uv",new nn(_,m)),E.setAttribute("faceIndex",new nn(y,f)),e.push(E),i>wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ia(r,e,t){const n=new Qn(r,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Mh(r,e,t){const n=new Float32Array(Yn),i=new z(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Na(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Fa(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ns(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bh(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ys||l===Ss,d=l===Di||l===Ui;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ua(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||d&&u&&i(u)){t===null&&(t=new Ua(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Th(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ah(r,e,t,n){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);for(const p in h.morphAttributes){const v=h.morphAttributes[p];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete i[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],r.ARRAY_BUFFER);const g=u.morphAttributes;for(const p in g){const v=g[p];for(let m=0,f=v.length;m<f;m++)e.update(v[m],r.ARRAY_BUFFER)}}function c(u){const h=[],g=u.index,p=u.attributes.position;let v=0;if(g!==null){const M=g.array;v=g.version;for(let _=0,y=M.length;_<y;_+=3){const E=M[_+0],A=M[_+1],D=M[_+2];h.push(E,A,A,D,D,E)}}else{const M=p.array;v=p.version;for(let _=0,y=M.length/3-1;_<y;_+=3){const E=_+0,A=_+1,D=_+2;h.push(E,A,A,D,D,E)}}const m=new(Uo(h)?Go:Ho)(h,1);m.version=v;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function d(u){const h=s.get(u);if(h){const g=u.index;g!==null&&h.version<g.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function wh(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function d(h,g){r.drawElements(s,g,o,h*l),t.update(g,s,1)}function u(h,g,p){if(p===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,g,o,h*l,p),t.update(g,s,p)}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=u}function Rh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ch(r,e){return r[0]-e[0]}function Lh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ph(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,u){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=p!==void 0?p.length:0;let m=s.get(d);if(m===void 0||m.count!==v){let H=function(){R.dispose(),s.delete(d),d.removeEventListener("dispose",H)};var g=H;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),E===!0&&(x=3);let T=d.attributes.position.count*x,W=1;T>e.maxTextureSize&&(W=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Z=new Float32Array(T*W*4*v),R=new Fo(Z,T,W,v);R.type=Dn,R.needsUpdate=!0;const N=x*4;for(let J=0;J<v;J++){const X=A[J],$=D[J],ee=U[J],K=T*W*4*J;for(let Se=0;Se<X.count;Se++){const B=Se*N;_===!0&&(a.fromBufferAttribute(X,Se),Z[K+B+0]=a.x,Z[K+B+1]=a.y,Z[K+B+2]=a.z,Z[K+B+3]=0),y===!0&&(a.fromBufferAttribute($,Se),Z[K+B+4]=a.x,Z[K+B+5]=a.y,Z[K+B+6]=a.z,Z[K+B+7]=0),E===!0&&(a.fromBufferAttribute(ee,Se),Z[K+B+8]=a.x,Z[K+B+9]=a.y,Z[K+B+10]=a.z,Z[K+B+11]=ee.itemSize===4?a.w:1)}}m={count:v,texture:R,size:new qe(T,W)},s.set(d,m),d.addEventListener("dispose",H)}let f=0;for(let _=0;_<h.length;_++)f+=h[_];const M=d.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",M),u.getUniforms().setValue(r,"morphTargetInfluences",h),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const p=h===void 0?0:h.length;let v=n[d.id];if(v===void 0||v.length!==p){v=[];for(let y=0;y<p;y++)v[y]=[y,0];n[d.id]=v}for(let y=0;y<p;y++){const E=v[y];E[0]=y,E[1]=h[y]}v.sort(Lh);for(let y=0;y<8;y++)y<p&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Ch);const m=d.morphAttributes.position,f=d.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const E=o[y],A=E[0],D=E[1];A!==Number.MAX_SAFE_INTEGER&&D?(m&&d.getAttribute("morphTarget"+y)!==m[A]&&d.setAttribute("morphTarget"+y,m[A]),f&&d.getAttribute("morphNormal"+y)!==f[A]&&d.setAttribute("morphNormal"+y,f[A]),i[y]=D,M+=D):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),f&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const _=d.morphTargetsRelative?1:1-M;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dh(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const $o=new Ft,jo=new Fo,Ko=new xc,Zo=new Xo,ka=[],Oa=[],za=new Float32Array(16),Ba=new Float32Array(9),Ha=new Float32Array(4);function ki(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ka[i];if(s===void 0&&(s=new Float32Array(i),ka[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fr(r,e){let t=Oa[e];t===void 0&&(t=new Int32Array(e),Oa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Uh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ih(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2fv(this.addr,e),mt(t,e)}}function Nh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;r.uniform3fv(this.addr,e),mt(t,e)}}function Fh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4fv(this.addr,e),mt(t,e)}}function kh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ha.set(n),r.uniformMatrix2fv(this.addr,!1,Ha),mt(t,n)}}function Oh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ba.set(n),r.uniformMatrix3fv(this.addr,!1,Ba),mt(t,n)}}function zh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;za.set(n),r.uniformMatrix4fv(this.addr,!1,za),mt(t,n)}}function Bh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2iv(this.addr,e),mt(t,e)}}function Gh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3iv(this.addr,e),mt(t,e)}}function Vh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4iv(this.addr,e),mt(t,e)}}function Wh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;r.uniform2uiv(this.addr,e),mt(t,e)}}function qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;r.uniform3uiv(this.addr,e),mt(t,e)}}function Yh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;r.uniform4uiv(this.addr,e),mt(t,e)}}function $h(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$o,i)}function jh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ko,i)}function Kh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zo,i)}function Zh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jo,i)}function Jh(r){switch(r){case 5126:return Uh;case 35664:return Ih;case 35665:return Nh;case 35666:return Fh;case 35674:return kh;case 35675:return Oh;case 35676:return zh;case 5124:case 35670:return Bh;case 35667:case 35671:return Hh;case 35668:case 35672:return Gh;case 35669:case 35673:return Vh;case 5125:return Wh;case 36294:return Xh;case 36295:return qh;case 36296:return Yh;case 35678:case 36198:case 36298:case 36306:case 35682:return $h;case 35679:case 36299:case 36307:return jh;case 35680:case 36300:case 36308:case 36293:return Kh;case 36289:case 36303:case 36311:case 36292:return Zh}}function Qh(r,e){r.uniform1fv(this.addr,e)}function ef(r,e){const t=ki(e,this.size,2);r.uniform2fv(this.addr,t)}function tf(r,e){const t=ki(e,this.size,3);r.uniform3fv(this.addr,t)}function nf(r,e){const t=ki(e,this.size,4);r.uniform4fv(this.addr,t)}function rf(r,e){const t=ki(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sf(r,e){const t=ki(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function af(r,e){const t=ki(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function of(r,e){r.uniform1iv(this.addr,e)}function lf(r,e){r.uniform2iv(this.addr,e)}function cf(r,e){r.uniform3iv(this.addr,e)}function uf(r,e){r.uniform4iv(this.addr,e)}function df(r,e){r.uniform1uiv(this.addr,e)}function hf(r,e){r.uniform2uiv(this.addr,e)}function ff(r,e){r.uniform3uiv(this.addr,e)}function pf(r,e){r.uniform4uiv(this.addr,e)}function mf(r,e,t){const n=this.cache,i=e.length,s=Fr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||$o,s[a])}function gf(r,e,t){const n=this.cache,i=e.length,s=Fr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ko,s[a])}function vf(r,e,t){const n=this.cache,i=e.length,s=Fr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Zo,s[a])}function _f(r,e,t){const n=this.cache,i=e.length,s=Fr(t,i);pt(n,s)||(r.uniform1iv(this.addr,s),mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jo,s[a])}function xf(r){switch(r){case 5126:return Qh;case 35664:return ef;case 35665:return tf;case 35666:return nf;case 35674:return rf;case 35675:return sf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return hf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return _f}}class yf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jh(t.type)}}class Sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const hs=/(\w+)(\])?(\[|\.)?/g;function Ga(r,e){r.seq.push(e),r.map[e.id]=e}function Mf(r,e,t){const n=r.name,i=n.length;for(hs.lastIndex=0;;){const s=hs.exec(n),a=hs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ga(t,c===void 0?new yf(o,r,e):new Sf(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Ef(o),Ga(t,u)),t=u}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Mf(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Va(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let bf=0;function Tf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Af(r){switch(r){case on:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Wa(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Tf(r.getShaderSource(e),a)}else return i}function wf(r,e){const t=Af(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rf(r,e){let t;switch(e){case Fl:t="Linear";break;case kl:t="Reinhard";break;case Ol:t="OptimizedCineon";break;case zl:t="ACESFilmic";break;case Bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wi).join(`
`)}function Lf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pf(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Wi(r){return r!==""}function Xa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(r){return r.replace(Df,Uf)}function Uf(r,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ws(t)}const If=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(r){return r.replace(If,Nf)}function Nf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $a(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ff(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function kf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Of(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function zf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Il:e="ENVMAP_BLENDING_MIX";break;case Nl:e="ENVMAP_BLENDING_ADD";break}return e}function Bf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hf(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ff(t),c=kf(t),d=Of(t),u=zf(t),h=Bf(t),g=t.isWebGL2?"":Cf(t),p=Lf(s),v=i.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wi).join(`
`),m.length>0&&(m+=`
`),f=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wi).join(`
`),f.length>0&&(f+=`
`)):(m=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),f=[g,$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?We.tonemapping_pars_fragment:"",t.toneMapping!==yn?Rf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,wf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),a=ws(a),a=Xa(a,t),a=qa(a,t),o=ws(o),o=Xa(o,t),o=qa(o,t),a=Ya(a),o=Ya(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=M+m+a,y=M+f+o,E=Va(i,i.VERTEX_SHADER,_),A=Va(i,i.FRAGMENT_SHADER,y);if(i.attachShader(v,E),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(v).trim(),T=i.getShaderInfoLog(E).trim(),W=i.getShaderInfoLog(A).trim();let Z=!0,R=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,E,A);else{const N=Wa(i,E,"vertex"),H=Wa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+N+`
`+H)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||W==="")&&(R=!1);R&&(this.diagnostics={runnable:Z,programLog:x,vertexShader:{log:T,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(E),i.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new wr(i,v)),D};let U;return this.getAttributes=function(){return U===void 0&&(U=Pf(i,v)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}let Gf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wf(e),t.set(e,n)),n}}class Wf{constructor(e){this.id=Gf++,this.code=e,this.usedTimes=0}}function Xf(r,e,t,n,i,s,a){const o=new Oo,l=new Vf,c=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let g=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,T,W,Z,R){const N=Z.fog,H=R.geometry,J=x.isMeshStandardMaterial?Z.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),$=X&&X.mapping===Ur?X.image.height:null,ee=p[x.type];x.precision!==null&&(g=i.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const K=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=K!==void 0?K.length:0;let B=0;H.morphAttributes.position!==void 0&&(B=1),H.morphAttributes.normal!==void 0&&(B=2),H.morphAttributes.color!==void 0&&(B=3);let ne,re,he,me;if(ee){const ct=an[ee];ne=ct.vertexShader,re=ct.fragmentShader}else ne=x.vertexShader,re=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const Te=r.getRenderTarget(),ke=R.isInstancedMesh===!0,De=!!x.map,st=!!x.matcap,Ge=!!X,F=!!x.aoMap,at=!!x.lightMap,be=!!x.bumpMap,Oe=!!x.normalMap,Ae=!!x.displacementMap,Ze=!!x.emissiveMap,ze=!!x.metalnessMap,Me=!!x.roughnessMap,je=x.anisotropy>0,ot=x.clearcoat>0,lt=x.iridescence>0,w=x.sheen>0,S=x.transmission>0,q=je&&!!x.anisotropyMap,te=ot&&!!x.clearcoatMap,ie=ot&&!!x.clearcoatNormalMap,C=ot&&!!x.clearcoatRoughnessMap,Q=lt&&!!x.iridescenceMap,se=lt&&!!x.iridescenceThicknessMap,V=w&&!!x.sheenColorMap,fe=w&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,ye=!!x.specularColorMap,xe=!!x.specularIntensityMap,ge=S&&!!x.transmissionMap,we=S&&!!x.thicknessMap,Ve=!!x.gradientMap,P=!!x.alphaMap,de=x.alphaTest>0,G=!!x.extensions,ce=!!H.attributes.uv1,le=!!H.attributes.uv2,$e=!!H.attributes.uv3;return{isWebGL2:d,shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:re,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:ke,instancingColor:ke&&R.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:on,map:De,matcap:st,envMap:Ge,envMapMode:Ge&&X.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:at,bumpMap:be,normalMap:Oe,displacementMap:h&&Ae,emissiveMap:Ze,normalMapObjectSpace:Oe&&x.normalMapType===ec,normalMapTangentSpace:Oe&&x.normalMapType===Ql,metalnessMap:ze,roughnessMap:Me,anisotropy:je,anisotropyMap:q,clearcoat:ot,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:C,iridescence:lt,iridescenceMap:Q,iridescenceThicknessMap:se,sheen:w,sheenColorMap:V,sheenRoughnessMap:fe,specularMap:Ee,specularColorMap:ye,specularIntensityMap:xe,transmission:S,transmissionMap:ge,thicknessMap:we,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ci,alphaMap:P,alphaTest:de,combine:x.combine,mapUv:De&&v(x.map.channel),aoMapUv:F&&v(x.aoMap.channel),lightMapUv:at&&v(x.lightMap.channel),bumpMapUv:be&&v(x.bumpMap.channel),normalMapUv:Oe&&v(x.normalMap.channel),displacementMapUv:Ae&&v(x.displacementMap.channel),emissiveMapUv:Ze&&v(x.emissiveMap.channel),metalnessMapUv:ze&&v(x.metalnessMap.channel),roughnessMapUv:Me&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:V&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(x.sheenRoughnessMap.channel),specularMapUv:Ee&&v(x.specularMap.channel),specularColorMapUv:ye&&v(x.specularColorMap.channel),specularIntensityMapUv:xe&&v(x.specularIntensityMap.channel),transmissionMapUv:ge&&v(x.transmissionMap.channel),thicknessMapUv:we&&v(x.thicknessMap.channel),alphaMapUv:P&&v(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Oe||je),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:le,vertexUv3s:$e,pointsUvs:R.isPoints===!0&&!!H.attributes.uv&&(De||P),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:yn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_n,flipSided:x.side===Ct,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:G&&x.extensions.derivatives===!0,extensionFragDepth:G&&x.extensions.fragDepth===!0,extensionDrawBuffers:G&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)T.push(W),T.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(M(T,x),_(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function _(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),x.push(o.mask)}function y(x){const T=p[x.type];let W;if(T){const Z=an[T];W=Dc.clone(Z.uniforms)}else W=x.uniforms;return W}function E(x,T){let W;for(let Z=0,R=c.length;Z<R;Z++){const N=c[Z];if(N.cacheKey===T){W=N,++W.usedTimes;break}}return W===void 0&&(W=new Hf(r,T,x,s),c.push(W)),W}function A(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function D(x){l.remove(x)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:D,programs:c,dispose:U}}function qf(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Yf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ja(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ka(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,h,g,p,v,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:h,material:g,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=g,f.groupOrder=p,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,h,g,p,v,m){const f=a(u,h,g,p,v,m);g.transmission>0?n.push(f):g.transparent===!0?i.push(f):t.push(f)}function l(u,h,g,p,v,m){const f=a(u,h,g,p,v,m);g.transmission>0?n.unshift(f):g.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,h){t.length>1&&t.sort(u||Yf),n.length>1&&n.sort(h||ja),i.length>1&&i.sort(h||ja)}function d(){for(let u=e,h=r.length;u<h;u++){const g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:d,sort:c}}function $f(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ka,r.set(n,[a])):i>=s.length?(a=new Ka,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function jf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new et};break;case"SpotLight":t={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return r[e.id]=t,t}}}function Kf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Zf=0;function Jf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qf(r,e){const t=new jf,n=Kf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)i.probe.push(new z);const s=new z,a=new yt,o=new yt;function l(d,u){let h=0,g=0,p=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let v=0,m=0,f=0,M=0,_=0,y=0,E=0,A=0,D=0,U=0;d.sort(Jf);const x=u===!0?Math.PI:1;for(let W=0,Z=d.length;W<Z;W++){const R=d[W],N=R.color,H=R.intensity,J=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*H*x,g+=N.g*H*x,p+=N.b*H*x;else if(R.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],H);else if(R.isDirectionalLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity*x),R.castShadow){const ee=R.shadow,K=n.get(R);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=X,i.directionalShadowMatrix[v]=R.shadow.matrix,y++}i.directional[v]=$,v++}else if(R.isSpotLight){const $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(N).multiplyScalar(H*x),$.distance=J,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[f]=$;const ee=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,ee.updateMatrices(R),R.castShadow&&U++),i.spotLightMatrix[f]=ee.matrix,R.castShadow){const K=n.get(R);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=X,A++}f++}else if(R.isRectAreaLight){const $=t.get(R);$.color.copy(N).multiplyScalar(H),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=$,M++}else if(R.isPointLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity*x),$.distance=R.distance,$.decay=R.decay,R.castShadow){const ee=R.shadow,K=n.get(R);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=R.shadow.matrix,E++}i.point[m]=$,m++}else if(R.isHemisphereLight){const $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(H*x),$.groundColor.copy(R.groundColor).multiplyScalar(H*x),i.hemi[_]=$,_++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=g,i.ambient[2]=p;const T=i.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==M||T.hemiLength!==_||T.numDirectionalShadows!==y||T.numPointShadows!==E||T.numSpotShadows!==A||T.numSpotMaps!==D)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=M,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+D-U,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=U,T.directionalLength=v,T.pointLength=m,T.spotLength=f,T.rectAreaLength=M,T.hemiLength=_,T.numDirectionalShadows=y,T.numPointShadows=E,T.numSpotShadows=A,T.numSpotMaps=D,i.version=Zf++)}function c(d,u){let h=0,g=0,p=0,v=0,m=0;const f=u.matrixWorldInverse;for(let M=0,_=d.length;M<_;M++){const y=d[M];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(y.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const E=i.point[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),g++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Za(r,e){const t=new Qf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ep(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Za(r,e),t.set(s,[l])):a>=o.length?(l=new Za(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class tp extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class np extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sp(r,e,t){let n=new qo;const i=new qe,s=new qe,a=new St,o=new tp({depthPacking:Jl}),l=new np,c={},d=t.maxTextureSize,u={[On]:Ct,[Ct]:On,[_n]:_n},h=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:ip,fragmentShader:rp}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const p=new Sn;p.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Un(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let f=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const U=r.getRenderTarget(),x=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),W=r.state;W.setBlending(In),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=f!==vn&&this.type===vn,R=f===vn&&this.type!==vn;for(let N=0,H=E.length;N<H;N++){const J=E[N],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const $=X.getFrameExtents();if(i.multiply($),s.copy(X.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/$.x),i.x=s.x*$.x,X.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/$.y),i.y=s.y*$.y,X.mapSize.y=s.y)),X.map===null||Z===!0||R===!0){const K=this.type!==vn?{minFilter:wt,magFilter:wt}:{};X.map!==null&&X.map.dispose(),X.map=new Qn(i.x,i.y,K),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const ee=X.getViewportCount();for(let K=0;K<ee;K++){const Se=X.getViewport(K);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),W.viewport(a),X.updateMatrices(J,K),n=X.getFrustum(),y(A,D,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===vn&&M(X,D),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(U,x,T)};function M(E,A){const D=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qn(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,D,h,v,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,D,g,v,null)}function _(E,A,D,U){let x=null;const T=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)x=T;else if(x=D.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=x.uuid,Z=A.uuid;let R=c[W];R===void 0&&(R={},c[W]=R);let N=R[Z];N===void 0&&(N=x.clone(),R[Z]=N),x=N}if(x.visible=A.visible,x.wireframe=A.wireframe,U===vn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=r.properties.get(x);W.light=D}return x}function y(E,A,D,U,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const Z=e.update(E),R=E.material;if(Array.isArray(R)){const N=Z.groups;for(let H=0,J=N.length;H<J;H++){const X=N[H],$=R[X.materialIndex];if($&&$.visible){const ee=_(E,$,U,x);r.renderBufferDirect(D,null,Z,ee,E,X)}}}else if(R.visible){const N=_(E,R,U,x);r.renderBufferDirect(D,null,Z,N,E,null)}}const W=E.children;for(let Z=0,R=W.length;Z<R;Z++)y(W[Z],A,D,U,x)}}function ap(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const de=new St;let G=null;const ce=new St(0,0,0,0);return{setMask:function(le){G!==le&&!P&&(r.colorMask(le,le,le,le),G=le)},setLocked:function(le){P=le},setClear:function(le,$e,it,ct,Xt){Xt===!0&&(le*=ct,$e*=ct,it*=ct),de.set(le,$e,it,ct),ce.equals(de)===!1&&(r.clearColor(le,$e,it,ct),ce.copy(de))},reset:function(){P=!1,G=null,ce.set(-1,0,0,0)}}}function s(){let P=!1,de=null,G=null,ce=null;return{setTest:function(le){le?Te(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(le){de!==le&&!P&&(r.depthMask(le),de=le)},setFunc:function(le){if(G!==le){switch(le){case wl:r.depthFunc(r.NEVER);break;case Rl:r.depthFunc(r.ALWAYS);break;case Cl:r.depthFunc(r.LESS);break;case xs:r.depthFunc(r.LEQUAL);break;case Ll:r.depthFunc(r.EQUAL);break;case Pl:r.depthFunc(r.GEQUAL);break;case Dl:r.depthFunc(r.GREATER);break;case Ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=le}},setLocked:function(le){P=le},setClear:function(le){ce!==le&&(r.clearDepth(le),ce=le)},reset:function(){P=!1,de=null,G=null,ce=null}}}function a(){let P=!1,de=null,G=null,ce=null,le=null,$e=null,it=null,ct=null,Xt=null;return{setTest:function(tt){P||(tt?Te(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(tt){de!==tt&&!P&&(r.stencilMask(tt),de=tt)},setFunc:function(tt,Pt,gt){(G!==tt||ce!==Pt||le!==gt)&&(r.stencilFunc(tt,Pt,gt),G=tt,ce=Pt,le=gt)},setOp:function(tt,Pt,gt){($e!==tt||it!==Pt||ct!==gt)&&(r.stencilOp(tt,Pt,gt),$e=tt,it=Pt,ct=gt)},setLocked:function(tt){P=tt},setClear:function(tt){Xt!==tt&&(r.clearStencil(tt),Xt=tt)},reset:function(){P=!1,de=null,G=null,ce=null,le=null,$e=null,it=null,ct=null,Xt=null}}}const o=new i,l=new s,c=new a,d=new WeakMap,u=new WeakMap;let h={},g={},p=new WeakMap,v=[],m=null,f=!1,M=null,_=null,y=null,E=null,A=null,D=null,U=null,x=!1,T=null,W=null,Z=null,R=null,N=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,X=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),J=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=X>=2);let ee=null,K={};const Se=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),ne=new St().fromArray(Se),re=new St().fromArray(B);function he(P,de,G,ce){const le=new Uint8Array(4),$e=r.createTexture();r.bindTexture(P,$e),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<G;it++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(de,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(de+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return $e}const me={};me[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[r.TEXTURE_2D_ARRAY]=he(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=he(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(r.DEPTH_TEST),l.setFunc(xs),Ae(!1),Ze(Fs),Te(r.CULL_FACE),be(In);function Te(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function ke(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function De(P,de){return g[P]!==de?(r.bindFramebuffer(P,de),g[P]=de,n&&(P===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=de),P===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=de)),!0):!1}function st(P,de){let G=v,ce=!1;if(P)if(G=p.get(de),G===void 0&&(G=[],p.set(de,G)),P.isWebGLMultipleRenderTargets){const le=P.texture;if(G.length!==le.length||G[0]!==r.COLOR_ATTACHMENT0){for(let $e=0,it=le.length;$e<it;$e++)G[$e]=r.COLOR_ATTACHMENT0+$e;G.length=le.length,ce=!0}}else G[0]!==r.COLOR_ATTACHMENT0&&(G[0]=r.COLOR_ATTACHMENT0,ce=!0);else G[0]!==r.BACK&&(G[0]=r.BACK,ce=!0);ce&&(t.isWebGL2?r.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Ge(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const F={[Ti]:r.FUNC_ADD,[gl]:r.FUNC_SUBTRACT,[vl]:r.FUNC_REVERSE_SUBTRACT};if(n)F[Bs]=r.MIN,F[Hs]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(F[Bs]=P.MIN_EXT,F[Hs]=P.MAX_EXT)}const at={[_l]:r.ZERO,[xl]:r.ONE,[yl]:r.SRC_COLOR,[So]:r.SRC_ALPHA,[Al]:r.SRC_ALPHA_SATURATE,[bl]:r.DST_COLOR,[El]:r.DST_ALPHA,[Sl]:r.ONE_MINUS_SRC_COLOR,[Eo]:r.ONE_MINUS_SRC_ALPHA,[Tl]:r.ONE_MINUS_DST_COLOR,[Ml]:r.ONE_MINUS_DST_ALPHA};function be(P,de,G,ce,le,$e,it,ct){if(P===In){f===!0&&(ke(r.BLEND),f=!1);return}if(f===!1&&(Te(r.BLEND),f=!0),P!==ml){if(P!==M||ct!==x){if((_!==Ti||A!==Ti)&&(r.blendEquation(r.FUNC_ADD),_=Ti,A=Ti),ct)switch(P){case Ci:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ks:r.blendFunc(r.ONE,r.ONE);break;case Os:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zs:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ci:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ks:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Os:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zs:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,E=null,D=null,U=null,M=P,x=ct}return}le=le||de,$e=$e||G,it=it||ce,(de!==_||le!==A)&&(r.blendEquationSeparate(F[de],F[le]),_=de,A=le),(G!==y||ce!==E||$e!==D||it!==U)&&(r.blendFuncSeparate(at[G],at[ce],at[$e],at[it]),y=G,E=ce,D=$e,U=it),M=P,x=!1}function Oe(P,de){P.side===_n?ke(r.CULL_FACE):Te(r.CULL_FACE);let G=P.side===Ct;de&&(G=!G),Ae(G),P.blending===Ci&&P.transparent===!1?be(In):be(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ce=P.stencilWrite;c.setTest(ce),ce&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){T!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),T=P)}function Ze(P){P!==hl?(Te(r.CULL_FACE),P!==W&&(P===Fs?r.cullFace(r.BACK):P===fl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),W=P}function ze(P){P!==Z&&(J&&r.lineWidth(P),Z=P)}function Me(P,de,G){P?(Te(r.POLYGON_OFFSET_FILL),(R!==de||N!==G)&&(r.polygonOffset(de,G),R=de,N=G)):ke(r.POLYGON_OFFSET_FILL)}function je(P){P?Te(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function ot(P){P===void 0&&(P=r.TEXTURE0+H-1),ee!==P&&(r.activeTexture(P),ee=P)}function lt(P,de,G){G===void 0&&(ee===null?G=r.TEXTURE0+H-1:G=ee);let ce=K[G];ce===void 0&&(ce={type:void 0,texture:void 0},K[G]=ce),(ce.type!==P||ce.texture!==de)&&(ee!==G&&(r.activeTexture(G),ee=G),r.bindTexture(P,de||me[P]),ce.type=P,ce.texture=de)}function w(){const P=K[ee];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function V(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){ne.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function xe(P){re.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function ge(P,de){let G=u.get(de);G===void 0&&(G=new WeakMap,u.set(de,G));let ce=G.get(P);ce===void 0&&(ce=r.getUniformBlockIndex(de,P.name),G.set(P,ce))}function we(P,de){const ce=u.get(de).get(P);d.get(de)!==ce&&(r.uniformBlockBinding(de,ce,P.__bindingPointIndex),d.set(de,ce))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ee=null,K={},g={},p=new WeakMap,v=[],m=null,f=!1,M=null,_=null,y=null,E=null,A=null,D=null,U=null,x=!1,T=null,W=null,Z=null,R=null,N=null,ne.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:ke,bindFramebuffer:De,drawBuffers:st,useProgram:Ge,setBlending:be,setMaterial:Oe,setFlipSided:Ae,setCullFace:Ze,setLineWidth:ze,setPolygonOffset:Me,setScissorTest:je,activeTexture:ot,bindTexture:lt,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:q,texImage2D:fe,texImage3D:Ee,updateUBOMapping:ge,uniformBlockBinding:we,texStorage2D:se,texStorage3D:V,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:C,compressedTexSubImage3D:Q,scissor:ye,viewport:xe,reset:Ve}}function op(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,d=i.maxTextureSize,u=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,S){return f?new OffscreenCanvas(w,S):Lr("canvas")}function _(w,S,q,te){let ie=1;if((w.width>te||w.height>te)&&(ie=te/Math.max(w.width,w.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const C=S?As:Math.floor,Q=C(ie*w.width),se=C(ie*w.height);v===void 0&&(v=M(Q,se));const V=q?M(Q,se):v;return V.width=Q,V.height=se,V.getContext("2d").drawImage(w,0,0,Q,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Q+"x"+se+")."),V}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return pa(w.width)&&pa(w.height)}function E(w){return o?!1:w.wrapS!==Jt||w.wrapT!==Jt||w.minFilter!==wt&&w.minFilter!==Ht}function A(w,S){return w.generateMipmaps&&S&&w.minFilter!==wt&&w.minFilter!==Ht}function D(w){r.generateMipmap(w)}function U(w,S,q,te,ie=!1){if(o===!1)return S;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let C=S;return S===r.RED&&(q===r.FLOAT&&(C=r.R32F),q===r.HALF_FLOAT&&(C=r.R16F),q===r.UNSIGNED_BYTE&&(C=r.R8)),S===r.RG&&(q===r.FLOAT&&(C=r.RG32F),q===r.HALF_FLOAT&&(C=r.RG16F),q===r.UNSIGNED_BYTE&&(C=r.RG8)),S===r.RGBA&&(q===r.FLOAT&&(C=r.RGBA32F),q===r.HALF_FLOAT&&(C=r.RGBA16F),q===r.UNSIGNED_BYTE&&(C=te===He&&ie===!1?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(C=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(C=r.RGB5_A1)),(C===r.R16F||C===r.R32F||C===r.RG16F||C===r.RG32F||C===r.RGBA16F||C===r.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function x(w,S,q){return A(w,q)===!0||w.isFramebufferTexture&&w.minFilter!==wt&&w.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){return w===wt||w===Gs||w===Or?r.NEAREST:r.LINEAR}function W(w){const S=w.target;S.removeEventListener("dispose",W),R(S),S.isVideoTexture&&p.delete(S)}function Z(w){const S=w.target;S.removeEventListener("dispose",Z),H(S)}function R(w){const S=n.get(w);if(S.__webglInit===void 0)return;const q=w.source,te=m.get(q);if(te){const ie=te[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(w),Object.keys(te).length===0&&m.delete(q)}n.remove(w)}function N(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const q=w.source,te=m.get(q);delete te[S.__cacheKey],a.memory.textures--}function H(w){const S=w.texture,q=n.get(w),te=n.get(S);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(q.__webglFramebuffer[ie]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ie=0;ie<q.__webglColorRenderbuffer.length;ie++)q.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[ie]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,C=S.length;ie<C;ie++){const Q=n.get(S[ie]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(w)}let J=0;function X(){J=0}function $(){const w=J;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),J+=1,w}function ee(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function K(w,S){const q=n.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(q,w,S);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+S)}function Se(w,S){const q=n.get(w);if(w.version>0&&q.__version!==w.version){De(q,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+S)}function B(w,S){const q=n.get(w);if(w.version>0&&q.__version!==w.version){De(q,w,S);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+S)}function ne(w,S){const q=n.get(w);if(w.version>0&&q.__version!==w.version){st(q,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+S)}const re={[Es]:r.REPEAT,[Jt]:r.CLAMP_TO_EDGE,[Ms]:r.MIRRORED_REPEAT},he={[wt]:r.NEAREST,[Gs]:r.NEAREST_MIPMAP_NEAREST,[Or]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[Hl]:r.LINEAR_MIPMAP_NEAREST,[qi]:r.LINEAR_MIPMAP_LINEAR},me={[nc]:r.NEVER,[cc]:r.ALWAYS,[ic]:r.LESS,[sc]:r.LEQUAL,[rc]:r.EQUAL,[lc]:r.GEQUAL,[ac]:r.GREATER,[oc]:r.NOTEQUAL};function Te(w,S,q){if(q?(r.texParameteri(w,r.TEXTURE_WRAP_S,re[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,re[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,re[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,he[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,he[S.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Jt||S.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,T(S.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==wt&&S.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===wt||S.minFilter!==Or&&S.minFilter!==qi||S.type===Dn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Yi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ke(w,S){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",W));const te=S.source;let ie=m.get(te);ie===void 0&&(ie={},m.set(te,ie));const C=ee(S);if(C!==w.__cacheKey){ie[C]===void 0&&(ie[C]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ie[C].usedTimes++;const Q=ie[w.__cacheKey];Q!==void 0&&(ie[w.__cacheKey].usedTimes--,Q.usedTimes===0&&N(S)),w.__cacheKey=C,w.__webglTexture=ie[C].texture}return q}function De(w,S,q){let te=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=r.TEXTURE_3D);const ie=ke(w,S),C=S.source;t.bindTexture(te,w.__webglTexture,r.TEXTURE0+q);const Q=n.get(C);if(C.version!==Q.__version||ie===!0){t.activeTexture(r.TEXTURE0+q),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const se=E(S)&&y(S.image)===!1;let V=_(S.image,se,!1,d);V=lt(S,V);const fe=y(V)||o,Ee=s.convert(S.format,S.colorSpace);let ye=s.convert(S.type),xe=U(S.internalFormat,Ee,ye,S.colorSpace);Te(te,S,fe);let ge;const we=S.mipmaps,Ve=o&&S.isVideoTexture!==!0,P=Q.__version===void 0||ie===!0,de=x(S,V,fe);if(S.isDepthTexture)xe=r.DEPTH_COMPONENT,o?S.type===Dn?xe=r.DEPTH_COMPONENT32F:S.type===Pn?xe=r.DEPTH_COMPONENT24:S.type===jn?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:S.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Kn&&xe===r.DEPTH_COMPONENT&&S.type!==Us&&S.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Pn,ye=s.convert(S.type)),S.format===Ii&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=jn,ye=s.convert(S.type))),P&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,xe,V.width,V.height):t.texImage2D(r.TEXTURE_2D,0,xe,V.width,V.height,0,Ee,ye,null));else if(S.isDataTexture)if(we.length>0&&fe){Ve&&P&&t.texStorage2D(r.TEXTURE_2D,de,xe,we[0].width,we[0].height);for(let G=0,ce=we.length;G<ce;G++)ge=we[G],Ve?t.texSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,Ee,ye,ge.data):t.texImage2D(r.TEXTURE_2D,G,xe,ge.width,ge.height,0,Ee,ye,ge.data);S.generateMipmaps=!1}else Ve?(P&&t.texStorage2D(r.TEXTURE_2D,de,xe,V.width,V.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V.width,V.height,Ee,ye,V.data)):t.texImage2D(r.TEXTURE_2D,0,xe,V.width,V.height,0,Ee,ye,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,xe,we[0].width,we[0].height,V.depth);for(let G=0,ce=we.length;G<ce;G++)ge=we[G],S.format!==Qt?Ee!==null?Ve?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,V.depth,Ee,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,xe,ge.width,ge.height,V.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,V.depth,Ee,ye,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,xe,ge.width,ge.height,V.depth,0,Ee,ye,ge.data)}else{Ve&&P&&t.texStorage2D(r.TEXTURE_2D,de,xe,we[0].width,we[0].height);for(let G=0,ce=we.length;G<ce;G++)ge=we[G],S.format!==Qt?Ee!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,G,xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,Ee,ye,ge.data):t.texImage2D(r.TEXTURE_2D,G,xe,ge.width,ge.height,0,Ee,ye,ge.data)}else if(S.isDataArrayTexture)Ve?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,xe,V.width,V.height,V.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Ee,ye,V.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,V.width,V.height,V.depth,0,Ee,ye,V.data);else if(S.isData3DTexture)Ve?(P&&t.texStorage3D(r.TEXTURE_3D,de,xe,V.width,V.height,V.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Ee,ye,V.data)):t.texImage3D(r.TEXTURE_3D,0,xe,V.width,V.height,V.depth,0,Ee,ye,V.data);else if(S.isFramebufferTexture){if(P)if(Ve)t.texStorage2D(r.TEXTURE_2D,de,xe,V.width,V.height);else{let G=V.width,ce=V.height;for(let le=0;le<de;le++)t.texImage2D(r.TEXTURE_2D,le,xe,G,ce,0,Ee,ye,null),G>>=1,ce>>=1}}else if(we.length>0&&fe){Ve&&P&&t.texStorage2D(r.TEXTURE_2D,de,xe,we[0].width,we[0].height);for(let G=0,ce=we.length;G<ce;G++)ge=we[G],Ve?t.texSubImage2D(r.TEXTURE_2D,G,0,0,Ee,ye,ge):t.texImage2D(r.TEXTURE_2D,G,xe,Ee,ye,ge);S.generateMipmaps=!1}else Ve?(P&&t.texStorage2D(r.TEXTURE_2D,de,xe,V.width,V.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,ye,V)):t.texImage2D(r.TEXTURE_2D,0,xe,Ee,ye,V);A(S,fe)&&D(te),Q.__version=C.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function st(w,S,q){if(S.image.length!==6)return;const te=ke(w,S),ie=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+q);const C=n.get(ie);if(ie.version!==C.__version||te===!0){t.activeTexture(r.TEXTURE0+q),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Q=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,V=[];for(let G=0;G<6;G++)!Q&&!se?V[G]=_(S.image[G],!1,!0,c):V[G]=se?S.image[G].image:S.image[G],V[G]=lt(S,V[G]);const fe=V[0],Ee=y(fe)||o,ye=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),ge=U(S.internalFormat,ye,xe,S.colorSpace),we=o&&S.isVideoTexture!==!0,Ve=C.__version===void 0||te===!0;let P=x(S,fe,Ee);Te(r.TEXTURE_CUBE_MAP,S,Ee);let de;if(Q){we&&Ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,ge,fe.width,fe.height);for(let G=0;G<6;G++){de=V[G].mipmaps;for(let ce=0;ce<de.length;ce++){const le=de[ce];S.format!==Qt?ye!==null?we?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,le.width,le.height,ye,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,0,0,le.width,le.height,ye,xe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce,ge,le.width,le.height,0,ye,xe,le.data)}}}else{de=S.mipmaps,we&&Ve&&(de.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,ge,V[0].width,V[0].height));for(let G=0;G<6;G++)if(se){we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,V[G].width,V[G].height,ye,xe,V[G].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ge,V[G].width,V[G].height,0,ye,xe,V[G].data);for(let ce=0;ce<de.length;ce++){const $e=de[ce].image[G].image;we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,$e.width,$e.height,ye,xe,$e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,ge,$e.width,$e.height,0,ye,xe,$e.data)}}else{we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ye,xe,V[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ge,ye,xe,V[G]);for(let ce=0;ce<de.length;ce++){const le=de[ce];we?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,0,0,ye,xe,le.image[G]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+G,ce+1,ge,ye,xe,le.image[G])}}}A(S,Ee)&&D(r.TEXTURE_CUBE_MAP),C.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ge(w,S,q,te,ie){const C=s.convert(q.format,q.colorSpace),Q=s.convert(q.type),se=U(q.internalFormat,C,Q,q.colorSpace);n.get(S).__hasExternalTextures||(ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,se,S.width,S.height,S.depth,0,C,Q,null):t.texImage2D(ie,0,se,S.width,S.height,0,C,Q,null)),t.bindFramebuffer(r.FRAMEBUFFER,w),je(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ie,n.get(q).__webglTexture,0,Me(S)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ie,n.get(q).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(w,S,q){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let te=r.DEPTH_COMPONENT16;if(q||je(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Dn?te=r.DEPTH_COMPONENT32F:ie.type===Pn&&(te=r.DEPTH_COMPONENT24));const C=Me(S);je(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,C,te,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,C,te,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const te=Me(S);q&&je(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,S.width,S.height):je(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<te.length;ie++){const C=te[ie],Q=s.convert(C.format,C.colorSpace),se=s.convert(C.type),V=U(C.internalFormat,Q,se,C.colorSpace),fe=Me(S);q&&je(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,V,S.width,S.height):je(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,V,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,V,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ie=Me(S);if(S.depthTexture.format===Kn)je(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(S.depthTexture.format===Ii)je(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(w){const S=n.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,w)}else if(q){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=r.createRenderbuffer(),F(S.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),F(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(w,S,q){const te=n.get(w);S!==void 0&&Ge(te.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),q!==void 0&&be(w)}function Ae(w){const S=w.texture,q=n.get(w),te=n.get(S);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,a.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,C=w.isWebGLMultipleRenderTargets===!0,Q=y(w)||o;if(ie){q.__webglFramebuffer=[];for(let se=0;se<6;se++)q.__webglFramebuffer[se]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),C)if(i.drawBuffers){const se=w.texture;for(let V=0,fe=se.length;V<fe;V++){const Ee=n.get(se[V]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&je(w)===!1){const se=C?S:[S];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let V=0;V<se.length;V++){const fe=se[V];q.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[V]);const Ee=s.convert(fe.format,fe.colorSpace),ye=s.convert(fe.type),xe=U(fe.internalFormat,Ee,ye,fe.colorSpace,w.isXRRenderTarget===!0),ge=Me(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,xe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,q.__webglColorRenderbuffer[V])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),F(q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Te(r.TEXTURE_CUBE_MAP,S,Q);for(let se=0;se<6;se++)Ge(q.__webglFramebuffer[se],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se);A(S,Q)&&D(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(C){const se=w.texture;for(let V=0,fe=se.length;V<fe;V++){const Ee=se[V],ye=n.get(Ee);t.bindTexture(r.TEXTURE_2D,ye.__webglTexture),Te(r.TEXTURE_2D,Ee,Q),Ge(q.__webglFramebuffer,w,Ee,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D),A(Ee,Q)&&D(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?se=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,te.__webglTexture),Te(se,S,Q),Ge(q.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,se),A(S,Q)&&D(se),t.unbindTexture()}w.depthBuffer&&be(w)}function Ze(w){const S=y(w)||o,q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ie=q.length;te<ie;te++){const C=q[te];if(A(C,S)){const Q=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,se=n.get(C).__webglTexture;t.bindTexture(Q,se),D(Q),t.unbindTexture()}}}function ze(w){if(o&&w.samples>0&&je(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],q=w.width,te=w.height;let ie=r.COLOR_BUFFER_BIT;const C=[],Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=n.get(w),V=w.isWebGLMultipleRenderTargets===!0;if(V)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){C.push(r.COLOR_ATTACHMENT0+fe),w.depthBuffer&&C.push(Q);const Ee=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ee===!1&&(w.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),V&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[fe]),Ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Q]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Q])),V){const ye=n.get(S[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,q,te,0,0,q,te,ie,r.NEAREST),g&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,C)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),V)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,se.__webglColorRenderbuffer[fe]);const Ee=n.get(S[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Me(w){return Math.min(u,w.samples)}function je(w){const S=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(w){const S=a.render.frame;p.get(w)!==S&&(p.set(w,S),w.update())}function lt(w,S){const q=w.colorSpace,te=w.format,ie=w.type;return w.isCompressedTexture===!0||w.format===bs||q!==on&&q!==Jn&&(q===He?o===!1?e.has("EXT_sRGB")===!0&&te===Qt?(w.format=bs,w.minFilter=Ht,w.generateMipmaps=!1):S=Io.sRGBToLinear(S):(te!==Qt||ie!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=Se,this.setTexture3D=B,this.setTextureCube=ne,this.rebindTextures=Oe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=je}function lp(r,e,t){const n=t.isWebGL2;function i(s,a=Jn){let o;if(s===Nn)return r.UNSIGNED_BYTE;if(s===Ao)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wo)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Gl)return r.BYTE;if(s===Vl)return r.SHORT;if(s===Us)return r.UNSIGNED_SHORT;if(s===To)return r.INT;if(s===Pn)return r.UNSIGNED_INT;if(s===Dn)return r.FLOAT;if(s===Yi)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wl)return r.ALPHA;if(s===Qt)return r.RGBA;if(s===Xl)return r.LUMINANCE;if(s===ql)return r.LUMINANCE_ALPHA;if(s===Kn)return r.DEPTH_COMPONENT;if(s===Ii)return r.DEPTH_STENCIL;if(s===bs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Yl)return r.RED;if(s===Ro)return r.RED_INTEGER;if(s===$l)return r.RG;if(s===Co)return r.RG_INTEGER;if(s===Lo)return r.RGBA_INTEGER;if(s===zr||s===Br||s===Hr||s===Gr)if(a===He)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===zr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===zr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vs||s===Ws||s===Xs||s===qs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ws)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ys||s===$s)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ys)return a===He?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===$s)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===js||s===Ks||s===Zs||s===Js||s===Qs||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===la)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===js)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ks)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Js)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qs)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ea)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ta)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===na)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ia)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ra)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===aa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oa)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===la)return a===He?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Vr)return a===He?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Kl||s===ca||s===ua||s===da)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Vr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ca)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ua)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===da)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jn?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class cp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mr extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),g=.02,p=.005;c.inputState.pinching&&h>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(up)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dp extends Ft{constructor(e,t,n,i,s,a,o,l,c,d){if(d=d!==void 0?d:Kn,d!==Kn&&d!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Kn&&(n=Pn),n===void 0&&d===Ii&&(n=jn),super(null,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hp extends ni{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,g=null,p=null;const v=t.getContextAttributes();let m=null,f=null;const M=[],_=[];let y=null;const E=new Gt;E.layers.enable(1),E.viewport=new St;const A=new Gt;A.layers.enable(2),A.viewport=new St;const D=[E,A],U=new cp;U.layers.enable(1),U.layers.enable(2);let x=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(B){y=B},this.getController=function(B){let ne=M[B];return ne===void 0&&(ne=new fs,M[B]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(B){let ne=M[B];return ne===void 0&&(ne=new fs,M[B]=ne),ne.getGripSpace()},this.getHand=function(B){let ne=M[B];return ne===void 0&&(ne=new fs,M[B]=ne),ne.getHandSpace()};function W(B){const ne=_.indexOf(B.inputSource);if(ne===-1)return;const re=M[ne];re!==void 0&&(re.update(B.inputSource,B.frame,c||a),re.dispatchEvent({type:B.type,data:B.inputSource}))}function Z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",R);for(let B=0;B<M.length;B++){const ne=_[B];ne!==null&&(_[B]=null,M[B].disconnect(ne))}x=null,T=null,e.setRenderTarget(m),g=null,h=null,u=null,i=null,f=null,Se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:g}),f=new Qn(g.framebufferWidth,g.framebufferHeight,{format:Qt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,re=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?Ii:Kn,re=v.stencil?jn:Pn);const me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(me),i.updateRenderState({layers:[h]}),f=new Qn(h.textureWidth,h.textureHeight,{format:Qt,type:Nn,depthTexture:new dp(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(B){for(let ne=0;ne<B.removed.length;ne++){const re=B.removed[ne],he=_.indexOf(re);he>=0&&(_[he]=null,M[he].disconnect(re))}for(let ne=0;ne<B.added.length;ne++){const re=B.added[ne];let he=_.indexOf(re);if(he===-1){for(let Te=0;Te<M.length;Te++)if(Te>=_.length){_.push(re),he=Te;break}else if(_[Te]===null){_[Te]=re,he=Te;break}if(he===-1)break}const me=M[he];me&&me.connect(re)}}const N=new z,H=new z;function J(B,ne,re){N.setFromMatrixPosition(ne.matrixWorld),H.setFromMatrixPosition(re.matrixWorld);const he=N.distanceTo(H),me=ne.projectionMatrix.elements,Te=re.projectionMatrix.elements,ke=me[14]/(me[10]-1),De=me[14]/(me[10]+1),st=(me[9]+1)/me[5],Ge=(me[9]-1)/me[5],F=(me[8]-1)/me[0],at=(Te[8]+1)/Te[0],be=ke*F,Oe=ke*at,Ae=he/(-F+at),Ze=Ae*-F;ne.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ze),B.translateZ(Ae),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ze=ke+Ae,Me=De+Ae,je=be-Ze,ot=Oe+(he-Ze),lt=st*De/Me*ze,w=Ge*De/Me*ze;B.projectionMatrix.makePerspective(je,ot,lt,w,ze,Me),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function X(B,ne){ne===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ne.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCameraXR=function(B){if(i===null)return B;y&&(B=y),U.near=A.near=E.near=B.near,U.far=A.far=E.far=B.far,(x!==U.near||T!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),x=U.near,T=U.far);const ne=B.parent,re=U.cameras;X(U,ne);for(let he=0;he<re.length;he++)X(re[he],ne);return re.length===2?J(U,E,A):U.projectionMatrix.copy(E.projectionMatrix),y&&$(U,ne),U};function $(B,ne){const re=y;ne===null?re.matrix.copy(B.matrixWorld):(re.matrix.copy(ne.matrixWorld),re.matrix.invert(),re.matrix.multiply(B.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0);const he=re.children;for(let me=0,Te=he.length;me<Te;me++)he[me].updateMatrixWorld(!0);re.projectionMatrix.copy(B.projectionMatrix),re.projectionMatrixInverse.copy(B.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ts*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=B)};let ee=null;function K(B,ne){if(d=ne.getViewerPose(c||a),p=ne,d!==null){const re=d.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let he=!1;re.length!==U.cameras.length&&(U.cameras.length=0,he=!0);for(let me=0;me<re.length;me++){const Te=re[me];let ke=null;if(g!==null)ke=g.getViewport(Te);else{const st=u.getViewSubImage(h,Te);ke=st.viewport,me===0&&(e.setRenderTargetTextures(f,st.colorTexture,h.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(f))}let De=D[me];De===void 0&&(De=new Gt,De.layers.enable(me),De.viewport=new St,D[me]=De),De.matrix.fromArray(Te.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Te.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ke.x,ke.y,ke.width,ke.height),me===0&&(U.matrix.copy(De.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),he===!0&&U.cameras.push(De)}}for(let re=0;re<M.length;re++){const he=_[re],me=M[re];he!==null&&me!==void 0&&me.update(he,ne,c||a)}ee&&ee(B,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const Se=new Yo;Se.setAnimationLoop(K),this.setAnimationLoop=function(B){ee=B},this.dispose=function(){}}}function fp(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vo(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&g(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),p(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pp(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){const y=_.program;n.uniformBlockBinding(M,y)}function c(M,_){let y=i[M.id];y===void 0&&(p(M),y=d(M),i[M.id]=y,M.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(M,E);const A=e.render.frame;s[M.id]!==A&&(h(M),s[M.id]=A)}function d(M){const _=u();M.__bindingPointIndex=_;const y=r.createBuffer(),E=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const _=i[M.id],y=M.uniforms,E=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let A=0,D=y.length;A<D;A++){const U=y[A];if(g(U,A,E)===!0){const x=U.__offset,T=Array.isArray(U.value)?U.value:[U.value];let W=0;for(let Z=0;Z<T.length;Z++){const R=T[Z],N=v(R);typeof R=="number"?(U.__data[0]=R,r.bufferSubData(r.UNIFORM_BUFFER,x+W,U.__data)):R.isMatrix3?(U.__data[0]=R.elements[0],U.__data[1]=R.elements[1],U.__data[2]=R.elements[2],U.__data[3]=R.elements[0],U.__data[4]=R.elements[3],U.__data[5]=R.elements[4],U.__data[6]=R.elements[5],U.__data[7]=R.elements[0],U.__data[8]=R.elements[6],U.__data[9]=R.elements[7],U.__data[10]=R.elements[8],U.__data[11]=R.elements[0]):(R.toArray(U.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,U.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(M,_,y){const E=M.value;if(y[_]===void 0){if(typeof E=="number")y[_]=E;else{const A=Array.isArray(E)?E:[E],D=[];for(let U=0;U<A.length;U++)D.push(A[U].clone());y[_]=D}return!0}else if(typeof E=="number"){if(y[_]!==E)return y[_]=E,!0}else{const A=Array.isArray(y[_])?y[_]:[y[_]],D=Array.isArray(E)?E:[E];for(let U=0;U<A.length;U++){const x=A[U];if(x.equals(D[U])===!1)return x.copy(D[U]),!0}}return!1}function p(M){const _=M.uniforms;let y=0;const E=16;let A=0;for(let D=0,U=_.length;D<U;D++){const x=_[D],T={boundary:0,storage:0},W=Array.isArray(x.value)?x.value:[x.value];for(let Z=0,R=W.length;Z<R;Z++){const N=W[Z],H=v(N);T.boundary+=H.boundary,T.storage+=H.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=y,D>0){A=y%E;const Z=E-A;A!==0&&Z-T.boundary<0&&(y+=E-A,x.__offset=y)}y+=T.storage}return A=y%E,A>0&&(y+=E-A),M.__size=y,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:f}}function mp(){const r=Lr("canvas");return r.style.display="block",r}class Jo{constructor(e={}){const{canvas:t=mp(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const g=new Uint32Array(4),p=new Int32Array(4);let v=null,m=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=yn,this.toneMappingExposure=1;const _=this;let y=!1,E=0,A=0,D=null,U=-1,x=null;const T=new St,W=new St;let Z=null;const R=new et(0);let N=0,H=t.width,J=t.height,X=1,$=null,ee=null;const K=new St(0,0,H,J),Se=new St(0,0,H,J);let B=!1;const ne=new qo;let re=!1,he=!1,me=null;const Te=new yt,ke=new qe,De=new z,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return D===null?X:1}let F=n;function at(b,O){for(let Y=0;Y<b.length;Y++){const I=b[Y],j=t.getContext(I,O);if(j!==null)return j}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),F=at(O,b),F===null)throw at(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let be,Oe,Ae,Ze,ze,Me,je,ot,lt,w,S,q,te,ie,C,Q,se,V,fe,Ee,ye,xe,ge,we;function Ve(){be=new Th(F),Oe=new _h(F,be,e),be.init(Oe),xe=new lp(F,be,Oe),Ae=new ap(F,be,Oe),Ze=new Rh(F),ze=new qf,Me=new op(F,be,Ae,ze,Oe,xe,Ze),je=new yh(_),ot=new bh(_),lt=new zc(F,Oe),ge=new gh(F,be,lt,Oe),w=new Ah(F,lt,Ze,ge),S=new Dh(F,w,lt,Ze),fe=new Ph(F,Oe,Me),Q=new xh(ze),q=new Xf(_,je,ot,be,Oe,ge,Q),te=new fp(_,ze),ie=new $f,C=new ep(be,Oe),V=new mh(_,je,ot,Ae,S,h,l),se=new sp(_,S,Oe),we=new pp(F,Ze,Oe,Ae),Ee=new vh(F,be,Ze,Oe),ye=new wh(F,be,Ze,Oe),Ze.programs=q.programs,_.capabilities=Oe,_.extensions=be,_.properties=ze,_.renderLists=ie,_.shadowMap=se,_.state=Ae,_.info=Ze}Ve();const P=new hp(_,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(H,J,!1))},this.getSize=function(b){return b.set(H,J)},this.setSize=function(b,O,Y=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,J=O,t.width=Math.floor(b*X),t.height=Math.floor(O*X),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(H*X,J*X).floor()},this.setDrawingBufferSize=function(b,O,Y){H=b,J=O,X=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,O,Y,I){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,O,Y,I),Ae.viewport(T.copy(K).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(Se)},this.setScissor=function(b,O,Y,I){b.isVector4?Se.set(b.x,b.y,b.z,b.w):Se.set(b,O,Y,I),Ae.scissor(W.copy(Se).multiplyScalar(X).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(b){Ae.setScissorTest(B=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(b=!0,O=!0,Y=!0){let I=0;if(b){let j=!1;if(D!==null){const ve=D.texture.format;j=ve===Lo||ve===Co||ve===Ro}if(j){const ve=D.texture.type,Re=ve===Nn||ve===Pn||ve===Us||ve===jn||ve===Ao||ve===wo,Ce=V.getClearColor(),Ue=V.getClearAlpha(),Be=Ce.r,Ie=Ce.g,Fe=Ce.b,Je=ze.get(D).__webglFramebuffer;Re?(g[0]=Be,g[1]=Ie,g[2]=Fe,g[3]=Ue,F.clearBufferuiv(F.COLOR,Je,g)):(p[0]=Be,p[1]=Ie,p[2]=Fe,p[3]=Ue,F.clearBufferiv(F.COLOR,Je,p))}else I|=F.COLOR_BUFFER_BIT}O&&(I|=F.DEPTH_BUFFER_BIT),Y&&(I|=F.STENCIL_BUFFER_BIT),F.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ie.dispose(),C.dispose(),ze.dispose(),je.dispose(),ot.dispose(),S.dispose(),ge.dispose(),we.dispose(),q.dispose(),P.dispose(),P.removeEventListener("sessionstart",tt),P.removeEventListener("sessionend",Pt),me&&(me.dispose(),me=null),gt.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Ze.autoReset,O=se.enabled,Y=se.autoUpdate,I=se.needsUpdate,j=se.type;Ve(),Ze.autoReset=b,se.enabled=O,se.autoUpdate=Y,se.needsUpdate=I,se.type=j}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){const O=b.target;O.removeEventListener("dispose",le),$e(O)}function $e(b){it(b),ze.remove(b)}function it(b){const O=ze.get(b).programs;O!==void 0&&(O.forEach(function(Y){q.releaseProgram(Y)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,I,j,ve){O===null&&(O=st);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Ce=Qi(b,O,Y,I,j);Ae.setMaterial(I,Re);let Ue=Y.index,Be=1;I.wireframe===!0&&(Ue=w.getWireframeAttribute(Y),Be=2);const Ie=Y.drawRange,Fe=Y.attributes.position;let Je=Ie.start*Be,nt=(Ie.start+Ie.count)*Be;ve!==null&&(Je=Math.max(Je,ve.start*Be),nt=Math.min(nt,(ve.start+ve.count)*Be)),Ue!==null?(Je=Math.max(Je,0),nt=Math.min(nt,Ue.count)):Fe!=null&&(Je=Math.max(Je,0),nt=Math.min(nt,Fe.count));const Tt=nt-Je;if(Tt<0||Tt===1/0)return;ge.setup(j,I,Ce,Y,Ue);let Ot,rt=Ee;if(Ue!==null&&(Ot=lt.get(Ue),rt=ye,rt.setIndex(Ot)),j.isMesh)I.wireframe===!0?(Ae.setLineWidth(I.wireframeLinewidth*Ge()),rt.setMode(F.LINES)):rt.setMode(F.TRIANGLES);else if(j.isLine){let Ye=I.linewidth;Ye===void 0&&(Ye=1),Ae.setLineWidth(Ye*Ge()),j.isLineSegments?rt.setMode(F.LINES):j.isLineLoop?rt.setMode(F.LINE_LOOP):rt.setMode(F.LINE_STRIP)}else j.isPoints?rt.setMode(F.POINTS):j.isSprite&&rt.setMode(F.TRIANGLES);if(j.isInstancedMesh)rt.renderInstances(Je,Tt,j.count);else if(Y.isInstancedBufferGeometry){const Ye=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,si=Math.min(Y.instanceCount,Ye);rt.renderInstances(Je,Tt,si)}else rt.render(Je,Tt)},this.compile=function(b,O){function Y(I,j,ve){I.transparent===!0&&I.side===_n&&I.forceSinglePass===!1?(I.side=Ct,I.needsUpdate=!0,En(I,j,ve),I.side=On,I.needsUpdate=!0,En(I,j,ve),I.side=_n):En(I,j,ve)}m=C.get(b),m.init(),M.push(m),b.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(_.useLegacyLights),b.traverse(function(I){const j=I.material;if(j)if(Array.isArray(j))for(let ve=0;ve<j.length;ve++){const Re=j[ve];Y(Re,b,I)}else Y(j,b,I)}),M.pop(),m=null};let ct=null;function Xt(b){ct&&ct(b)}function tt(){gt.stop()}function Pt(){gt.start()}const gt=new Yo;gt.setAnimationLoop(Xt),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(b){ct=b,P.setAnimationLoop(b),b===null?gt.stop():gt.start()},P.addEventListener("sessionstart",tt),P.addEventListener("sessionend",Pt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(O=P.updateCameraXR(O)),b.isScene===!0&&b.onBeforeRender(_,b,O,D),m=C.get(b,M.length),m.init(),M.push(m),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(Te),he=this.localClippingEnabled,re=Q.init(this.clippingPlanes,he),v=ie.get(b,f.length),v.init(),f.push(v),ii(b,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort($,ee),re===!0&&Q.beginShadows();const Y=m.state.shadowsArray;if(se.render(Y,b,O),re===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,V.render(v,b),m.setupLights(_.useLegacyLights),O.isArrayCamera){const I=O.cameras;for(let j=0,ve=I.length;j<ve;j++){const Re=I[j];kt(v,b,Re,Re.viewport)}}else kt(v,b,O);D!==null&&(Me.updateMultisampleRenderTarget(D),Me.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(_,b,O),ge.resetDefaultState(),U=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ii(b,O,Y,I){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){I&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const Re=S.update(b),Ce=b.material;Ce.visible&&v.push(b,Re,Ce,Y,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){b.isSkinnedMesh&&b.skeleton.frame!==Ze.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ze.render.frame);const Re=S.update(b),Ce=b.material;if(I&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),De.copy(Re.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(Ce)){const Ue=Re.groups;for(let Be=0,Ie=Ue.length;Be<Ie;Be++){const Fe=Ue[Be],Je=Ce[Fe.materialIndex];Je&&Je.visible&&v.push(b,Re,Je,Y,De.z,Fe)}}else Ce.visible&&v.push(b,Re,Ce,Y,De.z,null)}}const ve=b.children;for(let Re=0,Ce=ve.length;Re<Ce;Re++)ii(ve[Re],O,Y,I)}function kt(b,O,Y,I){const j=b.opaque,ve=b.transmissive,Re=b.transparent;m.setupLightsView(Y),re===!0&&Q.setGlobalState(_.clippingPlanes,Y),ve.length>0&&Ji(j,ve,O,Y),I&&Ae.viewport(T.copy(I)),j.length>0&&ri(j,O,Y),ve.length>0&&ri(ve,O,Y),Re.length>0&&ri(Re,O,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ji(b,O,Y,I){const j=Oe.isWebGL2;me===null&&(me=new Qn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Yi:Nn,minFilter:qi,samples:j&&o===!0?4:0})),_.getDrawingBufferSize(ke),j?me.setSize(ke.x,ke.y):me.setSize(As(ke.x),As(ke.y));const ve=_.getRenderTarget();_.setRenderTarget(me),_.getClearColor(R),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const Re=_.toneMapping;_.toneMapping=yn,ri(b,Y,I),Me.updateMultisampleRenderTarget(me),Me.updateRenderTargetMipmap(me);let Ce=!1;for(let Ue=0,Be=O.length;Ue<Be;Ue++){const Ie=O[Ue],Fe=Ie.object,Je=Ie.geometry,nt=Ie.material,Tt=Ie.group;if(nt.side===_n&&Fe.layers.test(I.layers)){const Ot=nt.side;nt.side=Ct,nt.needsUpdate=!0,Oi(Fe,Y,I,Je,nt,Tt),nt.side=Ot,nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(Me.updateMultisampleRenderTarget(me),Me.updateRenderTargetMipmap(me)),_.setRenderTarget(ve),_.setClearColor(R,N),_.toneMapping=Re}function ri(b,O,Y){const I=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ve=b.length;j<ve;j++){const Re=b[j],Ce=Re.object,Ue=Re.geometry,Be=I===null?Re.material:I,Ie=Re.group;Ce.layers.test(Y.layers)&&Oi(Ce,O,Y,Ue,Be,Ie)}}function Oi(b,O,Y,I,j,ve){b.onBeforeRender(_,O,Y,I,j,ve),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(_,O,Y,I,b,ve),j.transparent===!0&&j.side===_n&&j.forceSinglePass===!1?(j.side=Ct,j.needsUpdate=!0,_.renderBufferDirect(Y,O,I,j,b,ve),j.side=On,j.needsUpdate=!0,_.renderBufferDirect(Y,O,I,j,b,ve),j.side=_n):_.renderBufferDirect(Y,O,I,j,b,ve),b.onAfterRender(_,O,Y,I,j,ve)}function En(b,O,Y){O.isScene!==!0&&(O=st);const I=ze.get(b),j=m.state.lights,ve=m.state.shadowsArray,Re=j.state.version,Ce=q.getParameters(b,j.state,ve,O,Y),Ue=q.getProgramCacheKey(Ce);let Be=I.programs;I.environment=b.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(b.isMeshStandardMaterial?ot:je).get(b.envMap||I.environment),Be===void 0&&(b.addEventListener("dispose",le),Be=new Map,I.programs=Be);let Ie=Be.get(Ue);if(Ie!==void 0){if(I.currentProgram===Ie&&I.lightsStateVersion===Re)return qt(b,Ce),Ie}else Ce.uniforms=q.getUniforms(b),b.onBuild(Y,Ce,_),b.onBeforeCompile(Ce,_),Ie=q.acquireProgram(Ce,Ue),Be.set(Ue,Ie),I.uniforms=Ce.uniforms;const Fe=I.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Q.uniform),qt(b,Ce),I.needsLights=er(b),I.lightsStateVersion=Re,I.needsLights&&(Fe.ambientLightColor.value=j.state.ambient,Fe.lightProbe.value=j.state.probe,Fe.directionalLights.value=j.state.directional,Fe.directionalLightShadows.value=j.state.directionalShadow,Fe.spotLights.value=j.state.spot,Fe.spotLightShadows.value=j.state.spotShadow,Fe.rectAreaLights.value=j.state.rectArea,Fe.ltc_1.value=j.state.rectAreaLTC1,Fe.ltc_2.value=j.state.rectAreaLTC2,Fe.pointLights.value=j.state.point,Fe.pointLightShadows.value=j.state.pointShadow,Fe.hemisphereLights.value=j.state.hemi,Fe.directionalShadowMap.value=j.state.directionalShadowMap,Fe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Fe.spotShadowMap.value=j.state.spotShadowMap,Fe.spotLightMatrix.value=j.state.spotLightMatrix,Fe.spotLightMap.value=j.state.spotLightMap,Fe.pointShadowMap.value=j.state.pointShadowMap,Fe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Je=Ie.getUniforms(),nt=wr.seqWithValue(Je.seq,Fe);return I.currentProgram=Ie,I.uniformsList=nt,Ie}function qt(b,O){const Y=ze.get(b);Y.outputColorSpace=O.outputColorSpace,Y.instancing=O.instancing,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Qi(b,O,Y,I,j){O.isScene!==!0&&(O=st),Me.resetTextureUnits();const ve=O.fog,Re=I.isMeshStandardMaterial?O.environment:null,Ce=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:on,Ue=(I.isMeshStandardMaterial?ot:je).get(I.envMap||Re),Be=I.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!Y.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Fe=!!Y.morphAttributes.position,Je=!!Y.morphAttributes.normal,nt=!!Y.morphAttributes.color,Tt=I.toneMapped?_.toneMapping:yn,Ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rt=Ot!==void 0?Ot.length:0,Ye=ze.get(I),si=m.state.lights;if(re===!0&&(he===!0||b!==x)){const L=b===x&&I.id===U;Q.setState(I,b,L)}let ut=!1;I.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==si.state.version||Ye.outputColorSpace!==Ce||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Ue||I.fog===!0&&Ye.fog!==ve||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Q.numPlanes||Ye.numIntersection!==Q.numIntersection)||Ye.vertexAlphas!==Be||Ye.vertexTangents!==Ie||Ye.morphTargets!==Fe||Ye.morphNormals!==Je||Ye.morphColors!==nt||Ye.toneMapping!==Tt||Oe.isWebGL2===!0&&Ye.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,Ye.__version=I.version);let rn=Ye.currentProgram;ut===!0&&(rn=En(I,O,j));let zi=!1,Mn=!1,bn=!1;const vt=rn.getUniforms(),ln=Ye.uniforms;if(Ae.useProgram(rn.program)&&(zi=!0,Mn=!0,bn=!0),I.id!==U&&(U=I.id,Mn=!0),zi||x!==b){if(vt.setValue(F,"projectionMatrix",b.projectionMatrix),Oe.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),x!==b&&(x=b,Mn=!0,bn=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const L=vt.map.cameraPosition;L!==void 0&&L.setValue(F,De.setFromMatrixPosition(b.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&vt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||j.isSkinnedMesh)&&vt.setValue(F,"viewMatrix",b.matrixWorldInverse)}if(j.isSkinnedMesh){vt.setOptional(F,j,"bindMatrix"),vt.setOptional(F,j,"bindMatrixInverse");const L=j.skeleton;L&&(Oe.floatVertexTextures?(L.boneTexture===null&&L.computeBoneTexture(),vt.setValue(F,"boneTexture",L.boneTexture,Me),vt.setValue(F,"boneTextureSize",L.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ai=Y.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0&&Oe.isWebGL2===!0)&&fe.update(j,Y,rn),(Mn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,vt.setValue(F,"receiveShadow",j.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ln.envMap.value=Ue,ln.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Mn&&(vt.setValue(F,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&kr(ln,bn),ve&&I.fog===!0&&te.refreshFogUniforms(ln,ve),te.refreshMaterialUniforms(ln,I,X,J,me),wr.upload(F,Ye.uniformsList,ln,Me)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(wr.upload(F,Ye.uniformsList,ln,Me),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&vt.setValue(F,"center",j.center),vt.setValue(F,"modelViewMatrix",j.modelViewMatrix),vt.setValue(F,"normalMatrix",j.normalMatrix),vt.setValue(F,"modelMatrix",j.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const L=I.uniformsGroups;for(let k=0,oe=L.length;k<oe;k++)if(Oe.isWebGL2){const ae=L[k];we.update(ae,rn),we.bind(ae,rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rn}function kr(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function er(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,O,Y){ze.get(b.texture).__webglTexture=O,ze.get(b.depthTexture).__webglTexture=Y;const I=ze.get(b);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=Y===void 0,I.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const Y=ze.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){D=b,E=O,A=Y;let I=!0,j=null,ve=!1,Re=!1;if(b){const Ue=ze.get(b);Ue.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(F.FRAMEBUFFER,null),I=!1):Ue.__webglFramebuffer===void 0?Me.setupRenderTarget(b):Ue.__hasExternalTextures&&Me.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Re=!0);const Ie=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(j=Ie[O],ve=!0):Oe.isWebGL2&&b.samples>0&&Me.useMultisampledRTT(b)===!1?j=ze.get(b).__webglMultisampledFramebuffer:j=Ie,T.copy(b.viewport),W.copy(b.scissor),Z=b.scissorTest}else T.copy(K).multiplyScalar(X).floor(),W.copy(Se).multiplyScalar(X).floor(),Z=B;if(Ae.bindFramebuffer(F.FRAMEBUFFER,j)&&Oe.drawBuffers&&I&&Ae.drawBuffers(b,j),Ae.viewport(T),Ae.scissor(W),Ae.setScissorTest(Z),ve){const Ue=ze.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,Y)}else if(Re){const Ue=ze.get(b.texture),Be=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,Be)}U=-1},this.readRenderTargetPixels=function(b,O,Y,I,j,ve,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){Ae.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Ue=b.texture,Be=Ue.format,Ie=Ue.type;if(Be!==Qt&&xe.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===Yi&&(be.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ie!==Nn&&xe.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Dn&&(Oe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-I&&Y>=0&&Y<=b.height-j&&F.readPixels(O,Y,I,j,xe.convert(Be),xe.convert(Ie),ve)}finally{const Ue=D!==null?ze.get(D).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(b,O,Y=0){const I=Math.pow(2,-Y),j=Math.floor(O.image.width*I),ve=Math.floor(O.image.height*I);Me.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,b.x,b.y,j,ve),Ae.unbindTexture()},this.copyTextureToTexture=function(b,O,Y,I=0){const j=O.image.width,ve=O.image.height,Re=xe.convert(Y.format),Ce=xe.convert(Y.type);Me.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,I,b.x,b.y,j,ve,Re,Ce,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,I,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Re,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,I,b.x,b.y,Re,Ce,O.image),I===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Y,I,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,Re=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,Ue=xe.convert(I.format),Be=xe.convert(I.type);let Ie;if(I.isData3DTexture)Me.setTexture3D(I,0),Ie=F.TEXTURE_3D;else if(I.isDataArrayTexture)Me.setTexture2DArray(I,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),Je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nt=F.getParameter(F.UNPACK_SKIP_PIXELS),Tt=F.getParameter(F.UNPACK_SKIP_ROWS),Ot=F.getParameter(F.UNPACK_SKIP_IMAGES),rt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,rt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(Ie,j,O.x,O.y,O.z,ve,Re,Ce,Ue,Be,rt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ie,j,O.x,O.y,O.z,ve,Re,Ce,Ue,rt.data)):F.texSubImage3D(Ie,j,O.x,O.y,O.z,ve,Re,Ce,Ue,Be,rt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot),j===0&&I.generateMipmaps&&F.generateMipmap(Ie),Ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Me.setTextureCube(b,0):b.isData3DTexture?Me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Me.setTexture2DArray(b,0):Me.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){E=0,A=0,D=null,Ae.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Zn:Po}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?He:on}}class gp extends Jo{}gp.prototype.isWebGL1Renderer=!0;class vp extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Qo extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ja=new yt,Rs=new ko,br=new Ir,Tr=new z;class _p extends Lt{constructor(e=new Sn,t=new Qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=s,e.ray.intersectsSphere(br)===!1)return;Ja.copy(i).invert(),Rs.copy(e.ray).applyMatrix4(Ja);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let p=h,v=g;p<v;p++){const m=c.getX(p);Tr.fromBufferAttribute(u,m),Qa(Tr,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let p=h,v=g;p<v;p++)Tr.fromBufferAttribute(u,p),Qa(Tr,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qa(r,e,t,n,i,s,a){const o=Rs.distanceSqToPoint(r);if(o<t){const l=new z;Rs.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const eo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xp{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const g=c[u],p=c[u+1];if(g.global&&(g.lastIndex=0),g.test(d))return p}return null}}}const yp=new xp;class el{constructor(e){this.manager=e!==void 0?e:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const gn={};class Sp extends Error{constructor(e,t){super(e),this.response=t}}class Ep extends el{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=eo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gn[e]!==void 0){gn[e].push({onLoad:t,onProgress:n,onError:i});return}gn[e]=[],gn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=gn[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),g=h?parseInt(h):0,p=g!==0;let v=0;const m=new ReadableStream({start(f){M();function M(){u.read().then(({done:_,value:y})=>{if(_)f.close();else{v+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:g});for(let A=0,D=d.length;A<D;A++){const U=d[A];U.onProgress&&U.onProgress(E)}f.enqueue(y),M()}})}}});return new Response(m)}else throw new Sp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,g=new TextDecoder(h);return c.arrayBuffer().then(p=>g.decode(p))}}}).then(c=>{eo.add(e,c);const d=gn[e];delete gn[e];for(let u=0,h=d.length;u<h;u++){const g=d[u];g.onLoad&&g.onLoad(c)}}).catch(c=>{const d=gn[e];if(d===void 0)throw this.manager.itemError(e),c;delete gn[e];for(let u=0,h=d.length;u<h;u++){const g=d[u];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class to{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);const no={type:"change"},ps={type:"start"},io={type:"end"};class Mp extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",je),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(no),n.update(),s=i.NONE},this.update=function(){const C=new z,Q=new ei().setFromUnitVectors(e.up,new z(0,1,0)),se=Q.clone().invert(),V=new z,fe=new ei,Ee=new z,ye=2*Math.PI;return function(){const ge=n.object.position;C.copy(ge).sub(n.target),C.applyQuaternion(Q),o.setFromVector3(C),n.autoRotate&&s===i.NONE&&x(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let we=n.minAzimuthAngle,Ve=n.maxAzimuthAngle;return isFinite(we)&&isFinite(Ve)&&(we<-Math.PI?we+=ye:we>Math.PI&&(we-=ye),Ve<-Math.PI?Ve+=ye:Ve>Math.PI&&(Ve-=ye),we<=Ve?o.theta=Math.max(we,Math.min(Ve,o.theta)):o.theta=o.theta>(we+Ve)/2?Math.max(we,o.theta):Math.min(Ve,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),C.setFromSpherical(o),C.applyQuaternion(se),ge.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),c=1,u||V.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a||Ee.distanceToSquared(n.target)>0?(n.dispatchEvent(no),V.copy(n.object.position),fe.copy(n.object.quaternion),Ee.copy(n.target),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",be),n.domElement.removeEventListener("pointercancel",Ae),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",Oe),n.domElement.removeEventListener("pointerup",Ae),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",je),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new to,l=new to;let c=1;const d=new z;let u=!1;const h=new qe,g=new qe,p=new qe,v=new qe,m=new qe,f=new qe,M=new qe,_=new qe,y=new qe,E=[],A={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function U(){return Math.pow(.95,n.zoomSpeed)}function x(C){l.theta-=C}function T(C){l.phi-=C}const W=function(){const C=new z;return function(se,V){C.setFromMatrixColumn(V,0),C.multiplyScalar(-se),d.add(C)}}(),Z=function(){const C=new z;return function(se,V){n.screenSpacePanning===!0?C.setFromMatrixColumn(V,1):(C.setFromMatrixColumn(V,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(se),d.add(C)}}(),R=function(){const C=new z;return function(se,V){const fe=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;C.copy(Ee).sub(n.target);let ye=C.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),W(2*se*ye/fe.clientHeight,n.object.matrix),Z(2*V*ye/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(se*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),Z(V*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(C){h.set(C.clientX,C.clientY)}function X(C){M.set(C.clientX,C.clientY)}function $(C){v.set(C.clientX,C.clientY)}function ee(C){g.set(C.clientX,C.clientY),p.subVectors(g,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;x(2*Math.PI*p.x/Q.clientHeight),T(2*Math.PI*p.y/Q.clientHeight),h.copy(g),n.update()}function K(C){_.set(C.clientX,C.clientY),y.subVectors(_,M),y.y>0?N(U()):y.y<0&&H(U()),M.copy(_),n.update()}function Se(C){m.set(C.clientX,C.clientY),f.subVectors(m,v).multiplyScalar(n.panSpeed),R(f.x,f.y),v.copy(m),n.update()}function B(C){C.deltaY<0?H(U()):C.deltaY>0&&N(U()),n.update()}function ne(C){let Q=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),Q=!0;break}Q&&(C.preventDefault(),n.update())}function re(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),Q=.5*(E[0].pageY+E[1].pageY);h.set(C,Q)}}function he(){if(E.length===1)v.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),Q=.5*(E[0].pageY+E[1].pageY);v.set(C,Q)}}function me(){const C=E[0].pageX-E[1].pageX,Q=E[0].pageY-E[1].pageY,se=Math.sqrt(C*C+Q*Q);M.set(0,se)}function Te(){n.enableZoom&&me(),n.enablePan&&he()}function ke(){n.enableZoom&&me(),n.enableRotate&&re()}function De(C){if(E.length==1)g.set(C.pageX,C.pageY);else{const se=ie(C),V=.5*(C.pageX+se.x),fe=.5*(C.pageY+se.y);g.set(V,fe)}p.subVectors(g,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;x(2*Math.PI*p.x/Q.clientHeight),T(2*Math.PI*p.y/Q.clientHeight),h.copy(g)}function st(C){if(E.length===1)m.set(C.pageX,C.pageY);else{const Q=ie(C),se=.5*(C.pageX+Q.x),V=.5*(C.pageY+Q.y);m.set(se,V)}f.subVectors(m,v).multiplyScalar(n.panSpeed),R(f.x,f.y),v.copy(m)}function Ge(C){const Q=ie(C),se=C.pageX-Q.x,V=C.pageY-Q.y,fe=Math.sqrt(se*se+V*V);_.set(0,fe),y.set(0,Math.pow(_.y/M.y,n.zoomSpeed)),N(y.y),M.copy(_)}function F(C){n.enableZoom&&Ge(C),n.enablePan&&st(C)}function at(C){n.enableZoom&&Ge(C),n.enableRotate&&De(C)}function be(C){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Oe),n.domElement.addEventListener("pointerup",Ae)),S(C),C.pointerType==="touch"?ot(C):Ze(C))}function Oe(C){n.enabled!==!1&&(C.pointerType==="touch"?lt(C):ze(C))}function Ae(C){q(C),E.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Oe),n.domElement.removeEventListener("pointerup",Ae)),n.dispatchEvent(io),s=i.NONE}function Ze(C){let Q;switch(C.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case oi.DOLLY:if(n.enableZoom===!1)return;X(C),s=i.DOLLY;break;case oi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;$(C),s=i.PAN}else{if(n.enableRotate===!1)return;J(C),s=i.ROTATE}break;case oi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;J(C),s=i.ROTATE}else{if(n.enablePan===!1)return;$(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ps)}function ze(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;Se(C);break}}function Me(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(ps),B(C),n.dispatchEvent(io))}function je(C){n.enabled===!1||n.enablePan===!1||ne(C)}function ot(C){switch(te(C),E.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;he(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),s=i.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ps)}function lt(C){switch(te(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;st(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;at(C),n.update();break;default:s=i.NONE}}function w(C){n.enabled!==!1&&C.preventDefault()}function S(C){E.push(C)}function q(C){delete A[C.pointerId];for(let Q=0;Q<E.length;Q++)if(E[Q].pointerId==C.pointerId){E.splice(Q,1);return}}function te(C){let Q=A[C.pointerId];Q===void 0&&(Q=new qe,A[C.pointerId]=Q),Q.set(C.pageX,C.pageY)}function ie(C){const Q=C.pointerId===E[0].pointerId?E[1]:E[0];return A[Q.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",be),n.domElement.addEventListener("pointercancel",Ae),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}}class bp extends el{constructor(e){super(e),this.littleEndian=!0}load(e,t,n,i){const s=this,a=new Ep(s.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){function t(p,v){const m=p.length,f=new Uint8Array(v);let M=0,_=0,y,E,A;do if(y=p[M++],y<32){if(y++,_+y>v)throw new Error("Output buffer is not large enough");if(M+y>m)throw new Error("Invalid compressed data");do f[_++]=p[M++];while(--y)}else{if(E=y>>5,A=_-((y&31)<<8)-1,M>=m)throw new Error("Invalid compressed data");if(E===7&&(E+=p[M++],M>=m))throw new Error("Invalid compressed data");if(A-=p[M++],_+E+2>v)throw new Error("Output buffer is not large enough");if(A<0)throw new Error("Invalid compressed data");if(A>=_)throw new Error("Invalid compressed data");do f[_++]=f[A++];while(--E+2)}while(M<m);return f}function n(p){const v={},m=p.search(/[\r\n]DATA\s(\S*)\s/i),f=/[\r\n]DATA\s(\S*)\s/i.exec(p.slice(m-1));if(v.data=f[1],v.headerLen=f[0].length+m,v.str=p.slice(0,v.headerLen),v.str=v.str.replace(/#.*/gi,""),v.version=/VERSION (.*)/i.exec(v.str),v.fields=/FIELDS (.*)/i.exec(v.str),v.size=/SIZE (.*)/i.exec(v.str),v.type=/TYPE (.*)/i.exec(v.str),v.count=/COUNT (.*)/i.exec(v.str),v.width=/WIDTH (.*)/i.exec(v.str),v.height=/HEIGHT (.*)/i.exec(v.str),v.viewpoint=/VIEWPOINT (.*)/i.exec(v.str),v.points=/POINTS (.*)/i.exec(v.str),v.version!==null&&(v.version=parseFloat(v.version[1])),v.fields=v.fields!==null?v.fields[1].split(" "):[],v.type!==null&&(v.type=v.type[1].split(" ")),v.width!==null&&(v.width=parseInt(v.width[1])),v.height!==null&&(v.height=parseInt(v.height[1])),v.viewpoint!==null&&(v.viewpoint=v.viewpoint[1]),v.points!==null&&(v.points=parseInt(v.points[1],10)),v.points===null&&(v.points=v.width*v.height),v.size!==null&&(v.size=v.size[1].split(" ").map(function(_){return parseInt(_,10)})),v.count!==null)v.count=v.count[1].split(" ").map(function(_){return parseInt(_,10)});else{v.count=[];for(let _=0,y=v.fields.length;_<y;_++)v.count.push(1)}v.offset={};let M=0;for(let _=0,y=v.fields.length;_<y;_++)v.data==="ascii"?v.offset[v.fields[_]]=_:(v.offset[v.fields[_]]=M,M+=v.size[_]*v.count[_]);return v.rowSize=M,v}const i=new TextDecoder().decode(e),s=n(i),a=[],o=[],l=[],c=[],d=[],u=new et;if(s.data==="ascii"){const p=s.offset,m=i.slice(s.headerLen).split(`
`);for(let f=0,M=m.length;f<M;f++){if(m[f]==="")continue;const _=m[f].split(" ");if(p.x!==void 0&&(a.push(parseFloat(_[p.x])),a.push(parseFloat(_[p.y])),a.push(parseFloat(_[p.z]))),p.rgb!==void 0){const y=s.fields.findIndex(W=>W==="rgb"),E=s.type[y],A=parseFloat(_[p.rgb]);let D=A;if(E==="F"){const W=new Float32Array(1);W[0]=A,D=new Int32Array(W.buffer)[0]}const U=(D>>16&255)/255,x=(D>>8&255)/255,T=(D>>0&255)/255;u.set(U,x,T).convertSRGBToLinear(),l.push(u.r,u.g,u.b)}p.normal_x!==void 0&&(o.push(parseFloat(_[p.normal_x])),o.push(parseFloat(_[p.normal_y])),o.push(parseFloat(_[p.normal_z]))),p.intensity!==void 0&&c.push(parseFloat(_[p.intensity])),p.label!==void 0&&d.push(parseInt(_[p.label]))}}if(s.data==="binary_compressed"){const p=new Uint32Array(e.slice(s.headerLen,s.headerLen+8)),v=p[0],m=p[1],f=t(new Uint8Array(e,s.headerLen+8,v),m),M=new DataView(f.buffer),_=s.offset;for(let y=0;y<s.points;y++){if(_.x!==void 0){const E=s.fields.indexOf("x"),A=s.fields.indexOf("y"),D=s.fields.indexOf("z");a.push(M.getFloat32(s.points*_.x+s.size[E]*y,this.littleEndian)),a.push(M.getFloat32(s.points*_.y+s.size[A]*y,this.littleEndian)),a.push(M.getFloat32(s.points*_.z+s.size[D]*y,this.littleEndian))}if(_.rgb!==void 0){const E=s.fields.indexOf("rgb"),A=M.getUint8(s.points*_.rgb+s.size[E]*y+2)/255,D=M.getUint8(s.points*_.rgb+s.size[E]*y+1)/255,U=M.getUint8(s.points*_.rgb+s.size[E]*y+0)/255;u.set(A,D,U).convertSRGBToLinear(),l.push(u.r,u.g,u.b)}if(_.normal_x!==void 0){const E=s.fields.indexOf("normal_x"),A=s.fields.indexOf("normal_y"),D=s.fields.indexOf("normal_z");o.push(M.getFloat32(s.points*_.normal_x+s.size[E]*y,this.littleEndian)),o.push(M.getFloat32(s.points*_.normal_y+s.size[A]*y,this.littleEndian)),o.push(M.getFloat32(s.points*_.normal_z+s.size[D]*y,this.littleEndian))}if(_.intensity!==void 0){const E=s.fields.indexOf("intensity");c.push(M.getFloat32(s.points*_.intensity+s.size[E]*y,this.littleEndian))}if(_.label!==void 0){const E=s.fields.indexOf("label");d.push(M.getInt32(s.points*_.label+s.size[E]*y,this.littleEndian))}}}if(s.data==="binary"){const p=new DataView(e,s.headerLen),v=s.offset;for(let m=0,f=0;m<s.points;m++,f+=s.rowSize){if(v.x!==void 0&&(a.push(p.getFloat32(f+v.x,this.littleEndian)),a.push(p.getFloat32(f+v.y,this.littleEndian)),a.push(p.getFloat32(f+v.z,this.littleEndian))),v.rgb!==void 0){const M=p.getUint8(f+v.rgb+2)/255,_=p.getUint8(f+v.rgb+1)/255,y=p.getUint8(f+v.rgb+0)/255;u.set(M,_,y).convertSRGBToLinear(),l.push(u.r,u.g,u.b)}v.normal_x!==void 0&&(o.push(p.getFloat32(f+v.normal_x,this.littleEndian)),o.push(p.getFloat32(f+v.normal_y,this.littleEndian)),o.push(p.getFloat32(f+v.normal_z,this.littleEndian))),v.intensity!==void 0&&c.push(p.getFloat32(f+v.intensity,this.littleEndian)),v.label!==void 0&&d.push(p.getInt32(f+v.label,this.littleEndian))}}const h=new Sn;a.length>0&&h.setAttribute("position",new en(a,3)),o.length>0&&h.setAttribute("normal",new en(o,3)),l.length>0&&h.setAttribute("color",new en(l,3)),c.length>0&&h.setAttribute("intensity",new en(c,1)),d.length>0&&h.setAttribute("label",new Rc(d,1)),h.computeBoundingSphere();const g=new Qo({size:.005});return l.length>0&&(g.vertexColors=!0),new _p(h,g)}}/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/const Ri=(r,e)=>{for(let t in e)r[t]=e[t];return r},Le=(r,e)=>Array.from(r.querySelectorAll(e)),ms=(r,e,t)=>{t?r.classList.add(e):r.classList.remove(e)},Ai=r=>{if(typeof r=="string"){if(r==="null")return null;if(r==="true")return!0;if(r==="false")return!1;if(r.match(/^-?[\d\.]+$/))return parseFloat(r)}return r},Ln=(r,e)=>{r.style.transform=e},Pr=(r,e)=>{let t=r.matches||r.matchesSelector||r.msMatchesSelector;return!(!t||!t.call(r,e))},bt=(r,e)=>{if(typeof r.closest=="function")return r.closest(e);for(;r;){if(Pr(r,e))return r;r=r.parentNode}return null},Tp=(r,e,t,n="")=>{let i=r.querySelectorAll("."+t);for(let a=0;a<i.length;a++){let o=i[a];if(o.parentNode===r)return o}let s=document.createElement(e);return s.className=t,s.innerHTML=n,r.appendChild(s),s},Cs=r=>{let e=document.createElement("style");return e.type="text/css",r&&r.length>0&&(e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))),document.head.appendChild(e),e},ro=()=>{let r={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,e=>{r[e.split("=").shift()]=e.split("=").pop()});for(let e in r){let t=r[e];r[e]=Ai(unescape(t))}return r.dependencies!==void 0&&delete r.dependencies,r},Ap=(r,e=0)=>{if(r){let t,n=r.style.height;return r.style.height="0px",r.parentNode.style.height="auto",t=e-r.parentNode.offsetHeight,r.style.height=n+"px",r.parentNode.style.removeProperty("height"),t}return e},wp={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},tl=navigator.userAgent,Pi=/(iphone|ipod|ipad|android)/gi.test(tl)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,nl=/android/gi.test(tl);var il={};Object.defineProperty(il,"__esModule",{value:!0});var so=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Rp=il.default=function(r){if(r){var e=function(R){return[].slice.call(R)},t=0,n=1,i=2,s=3,a=[],o=null,l="requestAnimationFrame"in r?function(){r.cancelAnimationFrame(o),o=r.requestAnimationFrame(function(){return d(a.filter(function(R){return R.dirty&&R.active}))})}:function(){},c=function(R){return function(){a.forEach(function(N){return N.dirty=R}),l()}},d=function(R){R.filter(function(H){return!H.styleComputed}).forEach(function(H){H.styleComputed=p(H)}),R.filter(v).forEach(m);var N=R.filter(g);N.forEach(h),N.forEach(function(H){m(H),u(H)}),N.forEach(f)},u=function(R){return R.dirty=t},h=function(R){R.availableWidth=R.element.parentNode.clientWidth,R.currentWidth=R.element.scrollWidth,R.previousFontSize=R.currentFontSize,R.currentFontSize=Math.min(Math.max(R.minSize,R.availableWidth/R.currentWidth*R.previousFontSize),R.maxSize),R.whiteSpace=R.multiLine&&R.currentFontSize===R.minSize?"normal":"nowrap"},g=function(R){return R.dirty!==i||R.dirty===i&&R.element.parentNode.clientWidth!==R.availableWidth},p=function(R){var N=r.getComputedStyle(R.element,null);R.currentFontSize=parseFloat(N.getPropertyValue("font-size")),R.display=N.getPropertyValue("display"),R.whiteSpace=N.getPropertyValue("white-space")},v=function(R){var N=!1;return!R.preStyleTestCompleted&&(/inline-/.test(R.display)||(N=!0,R.display="inline-block"),R.whiteSpace!=="nowrap"&&(N=!0,R.whiteSpace="nowrap"),R.preStyleTestCompleted=!0,N)},m=function(R){R.element.style.whiteSpace=R.whiteSpace,R.element.style.display=R.display,R.element.style.fontSize=R.currentFontSize+"px"},f=function(R){R.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:R.previousFontSize,newValue:R.currentFontSize,scaleFactor:R.currentFontSize/R.previousFontSize}}))},M=function(R,N){return function(){R.dirty=N,R.active&&l()}},_=function(R){return function(){a=a.filter(function(N){return N.element!==R.element}),R.observeMutations&&R.observer.disconnect(),R.element.style.whiteSpace=R.originalStyle.whiteSpace,R.element.style.display=R.originalStyle.display,R.element.style.fontSize=R.originalStyle.fontSize}},y=function(R){return function(){R.active||(R.active=!0,l())}},E=function(R){return function(){return R.active=!1}},A=function(R){R.observeMutations&&(R.observer=new MutationObserver(M(R,n)),R.observer.observe(R.element,R.observeMutations))},D={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in r&&{subtree:!0,childList:!0,characterData:!0}},U=null,x=function(){r.clearTimeout(U),U=r.setTimeout(c(i),Z.observeWindowDelay)},T=["resize","orientationchange"];return Object.defineProperty(Z,"observeWindow",{set:function(R){var N=(R?"add":"remove")+"EventListener";T.forEach(function(H){r[N](H,x)})}}),Z.observeWindow=!0,Z.observeWindowDelay=100,Z.fitAll=c(s),Z}function W(R,N){var H=so({},D,N),J=R.map(function(X){var $=so({},H,{element:X,active:!0});return function(ee){ee.originalStyle={whiteSpace:ee.element.style.whiteSpace,display:ee.element.style.display,fontSize:ee.element.style.fontSize},A(ee),ee.newbie=!0,ee.dirty=!0,a.push(ee)}($),{element:X,fit:M($,s),unfreeze:y($),freeze:E($),unsubscribe:_($)}});return l(),J}function Z(R){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof R=="string"?W(e(document.querySelectorAll(R)),N):W([R],N)[0]}}(typeof window>"u"?null:window);let Cp=class{constructor(e){this.Reveal=e,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(e){let t=this.Reveal.getConfig().preloadIframes;return typeof t!="boolean"&&(t=e.hasAttribute("data-preload")),t}load(e,t={}){e.style.display=this.Reveal.getConfig().display,Le(e,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))}),Le(e,"video, audio").forEach(i=>{let s=0;Le(i,"source[data-src]").forEach(a=>{a.setAttribute("src",a.getAttribute("data-src")),a.removeAttribute("data-src"),a.setAttribute("data-lazy-loaded",""),s+=1}),Pi&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),s>0&&i.load()});let n=e.slideBackgroundElement;if(n){n.style.display="block";let i=e.slideBackgroundContentElement,s=e.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let o=e.getAttribute("data-background-image"),l=e.getAttribute("data-background-video"),c=e.hasAttribute("data-background-video-loop"),d=e.hasAttribute("data-background-video-muted");if(o)/^data:/.test(o.trim())?i.style.backgroundImage=`url(${o.trim()})`:i.style.backgroundImage=o.split(",").map(u=>`url(${((h="")=>encodeURI(h).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,g=>`%${g.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(u.trim()))})`).join(",");else if(l&&!this.Reveal.isSpeakerNotes()){let u=document.createElement("video");c&&u.setAttribute("loop",""),d&&(u.muted=!0),Pi&&(u.muted=!0,u.setAttribute("playsinline","")),l.split(",").forEach(h=>{let g=((p="")=>wp[p.split(".").pop()])(h);u.innerHTML+=g?`<source src="${h}" type="${g}">`:`<source src="${h}">`}),i.appendChild(u)}else if(s&&t.excludeIframes!==!0){let u=document.createElement("iframe");u.setAttribute("allowfullscreen",""),u.setAttribute("mozallowfullscreen",""),u.setAttribute("webkitallowfullscreen",""),u.setAttribute("allow","autoplay"),u.setAttribute("data-src",s),u.style.width="100%",u.style.height="100%",u.style.maxHeight="100%",u.style.maxWidth="100%",i.appendChild(u)}}let a=i.querySelector("iframe[data-src]");a&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(s)&&a.getAttribute("src")!==s&&a.setAttribute("src",s)}this.layout(e)}layout(e){Array.from(e.querySelectorAll(".r-fit-text")).forEach(t=>{Rp(t,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(e){e.style.display="none";let t=this.Reveal.getSlideBackground(e);t&&(t.style.display="none",Le(t,"iframe[src]").forEach(n=>{n.removeAttribute("src")})),Le(e,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}),Le(e,"video[data-lazy-loaded] source[src], audio source[src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})}formatEmbeddedContent(){let e=(t,n,i)=>{Le(this.Reveal.getSlidesElement(),"iframe["+t+'*="'+n+'"]').forEach(s=>{let a=s.getAttribute(t);a&&a.indexOf(i)===-1&&s.setAttribute(t,a+(/\?/.test(a)?"&":"?")+i)})};e("src","youtube.com/embed/","enablejsapi=1"),e("data-src","youtube.com/embed/","enablejsapi=1"),e("src","player.vimeo.com/","api=1"),e("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(e){e&&!this.Reveal.isSpeakerNotes()&&(Le(e,'img[src$=".gif"]').forEach(t=>{t.setAttribute("src",t.getAttribute("src"))}),Le(e,"video, audio").forEach(t=>{if(bt(t,".fragment")&&!bt(t,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=t.hasAttribute("data-autoplay")||!!bt(t,".slide-background")),n&&typeof t.play=="function")if(t.readyState>1)this.startEmbeddedMedia({target:t});else if(Pi){let i=t.play();i&&typeof i.catch=="function"&&t.controls===!1&&i.catch(()=>{t.controls=!0,t.addEventListener("play",()=>{t.controls=!1})})}else t.removeEventListener("loadeddata",this.startEmbeddedMedia),t.addEventListener("loadeddata",this.startEmbeddedMedia)}),Le(e,"iframe[src]").forEach(t=>{bt(t,".fragment")&&!bt(t,".fragment.visible")||this.startEmbeddedIframe({target:t})}),Le(e,"iframe[data-src]").forEach(t=>{bt(t,".fragment")&&!bt(t,".fragment.visible")||t.getAttribute("src")!==t.getAttribute("data-src")&&(t.removeEventListener("load",this.startEmbeddedIframe),t.addEventListener("load",this.startEmbeddedIframe),t.setAttribute("src",t.getAttribute("data-src")))}))}startEmbeddedMedia(e){let t=!!bt(e.target,"html"),n=!!bt(e.target,".present");t&&n&&(e.target.currentTime=0,e.target.play()),e.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(e){let t=e.target;if(t&&t.contentWindow){let n=!!bt(e.target,"html"),i=!!bt(e.target,".present");if(n&&i){let s=this.Reveal.getConfig().autoPlayMedia;typeof s!="boolean"&&(s=t.hasAttribute("data-autoplay")||!!bt(t,".slide-background")),/youtube\.com\/embed\//.test(t.getAttribute("src"))&&s?t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(t.getAttribute("src"))&&s?t.contentWindow.postMessage('{"method":"play"}',"*"):t.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(e,t={}){t=Ri({unloadIframes:!0},t),e&&e.parentNode&&(Le(e,"video, audio").forEach(n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())}),Le(e,"iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)}),Le(e,'iframe[src*="youtube.com/embed/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),Le(e,'iframe[src*="player.vimeo.com/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")}),t.unloadIframes===!0&&Le(e,"iframe[data-src]").forEach(n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")}))}},Lp=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){let n="none";e.slideNumber&&!this.Reveal.isPrintingPDF()&&(e.showSlideNumber==="all"||e.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(e=this.Reveal.getCurrentSlide()){let t,n=this.Reveal.getConfig(),i="h.v";if(typeof n.slideNumber=="function")t=n.slideNumber(e);else{typeof n.slideNumber=="string"&&(i=n.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let a=e&&e.dataset.visibility==="uncounted"?0:1;switch(t=[],i){case"c":t.push(this.Reveal.getSlidePastCount(e)+a);break;case"c/t":t.push(this.Reveal.getSlidePastCount(e)+a,"/",this.Reveal.getTotalSlides());break;default:let o=this.Reveal.getIndices(e);t.push(o.h+a);let l=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(e)&&t.push(l,o.v+1)}}let s="#"+this.Reveal.location.getHash(e);return this.formatNumber(t[0],t[1],t[2],s)}formatNumber(e,t,n,i="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${i}">
					<span class="slide-number-a">${e}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${e}</span>
					<span class="slide-number-delimiter">${t}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}},Pp=class{constructor(e){this.Reveal=e,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;const e=this.jumpInput.value.trim("");let t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0});return!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(e){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),e)}search(e){const t=new RegExp("\\b"+e.trim()+"\\b","i"),n=this.Reveal.getSlides().find(i=>t.test(i.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(e){e.keyCode===13?this.confirm():e.keyCode===27&&(this.cancel(),e.stopImmediatePropagation())}onInput(e){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}};const gs=r=>{let e=r.match(/^#([0-9a-f]{3})$/i);if(e&&e[1])return e=e[1],{r:17*parseInt(e.charAt(0),16),g:17*parseInt(e.charAt(1),16),b:17*parseInt(e.charAt(2),16)};let t=r.match(/^#([0-9a-f]{6})$/i);if(t&&t[1])return t=t[1],{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)};let n=r.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let i=r.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};let Dp=class{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(e=>{let t=this.createBackground(e,this.element);Le(e,"section").forEach(n=>{this.createBackground(n,t),t.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(e,t){let n=document.createElement("div");n.className="slide-background "+e.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",n.appendChild(i),t.appendChild(n),e.slideBackgroundElement=n,e.slideBackgroundContentElement=i,this.sync(e),n}sync(e){const t=e.slideBackgroundElement,n=e.slideBackgroundContentElement,i={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundVideo:e.getAttribute("data-background-video"),backgroundIframe:e.getAttribute("data-background-iframe"),backgroundColor:e.getAttribute("data-background-color"),backgroundGradient:e.getAttribute("data-background-gradient"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition"),backgroundOpacity:e.getAttribute("data-background-opacity")},s=e.hasAttribute("data-preload");e.classList.remove("has-dark-background"),e.classList.remove("has-light-background"),t.removeAttribute("data-loaded"),t.removeAttribute("data-background-hash"),t.removeAttribute("data-background-size"),t.removeAttribute("data-background-transition"),t.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?e.setAttribute("data-background-image",i.background):t.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&t.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&t.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(t.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(t.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&t.setAttribute("data-background-transition",i.backgroundTransition),s&&t.setAttribute("data-preload",""),i.backgroundSize&&(n.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(n.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(n.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(n.style.opacity=i.backgroundOpacity);let a=i.backgroundColor;if(!a||!gs(a)){let l=window.getComputedStyle(t);l&&l.backgroundColor&&(a=l.backgroundColor)}if(a){const l=gs(a);l&&l.a!==0&&(typeof(o=a)=="string"&&(o=gs(o)),(o?(299*o.r+587*o.g+114*o.b)/1e3:null)<128?e.classList.add("has-dark-background"):e.classList.add("has-light-background"))}var o}update(e=!1){let t=this.Reveal.getCurrentSlide(),n=this.Reveal.getIndices(),i=null,s=this.Reveal.getConfig().rtl?"future":"past",a=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((o,l)=>{o.classList.remove("past","present","future"),l<n.h?o.classList.add(s):l>n.h?o.classList.add(a):(o.classList.add("present"),i=o),(e||l===n.h)&&Le(o,".slide-background").forEach((c,d)=>{c.classList.remove("past","present","future"),d<n.v?c.classList.add("past"):d>n.v?c.classList.add("future"):(c.classList.add("present"),l===n.h&&(i=c))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),i){this.Reveal.slideContent.startEmbeddedContent(i);let o=i.querySelector(".slide-background-content");if(o){let d=o.style.backgroundImage||"";/\.gif/i.test(d)&&(o.style.backgroundImage="",window.getComputedStyle(o).opacity,o.style.backgroundImage=d)}let l=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,c=i.getAttribute("data-background-hash");c&&c===l&&i!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=i}t&&["has-light-background","has-dark-background"].forEach(o=>{t.classList.contains(o)?this.Reveal.getRevealElement().classList.add(o):this.Reveal.getRevealElement().classList.remove(o)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let e=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let t,n,i=this.Reveal.getHorizontalSlides(),s=this.Reveal.getVerticalSlides(),a=this.element.style.backgroundSize.split(" ");a.length===1?t=n=parseInt(a[0],10):(t=parseInt(a[0],10),n=parseInt(a[1],10));let o,l,c=this.element.offsetWidth,d=i.length;o=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:d>1?(t-c)/(d-1):0,l=o*e.h*-1;let u,h,g=this.element.offsetHeight,p=s.length;u=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-g)/(p-1),h=p>0?u*e.v:0,this.element.style.backgroundPosition=l+"px "+-h+"px"}}destroy(){this.element.remove()}};const $n=".slides section",Wn=".slides>section",ao=".slides>section.present>section",Up=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,oo=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let lo=0,Ip=class{constructor(e){this.Reveal=e}run(e,t){this.reset();let n=this.Reveal.getSlides(),i=n.indexOf(t),s=n.indexOf(e);if(e.hasAttribute("data-auto-animate")&&t.hasAttribute("data-auto-animate")&&e.getAttribute("data-auto-animate-id")===t.getAttribute("data-auto-animate-id")&&!(i>s?t:e).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Cs();let a=this.getAutoAnimateOptions(t);e.dataset.autoAnimate="pending",t.dataset.autoAnimate="pending",a.slideDirection=i>s?"forward":"backward";let o=e.style.display==="none";o&&(e.style.display=this.Reveal.getConfig().display);let l=this.getAutoAnimatableElements(e,t).map(c=>this.autoAnimateElements(c.from,c.to,c.options||{},a,lo++));if(o&&(e.style.display="none"),t.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let c=.8*a.duration,d=.2*a.duration;this.getUnmatchedAutoAnimateElements(t).forEach(u=>{let h=this.getAutoAnimateOptions(u,a),g="unmatched";h.duration===a.duration&&h.delay===a.delay||(g="unmatched-"+lo++,l.push(`[data-auto-animate="running"] [data-auto-animate-target="${g}"] { transition: opacity ${h.duration}s ease ${h.delay}s; }`)),u.dataset.autoAnimateTarget=g},this),l.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${c}s ease ${d}s; }`)}this.autoAnimateStyleSheet.innerHTML=l.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,t.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:e,toSlide:t,sheet:this.autoAnimateStyleSheet}})}}reset(){Le(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(e=>{e.dataset.autoAnimate=""}),Le(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(e=>{delete e.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(e,t,n,i,s){e.dataset.autoAnimateTarget="",t.dataset.autoAnimateTarget=s;let a=this.getAutoAnimateOptions(t,i);n.delay!==void 0&&(a.delay=n.delay),n.duration!==void 0&&(a.duration=n.duration),n.easing!==void 0&&(a.easing=n.easing);let o=this.getAutoAnimatableProperties("from",e,n),l=this.getAutoAnimatableProperties("to",t,n);if(t.classList.contains("fragment")&&(delete l.styles.opacity,e.classList.contains("fragment"))&&(e.className.match(oo)||[""])[0]===(t.className.match(oo)||[""])[0]&&i.slideDirection==="forward"&&t.classList.add("visible","disabled"),n.translate!==!1||n.scale!==!1){let u=this.Reveal.getScale(),h={x:(o.x-l.x)/u,y:(o.y-l.y)/u,scaleX:o.width/l.width,scaleY:o.height/l.height};h.x=Math.round(1e3*h.x)/1e3,h.y=Math.round(1e3*h.y)/1e3,h.scaleX=Math.round(1e3*h.scaleX)/1e3,h.scaleX=Math.round(1e3*h.scaleX)/1e3;let g=n.translate!==!1&&(h.x!==0||h.y!==0),p=n.scale!==!1&&(h.scaleX!==0||h.scaleY!==0);if(g||p){let v=[];g&&v.push(`translate(${h.x}px, ${h.y}px)`),p&&v.push(`scale(${h.scaleX}, ${h.scaleY})`),o.styles.transform=v.join(" "),o.styles["transform-origin"]="top left",l.styles.transform="none"}}for(let u in l.styles){const h=l.styles[u],g=o.styles[u];h===g?delete l.styles[u]:(h.explicitValue===!0&&(l.styles[u]=h.value),g.explicitValue===!0&&(o.styles[u]=g.value))}let c="",d=Object.keys(l.styles);return d.length>0&&(o.styles.transition="none",l.styles.transition=`all ${a.duration}s ${a.easing} ${a.delay}s`,l.styles["transition-property"]=d.join(", "),l.styles["will-change"]=d.join(", "),c='[data-auto-animate-target="'+s+'"] {'+Object.keys(o.styles).map(u=>u+": "+o.styles[u]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+s+'"] {'+Object.keys(l.styles).map(u=>u+": "+l.styles[u]+" !important;").join("")+"}"),c}getAutoAnimateOptions(e,t){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=Ri(n,t),e.parentNode){let i=bt(e.parentNode,"[data-auto-animate-target]");i&&(n=this.getAutoAnimateOptions(i,n))}return e.dataset.autoAnimateEasing&&(n.easing=e.dataset.autoAnimateEasing),e.dataset.autoAnimateDuration&&(n.duration=parseFloat(e.dataset.autoAnimateDuration)),e.dataset.autoAnimateDelay&&(n.delay=parseFloat(e.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(e,t,n){let i=this.Reveal.getConfig(),s={styles:[]};if(n.translate!==!1||n.scale!==!1){let o;if(typeof n.measure=="function")o=n.measure(t);else if(i.center)o=t.getBoundingClientRect();else{let l=this.Reveal.getScale();o={x:t.offsetLeft*l,y:t.offsetTop*l,width:t.offsetWidth*l,height:t.offsetHeight*l}}s.x=o.x,s.y=o.y,s.width=o.width,s.height=o.height}const a=getComputedStyle(t);return(n.styles||i.autoAnimateStyles).forEach(o=>{let l;typeof o=="string"&&(o={property:o}),o.from!==void 0&&e==="from"?l={value:o.from,explicitValue:!0}:o.to!==void 0&&e==="to"?l={value:o.to,explicitValue:!0}:(o.property==="line-height"&&(l=parseFloat(a["line-height"])/parseFloat(a["font-size"])),isNaN(l)&&(l=a[o.property])),l!==""&&(s.styles[o.property]=l)}),s}getAutoAnimatableElements(e,t){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,e,t),i=[];return n.filter((s,a)=>{if(i.indexOf(s.to)===-1)return i.push(s.to),!0})}getAutoAnimatePairs(e,t){let n=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,e,t,"[data-id]",s=>s.nodeName+":::"+s.getAttribute("data-id")),this.findAutoAnimateMatches(n,e,t,i,s=>s.nodeName+":::"+s.innerText),this.findAutoAnimateMatches(n,e,t,"img, video, iframe",s=>s.nodeName+":::"+(s.getAttribute("src")||s.getAttribute("data-src"))),this.findAutoAnimateMatches(n,e,t,"pre",s=>s.nodeName+":::"+s.innerText),n.forEach(s=>{Pr(s.from,i)?s.options={scale:!1}:Pr(s.from,"pre")&&(s.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,s.from,s.to,".hljs .hljs-ln-code",a=>a.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,s.from,s.to,".hljs .hljs-ln-line[data-line-number]",a=>a.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(e){const t=this.Reveal.getScale();return{x:Math.round(e.offsetLeft*t*100)/100,y:Math.round(e.offsetTop*t*100)/100,width:Math.round(e.offsetWidth*t*100)/100,height:Math.round(e.offsetHeight*t*100)/100}}findAutoAnimateMatches(e,t,n,i,s,a){let o={},l={};[].slice.call(t.querySelectorAll(i)).forEach((c,d)=>{const u=s(c);typeof u=="string"&&u.length&&(o[u]=o[u]||[],o[u].push(c))}),[].slice.call(n.querySelectorAll(i)).forEach((c,d)=>{const u=s(c);let h;if(l[u]=l[u]||[],l[u].push(c),o[u]){const g=l[u].length-1,p=o[u].length-1;o[u][g]?(h=o[u][g],o[u][g]=null):o[u][p]&&(h=o[u][p],o[u][p]=null)}h&&e.push({from:h,to:c,options:a})})}getUnmatchedAutoAnimateElements(e){return[].slice.call(e.children).reduce((t,n)=>{const i=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||i||t.push(n),n.querySelector("[data-auto-animate-target]")&&(t=t.concat(this.getUnmatchedAutoAnimateElements(n))),t},[])}},Np=class{constructor(e){this.Reveal=e}configure(e,t){e.fragments===!1?this.disable():t.fragments===!1&&this.enable()}disable(){Le(this.Reveal.getSlidesElement(),".fragment").forEach(e=>{e.classList.add("visible"),e.classList.remove("current-fragment")})}enable(){Le(this.Reveal.getSlidesElement(),".fragment").forEach(e=>{e.classList.remove("visible"),e.classList.remove("current-fragment")})}availableRoutes(){let e=this.Reveal.getCurrentSlide();if(e&&this.Reveal.getConfig().fragments){let t=e.querySelectorAll(".fragment:not(.disabled)"),n=e.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:t.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(e,t=!1){e=Array.from(e);let n=[],i=[],s=[];e.forEach(o=>{if(o.hasAttribute("data-fragment-index")){let l=parseInt(o.getAttribute("data-fragment-index"),10);n[l]||(n[l]=[]),n[l].push(o)}else i.push([o])}),n=n.concat(i);let a=0;return n.forEach(o=>{o.forEach(l=>{s.push(l),l.setAttribute("data-fragment-index",a)}),a++}),t===!0?n:s}sortAll(){this.Reveal.getHorizontalSlides().forEach(e=>{let t=Le(e,"section");t.forEach((n,i)=>{this.sort(n.querySelectorAll(".fragment"))},this),t.length===0&&this.sort(e.querySelectorAll(".fragment"))})}update(e,t){let n={shown:[],hidden:[]},i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments&&(t=t||this.sort(i.querySelectorAll(".fragment"))).length){let s=0;if(typeof e!="number"){let a=this.sort(i.querySelectorAll(".fragment.visible")).pop();a&&(e=parseInt(a.getAttribute("data-fragment-index")||0,10))}Array.from(t).forEach((a,o)=>{if(a.hasAttribute("data-fragment-index")&&(o=parseInt(a.getAttribute("data-fragment-index"),10)),s=Math.max(s,o),o<=e){let l=a.classList.contains("visible");a.classList.add("visible"),a.classList.remove("current-fragment"),o===e&&(this.Reveal.announceStatus(this.Reveal.getStatusText(a)),a.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(a)),l||(n.shown.push(a),this.Reveal.dispatchEvent({target:a,type:"visible",bubbles:!1}))}else{let l=a.classList.contains("visible");a.classList.remove("visible"),a.classList.remove("current-fragment"),l&&(this.Reveal.slideContent.stopEmbeddedContent(a),n.hidden.push(a),this.Reveal.dispatchEvent({target:a,type:"hidden",bubbles:!1}))}}),e=typeof e=="number"?e:-1,e=Math.max(Math.min(e,s),-1),i.setAttribute("data-fragment",e)}return n}sync(e=this.Reveal.getCurrentSlide()){return this.sort(e.querySelectorAll(".fragment"))}goto(e,t=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let i=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof e!="number"){let a=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();e=a?parseInt(a.getAttribute("data-fragment-index")||0,10):-1}e+=t;let s=this.update(e,i);return s.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:s.hidden[0],fragments:s.hidden}}),s.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:s.shown[0],fragments:s.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!s.shown.length&&!s.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Fp=class{constructor(e){this.Reveal=e,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),Le(this.Reveal.getRevealElement(),$n).forEach(i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)});const e=70,t=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=t.width+e,this.overviewSlideHeight=t.height+e,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((e,t)=>{e.setAttribute("data-index-h",t),Ln(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),e.classList.contains("stack")&&Le(e,"section").forEach((n,i)=>{n.setAttribute("data-index-h",t),n.setAttribute("data-index-v",i),Ln(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e,t)=>{Ln(e,"translate3d("+t*this.overviewSlideWidth+"px, 0, 0)"),Le(e,".slide-background").forEach((n,i)=>{Ln(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})})}update(){const e=Math.min(window.innerWidth,window.innerHeight),t=Math.max(e/5,150)/e,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+t+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),Le(this.Reveal.getRevealElement(),$n).forEach(t=>{Ln(t,""),t.removeEventListener("click",this.onSlideClicked,!0)}),Le(this.Reveal.getBackgroundsElement(),".slide-background").forEach(t=>{Ln(t,"")}),this.Reveal.transformSlides({overview:""});const e=this.Reveal.getIndices();this.Reveal.slide(e.h,e.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:e.h,indexv:e.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(e){typeof e=="boolean"?e?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(e){if(this.isActive()){e.preventDefault();let t=e.target;for(;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(this.deactivate(),t.nodeName.match(/section/gi))){let n=parseInt(t.getAttribute("data-index-h"),10),i=parseInt(t.getAttribute("data-index-v"),10);this.Reveal.slide(n,i)}}}},kp=class{constructor(e){this.Reveal=e,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(e,t){e.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(e,t){typeof e=="object"&&e.keyCode?this.bindings[e.keyCode]={callback:t,key:e.key,description:e.description}:this.bindings[e]={callback:t,key:null,description:null}}removeKeyBinding(e){delete this.bindings[e]}triggerKey(e){this.onDocumentKeyDown({keyCode:e})}registerKeyboardShortcut(e,t){this.shortcuts[e]=t}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(e){e.shiftKey&&e.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(e){let t=this.Reveal.getConfig();if(typeof t.keyboardCondition=="function"&&t.keyboardCondition(e)===!1||t.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=e.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(e);let s=document.activeElement&&document.activeElement.isContentEditable===!0,a=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),o=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),l=!([32,37,38,39,40,78,80].indexOf(e.keyCode)!==-1&&e.shiftKey||e.altKey)&&(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey);if(s||a||o||l)return;let c,d=[66,86,190,191];if(typeof t.keyboard=="object")for(c in t.keyboard)t.keyboard[c]==="togglePause"&&d.push(parseInt(c,10));if(this.Reveal.isPaused()&&d.indexOf(n)===-1)return!1;let u=t.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),h=!1;if(typeof t.keyboard=="object"){for(c in t.keyboard)if(parseInt(c,10)===n){let g=t.keyboard[c];typeof g=="function"?g.apply(null,[e]):typeof g=="string"&&typeof this.Reveal[g]=="function"&&this.Reveal[g].call(),h=!0}}if(h===!1){for(c in this.bindings)if(parseInt(c,10)===n){let g=this.bindings[c].callback;typeof g=="function"?g.apply(null,[e]):typeof g=="string"&&typeof this.Reveal[g]=="function"&&this.Reveal[g].call(),h=!0}}h===!1&&(h=!0,n===80||n===33?this.Reveal.prev({skipFragments:e.altKey}):n===78||n===34?this.Reveal.next({skipFragments:e.altKey}):n===72||n===37?e.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&u?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.left({skipFragments:e.altKey}):n===76||n===39?e.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&u?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.right({skipFragments:e.altKey}):n===75||n===38?e.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&u?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.up({skipFragments:e.altKey}):n===74||n===40?e.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&u?this.Reveal.next({skipFragments:e.altKey}):this.Reveal.down({skipFragments:e.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),e.shiftKey?this.Reveal.prev({skipFragments:e.altKey}):this.Reveal.next({skipFragments:e.altKey})):n===58||n===59||n===66||n===86||n===190||n===191?this.Reveal.togglePause():n===70?(g=>{let p=(g=g||document.documentElement).requestFullscreen||g.webkitRequestFullscreen||g.webkitRequestFullScreen||g.mozRequestFullScreen||g.msRequestFullscreen;p&&p.apply(g)})(t.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?t.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):n===71?t.jumpToSlide&&this.Reveal.toggleJumpToSlide():h=!1),h?e.preventDefault&&e.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),e.preventDefault&&e.preventDefault()),this.Reveal.cueAutoSlide()}},Op=class{constructor(e){var t,n,i;i=1e3,(n="MAX_REPLACE_STATE_FREQUENCY")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,this.Reveal=e,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(e=window.location.hash,t={}){let n=e.replace(/^#\/?/,""),i=n.split("/");if(/^[0-9]*$/.test(i[0])||!n.length){const s=this.Reveal.getConfig();let a,o=s.hashOneBasedIndex||t.oneBasedIndex?1:0,l=parseInt(i[0],10)-o||0,c=parseInt(i[1],10)-o||0;return s.fragmentInURL&&(a=parseInt(i[2],10),isNaN(a)&&(a=void 0)),{h:l,v:c,f:a}}{let s,a;/\/[-\d]+$/g.test(n)&&(a=parseInt(n.split("/").pop(),10),a=isNaN(a)?void 0:a,n=n.split("/").shift());try{s=document.getElementById(decodeURIComponent(n))}catch{}if(s)return{...this.Reveal.getIndices(s),f:a}}return null}readURL(){const e=this.Reveal.getIndices(),t=this.getIndicesFromHash();t?t.h===e.h&&t.v===e.v&&t.f===void 0||this.Reveal.slide(t.h,t.v,t.f):this.Reveal.slide(e.h||0,e.v||0)}writeURL(e){let t=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof e=="number")this.writeURLTimeout=setTimeout(this.writeURL,e);else if(n){let i=this.getHash();t.history?window.location.hash=i:t.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(e){window.history.replaceState(null,null,e),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(e){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(e):this.replaceStateTimeout=setTimeout(()=>this.replaceState(e),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(e){let t="/",n=e||this.Reveal.getCurrentSlide(),i=n?n.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let s=this.Reveal.getIndices(e);if(this.Reveal.getConfig().fragmentInURL||(s.f=void 0),typeof i=="string"&&i.length)t="/"+i,s.f>=0&&(t+="/"+s.f);else{let a=this.Reveal.getConfig().hashOneBasedIndex?1:0;(s.h>0||s.v>0||s.f>=0)&&(t+=s.h+a),(s.v>0||s.f>=0)&&(t+="/"+(s.v+a)),s.f>=0&&(t+="/"+s.f)}return t}onWindowHashChange(e){this.readURL()}},zp=class{constructor(e){this.Reveal=e,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const e=this.Reveal.getConfig().rtl,t=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${e?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=Le(t,".navigate-left"),this.controlsRight=Le(t,".navigate-right"),this.controlsUp=Le(t,".navigate-up"),this.controlsDown=Le(t,".navigate-down"),this.controlsPrev=Le(t,".navigate-prev"),this.controlsNext=Le(t,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(e,t){this.element.style.display=e.controls?"block":"none",this.element.setAttribute("data-controls-layout",e.controlsLayout),this.element.setAttribute("data-controls-back-arrows",e.controlsBackArrows)}bind(){let e=["touchstart","click"];nl&&(e=["touchstart"]),e.forEach(t=>{this.controlsLeft.forEach(n=>n.addEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(n=>n.addEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(n=>n.addEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(n=>n.addEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(n=>n.addEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(n=>n.addEventListener(t,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(e=>{this.controlsLeft.forEach(t=>t.removeEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(t=>t.removeEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(t=>t.removeEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(t=>t.removeEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(t=>t.removeEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(t=>t.removeEventListener(e,this.onNavigateNextClicked,!1))})}update(){let e=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")}),e.left&&this.controlsLeft.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),e.right&&this.controlsRight.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),e.up&&this.controlsUp.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),e.down&&this.controlsDown.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(e.left||e.up)&&this.controlsPrev.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(e.right||e.down)&&this.controlsNext.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")});let t=this.Reveal.getCurrentSlide();if(t){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsNext.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(t)?(n.prev&&this.controlsUp.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsDown.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")})):(n.prev&&this.controlsLeft.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsRight.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&e.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&e.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&e.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(e){e.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}};class Bp{constructor(e){this.Reveal=e,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(e,t){this.element.style.display=e.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let e=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(e=0),this.bar.style.transform="scaleX("+e+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(e){this.Reveal.onUserInput(e),e.preventDefault();let t=this.Reveal.getSlides(),n=t.length,i=Math.floor(e.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(i=n-i);let s=this.Reveal.getIndices(t[i]);this.Reveal.slide(s.h,s.v)}destroy(){this.element.remove()}}let Hp=class{constructor(e){this.Reveal=e,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(e,t){e.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),e.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(e){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(e){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let t=e.detail||-e.wheelDelta;t>0?this.Reveal.next():t<0&&this.Reveal.prev()}}};const co=(r,e)=>{const t=document.createElement("script");t.type="text/javascript",t.async=!1,t.defer=!1,t.src=r,typeof e=="function"&&(t.onload=t.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=t.onerror=null,e())},t.onerror=i=>{t.onload=t.onreadystatechange=t.onerror=null,e(new Error("Failed loading script: "+t.src+`
`+i))});const n=document.querySelector("head");n.insertBefore(t,n.lastChild)};class Gp{constructor(e){this.Reveal=e,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(e,t){return this.state="loading",e.forEach(this.registerPlugin.bind(this)),new Promise(n=>{let i=[],s=0;if(t.forEach(a=>{a.condition&&!a.condition()||(a.async?this.asyncDependencies.push(a):i.push(a))}),i.length){s=i.length;const a=o=>{o&&typeof o.callback=="function"&&o.callback(),--s==0&&this.initPlugins().then(n)};i.forEach(o=>{typeof o.id=="string"?(this.registerPlugin(o),a(o)):typeof o.src=="string"?co(o.src,()=>a(o)):(console.warn("Unrecognized plugin format",o),a())})}else this.initPlugins().then(n)})}initPlugins(){return new Promise(e=>{let t=Object.values(this.registeredPlugins),n=t.length;if(n===0)this.loadAsync().then(e);else{let i,s=()=>{--n==0?this.loadAsync().then(e):i()},a=0;i=()=>{let o=t[a++];if(typeof o.init=="function"){let l=o.init(this.Reveal);l&&typeof l.then=="function"?l.then(s):s()}else s()},i()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(e=>{co(e.src,e.callback)}),Promise.resolve()}registerPlugin(e){arguments.length===2&&typeof arguments[0]=="string"?(e=arguments[1]).id=arguments[0]:typeof e=="function"&&(e=e());let t=e.id;typeof t!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",e):this.registeredPlugins[t]===void 0?(this.registeredPlugins[t]=e,this.state==="loaded"&&typeof e.init=="function"&&e.init(this.Reveal)):console.warn('reveal.js: "'+t+'" plugin has already been registered')}hasPlugin(e){return!!this.registeredPlugins[e]}getPlugin(e){return this.registeredPlugins[e]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(e=>{typeof e.destroy=="function"&&e.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}let Vp=class{constructor(e){this.Reveal=e}async setupPDF(){const e=this.Reveal.getConfig(),t=Le(this.Reveal.getRevealElement(),$n),n=e.slideNumber&&/all|print/i.test(e.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),s=Math.floor(i.width*(1+e.margin)),a=Math.floor(i.height*(1+e.margin)),o=i.width,l=i.height;await new Promise(requestAnimationFrame),Cs("@page{size:"+s+"px "+a+"px; margin: 0px;}"),Cs(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+o+"px; max-height:"+l+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=s+"px",document.body.style.height=a+"px";const c=document.querySelector(".reveal-viewport");let d;if(c){const v=window.getComputedStyle(c);v&&v.background&&(d=v.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(o,l),await new Promise(requestAnimationFrame);const u=t.map(v=>v.scrollHeight),h=[],g=t[0].parentNode;let p=1;t.forEach(function(v,m){if(v.classList.contains("stack")===!1){let f=(s-o)/2,M=(a-l)/2;const _=u[m];let y=Math.max(Math.ceil(_/a),1);y=Math.min(y,e.pdfMaxPagesPerSlide),(y===1&&e.center||v.classList.contains("center"))&&(M=Math.max((a-_)/2,0));const E=document.createElement("div");if(h.push(E),E.className="pdf-page",E.style.height=(a+e.pdfPageHeightOffset)*y+"px",d&&(E.style.background=d),E.appendChild(v),v.style.left=f+"px",v.style.top=M+"px",v.style.width=o+"px",this.Reveal.slideContent.layout(v),v.slideBackgroundElement&&E.insertBefore(v.slideBackgroundElement,v),e.showNotes){const A=this.Reveal.getSlideNotes(v);if(A){const U=typeof e.showNotes=="string"?e.showNotes:"inline",x=document.createElement("div");x.classList.add("speaker-notes"),x.classList.add("speaker-notes-pdf"),x.setAttribute("data-layout",U),x.innerHTML=A,U==="separate-page"?h.push(x):(x.style.left="8px",x.style.bottom="8px",x.style.width=s-2*8+"px",E.appendChild(x))}}if(n){const A=document.createElement("div");A.classList.add("slide-number"),A.classList.add("slide-number-pdf"),A.innerHTML=p++,E.appendChild(A)}if(e.pdfSeparateFragments){const A=this.Reveal.fragments.sort(E.querySelectorAll(".fragment"),!0);let D;A.forEach(function(U,x){D&&D.forEach(function(W){W.classList.remove("current-fragment")}),U.forEach(function(W){W.classList.add("visible","current-fragment")},this);const T=E.cloneNode(!0);if(n){const W=x+1;T.querySelector(".slide-number-pdf").innerHTML+="."+W}h.push(T),D=U},this),A.forEach(function(U){U.forEach(function(x){x.classList.remove("visible","current-fragment")})})}else Le(E,".fragment:not(.fade-out)").forEach(function(A){A.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),h.forEach(v=>g.appendChild(v)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}},Wp=class{constructor(e){this.Reveal=e,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let e=this.Reveal.getRevealElement();"onpointerdown"in window?(e.addEventListener("pointerdown",this.onPointerDown,!1),e.addEventListener("pointermove",this.onPointerMove,!1),e.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(e.addEventListener("MSPointerDown",this.onPointerDown,!1),e.addEventListener("MSPointerMove",this.onPointerMove,!1),e.addEventListener("MSPointerUp",this.onPointerUp,!1)):(e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let e=this.Reveal.getRevealElement();e.removeEventListener("pointerdown",this.onPointerDown,!1),e.removeEventListener("pointermove",this.onPointerMove,!1),e.removeEventListener("pointerup",this.onPointerUp,!1),e.removeEventListener("MSPointerDown",this.onPointerDown,!1),e.removeEventListener("MSPointerMove",this.onPointerMove,!1),e.removeEventListener("MSPointerUp",this.onPointerUp,!1),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(e){if(Pr(e,"video, audio"))return!0;for(;e&&typeof e.hasAttribute=="function";){if(e.hasAttribute("data-prevent-swipe"))return!0;e=e.parentNode}return!1}onTouchStart(e){if(this.isSwipePrevented(e.target))return!0;this.touchStartX=e.touches[0].clientX,this.touchStartY=e.touches[0].clientY,this.touchStartCount=e.touches.length}onTouchMove(e){if(this.isSwipePrevented(e.target))return!0;let t=this.Reveal.getConfig();if(this.touchCaptured)nl&&e.preventDefault();else{this.Reveal.onUserInput(e);let n=e.touches[0].clientX,i=e.touches[0].clientY;if(e.touches.length===1&&this.touchStartCount!==2){let s=this.Reveal.availableRoutes({includeFragments:!0}),a=n-this.touchStartX,o=i-this.touchStartY;a>40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):a<-40&&Math.abs(a)>Math.abs(o)?(this.touchCaptured=!0,t.navigationMode==="linear"?t.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):o>40&&s.up?(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):o<-40&&s.down&&(this.touchCaptured=!0,t.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),t.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&e.preventDefault():e.preventDefault()}}}onTouchEnd(e){this.touchCaptured=!1}onPointerDown(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchStart(e))}onPointerMove(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchMove(e))}onPointerUp(e){e.pointerType!==e.MSPOINTER_TYPE_TOUCH&&e.pointerType!=="touch"||(e.touches=[{clientX:e.clientX,clientY:e.clientY}],this.onTouchEnd(e))}};const vs="focus",uo="blur";class Xp{constructor(e){this.Reveal=e,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(e,t){e.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==vs&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=vs}blur(){this.state!==uo&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=uo}isFocused(){return this.state===vs}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(e){this.focus()}onDocumentPointerDown(e){let t=bt(e.target,".reveal");t&&t===this.Reveal.getRevealElement()||this.blur()}}class qp{constructor(e){this.Reveal=e}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(e,t){e.showNotes&&this.element.setAttribute("data-layout",typeof e.showNotes=="string"?e.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(e=this.Reveal.getCurrentSlide()){if(e.hasAttribute("data-notes"))return e.getAttribute("data-notes");let t=e.querySelectorAll("aside.notes");return t?Array.from(t).map(n=>n.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class Yp{constructor(e,t){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(e){const t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()}animate(){const e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let e=this.playing?this.progress:0,t=this.diameter2-this.thickness,n=this.diameter2,i=this.diameter2,s=28;this.progressOffset+=.1*(1-this.progressOffset);const a=-Math.PI/2+e*(2*Math.PI),o=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,i,t+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,i,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,i,t,o,a,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,s),this.context.fillRect(18,0,10,s)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,s),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(e,t){this.canvas.addEventListener(e,t,!1)}off(e,t){this.canvas.removeEventListener(e,t,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var $p={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const rl="4.5.0";function sl(r,e){arguments.length<2&&(e=arguments[0],r=document.querySelector(".reveal"));const t={};let n,i,s,a,o,l={},c=!1,d={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},u=[],h=1,g={layout:"",overview:""},p={},v="idle",m=0,f=0,M=-1,_=!1,y=new Cp(t),E=new Lp(t),A=new Pp(t),D=new Ip(t),U=new Dp(t),x=new Np(t),T=new Fp(t),W=new kp(t),Z=new Op(t),R=new zp(t),N=new Bp(t),H=new Hp(t),J=new Gp(t),X=new Vp(t),$=new Xp(t),ee=new Wp(t),K=new qp(t);function Se(L){if(!r)throw'Unable to find presentation root (<div class="reveal">).';if(p.wrapper=r,p.slides=r.querySelector(".slides"),!p.slides)throw'Unable to find slides container (<div class="slides">).';return l={...$p,...l,...e,...L,...ro()},B(),window.addEventListener("load",ie,!1),J.load(l.plugins,l.dependencies).then(ne),new Promise(k=>t.on("ready",k))}function B(){l.embedded===!0?p.viewport=bt(r,".reveal-viewport")||r:(p.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),p.viewport.classList.add("reveal-viewport")}function ne(){c=!0,re(),he(),Ge(),De(),st(),ct(),F(),Z.readURL(),U.update(!0),setTimeout(()=>{p.slides.classList.remove("no-transition"),p.wrapper.classList.add("ready"),Me({type:"ready",data:{indexh:n,indexv:i,currentSlide:a}})},1),X.isPrintingPDF()&&(be(),document.readyState==="complete"?X.setupPDF():window.addEventListener("load",()=>{X.setupPDF()}))}function re(){l.showHiddenSlides||Le(p.wrapper,'section[data-visibility="hidden"]').forEach(L=>{L.parentNode.removeChild(L)})}function he(){p.slides.classList.add("no-transition"),Pi?p.wrapper.classList.add("no-hover"):p.wrapper.classList.remove("no-hover"),U.render(),E.render(),A.render(),R.render(),N.render(),K.render(),p.pauseOverlay=Tp(p.wrapper,"div","pause-overlay",l.controls?'<button class="resume-button">Resume presentation</button>':null),p.statusElement=me(),p.wrapper.setAttribute("role","application")}function me(){let L=p.wrapper.querySelector(".aria-status");return L||(L=document.createElement("div"),L.style.position="absolute",L.style.height="1px",L.style.width="1px",L.style.overflow="hidden",L.style.clip="rect( 1px, 1px, 1px, 1px )",L.classList.add("aria-status"),L.setAttribute("aria-live","polite"),L.setAttribute("aria-atomic","true"),p.wrapper.appendChild(L)),L}function Te(L){p.statusElement.textContent=L}function ke(L){let k="";if(L.nodeType===3)k+=L.textContent;else if(L.nodeType===1){let oe=L.getAttribute("aria-hidden"),ae=window.getComputedStyle(L).display==="none";oe==="true"||ae||Array.from(L.childNodes).forEach(pe=>{k+=ke(pe)})}return k=k.trim(),k===""?"":k+" "}function De(){setInterval(()=>{p.wrapper.scrollTop===0&&p.wrapper.scrollLeft===0||(p.wrapper.scrollTop=0,p.wrapper.scrollLeft=0)},1e3)}function st(){document.addEventListener("fullscreenchange",bn),document.addEventListener("webkitfullscreenchange",bn)}function Ge(){l.postMessage&&window.addEventListener("message",si,!1)}function F(L){const k={...l};if(typeof L=="object"&&Ri(l,L),t.isReady()===!1)return;const oe=p.wrapper.querySelectorAll($n).length;p.wrapper.classList.remove(k.transition),p.wrapper.classList.add(l.transition),p.wrapper.setAttribute("data-transition-speed",l.transitionSpeed),p.wrapper.setAttribute("data-background-transition",l.backgroundTransition),p.viewport.style.setProperty("--slide-width",l.width+"px"),p.viewport.style.setProperty("--slide-height",l.height+"px"),l.shuffle&&Xt(),ms(p.wrapper,"embedded",l.embedded),ms(p.wrapper,"rtl",l.rtl),ms(p.wrapper,"center",l.center),l.pause===!1&&we(),l.previewLinks?(ot(),lt("[data-preview-link=false]")):(lt(),ot("[data-preview-link]:not([data-preview-link=false])")),D.reset(),o&&(o.destroy(),o=null),oe>1&&l.autoSlide&&l.autoSlideStoppable&&(o=new Yp(p.wrapper,()=>Math.min(Math.max((Date.now()-M)/m,0),1)),o.on("click",ln),_=!1),l.navigationMode!=="default"?p.wrapper.setAttribute("data-navigation-mode",l.navigationMode):p.wrapper.removeAttribute("data-navigation-mode"),K.configure(l,k),$.configure(l,k),H.configure(l,k),R.configure(l,k),N.configure(l,k),W.configure(l,k),x.configure(l,k),E.configure(l,k),$e()}function at(){window.addEventListener("resize",zi,!1),l.touch&&ee.bind(),l.keyboard&&W.bind(),l.progress&&N.bind(),l.respondToHashChanges&&Z.bind(),R.bind(),$.bind(),p.slides.addEventListener("click",rn,!1),p.slides.addEventListener("transitionend",ut,!1),p.pauseOverlay.addEventListener("click",we,!1),l.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Mn,!1)}function be(){ee.unbind(),$.unbind(),W.unbind(),R.unbind(),N.unbind(),Z.unbind(),window.removeEventListener("resize",zi,!1),p.slides.removeEventListener("click",rn,!1),p.slides.removeEventListener("transitionend",ut,!1),p.pauseOverlay.removeEventListener("click",we,!1)}function Oe(){be(),Ue(),lt(),K.destroy(),$.destroy(),J.destroy(),H.destroy(),R.destroy(),N.destroy(),U.destroy(),E.destroy(),A.destroy(),document.removeEventListener("fullscreenchange",bn),document.removeEventListener("webkitfullscreenchange",bn),document.removeEventListener("visibilitychange",Mn,!1),window.removeEventListener("message",si,!1),window.removeEventListener("load",ie,!1),p.pauseOverlay&&p.pauseOverlay.remove(),p.statusElement&&p.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),p.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),p.wrapper.removeAttribute("data-transition-speed"),p.wrapper.removeAttribute("data-background-transition"),p.viewport.classList.remove("reveal-viewport"),p.viewport.style.removeProperty("--slide-width"),p.viewport.style.removeProperty("--slide-height"),p.slides.style.removeProperty("width"),p.slides.style.removeProperty("height"),p.slides.style.removeProperty("zoom"),p.slides.style.removeProperty("left"),p.slides.style.removeProperty("top"),p.slides.style.removeProperty("bottom"),p.slides.style.removeProperty("right"),p.slides.style.removeProperty("transform"),Array.from(p.wrapper.querySelectorAll($n)).forEach(L=>{L.style.removeProperty("display"),L.style.removeProperty("top"),L.removeAttribute("hidden"),L.removeAttribute("aria-hidden")})}function Ae(L,k,oe){r.addEventListener(L,k,oe)}function Ze(L,k,oe){r.removeEventListener(L,k,oe)}function ze(L){typeof L.layout=="string"&&(g.layout=L.layout),typeof L.overview=="string"&&(g.overview=L.overview),g.layout?Ln(p.slides,g.layout+" "+g.overview):Ln(p.slides,g.overview)}function Me({target:L=p.wrapper,type:k,data:oe,bubbles:ae=!0}){let pe=document.createEvent("HTMLEvents",1,2);return pe.initEvent(k,ae,!0),Ri(pe,oe),L.dispatchEvent(pe),L===p.wrapper&&je(k),pe}function je(L,k){if(l.postMessageEvents&&window.parent!==window.self){let oe={namespace:"reveal",eventName:L,state:ve()};Ri(oe,k),window.parent.postMessage(JSON.stringify(oe),"*")}}function ot(L="a"){Array.from(p.wrapper.querySelectorAll(L)).forEach(k=>{/^(http|www)/gi.test(k.getAttribute("href"))&&k.addEventListener("click",vt,!1)})}function lt(L="a"){Array.from(p.wrapper.querySelectorAll(L)).forEach(k=>{/^(http|www)/gi.test(k.getAttribute("href"))&&k.removeEventListener("click",vt,!1)})}function w(L){te(),p.overlay=document.createElement("div"),p.overlay.classList.add("overlay"),p.overlay.classList.add("overlay-preview"),p.wrapper.appendChild(p.overlay),p.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${L}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${L}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,p.overlay.querySelector("iframe").addEventListener("load",k=>{p.overlay.classList.add("loaded")},!1),p.overlay.querySelector(".close").addEventListener("click",k=>{te(),k.preventDefault()},!1),p.overlay.querySelector(".external").addEventListener("click",k=>{te()},!1)}function S(L){typeof L=="boolean"?L?q():te():p.overlay?te():q()}function q(){if(l.help){te(),p.overlay=document.createElement("div"),p.overlay.classList.add("overlay"),p.overlay.classList.add("overlay-help"),p.wrapper.appendChild(p.overlay);let L='<p class="title">Keyboard Shortcuts</p><br/>',k=W.getShortcuts(),oe=W.getBindings();L+="<table><th>KEY</th><th>ACTION</th>";for(let ae in k)L+=`<tr><td>${ae}</td><td>${k[ae]}</td></tr>`;for(let ae in oe)oe[ae].key&&oe[ae].description&&(L+=`<tr><td>${oe[ae].key}</td><td>${oe[ae].description}</td></tr>`);L+="</table>",p.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${L}</div>
				</div>
			`,p.overlay.querySelector(".close").addEventListener("click",ae=>{te(),ae.preventDefault()},!1)}}function te(){return!!p.overlay&&(p.overlay.parentNode.removeChild(p.overlay),p.overlay=null,!0)}function ie(){if(p.wrapper&&!X.isPrintingPDF()){if(!l.disableLayout){Pi&&!l.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const L=Q(),k=h;C(l.width,l.height),p.slides.style.width=L.width+"px",p.slides.style.height=L.height+"px",h=Math.min(L.presentationWidth/L.width,L.presentationHeight/L.height),h=Math.max(h,l.minScale),h=Math.min(h,l.maxScale),h===1?(p.slides.style.zoom="",p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",ze({layout:""})):(p.slides.style.zoom="",p.slides.style.left="50%",p.slides.style.top="50%",p.slides.style.bottom="auto",p.slides.style.right="auto",ze({layout:"translate(-50%, -50%) scale("+h+")"}));const oe=Array.from(p.wrapper.querySelectorAll($n));for(let ae=0,pe=oe.length;ae<pe;ae++){const Ke=oe[ae];Ke.style.display!=="none"&&(l.center||Ke.classList.contains("center")?Ke.classList.contains("stack")?Ke.style.top=0:Ke.style.top=Math.max((L.height-Ke.scrollHeight)/2,0)+"px":Ke.style.top="")}k!==h&&Me({type:"resize",data:{oldScale:k,scale:h,size:L}})}p.viewport.style.setProperty("--slide-scale",h),N.update(),U.updateParallax(),T.isActive()&&T.update()}}function C(L,k){Le(p.slides,"section > .stretch, section > .r-stretch").forEach(oe=>{let ae=Ap(oe,k);if(/(img|video)/gi.test(oe.nodeName)){const pe=oe.naturalWidth||oe.videoWidth,Ke=oe.naturalHeight||oe.videoHeight,ht=Math.min(L/pe,ae/Ke);oe.style.width=pe*ht+"px",oe.style.height=Ke*ht+"px"}else oe.style.width=L+"px",oe.style.height=ae+"px"})}function Q(L,k){let oe=l.width,ae=l.height;l.disableLayout&&(oe=p.slides.offsetWidth,ae=p.slides.offsetHeight);const pe={width:oe,height:ae,presentationWidth:L||p.wrapper.offsetWidth,presentationHeight:k||p.wrapper.offsetHeight};return pe.presentationWidth-=pe.presentationWidth*l.margin,pe.presentationHeight-=pe.presentationHeight*l.margin,typeof pe.width=="string"&&/%$/.test(pe.width)&&(pe.width=parseInt(pe.width,10)/100*pe.presentationWidth),typeof pe.height=="string"&&/%$/.test(pe.height)&&(pe.height=parseInt(pe.height,10)/100*pe.presentationHeight),pe}function se(L,k){typeof L=="object"&&typeof L.setAttribute=="function"&&L.setAttribute("data-previous-indexv",k||0)}function V(L){if(typeof L=="object"&&typeof L.setAttribute=="function"&&L.classList.contains("stack")){const k=L.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(L.getAttribute(k)||0,10)}return 0}function fe(L=a){return L&&L.parentNode&&!!L.parentNode.nodeName.match(/section/i)}function Ee(){return!(!a||!fe(a))&&!a.nextElementSibling}function ye(){return n===0&&i===0}function xe(){return!!a&&!a.nextElementSibling&&(!fe(a)||!a.parentNode.nextElementSibling)}function ge(){if(l.pause){const L=p.wrapper.classList.contains("paused");Ue(),p.wrapper.classList.add("paused"),L===!1&&Me({type:"paused"})}}function we(){const L=p.wrapper.classList.contains("paused");p.wrapper.classList.remove("paused"),Ce(),L&&Me({type:"resumed"})}function Ve(L){typeof L=="boolean"?L?ge():we():P()?we():ge()}function P(){return p.wrapper.classList.contains("paused")}function de(L){typeof L=="boolean"?L?A.show():A.hide():A.isVisible()?A.hide():A.show()}function G(L){typeof L=="boolean"?L?Ie():Be():_?Ie():Be()}function ce(){return!(!m||_)}function le(L,k,oe,ae){if(Me({type:"beforeslidechange",data:{indexh:L===void 0?n:L,indexv:k===void 0?i:k,origin:ae}}).defaultPrevented)return;s=a;const pe=p.wrapper.querySelectorAll(Wn);if(pe.length===0)return;k!==void 0||T.isActive()||(k=V(pe[L])),s&&s.parentNode&&s.parentNode.classList.contains("stack")&&se(s.parentNode,i);const Ke=u.concat();u.length=0;let ht=n||0,zt=i||0;n=tt(Wn,L===void 0?n:L),i=tt(ao,k===void 0?i:k);let cn=n!==ht||i!==zt;cn||(s=null);let zn=pe[n];a=zn.querySelectorAll("section")[i]||zn;let dt=!1;cn&&s&&a&&!T.isActive()&&(s.hasAttribute("data-auto-animate")&&a.hasAttribute("data-auto-animate")&&s.getAttribute("data-auto-animate-id")===a.getAttribute("data-auto-animate-id")&&!(n>ht||i>zt?a:s).hasAttribute("data-auto-animate-restart")&&(dt=!0,p.slides.classList.add("disable-slide-transitions")),v="running"),ii(),ie(),T.isActive()&&T.update(),oe!==void 0&&x.goto(oe),s&&s!==a&&(s.classList.remove("present"),s.setAttribute("aria-hidden","true"),ye()&&setTimeout(()=>{kr().forEach(sn=>{se(sn,0)})},0));e:for(let sn=0,dl=u.length;sn<dl;sn++){for(let tr=0;tr<Ke.length;tr++)if(Ke[tr]===u[sn]){Ke.splice(tr,1);continue e}p.viewport.classList.add(u[sn]),Me({type:u[sn]})}for(;Ke.length;)p.viewport.classList.remove(Ke.pop());cn&&Me({type:"slidechanged",data:{indexh:n,indexv:i,previousSlide:s,currentSlide:a,origin:ae}}),!cn&&s||(y.stopEmbeddedContent(s),y.startEmbeddedContent(a)),requestAnimationFrame(()=>{Te(ke(a))}),N.update(),R.update(),K.update(),U.update(),U.updateParallax(),E.update(),x.update(),Z.writeURL(),Ce(),dt&&(setTimeout(()=>{p.slides.classList.remove("disable-slide-transitions")},0),l.autoAnimate&&D.run(s,a))}function $e(){be(),at(),ie(),m=l.autoSlide,Ce(),U.create(),Z.writeURL(),l.sortFragmentsOnSync===!0&&x.sortAll(),R.update(),N.update(),ii(),K.update(),K.updateVisibility(),U.update(!0),E.update(),y.formatEmbeddedContent(),l.autoPlayMedia===!1?y.stopEmbeddedContent(a,{unloadIframes:!1}):y.startEmbeddedContent(a),T.isActive()&&T.layout()}function it(L=a){U.sync(L),x.sync(L),y.load(L),U.update(),K.update()}function ct(){qt().forEach(L=>{Le(L,"section").forEach((k,oe)=>{oe>0&&(k.classList.remove("present"),k.classList.remove("past"),k.classList.add("future"),k.setAttribute("aria-hidden","true"))})})}function Xt(L=qt()){L.forEach((k,oe)=>{let ae=L[Math.floor(Math.random()*L.length)];ae.parentNode===k.parentNode&&k.parentNode.insertBefore(k,ae);let pe=k.querySelectorAll("section");pe.length&&Xt(pe)})}function tt(L,k){let oe=Le(p.wrapper,L),ae=oe.length,pe=X.isPrintingPDF(),Ke=!1,ht=!1;if(ae){l.loop&&(k>=ae&&(Ke=!0),(k%=ae)<0&&(k=ae+k,ht=!0)),k=Math.max(Math.min(k,ae-1),0);for(let Dt=0;Dt<ae;Dt++){let dt=oe[Dt],sn=l.rtl&&!fe(dt);dt.classList.remove("past"),dt.classList.remove("present"),dt.classList.remove("future"),dt.setAttribute("hidden",""),dt.setAttribute("aria-hidden","true"),dt.querySelector("section")&&dt.classList.add("stack"),pe?dt.classList.add("present"):Dt<k?(dt.classList.add(sn?"future":"past"),l.fragments&&Pt(dt)):Dt>k?(dt.classList.add(sn?"past":"future"),l.fragments&&gt(dt)):Dt===k&&l.fragments&&(Ke?gt(dt):ht&&Pt(dt))}let zt=oe[k],cn=zt.classList.contains("present");zt.classList.add("present"),zt.removeAttribute("hidden"),zt.removeAttribute("aria-hidden"),cn||Me({target:zt,type:"visible",bubbles:!1});let zn=zt.getAttribute("data-state");zn&&(u=u.concat(zn.split(" ")))}else k=0;return k}function Pt(L){Le(L,".fragment").forEach(k=>{k.classList.add("visible"),k.classList.remove("current-fragment")})}function gt(L){Le(L,".fragment.visible").forEach(k=>{k.classList.remove("visible","current-fragment")})}function ii(){let L,k,oe=qt(),ae=oe.length;if(ae&&n!==void 0){let pe=T.isActive()?10:l.viewDistance;Pi&&(pe=T.isActive()?6:l.mobileViewDistance),X.isPrintingPDF()&&(pe=Number.MAX_VALUE);for(let Ke=0;Ke<ae;Ke++){let ht=oe[Ke],zt=Le(ht,"section"),cn=zt.length;if(L=Math.abs((n||0)-Ke)||0,l.loop&&(L=Math.abs(((n||0)-Ke)%(ae-pe))||0),L<pe?y.load(ht):y.unload(ht),cn){let zn=V(ht);for(let Dt=0;Dt<cn;Dt++){let dt=zt[Dt];k=Math.abs(Ke===(n||0)?(i||0)-Dt:Dt-zn),L+k<pe?y.load(dt):y.unload(dt)}}}b()?p.wrapper.classList.add("has-vertical-slides"):p.wrapper.classList.remove("has-vertical-slides"),er()?p.wrapper.classList.add("has-horizontal-slides"):p.wrapper.classList.remove("has-horizontal-slides")}}function kt({includeFragments:L=!1}={}){let k=p.wrapper.querySelectorAll(Wn),oe=p.wrapper.querySelectorAll(ao),ae={left:n>0,right:n<k.length-1,up:i>0,down:i<oe.length-1};if(l.loop&&(k.length>1&&(ae.left=!0,ae.right=!0),oe.length>1&&(ae.up=!0,ae.down=!0)),k.length>1&&l.navigationMode==="linear"&&(ae.right=ae.right||ae.down,ae.left=ae.left||ae.up),L===!0){let pe=x.availableRoutes();ae.left=ae.left||pe.prev,ae.up=ae.up||pe.prev,ae.down=ae.down||pe.next,ae.right=ae.right||pe.next}if(l.rtl){let pe=ae.left;ae.left=ae.right,ae.right=pe}return ae}function Ji(L=a){let k=qt(),oe=0;e:for(let ae=0;ae<k.length;ae++){let pe=k[ae],Ke=pe.querySelectorAll("section");for(let ht=0;ht<Ke.length;ht++){if(Ke[ht]===L)break e;Ke[ht].dataset.visibility!=="uncounted"&&oe++}if(pe===L)break;pe.classList.contains("stack")===!1&&pe.dataset.visibility!=="uncounted"&&oe++}return oe}function ri(){let L=Y(),k=Ji();if(a){let oe=a.querySelectorAll(".fragment");if(oe.length>0){let ae=.9;k+=a.querySelectorAll(".fragment.visible").length/oe.length*ae}}return Math.min(k/(L-1),1)}function Oi(L){let k,oe=n,ae=i;if(L){let pe=fe(L),Ke=pe?L.parentNode:L,ht=qt();oe=Math.max(ht.indexOf(Ke),0),ae=void 0,pe&&(ae=Math.max(Le(L.parentNode,"section").indexOf(L),0))}if(!L&&a&&a.querySelectorAll(".fragment").length>0){let pe=a.querySelector(".current-fragment");k=pe&&pe.hasAttribute("data-fragment-index")?parseInt(pe.getAttribute("data-fragment-index"),10):a.querySelectorAll(".fragment.visible").length-1}return{h:oe,v:ae,f:k}}function En(){return Le(p.wrapper,$n+':not(.stack):not([data-visibility="uncounted"])')}function qt(){return Le(p.wrapper,Wn)}function Qi(){return Le(p.wrapper,".slides>section>section")}function kr(){return Le(p.wrapper,Wn+".stack")}function er(){return qt().length>1}function b(){return Qi().length>1}function O(){return En().map(L=>{let k={};for(let oe=0;oe<L.attributes.length;oe++){let ae=L.attributes[oe];k[ae.name]=ae.value}return k})}function Y(){return En().length}function I(L,k){let oe=qt()[L],ae=oe&&oe.querySelectorAll("section");return ae&&ae.length&&typeof k=="number"?ae?ae[k]:void 0:oe}function j(L,k){let oe=typeof L=="number"?I(L,k):L;if(oe)return oe.slideBackgroundElement}function ve(){let L=Oi();return{indexh:L.h,indexv:L.v,indexf:L.f,paused:P(),overview:T.isActive()}}function Re(L){if(typeof L=="object"){le(Ai(L.indexh),Ai(L.indexv),Ai(L.indexf));let k=Ai(L.paused),oe=Ai(L.overview);typeof k=="boolean"&&k!==P()&&Ve(k),typeof oe=="boolean"&&oe!==T.isActive()&&T.toggle(oe)}}function Ce(){if(Ue(),a&&l.autoSlide!==!1){let L=a.querySelector(".current-fragment");L||(L=a.querySelector(".fragment"));let k=L?L.getAttribute("data-autoslide"):null,oe=a.parentNode?a.parentNode.getAttribute("data-autoslide"):null,ae=a.getAttribute("data-autoslide");k?m=parseInt(k,10):ae?m=parseInt(ae,10):oe?m=parseInt(oe,10):(m=l.autoSlide,a.querySelectorAll(".fragment").length===0&&Le(a,"video, audio").forEach(pe=>{pe.hasAttribute("data-autoplay")&&m&&1e3*pe.duration/pe.playbackRate>m&&(m=1e3*pe.duration/pe.playbackRate+1e3)})),!m||_||P()||T.isActive()||xe()&&!x.availableRoutes().next&&l.loop!==!0||(f=setTimeout(()=>{typeof l.autoSlideMethod=="function"?l.autoSlideMethod():rt(),Ce()},m),M=Date.now()),o&&o.setPlaying(f!==-1)}}function Ue(){clearTimeout(f),f=-1}function Be(){m&&!_&&(_=!0,Me({type:"autoslidepaused"}),clearTimeout(f),o&&o.setPlaying(!1))}function Ie(){m&&_&&(_=!1,Me({type:"autoslideresumed"}),Ce())}function Fe({skipFragments:L=!1}={}){d.hasNavigatedHorizontally=!0,l.rtl?(T.isActive()||L||x.next()===!1)&&kt().left&&le(n+1,l.navigationMode==="grid"?i:void 0):(T.isActive()||L||x.prev()===!1)&&kt().left&&le(n-1,l.navigationMode==="grid"?i:void 0)}function Je({skipFragments:L=!1}={}){d.hasNavigatedHorizontally=!0,l.rtl?(T.isActive()||L||x.prev()===!1)&&kt().right&&le(n-1,l.navigationMode==="grid"?i:void 0):(T.isActive()||L||x.next()===!1)&&kt().right&&le(n+1,l.navigationMode==="grid"?i:void 0)}function nt({skipFragments:L=!1}={}){(T.isActive()||L||x.prev()===!1)&&kt().up&&le(n,i-1)}function Tt({skipFragments:L=!1}={}){d.hasNavigatedVertically=!0,(T.isActive()||L||x.next()===!1)&&kt().down&&le(n,i+1)}function Ot({skipFragments:L=!1}={}){if(L||x.prev()===!1)if(kt().up)nt({skipFragments:L});else{let k;if(k=l.rtl?Le(p.wrapper,Wn+".future").pop():Le(p.wrapper,Wn+".past").pop(),k&&k.classList.contains("stack")){let oe=k.querySelectorAll("section").length-1||void 0;le(n-1,oe)}else Fe({skipFragments:L})}}function rt({skipFragments:L=!1}={}){if(d.hasNavigatedHorizontally=!0,d.hasNavigatedVertically=!0,L||x.next()===!1){let k=kt();k.down&&k.right&&l.loop&&Ee()&&(k.down=!1),k.down?Tt({skipFragments:L}):l.rtl?Fe({skipFragments:L}):Je({skipFragments:L})}}function Ye(L){l.autoSlideStoppable&&Be()}function si(L){let k=L.data;if(typeof k=="string"&&k.charAt(0)==="{"&&k.charAt(k.length-1)==="}"&&(k=JSON.parse(k),k.method&&typeof t[k.method]=="function"))if(Up.test(k.method)===!1){const oe=t[k.method].apply(t,k.args);je("callback",{method:k.method,result:oe})}else console.warn('reveal.js: "'+k.method+'" is is blacklisted from the postMessage API')}function ut(L){v==="running"&&/section/gi.test(L.target.nodeName)&&(v="idle",Me({type:"slidetransitionend",data:{indexh:n,indexv:i,previousSlide:s,currentSlide:a}}))}function rn(L){const k=bt(L.target,'a[href^="#"]');if(k){const oe=k.getAttribute("href"),ae=Z.getIndicesFromHash(oe);ae&&(t.slide(ae.h,ae.v,ae.f),L.preventDefault())}}function zi(L){ie()}function Mn(L){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function bn(L){(document.fullscreenElement||document.webkitFullscreenElement)===p.wrapper&&(L.stopImmediatePropagation(),setTimeout(()=>{t.layout(),t.focus.focus()},1))}function vt(L){if(L.currentTarget&&L.currentTarget.hasAttribute("href")){let k=L.currentTarget.getAttribute("href");k&&(w(k),L.preventDefault())}}function ln(L){xe()&&l.loop===!1?(le(0,0),Ie()):_?Ie():Be()}const ai={VERSION:rl,initialize:Se,configure:F,destroy:Oe,sync:$e,syncSlide:it,syncFragments:x.sync.bind(x),slide:le,left:Fe,right:Je,up:nt,down:Tt,prev:Ot,next:rt,navigateLeft:Fe,navigateRight:Je,navigateUp:nt,navigateDown:Tt,navigatePrev:Ot,navigateNext:rt,navigateFragment:x.goto.bind(x),prevFragment:x.prev.bind(x),nextFragment:x.next.bind(x),on:Ae,off:Ze,addEventListener:Ae,removeEventListener:Ze,layout:ie,shuffle:Xt,availableRoutes:kt,availableFragments:x.availableRoutes.bind(x),toggleHelp:S,toggleOverview:T.toggle.bind(T),togglePause:Ve,toggleAutoSlide:G,toggleJumpToSlide:de,isFirstSlide:ye,isLastSlide:xe,isLastVerticalSlide:Ee,isVerticalSlide:fe,isPaused:P,isAutoSliding:ce,isSpeakerNotes:K.isSpeakerNotesWindow.bind(K),isOverview:T.isActive.bind(T),isFocused:$.isFocused.bind($),isPrintingPDF:X.isPrintingPDF.bind(X),isReady:()=>c,loadSlide:y.load.bind(y),unloadSlide:y.unload.bind(y),showPreview:w,hidePreview:te,addEventListeners:at,removeEventListeners:be,dispatchEvent:Me,getState:ve,setState:Re,getProgress:ri,getIndices:Oi,getSlidesAttributes:O,getSlidePastCount:Ji,getTotalSlides:Y,getSlide:I,getPreviousSlide:()=>s,getCurrentSlide:()=>a,getSlideBackground:j,getSlideNotes:K.getSlideNotes.bind(K),getSlides:En,getHorizontalSlides:qt,getVerticalSlides:Qi,hasHorizontalSlides:er,hasVerticalSlides:b,hasNavigatedHorizontally:()=>d.hasNavigatedHorizontally,hasNavigatedVertically:()=>d.hasNavigatedVertically,addKeyBinding:W.addKeyBinding.bind(W),removeKeyBinding:W.removeKeyBinding.bind(W),triggerKey:W.triggerKey.bind(W),registerKeyboardShortcut:W.registerKeyboardShortcut.bind(W),getComputedSlideSize:Q,getScale:()=>h,getConfig:()=>l,getQueryHash:ro,getSlidePath:Z.getHash.bind(Z),getRevealElement:()=>r,getSlidesElement:()=>p.slides,getViewportElement:()=>p.viewport,getBackgroundsElement:()=>U.element,registerPlugin:J.registerPlugin.bind(J),hasPlugin:J.hasPlugin.bind(J),getPlugin:J.getPlugin.bind(J),getPlugins:J.getRegisteredPlugins.bind(J)};return Ri(t,{...ai,announceStatus:Te,getStatusText:ke,print:X,focus:$,progress:N,controls:R,location:Z,overview:T,fragments:x,slideContent:y,slideNumber:E,onUserInput:Ye,closeOverlay:te,updateSlidesVisibility:ii,layoutSlideContents:C,transformSlides:ze,cueAutoSlide:Ce,cancelAutoSlide:Ue}),ai}let Cn=sl,ho=[];Cn.initialize=r=>(Object.assign(Cn,new sl(document.querySelector(".reveal"),r)),ho.map(e=>e(Cn)),Cn.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(r=>{Cn[r]=(...e)=>{ho.push(t=>t[r].call(null,...e))}}),Cn.isReady=()=>!1,Cn.VERSION=rl;function jp(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Fi={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Kp=/[&<>"']/,Zp=/[&<>"']/g,Jp=/[<>"']|&(?!#?\w+;)/,Qp=/[<>"']|&(?!#?\w+;)/g,em={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fo=r=>em[r];function xt(r,e){if(e){if(Kp.test(r))return r.replace(Zp,fo)}else if(Jp.test(r))return r.replace(Qp,fo);return r}const tm=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function al(r){return r.replace(tm,(e,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const nm=/(^|[^\[])\^/g;function Qe(r,e){r=r.source||r,e=e||"";const t={replace:(n,i)=>(i=(i=i.source||i).replace(nm,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const im=/[^\w:]/g,rm=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function po(r,e,t){if(r){let n;try{n=decodeURIComponent(al(t)).replace(im,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!rm.test(t)&&(t=function(n,i){Ar[" "+n]||(sm.test(n)?Ar[" "+n]=n+"/":Ar[" "+n]=Rr(n,"/",!0)),n=Ar[" "+n];const s=n.indexOf(":")===-1;return i.substring(0,2)==="//"?s?i:n.replace(am,"$1")+i:i.charAt(0)==="/"?s?i:n.replace(om,"$1")+i:n+i}(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Ar={},sm=/^[^:]+:\/*[^/]*$/,am=/^([^:]+:)[\s\S]*$/,om=/^([^:]+:\/*[^/]*)[\s\S]*$/,Dr={exec:function(){}};function tn(r){let e,t,n=1;for(;n<arguments.length;n++)for(t in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function mo(r,e){const t=r.replace(/\|/g,(i,s,a)=>{let o=!1,l=s;for(;--l>=0&&a[l]==="\\";)o=!o;return o?"|":" |"}).split(/ \|/);let n=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;n<t.length;n++)t[n]=t[n].trim().replace(/\\\|/g,"|");return t}function Rr(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s!==e||t){if(s===e||!t)break;i++}else i++}return r.substr(0,n-i)}function ol(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function go(r,e){if(e<1)return"";let t="";for(;e>1;)1&e&&(t+=r),e>>=1,r+=r;return t+r}function vo(r,e,t,n){const i=e.href,s=e.title?xt(e.title):null,a=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:s,text:a,tokens:n.inlineTokens(a,[])};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:s,text:xt(a)}}class Ls{constructor(e){this.options=e||Fi}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Rr(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=function(s,a){const o=s.match(/^(\s+)(?:```)/);if(o===null)return a;const l=o[1];return a.split(`
`).map(c=>{const d=c.match(/^\s+/);if(d===null)return c;const[u]=d;return u.length>=l.length?c.slice(l.length):c}).join(`
`)}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=Rr(n,"#");this.options.pedantic?n=s.trim():s&&!/ $/.test(s)||(n=s.trim())}const i={type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,s,a,o,l,c,d,u,h,g,p,v=t[1].trim();const m=v.length>1,f={type:"list",raw:"",ordered:m,start:m?+v.slice(0,-1):"",loose:!1,items:[]};v=m?`\\d{1,9}\\${v.slice(-1)}`:`\\${v}`,this.options.pedantic&&(v=m?v:"[*+-]");const M=new RegExp(`^( {0,3}${v})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,t=M.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),d=t[2].split(`
`,1)[0],u=e.split(`
`,1)[0],this.options.pedantic?(a=2,g=d.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,g=d.slice(a),a+=t[1].length),l=!1,!d&&/^ *$/.test(u)&&(n+=u+`
`,e=e.substring(u.length+1),p=!0),!p){const y=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(h=e.split(`
`,1)[0],d=h,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!y.test(d));){if(d.search(/[^ ]/)>=a||!d.trim())g+=`
`+d.slice(a);else{if(l)break;g+=`
`+d}l||d.trim()||(l=!0),n+=h+`
`,e=e.substring(h.length+1)}}f.loose||(c?f.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(g),i&&(s=i[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:g}),f.raw+=n}f.items[f.items.length-1].raw=n.trimRight(),f.items[f.items.length-1].text=g.trimRight(),f.raw=f.raw.trimRight();const _=f.items.length;for(o=0;o<_;o++){this.lexer.state.top=!1,f.items[o].tokens=this.lexer.blockTokens(f.items[o].text,[]);const y=f.items[o].tokens.filter(A=>A.type==="space"),E=y.every(A=>{const D=A.raw.split("");let U=0;for(const x of D)if(x===`
`&&(U+=1),U>1)return!0;return!1});!f.loose&&y.length&&E&&(f.loose=!0,f.items[o].loose=!0)}return f}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(t[0]):xt(t[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:mo(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i,s,a,o,l=n.align.length;for(i=0;i<l;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(l=n.rows.length,i=0;i<l;i++)n.rows[i]=mo(n.rows[i],n.header.length).map(c=>({text:c}));for(l=n.header.length,s=0;s<l;s++)n.header[s].tokens=[],this.lexer.inlineTokens(n.header[s].text,n.header[s].tokens);for(l=n.rows.length,s=0;s<l;s++)for(o=n.rows[s],a=0;a<o.length;a++)o[a].tokens=[],this.lexer.inlineTokens(o[a].text,o[a].tokens);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const n={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(e){const t=this.rules.block.text.exec(e);if(t){const n={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:xt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):xt(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=Rr(n.slice(0,-1),"\\");if((n.length-a.length)%2==0)return}else{const a=function(o,l){if(o.indexOf(l[1])===-1)return-1;const c=o.length;let d=0,u=0;for(;u<c;u++)if(o[u]==="\\")u++;else if(o[u]===l[0])d++;else if(o[u]===l[1]&&(d--,d<0))return u;return-1}(t[2],"()");if(a>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(n)?i.slice(1):i.slice(1,-1)),vo(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i||!i.href){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return vo(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const a=i[0].length-1;let o,l,c=a,d=0;const u=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+a);(i=u.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=o.length,i[3]||i[4]){c+=l;continue}if((i[5]||i[6])&&a%3&&!((a+l)%3)){d+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+d),Math.min(a,l)%2){const g=e.slice(1,a+i.index+l);return{type:"em",raw:e.slice(0,a+i.index+l+1),text:g,tokens:this.lexer.inlineTokens(g,[])}}const h=e.slice(2,a+i.index+l-1);return{type:"strong",raw:e.slice(0,a+i.index+l+1),text:h,tokens:this.lexer.inlineTokens(h,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=xt(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=xt(this.options.mangle?t(n[1]):n[1]),s="mailto:"+i):(i=xt(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=xt(this.options.mangle?t(n[0]):n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);i=xt(n[0]),s=n[1]==="www."?"http://"+i:i}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):xt(n[0]):n[0]:xt(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const Pe={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Dr,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Pe.def=Qe(Pe.def).replace("label",Pe._label).replace("title",Pe._title).getRegex(),Pe.bullet=/(?:[*+-]|\d{1,9}[.)])/,Pe.listItemStart=Qe(/^( *)(bull) */).replace("bull",Pe.bullet).getRegex(),Pe.list=Qe(Pe.list).replace(/bull/g,Pe.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Pe.def.source+")").getRegex(),Pe._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pe._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Pe.html=Qe(Pe.html,"i").replace("comment",Pe._comment).replace("tag",Pe._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pe.paragraph=Qe(Pe._paragraph).replace("hr",Pe.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pe._tag).getRegex(),Pe.blockquote=Qe(Pe.blockquote).replace("paragraph",Pe.paragraph).getRegex(),Pe.normal=tn({},Pe),Pe.gfm=tn({},Pe.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Pe.gfm.table=Qe(Pe.gfm.table).replace("hr",Pe.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pe._tag).getRegex(),Pe.gfm.paragraph=Qe(Pe._paragraph).replace("hr",Pe.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",Pe.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Pe._tag).getRegex(),Pe.pedantic=tn({},Pe.normal,{html:Qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pe._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Dr,paragraph:Qe(Pe.normal._paragraph).replace("hr",Pe.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Pe.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const _e={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Dr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Dr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function lm(r){return r.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function _o(r){let e,t,n="";const i=r.length;for(e=0;e<i;e++)t=r.charCodeAt(e),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n}_e._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",_e.punctuation=Qe(_e.punctuation).replace(/punctuation/g,_e._punctuation).getRegex(),_e.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,_e.escapedEmSt=/\\\*|\\_/g,_e._comment=Qe(Pe._comment).replace("(?:-->|$)","-->").getRegex(),_e.emStrong.lDelim=Qe(_e.emStrong.lDelim).replace(/punct/g,_e._punctuation).getRegex(),_e.emStrong.rDelimAst=Qe(_e.emStrong.rDelimAst,"g").replace(/punct/g,_e._punctuation).getRegex(),_e.emStrong.rDelimUnd=Qe(_e.emStrong.rDelimUnd,"g").replace(/punct/g,_e._punctuation).getRegex(),_e._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,_e._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,_e._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,_e.autolink=Qe(_e.autolink).replace("scheme",_e._scheme).replace("email",_e._email).getRegex(),_e._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,_e.tag=Qe(_e.tag).replace("comment",_e._comment).replace("attribute",_e._attribute).getRegex(),_e._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_e._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,_e._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,_e.link=Qe(_e.link).replace("label",_e._label).replace("href",_e._href).replace("title",_e._title).getRegex(),_e.reflink=Qe(_e.reflink).replace("label",_e._label).replace("ref",Pe._label).getRegex(),_e.nolink=Qe(_e.nolink).replace("ref",Pe._label).getRegex(),_e.reflinkSearch=Qe(_e.reflinkSearch,"g").replace("reflink",_e.reflink).replace("nolink",_e.nolink).getRegex(),_e.normal=tn({},_e),_e.pedantic=tn({},_e.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Qe(/^!?\[(label)\]\((.*?)\)/).replace("label",_e._label).getRegex(),reflink:Qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_e._label).getRegex()}),_e.gfm=tn({},_e.normal,{escape:Qe(_e.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),_e.gfm.url=Qe(_e.gfm.url,"i").replace("email",_e.gfm._extended_email).getRegex(),_e.breaks=tn({},_e.gfm,{br:Qe(_e.br).replace("{2,}","*").getRegex(),text:Qe(_e.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Fn{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Fi,this.options.tokenizer=this.options.tokenizer||new Ls,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Pe.normal,inline:_e.normal};this.options.pedantic?(t.block=Pe.pedantic,t.inline=_e.pedantic):this.options.gfm&&(t.block=Pe.gfm,this.options.breaks?t.inline=_e.breaks:t.inline=_e.gfm),this.tokenizer.rules=t}static get rules(){return{block:Pe,inline:_e}}static lex(e,t){return new Fn(t).lex(e)}static lexInline(e,t){return new Fn(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,i,s,a;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>!!(n=o.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),i=t[t.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?t.push(n):(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),i=t[t.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(d){c=d.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s)))i=t[t.length-1],a&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),a=s.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);else if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,i,s,a,o,l,c=e;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,a.index)+"["+go("a",a[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,a.index)+"["+go("a",a[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,a.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(l=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>!!(n=d.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,c,l))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,_o))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,_o))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const u=e.slice(1);let h;this.options.extensions.startInline.forEach(function(g){h=g.call({lexer:this},u),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(s=e.substring(0,d+1))}if(n=this.tokenizer.inlineText(s,lm))e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(l=n.raw.slice(-1)),o=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);else if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}else e=e.substring(n.raw.length),t.push(n);return t}}class Ps{constructor(e){this.options=e||Fi}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+xt(i,!0)+'">'+(n?e:xt(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:xt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
`+e+`</blockquote>
`}html(e){return e}heading(e,t,n,i){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+i.slug(n)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul";return"<"+i+(t&&n!==1?' start="'+n+'"':"")+`>
`+e+"</"+i+`>
`}listitem(e){return"<li>"+e+`</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+`</p>
`}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
`+e+`</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+`>
`}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if((e=po(this.options.sanitize,this.options.baseUrl,e))===null)return n;let i='<a href="'+xt(e)+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if((e=po(this.options.sanitize,this.options.baseUrl,e))===null)return n;let i='<img src="'+e+'" alt="'+n+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class ll{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class cl{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class kn{constructor(e){this.options=e||Fi,this.options.renderer=this.options.renderer||new Ps,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ll,this.slugger=new cl}static parse(e,t){return new kn(t).parse(e)}static parseInline(e,t){return new kn(t).parseInline(e)}parse(e,t=!0){let n,i,s,a,o,l,c,d,u,h,g,p,v,m,f,M,_,y,E,A="";const D=e.length;for(n=0;n<D;n++)if(h=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(E=this.options.extensions.renderers[h.type].call({parser:this},h),E!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))A+=E||"";else switch(h.type){case"space":continue;case"hr":A+=this.renderer.hr();continue;case"heading":A+=this.renderer.heading(this.parseInline(h.tokens),h.depth,al(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":A+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(d="",c="",a=h.header.length,i=0;i<a;i++)c+=this.renderer.tablecell(this.parseInline(h.header[i].tokens),{header:!0,align:h.align[i]});for(d+=this.renderer.tablerow(c),u="",a=h.rows.length,i=0;i<a;i++){for(l=h.rows[i],c="",o=l.length,s=0;s<o;s++)c+=this.renderer.tablecell(this.parseInline(l[s].tokens),{header:!1,align:h.align[s]});u+=this.renderer.tablerow(c)}A+=this.renderer.table(d,u);continue;case"blockquote":u=this.parse(h.tokens),A+=this.renderer.blockquote(u);continue;case"list":for(g=h.ordered,p=h.start,v=h.loose,a=h.items.length,u="",i=0;i<a;i++)f=h.items[i],M=f.checked,_=f.task,m="",f.task&&(y=this.renderer.checkbox(M),v?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=y+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=y+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:y}):m+=y),m+=this.parse(f.tokens,v),u+=this.renderer.listitem(m,_,M);A+=this.renderer.list(u,g,p);continue;case"html":A+=this.renderer.html(h.text);continue;case"paragraph":A+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(u=h.tokens?this.parseInline(h.tokens):h.text;n+1<D&&e[n+1].type==="text";)h=e[++n],u+=`
`+(h.tokens?this.parseInline(h.tokens):h.text);A+=t?this.renderer.paragraph(u):u;continue;default:{const U='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(U);throw new Error(U)}}return A}parseInline(e,t){t=t||this.renderer;let n,i,s,a="";const o=e.length;for(n=0;n<o;n++)if(i=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(s=this.options.extensions.renderers[i.type].call({parser:this},i),s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))a+=s||"";else switch(i.type){case"escape":case"text":a+=t.text(i.text);break;case"html":a+=t.html(i.text);break;case"link":a+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break;case"image":a+=t.image(i.href,i.title,i.text);break;case"strong":a+=t.strong(this.parseInline(i.tokens,t));break;case"em":a+=t.em(this.parseInline(i.tokens,t));break;case"codespan":a+=t.codespan(i.text);break;case"br":a+=t.br();break;case"del":a+=t.del(this.parseInline(i.tokens,t));break;default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}}return a}}function Ne(r,e,t){if(r==null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),ol(e=tn({},Ne.defaults,e||{})),t){const n=e.highlight;let i;try{i=Fn.lex(r,e)}catch(o){return t(o)}const s=function(o){let l;if(!o)try{e.walkTokens&&Ne.walkTokens(i,e.walkTokens),l=kn.parse(i,e)}catch(c){o=c}return e.highlight=n,o?t(o):t(null,l)};if(!n||n.length<3||(delete e.highlight,!i.length))return s();let a=0;return Ne.walkTokens(i,function(o){o.type==="code"&&(a++,setTimeout(()=>{n(o.text,o.lang,function(l,c){if(l)return s(l);c!=null&&c!==o.text&&(o.text=c,o.escaped=!0),a--,a===0&&s()})},0))}),void(a===0&&s())}try{const n=Fn.lex(r,e);return e.walkTokens&&Ne.walkTokens(n,e.walkTokens),kn.parse(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+xt(n.message+"",!0)+"</pre>";throw n}}Ne.options=Ne.setOptions=function(r){var e;return tn(Ne.defaults,r),e=Ne.defaults,Fi=e,Ne},Ne.getDefaults=jp,Ne.defaults=Fi,Ne.use=function(...r){const e=tn({},...r),t=Ne.defaults.extensions||{renderers:{},childTokens:{}};let n;r.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if(s.renderer){const a=t.renderers?t.renderers[s.name]:null;t.renderers[s.name]=a?function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=a.apply(this,o)),l}:s.renderer}if(s.tokenizer){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[s.level]?t[s.level].unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}s.childTokens&&(t.childTokens[s.name]=s.childTokens)})),i.renderer){const s=Ne.defaults.renderer||new Ps;for(const a in i.renderer){const o=s[a];s[a]=(...l)=>{let c=i.renderer[a].apply(s,l);return c===!1&&(c=o.apply(s,l)),c}}e.renderer=s}if(i.tokenizer){const s=Ne.defaults.tokenizer||new Ls;for(const a in i.tokenizer){const o=s[a];s[a]=(...l)=>{let c=i.tokenizer[a].apply(s,l);return c===!1&&(c=o.apply(s,l)),c}}e.tokenizer=s}if(i.walkTokens){const s=Ne.defaults.walkTokens;e.walkTokens=function(a){i.walkTokens.call(this,a),s&&s.call(this,a)}}n&&(e.extensions=t),Ne.setOptions(e)})},Ne.walkTokens=function(r,e){for(const t of r)switch(e.call(Ne,t),t.type){case"table":for(const n of t.header)Ne.walkTokens(n.tokens,e);for(const n of t.rows)for(const i of n)Ne.walkTokens(i.tokens,e);break;case"list":Ne.walkTokens(t.items,e);break;default:Ne.defaults.extensions&&Ne.defaults.extensions.childTokens&&Ne.defaults.extensions.childTokens[t.type]?Ne.defaults.extensions.childTokens[t.type].forEach(function(n){Ne.walkTokens(t[n],e)}):t.tokens&&Ne.walkTokens(t.tokens,e)}},Ne.parseInline=function(r,e){if(r==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");ol(e=tn({},Ne.defaults,e||{}));try{const t=Fn.lexInline(r,e);return e.walkTokens&&Ne.walkTokens(t,e.walkTokens),kn.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+xt(t.message+"",!0)+"</pre>";throw t}},Ne.Parser=kn,Ne.parser=kn.parse,Ne.Renderer=Ps,Ne.TextRenderer=ll,Ne.Lexer=Fn,Ne.lexer=Fn.lex,Ne.Tokenizer=Ls,Ne.Slugger=cl,Ne.parse=Ne;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const xo="__SCRIPT_END__",_s=/\[([\s\d,|-]*)\]/,cm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},um=()=>{let r;function e(d){var u=(d.querySelector("[data-template]")||d.querySelector("script")||d).textContent,h=(u=u.replace(new RegExp(xo,"g"),"<\/script>")).match(/^\n?(\s*)/)[1].length,g=u.match(/^\n?(\t*)/)[1].length;return g>0?u=u.replace(new RegExp("\\n?\\t{"+g+"}(.*)","g"),function(p,v){return`
`+v}):h>1&&(u=u.replace(new RegExp("\\n? {"+h+"}(.*)","g"),function(p,v){return`
`+v})),u}function t(d){for(var u=d.attributes,h=[],g=0,p=u.length;g<p;g++){var v=u[g].name,m=u[g].value;/data\-(markdown|separator|vertical|notes)/gi.test(v)||(m?h.push(v+'="'+m+'"'):h.push(v))}return h.join(" ")}function n(d){return(d=d||{}).separator=d.separator||`\r?
---\r?
`,d.notesSeparator=d.notesSeparator||"notes?:",d.attributes=d.attributes||"",d}function i(d,u){u=n(u);var h=d.split(new RegExp(u.notesSeparator,"mgi"));return h.length===2&&(d=h[0]+'<aside class="notes">'+Ne(h[1].trim())+"</aside>"),'<script type="text/template">'+(d=d.replace(/<\/script>/g,xo))+"<\/script>"}function s(d,u){u=n(u);for(var h,g,p,v=new RegExp(u.separator+(u.verticalSeparator?"|"+u.verticalSeparator:""),"mg"),m=new RegExp(u.separator),f=0,M=!0,_=[];h=v.exec(d);)!(g=m.test(h[0]))&&M&&_.push([]),p=d.substring(f,h.index),g&&M?_.push(p):_[_.length-1].push(p),f=v.lastIndex,M=g;(M?_:_[_.length-1]).push(d.substring(f));for(var y="",E=0,A=_.length;E<A;E++)_[E]instanceof Array?(y+="<section "+u.attributes+">",_[E].forEach(function(D){y+="<section data-markdown>"+i(D,u)+"</section>"}),y+="</section>"):y+="<section "+u.attributes+" data-markdown>"+i(_[E],u)+"</section>";return y}function a(d){return new Promise(function(u){var h=[];[].slice.call(d.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(g,p){g.getAttribute("data-markdown").length?h.push(function(v){return new Promise(function(m,f){var M=new XMLHttpRequest,_=v.getAttribute("data-markdown"),y=v.getAttribute("data-charset");y!=null&&y!=""&&M.overrideMimeType("text/html; charset="+y),M.onreadystatechange=function(E,A){A.readyState===4&&(A.status>=200&&A.status<300||A.status===0?m(A,_):f(A,_))}.bind(this,v,M),M.open("GET",_,!0);try{M.send()}catch(E){console.warn("Failed to get the Markdown file "+_+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+E),m(M,_)}})}(g).then(function(v,m){g.outerHTML=s(v.responseText,{separator:g.getAttribute("data-separator"),verticalSeparator:g.getAttribute("data-separator-vertical"),notesSeparator:g.getAttribute("data-separator-notes"),attributes:t(g)})},function(v,m){g.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+m+" failed with HTTP status "+v.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):g.outerHTML=s(e(g),{separator:g.getAttribute("data-separator"),verticalSeparator:g.getAttribute("data-separator-vertical"),notesSeparator:g.getAttribute("data-separator-notes"),attributes:t(g)})}),Promise.all(h).then(u)})}function o(d,u,h){var g,p,v=new RegExp(h,"mg"),m=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg"),f=d.nodeValue;if(g=v.exec(f)){var M=g[1];for(f=f.substring(0,g.index)+f.substring(v.lastIndex),d.nodeValue=f;p=m.exec(M);)p[2]?u.setAttribute(p[1],p[2]):u.setAttribute(p[3],"");return!0}return!1}function l(d,u,h,g,p){if(u!=null&&u.childNodes!=null&&u.childNodes.length>0)for(var v=u,m=0;m<u.childNodes.length;m++){var f=u.childNodes[m];if(m>0)for(var M=m-1;M>=0;){var _=u.childNodes[M];if(typeof _.setAttribute=="function"&&_.tagName!="BR"){v=_;break}M-=1}var y=d;f.nodeName=="section"&&(y=f,v=f),typeof f.setAttribute!="function"&&f.nodeType!=Node.COMMENT_NODE||l(y,f,v,g,p)}u.nodeType==Node.COMMENT_NODE&&o(u,h,g)==0&&o(u,d,p)}function c(){var d=r.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(d).forEach(function(u){u.setAttribute("data-markdown-parsed",!0);var h=u.querySelector("aside.notes"),g=e(u);u.innerHTML=Ne(g),l(u,u,null,u.getAttribute("data-element-attributes")||u.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",u.getAttribute("data-attributes")||u.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),h&&u.appendChild(h)}),Promise.resolve()}return{id:"markdown",init:function(d){r=d;let{renderer:u,animateLists:h,...g}=r.getConfig().markdown||{};return u||(u=new Ne.Renderer,u.code=(p,v)=>{let m="";return _s.test(v)&&(m=v.match(_s)[1].trim(),m=`data-line-numbers="${m}"`,v=v.replace(_s,"").trim()),`<pre><code ${m} class="${v}">${p=p.replace(/([&<>'"])/g,f=>cm[f])}</code></pre>`}),h===!0&&(u.listitem=p=>`<li class="fragment">${p}</li>`),Ne.setOptions({renderer:u,...g}),a(r.getRevealElement()).then(c)},processSlides:a,convertSlides:c,slidify:s,marked:Ne}};var dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ul={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(dm,function(){const t=()=>{let i,s={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(a){i=a;let o=i.getConfig().mathjax2||i.getConfig().math||{},l={...s,...o},c=(l.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(l.config||"TeX-AMS_HTML-full");l.tex2jax={...s.tex2jax,...o.tex2jax},l.mathjax=l.config=null,function(d,u){let h=document.querySelector("head"),g=document.createElement("script");g.type="text/javascript",g.src=d;let p=()=>{typeof u=="function"&&(u.call(),u=null)};g.onload=p,g.onreadystatechange=()=>{this.readyState==="loaded"&&p()},h.appendChild(g)}(c,function(){MathJax.Hub.Config(l),MathJax.Hub.Queue(["Typeset",MathJax.Hub,i.getRevealElement()]),MathJax.Hub.Queue(i.layout),i.on("slidechanged",function(d){MathJax.Hub.Queue(["Typeset",MathJax.Hub,d.currentSlide])})})}}};return Plugin=Object.assign(t(),{KaTeX:()=>{let i,s={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]};const a=o=>new Promise((l,c)=>{const d=document.createElement("script");d.type="text/javascript",d.onload=l,d.onerror=c,d.src=o,document.head.append(d)});return{id:"katex",init:function(o){i=o;let l=i.getConfig().katex||{},c={...s,...l};const{local:d,version:u,extensions:h,...g}=c;let p=c.local||"https://cdn.jsdelivr.net/npm/katex",v=c.local?"":"@"+c.version,m=p+v+"/dist/katex.min.css",f=p+v+"/dist/contrib/mhchem.min.js",M=p+v+"/dist/contrib/auto-render.min.js",_=[p+v+"/dist/katex.min.js"];c.extensions&&c.extensions.includes("mhchem")&&_.push(f),_.push(M);const y=()=>{renderMathInElement(o.getSlidesElement(),g),i.layout()};(E=>{let A=document.createElement("link");A.rel="stylesheet",A.href=E,document.head.appendChild(A)})(m),async function(E){for(const A of E)await a(A)}(_).then(()=>{i.isReady()?y():i.on("ready",y.bind(this))})}}},MathJax2:t,MathJax3:()=>{let i,s={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{Reveal.layout()})}}};return{id:"mathjax3",init:function(a){i=a;let o=i.getConfig().mathjax3||{},l={...s,...o};l.tex={...s.tex,...o.tex},l.options={...s.options,...o.options},l.startup={...s.startup,...o.startup};let c=l.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";l.mathjax=null,window.MathJax=l,function(d,u){let h=document.createElement("script");h.type="text/javascript",h.id="MathJax-script",h.src=d,h.async=!0,h.onload=()=>{typeof u=="function"&&(u.call(),u=null)},document.head.appendChild(h)}(c,function(){Reveal.addEventListener("slidechanged",function(d){MathJax.typeset()})})}}}})})})(ul);var fm=ul.exports;const pm=hm(fm),Vt=["baiterek.pcd","akorda.pcd","kbtu.pcd","air.pcd","boulevard.pcd","finance.pcd","dom1.pcd","dom2.pcd","library.pcd","idontknow.pcd","car.pcd","car2.pcd"];function Wt(r,e){const t=document.getElementById(r),n=new vp,i=new Gt(90,window.innerWidth/window.innerHeight,.01,40);i.position.set(0,0,1);const s=new Jo({antialias:!0});s.setSize(t.clientWidth,t.clientHeight),t.appendChild(s.domElement);const a=new Mp(i,s.domElement);a.minDistance=.5,a.maxDistance=10,new bp().load(e,function(c){c.geometry.center(),n.add(c),l()});function l(){requestAnimationFrame(l),i.aspect=t.clientWidth/t.clientHeight,i.updateProjectionMatrix(),s.setSize(t.clientWidth,t.clientHeight),n.rotation.y+=.01,s.render(n,i)}l()}Wt("pcd-container1",Vt[0]);Wt("pcd-container2",Vt[1]);Wt("pcd-container3",Vt[2]);Wt("pcd-container4",Vt[3]);Wt("pcd-container5",Vt[4]);Wt("pcd-container6",Vt[5]);Wt("pcd-container7",Vt[6]);Wt("pcd-container8",Vt[7]);Wt("pcd-container9",Vt[8]);Wt("pcd-container10",Vt[9]);Wt("pcd-container11",Vt[10]);Wt("pcd-container12",Vt[11]);let mm=new Cn({plugins:[um,pm]});mm.initialize();
