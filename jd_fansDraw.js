/*
粉丝福利红包
活动链接：https://wqs.jd.com/sns/202109/22/fansactiveall/index.html?qwer=<活动id>
环境变量：jd_fansDraw_activityUrl // 活动链接
        jd_fansDraw_Notify // 是否推送通知（true/false），默认不推送

注：活动非百分百中奖，请勿重复运行

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#粉丝福利红包
1 1 1 1 * jd_fansDraw.js, tag=粉丝福利红包, enabled=true

*/

const $ = new Env('粉丝福利红包')
var version_='jsjiami.com.v7';const IiillI=iii1II;(function(iI1Il1,i1iIl1,i1lli1,llIlII,IIlII,lIIiII,i1iIlI){return iI1Il1=iI1Il1>>0x3,lIIiII='hs',i1iIlI='hs',function(li111,liI1lI,lIIiI1,ll1I1,Ii1ili){const IllIlI=iii1II;ll1I1='tfi',lIIiII=ll1I1+lIIiII,Ii1ili='up',i1iIlI+=Ii1ili,lIIiII=lIIiI1(lIIiII),i1iIlI=lIIiI1(i1iIlI),lIIiI1=0x0;const iI1Ii1=li111();while(!![]&&--llIlII+liI1lI){try{ll1I1=parseInt(IllIlI(0x2b7,'jP5t'))/0x1+parseInt(IllIlI(0x1ff,'Hrp!'))/0x2+parseInt(IllIlI(0x1c3,'8P0y'))/0x3*(parseInt(IllIlI(0x24a,'tE*&'))/0x4)+-parseInt(IllIlI(0x2ad,']WTb'))/0x5*(parseInt(IllIlI(0x2ac,'%YMP'))/0x6)+-parseInt(IllIlI(0x1a1,'JJlw'))/0x7+parseInt(IllIlI(0x23d,'m*w3'))/0x8+-parseInt(IllIlI(0x23f,'cn@k'))/0x9;}catch(Ii1ill){ll1I1=lIIiI1;}finally{Ii1ili=iI1Ii1[lIIiII]();if(iI1Il1<=llIlII)lIIiI1?IIlII?ll1I1=Ii1ili:IIlII=Ii1ili:lIIiI1=Ii1ili;else{if(lIIiI1==IIlII['replace'](/[bWryGkeSndNFUVMfHlgJ=]/g,'')){if(ll1I1===liI1lI){iI1Ii1['un'+lIIiII](Ii1ili);break;}iI1Ii1[i1iIlI](Ii1ili);}}}}}(i1lli1,i1iIl1,function(llIlI1,iI1IiI,IIlI1,i1iIli,i1iIll,i1lliI,liI1l1){return iI1IiI='\x73\x70\x6c\x69\x74',llIlI1=arguments[0x0],llIlI1=llIlI1[iI1IiI](''),IIlI1='\x72\x65\x76\x65\x72\x73\x65',llIlI1=llIlI1[IIlI1]('\x76'),i1iIli='\x6a\x6f\x69\x6e',(0x13b09a,llIlI1[i1iIli](''));});}(0x640,0x3480e,Iii11l,0xca),Iii11l)&&(version_=Iii11l);const llI1II=require(IiillI(0x1a7,'03]j')),lIli1l=require('./function/jdCommon'),lillIi=require('./function/sendJDNotify'),illIi1=process['env']['jd_fansDraw_activityUrl']||'',ii1ili=process[IiillI(0x1c8,'i]WN')][IiillI(0x2bc,'i]WN')]==='true',liil1i=IiillI(0x231,'hXl[');let lI1lil='';const i1l1iI=Object[IiillI(0x288,'r^qV')](llI1II)[IiillI(0x21e,'Hrp!')](iii1ii=>llI1II[iii1ii])['filter'](il1iIi=>il1iIi);!i1l1iI[0x0]&&($['msg']($['name'],IiillI(0x280,'03]j')),process[IiillI(0x1c7,'hXl[')](0x1));function Iii11l(){const Ii1I1l=(function(){return[version_,'WjWlrseWjfigbUakmFdil.WcVMJomSkH.GNvyen7==','jCoTh3hdLa','pLyxma4','WQ8og8ozAW','s2TdvSoV','WQldO8o8','xCoYW6pcVmos','g2lcNSkLqG','cmoVi1ldRW','W7rgWPWRWOiYWP/dVmoIW7RdVSkPWPZdHSo4WQ8vt8koWRq','WRNcUSoNcYBdN3RcIZTCemoycmkEWOS','W47dRSo1WQ3dKSkBuG','fSkDW7TDk8oaWPK','W6JdVWxdK8omW4BcGbBcVv/cHmkBWQSpvrSHsLmSWOhcJtu4ALeSWRFdNG5ebCoYW4NdNSkhWOuXhYG+W7pcLmkNWRpcGrmBW7fSWQNcIXb4CqhdGGpcHmkCccCQiwC5bCkpWQzGtSoVamofwhmAW4O2usVcJYSSW5L2W5FcRXRcQ3SUCCk7WRlcH8kCfYKVWOSwW5NdH8k7isBdMCoHW43cRSoNW6fpFCorWOvOWQRdThZdMWZcMmkcWPtcJCoNw8k8Dh8IW4ddGbHzW6iNqsX/W6/cJCkIifxcHrK1bmo5W4/dP8ouW4K','Ft3cNmk1W6W','omk9cG','W5VdP8osWQnE','W57dQSoYWQNdPCkasa','wmo6W5lcRmoA','W6iDWPdcTIiO','b2qUbqJcM8oAEu3dRmoUqKVcICogchtdH8k9W6JdKrBdUCotW7ZcRmkSb8kNjSkpW4qlW5RdS8kvjmoBWRVcPW','WQaOWO8','W5RdGcZcImkyWPFcMfGTBeq2qbyIW5ldVtlcPG','WQ3cTmo6lGBdHKq','i8oFjCknc8oF','AwLoqmoOdLDW','bwCOCchdUCoYcSkMW44','gSodj8k6n8omySkT','wmkfWPZcJYO','rCoaWQdcRXxcQCokW43cQ8kpzG','4P+nWQxOTjRLJQ3MLyNMLOW','44kS5O+956sq44c86k+95ysf6iYn5y2dW7WkWQBcRmoIW7a','lHJcNwFcOG','uxTFuCoo','ivbxAmkUy398ovO','WRveiGnq','WOaiWRS1W77dL8kd','W6bvWO8VWRGgWO7dPa','axjRW7S','W5ZcPSkaWRm','smomWQ4','W4lcS8kDWQhdJHrmW47cG8khWOddJ8oA','EmoeWR1MWQm','iqRcHwC','WQ/dNJa','nxpcHCkoAq','d8kqW7VdVW7cLmoGW6dcLW','5lUP5lUZ5P+c5yIW5zUd6lYe5zQL56MH5PsM5OYP','W40oWRlcHr0','Ab/cKmkFW5W','WQCAj8oqBG','kCkaWQG','wSoAw8kCWQK','WOBcRmkvWRpdMG','B8kkWQW9W5e','gNWujaW','W7XBWPO','WQTADJLYWQ1E','bmosimk4gG','qSokWRe','kY3cQ2VcLa','eCkNWQJdVCod','WP00WRTGWQe','B8oIrW5EbMOseSoI','WRO1WRSeW4G','jmo/lLBcR8kUdmkdr3CFor0OhMZdMsOqqSoLs8k/W5H1ieSIWRhcVMtdSG','W7tdVColWO/dJq','smoTWRDkWQe','lfXk','EmoGWRHQWQG','bgjKW7bD','W6BcTmkbWORdGa','WOa5lG','W71rWO4VWRW0WPK','nH/cG1JcLG','W5hdTmoEW7dcMhRcSfa4DfjrCa','iCojW5tcTSoqhX0','ACkPW5xdKmkv','m8kXau18mKG','v8orrmkkWRm','W7ZdGdZdSmoq','WQ0IWRDDWR0','W67dSM4GW54','W7hdQvm9W4dcQGeaW4qiWQ/cMSomWPBcUq','imoUnehdOCoP','FtdcGCk/W5S','DSoyW7FcOCkAW6mVqYqYW649','5P6x5OI45lQX','dmkdW7/dOey','qSkmW6j3lSoJWR3dLxyf','WOiwWRC3W5xdVCkzpgddJG7dICo7nCkKdCkhq8kxWP3cQG','W5ZcKmkhWQaXW6FcOCk8W4xdQ8k8WQBdHSowuG/cLCkN','W6ixWPK','W5ddOmoVWQ7dOCkjwq','W6fYW4TjiW','kmokk8k4vCknA8kTsJeBkSk9W6xcK8oLWPe','lLPCFq','h+s7M+wnMEMhLSofWPntWPKLcCkUW7j5W6FcOX1ty3xdVNmxW5G9ESk3bvtcIK/cQ19+omkMW7JdN8oxj8oof8kmWQJcI1HniSk9nN8ZWPlcGmkKsJqIWRxdRSkFxJ9ip1XGW5fYWQNdGmolq8ohW4q4W4ldPSoXW4ldQxj2WOxdTIjmWRdcJmo1ashdN8oCW6tdPGDVwmkxW5RdSa','dmkoWOldOmoc','W6nFWPqSWO8MWPi','uCotvmkTWQK','W7NdQSoHWPXb','5RAm5yMR5AAV5zcb776G','WRlcSmo0gYBdGq'].concat((function(){return['W6BcOmoF','W5hdUYxdSmot','qCkxWRNdTSkvkG0','8yo/QSoY6Aod5y265OQY5yMY','W7pdMaRdSSor','f1qUCc3dTCocfSkCW4K','W6mPWP1qWOtcP3ldUY5ZW4pcHG9mumk1pMX4WODpcMyxn04hW5y2W4n3FmkkW4tdKSop','WRlcSmo0','WQNcR8oYgGa','y8oVWPXvWRi','W7NJGBpMT6NLI63LP7RLKApJG7W','pmkRygNcS8k/aa','4P2NvEI3J+wmIUAvVEAuKG','vSowWR1MWOu','6lwP5yY35PEP5Pwr','WPzTWPNdO3dcTZ9fW5CXWOtdL8ko','W7xcH2xcNSoCwWBcQmoumH7dKq','W7iVW4xcOqJdPwzJ','bN45gq7dHCkqjq','fGtcO0BcGq','cmkTyKVcUa','n1FcSSkU','WPicqeLjiSovW77dLGa','4PUIW5hORBBLOBlLHABMOO/LVlNMROlNOlVNM6lPKklMJkm','rmkDW7hdPCoxorieW7OZ','axXX','W7FcUmoGW6fu','WQOtWReMW6C','Fmk/WOFcUZ0','W4y4W5asja','WPhcP8kSiCoD','4P6Lq+I8JUEPJUImM+wnToAwNEAmT+s4OmkqqCkeWOxINiRdSUAuNUAoHUIoMUwmP+AUL+w7TCoxuCopAW','WOtdGGtdQCk8','W7D2W5Lqlq','nSkAW5TtWOW','4P+MmEI9REEOJ+AuTUAnVEIoUowmO+wLNUI0NSkV6k+a6isD6koq5PYu5OI45yY655sa5RwQ5yMa6zkx5O2DfSkVxHm','zmojWPrPWRu','mexcS8kKzLCv','W6Pmqvrp','W5hdN2tcUq','k8kcW612WPJdMLG','wCo4FSk2WQtcQ8kkW4FdV8kxWR7cHa','WQ9ZBr9p','W68MW7KDpG','WQvqAZ52WQrp','WOrPeqPB','lSkEW6zCWO3dGq','WR/cN8kO','CeP5zCoc','rmkEW5hdNmkt','EWmhkmoauvrdjgO','6lwJ5yYy5PsV5PEz','FmoUW4ZcL8oT','dmorbmkAdW','WQVdTmoYWPu','W5pcMSkU','W5SkW5WsaW','WQaTWPGSuq','jLPv','EmouW54','W6pcH8k9WRqEW6JcV8kD','WRK7W5auarxcUSo4rSoeWRFcJWlcHH/cPg5LW60ZcSop','WOFcJ8oqfcq','WR1qgaDf','W7D0Awbh','xmkWW4BdK+IVLoAYPEwMUoI2SE+/VUISI+AJRoAEN+E9HoI0GEMfV+ITNq','W7mTW50wgXG','WQBcKCkSWPJdIG','WO85j8oOzCkBzW','omk1W6FdIfy','WRn7odHw','jMOZeXq','lSotnSkHd8oeE8kXztK','W4tdKMNcHSk/W5/cHLXLDeq/vG','ASkLWP/cUZS','WPTVFWTZ','5P+05OMI5lQ+','WRpdKcxdN8ko','WQpcKCk7i8o+melcQa','4P+wW6NOVBVNQO7MLBlMJ5VNR63cNG','WQdcM8kMo8ocjee','W4O9WRxcMbi','z8kZWRVcQHLL','5BwY6Agp6l2G','WQZdIs7dTCkj','W7ldLwXQW7e','WParWRCKW5JdHW','tmokW6dcN8o1','WQrqDIPJWQS','W4RdTK0','su9N','c8oPW7NcICoCWOO7','WOFcOmkt','6lsT5yYH5Ps15PAf','W69+y29n','WQhcLCk7','W53cMmkiWR49','W4hcHCo2WQW0WQFcSCkxW5O','k8oUlG','iG7cM3hcMCojWQ4','tIhcNmkBW7m','WQtdM8omWPxcNa','vCk6WPm1W7pdGHXYaSkRc8kKlY4nWOrDwqVdUSkEymoMWP0tfgRcQSoFsmoqWQJdLSoxjNveWR1HWPmgWPO','W5JdRCoBWOfnfs0','W6ZcPSoa'].concat((function(){return['4PI/AoITHowGMUwhTUAHJow/G+AVUUEHHoEzVEMrU+AmJa','jhi4brG','WRhdKdNdImkeaq','emkiW7ldIhS','5RsW5yM+5yAW5yYU7723','WOJcTSkLW6xcTSk5sshdQ0WK','5Bwe6AgY5yYo6lYb56EF5yQG','4P+HW6pOVkxNQ4VML4RMJj/OJRJLJBFLP5ZOT5BdIEITLUIfHoIHJ+ACVoAlLowmNEEwU+A0LEwlIUMtVEAmNG1QWONdLq','jCoLpKpdRq','WOzyCsf6','W5bctq','utZcV8k7W4q','W68PW4eccG','oLNcSCkTAfK','rXRcJG','W4NdVXG','p0tcSmkLDxSvWRa','WOu4lCo5Ea','ovXPW6XU','W7pdIHxdSmo0','kmkKFfRcJa','W4BcLCkQWRu1','WQFcUmkJa8oN','tCkoW79ooG','WR7dVSoYWPVcNG','WQXXkbTr','WQNcMmoIcmoEFvxcPCkiWPxdU8k3WP7cH8kwWO8PyNO','rEodKoA0SUwkSEwFKEwEIUobVW','lNLvxCoS','WRlcHCkmlCo/','WRhcKCkSimovp0S','W4XFq1DV','gLG9','W7ddSfKOW5dcM1SiWOCsWQRdL8oBWPdcOHOEW5yhuSoz','imobW4dcQ8oO','WPddKaFdJSkc','W5ddPmoS','oLNcSCk/zfap','W5RcKCk2WQeKW6e','W4pdUqC','WRbSjG','WPbqW6fn6k6X5Rgr5As+6lEq772J6k+m5Qgd5P+s576M6lwZ6ys86k6t','mSk7fq','i8kgWRC','WO/dSdZdTCks','W5VcKCkRWRuXW67cTW','WQXhEtPiWQjjW5DDW4NdJdhdT8kvWPtcUGlcUmkkW7i','kSktnxbz','W4FdUL5SW6KIiSopW6lcMYK','WQLwBcrHWQPEW5P9W5S','WRPzDGP+','WQK/WPbsWP7cQG','WOecWRWHW4pdJW','oSkRE1ZcPa','W6xdN1FcVmkZ','WQpdV8o4W5tdG8k3WQdcHSktpG','W5DRW5H0AJnRWPajv8oIq8ksWRddKstcPW','CYxcI8kBW5m','uCkHWOa','W43cGmolW6rK','Fmo3msNdKmo5oSkSW4/cQJpcKW','wLLXrSol','W67dI21dW70','WR7dOSorWO3cQG','W5pdOCoq','W7pdQCoQWRZdLa','W5ddSKqqW5m','E8oaWRCSW4NdVxxcUaWvWPy','pSkuWPm','WPhcKdtdUmoNWOpdK0b5AgaWDa','lSkMg0r4','WQ3cJ8kTWORdUG','sCoaWQi','nvNcUa','W5X+W5y','WRNcLmolgaa','W67dKhXjW74','W5RcM8k/','W4CaWQNcGXS','BvvJDSo0','WRXjW4JdPsamW4ZdJ3fn','W4/dSudcGSk9','4PUpm+IVSEwhLUwUHos7T+w+VoIKOEEBLUEnRUwIIowoSUMhT+wqGUweSEI9KUIHG+IgSoAEJa','uSo8y8k2WQtcVmkF','WP8mWRuaW57dKa','zmooW4RcNq','amoMW77cH8oH','WQFdOMmUW5ddUumEW4WdWRVdHmoSWPBcSbXm','bCoNW70','p8kHE2RcHa','WOZdLdtdJSk6','W7WSWPhcPJm','rHdcMSkoW7W9ea','W5JdQCoCWPfe','W48iW5dcGaS','ESosW5RcNSoTncaG','W4tdUgLPW4y','bYlcVK7cMq','jCk6W5LFWQS','W7nSW4WhW53dTw7dGJu3WPZdKa','C11Yw8oR','kEodV+A2REwkTUwKJUwrI+odMa','WPNdLXBdU8kf','5RA15yUq5AAO5zcq772m'];}()));}()));}());Iii11l=function(){return Ii1I1l;};return Iii11l();};function iii1II(_0x2d1455,_0x1acb22){const _0x21c5a6=Iii11l();return iii1II=function(_0x49e492,_0x120f92){_0x49e492=_0x49e492-0x1a0;let _0x1ce163=_0x21c5a6[_0x49e492];if(iii1II['AGEvHf']===undefined){var _0x48c1fe=function(_0x7437de){const _0x2c4593='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1a3823='',_0x4c2db8='';for(let _0x4954d6=0x0,_0x495529,_0x4ef9a9,_0x5b515b=0x0;_0x4ef9a9=_0x7437de['charAt'](_0x5b515b++);~_0x4ef9a9&&(_0x495529=_0x4954d6%0x4?_0x495529*0x40+_0x4ef9a9:_0x4ef9a9,_0x4954d6++%0x4)?_0x1a3823+=String['fromCharCode'](0xff&_0x495529>>(-0x2*_0x4954d6&0x6)):0x0){_0x4ef9a9=_0x2c4593['indexOf'](_0x4ef9a9);}for(let _0x4c2a59=0x0,_0x380832=_0x1a3823['length'];_0x4c2a59<_0x380832;_0x4c2a59++){_0x4c2db8+='%'+('00'+_0x1a3823['charCodeAt'](_0x4c2a59)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4c2db8);};const _0x1069de=function(_0x367c30,_0x3c57ac){let _0x2845aa=[],_0x2c3be4=0x0,_0x7c4524,_0x35e4a3='';_0x367c30=_0x48c1fe(_0x367c30);let _0x5de96d;for(_0x5de96d=0x0;_0x5de96d<0x100;_0x5de96d++){_0x2845aa[_0x5de96d]=_0x5de96d;}for(_0x5de96d=0x0;_0x5de96d<0x100;_0x5de96d++){_0x2c3be4=(_0x2c3be4+_0x2845aa[_0x5de96d]+_0x3c57ac['charCodeAt'](_0x5de96d%_0x3c57ac['length']))%0x100,_0x7c4524=_0x2845aa[_0x5de96d],_0x2845aa[_0x5de96d]=_0x2845aa[_0x2c3be4],_0x2845aa[_0x2c3be4]=_0x7c4524;}_0x5de96d=0x0,_0x2c3be4=0x0;for(let _0x50cae9=0x0;_0x50cae9<_0x367c30['length'];_0x50cae9++){_0x5de96d=(_0x5de96d+0x1)%0x100,_0x2c3be4=(_0x2c3be4+_0x2845aa[_0x5de96d])%0x100,_0x7c4524=_0x2845aa[_0x5de96d],_0x2845aa[_0x5de96d]=_0x2845aa[_0x2c3be4],_0x2845aa[_0x2c3be4]=_0x7c4524,_0x35e4a3+=String['fromCharCode'](_0x367c30['charCodeAt'](_0x50cae9)^_0x2845aa[(_0x2845aa[_0x5de96d]+_0x2845aa[_0x2c3be4])%0x100]);}return _0x35e4a3;};iii1II['CuwzVS']=_0x1069de,_0x2d1455=arguments,iii1II['AGEvHf']=!![];}const _0x20e5d3=_0x21c5a6[0x0],_0x33b569=_0x49e492+_0x20e5d3,_0x2ac888=_0x2d1455[_0x33b569];return!_0x2ac888?(iii1II['lfaKmV']===undefined&&(iii1II['lfaKmV']=!![]),_0x1ce163=iii1II['CuwzVS'](_0x1ce163,_0x120f92),_0x2d1455[_0x33b569]=_0x1ce163):_0x1ce163=_0x2ac888,_0x1ce163;},iii1II(_0x2d1455,_0x1acb22);}!(async()=>{const ili11I=IiillI,iii1il={'McsTL':function(iIIiiI,liiI1i){return iIIiiI(liiI1i);},'zIVFY':function(ililIi,lilIIl){return ililIi(lilIIl);},'eaHNR':ili11I(0x24c,'b4Tv'),'nJDhl':'未抽中','aSYfq':ili11I(0x1b0,'3rv1'),'BPAfP':function(ililIl,liiI1l){return ililIl<liiI1l;},'GghTk':'jvWPw','GmkRY':'HlTyn','VHuHq':function(i1l1II,i1ill){return i1l1II+i1ill;},'hTpSM':ili11I(0x201,'r^qV'),'FxpHI':ili11I(0x25c,'m*w3'),'CjybA':ili11I(0x1fa,'oLXe'),'cXpMi':ili11I(0x1da,'cn@k'),'VEhBF':function(I1l11l,lilIIi){return I1l11l!==lilIIi;},'ukrEE':ili11I(0x1fd,'Vs5B'),'rlnGi':'ZNfBI','kqbnC':'vmnIL','dLgEo':'⚠\x20请填写格式正确的变量','XqYjV':function(i1l1Il,llIli){return i1l1Il<llIli;},'NlvaT':function(i1i11l,i1i11i){return i1i11l+i1i11i;},'jWWtg':'pt_pin','fCZtm':function(II11l1){return II11l1();}};authorCodeList=await i1i11I(ili11I(0x2a2,'uy!b'));if(authorCodeList){console[ili11I(0x1ea,'D!Gg')](iii1il[ili11I(0x1d0,'P73J')]);for(let Iil1lI=0x0;iii1il['BPAfP'](Iil1lI,authorCodeList['length']);Iil1lI++){iii1il[ili11I(0x1b2,'6^[h')]!==iii1il[ili11I(0x1a5,'kOnz')]?console[ili11I(0x294,'jP5t')](ili11I(0x1e0,'H#Vv')+iii1il[ili11I(0x2cd,'uIDz')](Iil1lI,0x1)+ili11I(0x2c2,'m*w3')+authorCodeList[Iil1lI]+'\x22'):iii1il['McsTL'](liIll,IilIi1);}}else console['log'](iii1il[ili11I(0x258,')!i5')]);if(!illIi1){if(ili11I(0x245,'6p#p')!==iii1il['FxpHI'])iii1il[ili11I(0x205,'QPAO')](II1lii,lIIii1);else{console['log'](iii1il['eaHNR']);return;}}const II11li=lIli1l[ili11I(0x286,'oGcu')](illIi1);if(!II11li){console[ili11I(0x243,'k)bw')](iii1il[ili11I(0x292,'QPAO')]);return;}$[ili11I(0x22a,'D!Gg')]=illIi1;const I1l11i=II11li[ili11I(0x1df,'XqM]')];if(!I1l11i[ili11I(0x1a3,'U2Le')](iii1il['cXpMi'])){if(iii1il[ili11I(0x2b6,'QPAO')](iii1il[ili11I(0x22f,'kOnz')],iii1il['ukrEE'])){IliI11['log'](iii1il['eaHNR']);return;}else{$[ili11I(0x22b,'5jM5')]=lIli1l[ili11I(0x26b,'6p#p')](illIi1,ili11I(0x1b8,'cn@k'));if(!$[ili11I(0x2ba,'NvSB')]){if(iii1il[ili11I(0x22c,'5jM5')]!==iii1il[ili11I(0x2a7,'b4Tv')]){console['log'](iii1il[ili11I(0x216,'8P0y')]);return;}else I1i11I['log'](iii1il[ili11I(0x2c5,'G(CG')]),llIliI['message'][ili11I(0x23a,'bd@o')](iii1il['nJDhl']);}}}lillIi[ili11I(0x207,'k)bw')]({'title':$[ili11I(0x1a6,'k)bw')]}),console[ili11I(0x28d,'JJlw')](ili11I(0x1fe,'4XWd')+illIi1);for(let iilli=0x0;iii1il[ili11I(0x1e8,']WTb')](iilli,i1l1iI['length']);iilli++){$[ili11I(0x250,'okPG')]=iii1il[ili11I(0x23b,'Hrp!')](iilli,0x1),lI1lil=i1l1iI[iilli],$[ili11I(0x1a2,')!i5')]=decodeURIComponent(lIli1l['getCookieValue'](lI1lil,iii1il[ili11I(0x1f6,'hXl[')])),$['UA']=lIli1l['genUA']($[ili11I(0x27a,'x3HW')]),$[ili11I(0x2af,'X1&m')]=lillIi[ili11I(0x1e7,'3rv1')]($[ili11I(0x20b,'lqaI')],$[ili11I(0x27c,'EUZ*')]),$[ili11I(0x259,']WTb')]='',console[ili11I(0x21a,'P98Q')]('\x0a******开始【京东账号'+$[ili11I(0x202,'uy!b')]+'】'+($['nickName']||$[ili11I(0x1cd,'i]WN')])+'******\x0a'),await iii1il[ili11I(0x237,'x3HW')](liil1l);}ii1ili&&lillIi['getMessage']()&&(lillIi['updateContent'](iii1il[ili11I(0x26f,'QPAO')](lillIi[ili11I(0x1d5,'lqaI')],ili11I(0x215,'kOnz')+$['activityUrl'])),await lillIi[ili11I(0x24f,']WTb')]());})()['catch'](IlllIl=>$['logErr'](IlllIl))['finally'](()=>$[IiillI(0x2c1,'8P0y')]());async function liil1l(){const li11l=IiillI,II11lI={'QczMe':function(lI1IIi){return lI1IIi();},'DBocl':function(I1l11I,Ilil1l){return I1l11I(Ilil1l);},'OGYiM':function(iIIiii,iilll){return iIIiii(iilll);},'qwzpW':'query_activetemporary','VEnuN':function(il1iI1,IlllIi){return il1iI1(IlllIi);},'gduCm':li11l(0x1ba,'G(CG')};$['skipRun']=![],await II11lI[li11l(0x2bf,'6^[h')](Iil1l1);if($['skipRun'])return;if($[li11l(0x2ce,'P98Q')]){$['index']===0x1&&await II11lI[li11l(0x1c9,'oLXe')](lI1lii,li11l(0x2bb,'3rv1'));await II11lI['OGYiM'](lI1lii,II11lI['qwzpW']);if($['skipRun'])return;await II11lI[li11l(0x25e,'x3HW')](lI1lii,li11l(0x228,'5jM5'));}else await II11lI[li11l(0x2a6,'!ctq')](lI1lii,II11lI[li11l(0x20e,'kOnz')]);}async function lI1lii(iIIiil){const lliiIl=IiillI,i1l1Ii={'wpaDT':function(I1iIIl,lI1IIl){return I1iIIl!=lI1IIl;},'WZtyx':function(i1ilI,iii1lI){return i1ilI===iii1lI;},'XjPko':function(i1ilI1,Iiilii){return i1ilI1(Iiilii);},'eCKYl':lliiIl(0x1f1,'i]WN'),'iGcbd':lliiIl(0x271,'bd@o'),'Nmilm':lliiIl(0x21b,'e9FO'),'YVZxH':function(Iil1li,Iiilil){return Iil1li===Iiilil;},'QOHDR':lliiIl(0x298,'U2Le'),'YPCJp':'sPrizeDesc','KLnLn':function(Iil1ll,iillI){return Iil1ll-iillI;},'wqhdI':'IViAd','dFCil':function(lI1III,IIliIi){return lI1III+IIliIi;},'LPRWd':'已领取过福利','OecbQ':lliiIl(0x26a,'oGcu'),'hUubN':function(IllIiI,i1il1){return IllIiI===i1il1;},'QwxJz':lliiIl(0x1dd,'6p#p'),'IxWRM':lliiIl(0x2cc,'3rv1'),'VakyE':'领取成功','YpccK':function(I1l111,IIii1l){return I1l111===IIii1l;},'xskyc':function(I1iIII,liiI11){return I1iIII<liiI11;},'lEZEh':function(ililI1,IIii1i){return ililI1!=IIii1i;},'fHaUG':lliiIl(0x1d7,'P73J'),'GsSEW':lliiIl(0x27d,'4XWd'),'auCfo':function(i1ili,Iiill1){return i1ili(Iiill1);},'SaPbi':lliiIl(0x1c4,'jP5t'),'DDqRu':function(I1iII1,lilII1){return I1iII1===lilII1;},'gFuRX':lliiIl(0x1a4,'rAL('),'baClY':lliiIl(0x232,'6^[h'),'wqGdV':lliiIl(0x277,'cn@k'),'oYAIk':'script','xznid':lliiIl(0x283,'8P0y'),'iyDVF':'https://wqs.jd.com/'},I1iIIi={'url':lliiIl(0x275,'U2Le')+iIIiil+'?uuid='+($[lliiIl(0x1d9,'EUZ*')]||'')+lliiIl(0x1ce,'oLXe')+($[lliiIl(0x1ec,'okPG')]||'')+lliiIl(0x1eb,'U2Le')+Date[lliiIl(0x1aa,'b4Tv')]()+lliiIl(0x2cf,'ix0o')+iIIiil+lliiIl(0x251,'e9FO')+liil1i,'headers':{'Accept':'*/*','Accept-Encoding':i1l1Ii[lliiIl(0x25a,'D!Gg')],'Accept-Language':i1l1Ii[lliiIl(0x1ab,'H#Vv')],'Sec-Fetch-Site':lliiIl(0x28f,'Vs5B'),'Sec-Fetch-Mode':lliiIl(0x2cb,'J5iU'),'Sec-Fetch-Dest':i1l1Ii[lliiIl(0x24b,'cn@k')],'Connection':i1l1Ii['xznid'],'Cookie':lI1lil,'Host':lliiIl(0x1f2,'i]WN'),'Referer':i1l1Ii['iyDVF'],'User-Agent':$['UA']}};return new Promise(async iill1=>{const li11i=lliiIl,iii1l1={'lngVJ':i1l1Ii[li11i(0x21d,'JJlw')]};i1l1Ii[li11i(0x1d6,'Vs5B')]('YoKDy',i1l1Ii[li11i(0x1bb,'5jM5')])?$[li11i(0x1f3,'uy!b')](I1iIIi,(IIliIl,II11ll,liiI1I)=>{const lliiIi=li11i,ililII={'kfEIi':lliiIi(0x1a8,'m*w3'),'ifEWA':function(lI1II1,i1ilII){const iiIi1I=lliiIi;return i1l1Ii[iiIi1I(0x2d1,'6p#p')](lI1II1,i1ilII);},'THglh':function(iIIii1,IllIi1){return iIIii1-IllIi1;},'irSRe':function(lilIII,Ii1ilI){return i1l1Ii['WZtyx'](lilIII,Ii1ilI);},'QFMEu':'❌\x20账号无效'};try{if(IIliIl)console['log'](i1l1Ii[lliiIi(0x1be,'P73J')](String,IIliIl));else{if(i1l1Ii[lliiIi(0x295,'G(CG')]!==i1l1Ii[lliiIi(0x284,'P73J')]){const II11i1=Iiili1(liiI1I);if(II11i1)switch(iIIiil){case i1l1Ii[lliiIi(0x203,'5jM5')]:$['backEnd']=II11i1[lliiIi(0x218,'XqM]')],$['frontEnd']=II11i1[lliiIi(0x20a,'k)bw')];break;case'query_activetemporary':if($['index']===0x1){if(i1l1Ii['YVZxH'](i1l1Ii[lliiIi(0x249,'x3HW')],i1l1Ii['QOHDR'])){let iliIil='';for(let iliIii=0x0;iliIii<II11i1[lliiIi(0x219,'03]j')][lliiIi(0x220,'i]WN')];iliIii++){const lill1i=II11i1['prize'][iliIii][i1l1Ii[lliiIi(0x1cf,'6p#p')]];iliIii!=i1l1Ii[lliiIi(0x293,'lqaI')](II11i1['prize'][lliiIi(0x22d,'ix0o')],0x1)?lliiIi(0x2a1,'3rv1')===i1l1Ii[lliiIi(0x265,'x3HW')]?iliIil+=lill1i+'，':IillIl():iliIil+=''+lill1i;}console['log']('活动奖品：'+iliIil+'\x0a'),lillIi['updateContent'](i1l1Ii['dFCil'](lillIi[lliiIi(0x29a,'5jM5')],'\x0a【活动奖品】'+iliIil));}else{i1l1lI[lliiIi(0x294,'jP5t')](ililII[lliiIi(0x1c2,'J5iU')]);return;}}i1l1Ii['WZtyx'](II11i1[lliiIi(0x296,'%YMP')],0x1)&&(console[lliiIi(0x299,'oGcu')](i1l1Ii[lliiIi(0x1c1,'x3HW')]),$[lliiIi(0x1bd,'5jM5')][lliiIi(0x2c9,'H#Vv')](lliiIi(0x1e4,'H#Vv')),$['skipRun']=!![]);break;case i1l1Ii[lliiIi(0x254,'JJlw')]:i1l1Ii[lliiIi(0x1c5,']WTb')](II11i1[lliiIi(0x1f0,'XqM]')],0x0)?(console[lliiIi(0x2d0,'6p#p')](i1l1Ii[lliiIi(0x23c,'e9FO')]),$[lliiIi(0x227,'i]WN')][lliiIi(0x221,'uIDz')]('未抽中')):(console[lliiIi(0x244,'6^[h')](i1l1Ii[lliiIi(0x248,'tE*&')]),$[lliiIi(0x1f8,'bd@o')][lliiIi(0x225,'jP5t')](i1l1Ii[lliiIi(0x1b7,'03]j')]));break;case'fansapp_draw':if(II11i1['prize']){if(i1l1Ii[lliiIi(0x1ac,'3rv1')]($['index'],0x1)){let iilii='';for(let Ill11i=0x0;i1l1Ii[lliiIi(0x2d6,'!ctq')](Ill11i,II11i1[lliiIi(0x240,'X1&m')][lliiIi(0x1e9,'5jM5')]);Ill11i++){const iilil=II11i1['prize'][Ill11i][i1l1Ii[lliiIi(0x2b1,'uIDz')]];i1l1Ii[lliiIi(0x28e,'k)bw')](Ill11i,i1l1Ii['KLnLn'](II11i1[lliiIi(0x2b9,'Vs5B')][lliiIi(0x1e3,'4XWd')],0x1))?iilii+=iilil+'，':iilii+=''+iilil;}console['log'](lliiIi(0x261,'tE*&')+iilii+'\x0a'),lillIi[lliiIi(0x28a,'r^qV')](i1l1Ii[lliiIi(0x29d,'rAL(')](lillIi[lliiIi(0x21f,'k)bw')],lliiIi(0x2d3,'3rv1')+iilii));}console['log'](i1l1Ii[lliiIi(0x2a3,'Hrp!')]),$[lliiIi(0x227,'i]WN')][lliiIi(0x276,'Kwaj')](i1l1Ii[lliiIi(0x28b,'!ctq')]);}else{if(i1l1Ii[lliiIi(0x1ae,'oLXe')](lliiIi(0x1e5,'JJlw'),i1l1Ii[lliiIi(0x2a4,'!ctq')]))console[lliiIi(0x208,'QPAO')]('未抽中'),$[lliiIi(0x2be,'Hrp!')][lliiIi(0x289,'!ctq')](i1l1Ii[lliiIi(0x2a8,'r^qV')]);else{let il1ll='';for(let i1ilIi=0x0;i1ilIi<Iliil1['prize'][lliiIi(0x1d3,'oLXe')];i1ilIi++){const lill1l=iliIIl[lliiIi(0x212,'hXl[')][i1ilIi][lliiIi(0x27b,'P98Q')];ililII[lliiIi(0x262,'uy!b')](i1ilIi,ililII[lliiIi(0x29e,'jP5t')](Ii1iIl['prize'][lliiIi(0x2b5,'uy!b')],0x1))?il1ll+=lill1l+'，':il1ll+=''+lill1l;}iIIl1i[lliiIi(0x234,'1RYI')](lliiIi(0x2c7,'r^qV')+il1ll+'\x0a'),I1lllI['updateContent'](ill111[lliiIi(0x272,'Hrp!')]+(lliiIi(0x25f,'NvSB')+il1ll));}}break;}else{if(lliiIi(0x1ad,'4XWd')!==lliiIi(0x297,'1RYI'))console[lliiIi(0x247,'i]WN')](liiI1I);else try{iiilli=l1iIIl[lliiIi(0x206,'oLXe')](iiilll),ililII['irSRe'](lI11Il[lliiIi(0x1b6,'k)bw')],'0')&&(lIII1l[lliiIi(0x1cb,'8P0y')](ililII[lliiIi(0x263,'U2Le')]),l1iIIi[lliiIi(0x256,'QPAO')][lliiIi(0x276,'Kwaj')](lliiIi(0x2d7,'kOnz')),lilIi['skipRun']=!![]);}catch{IilIlI[lliiIi(0x224,'X1&m')]('京东服务器返回空数据'),iIli11['skipRun']=!![];}}}else i11I1l[lliiIi(0x24e,'3rv1')](lil,IllI1l);}}catch(i1ilIl){$['logErr'](i1ilIl,II11ll);}finally{i1l1Ii[lliiIi(0x1b1,'JJlw')]===lliiIi(0x1ef,'03]j')?i1l1Ii[lliiIi(0x217,'XqM]')](iill1,liiI1I):(IiI1[lliiIi(0x1cc,']WTb')](lliiIi(0x27f,'e9FO')),liI[lliiIi(0x2aa,'oGcu')][lliiIi(0x2a5,'8P0y')](iii1l1['lngVJ']),illIli[lliiIi(0x2c4,'oGcu')]=!![]);}}):I1ilIl[li11i(0x29c,'!ctq')](I11iII);});}function Iiili1(iii1li){const IllIl1=IiillI,Iil1i1={'LAkYy':IllIl1(0x2b8,'Hrp!'),'Kbbpc':function(iliIl1,Ii1il1){return iliIl1===Ii1il1;},'VOorp':IllIl1(0x2ca,'uIDz'),'ZfAWn':IllIl1(0x291,'tE*&'),'tGGND':'WAgTd'};let IIii11=null;try{const iii1ll=/(\w+)\(([\s\S]*?)\);/,IIliI1=iii1li[IllIl1(0x282,'x3HW')](iii1ll);IIliI1&&(Iil1i1[IllIl1(0x1fb,'U2Le')](IllIl1(0x1b3,'m*w3'),Iil1i1[IllIl1(0x20c,'b4Tv')])?IIii11=JSON[IllIl1(0x1de,'JJlw')](IIliI1[0x2]):i1l1li[IllIl1(0x2bd,'tE*&')](i1ilii(iIIII1)));}catch(IliIIl){Iil1i1[IllIl1(0x29b,'EUZ*')](Iil1i1[IllIl1(0x260,'JJlw')],Iil1i1[IllIl1(0x229,'X1&m')])?(lI1Ill[IllIl1(0x234,'1RYI')](Iil1i1[IllIl1(0x226,'JJlw')]),lI1Ili['message'][IllIl1(0x270,'X1&m')](Iil1i1[IllIl1(0x273,']WTb')])):console[IllIl1(0x1f9,'H#Vv')](IliIIl);}return IIii11;}function Iil1l1(){const ll1Ii=IiillI,lI1l1l={'Ddytz':function(IIliII,iiliI){return IIliII+iiliI;},'LbInm':function(Ill11I,I1il1i){return Ill11I*I1il1i;},'MJJJT':function(IliIIi,lI1l1i){return IliIIi===lI1l1i;},'yqzPO':ll1Ii(0x238,'D!Gg'),'rTowe':'mOFwB','IIZIq':ll1Ii(0x268,'k)bw'),'pnJlQ':ll1Ii(0x2b0,'G(CG'),'QRvMi':function(i1iil,llI11l){return i1iil(llI11l);},'JlBvS':ll1Ii(0x2ab,'rAL('),'KYCMM':function(I1llIl,i1iii){return I1llIl!==i1iii;},'TLFon':ll1Ii(0x235,'H#Vv'),'BWcjM':function(I1llIi,IIii1I){return I1llIi===IIii1I;},'uNmrb':ll1Ii(0x2d5,'QPAO'),'EHyNw':ll1Ii(0x1ee,'4XWd'),'asJvV':'uzlil','XPbfN':ll1Ii(0x1d8,'U2Le'),'FQAEo':function(llI11i){return llI11i();},'asueZ':function(i1iIi1,l1l1il){return i1iIi1!=l1l1il;},'CaFRv':function(I11i1I,iliIi1){return I11i1I-iliIi1;},'SZgFd':ll1Ii(0x1e2,'tE*&'),'naiPb':ll1Ii(0x214,'XqM]'),'jxtRg':ll1Ii(0x2b4,'e9FO')};return new Promise(async l1l1ii=>{const ill1II=ll1Ii,Il1i1I={'hxIhW':'sPrizeDesc','bbhJW':function(Ii1iii,iIIilI){const ll1Il=iii1II;return lI1l1l[ll1Il(0x281,'rAL(')](Ii1iii,iIIilI);},'QNZMy':function(il1l1,Ii1iil){const iiIi11=iii1II;return lI1l1l[iiIi11(0x1c6,'EUZ*')](il1l1,Ii1iil);}};if(lI1l1l['MJJJT'](lI1l1l[ill1II(0x1dc,'5jM5')],'DEKID')){const Ilil1i={'url':ill1II(0x1f7,'1RYI'),'headers':{'Accept':ill1II(0x23e,']WTb'),'Accept-Encoding':ill1II(0x2c0,'EUZ*'),'Accept-Language':lI1l1l[ill1II(0x211,'NvSB')],'Connection':ill1II(0x1a9,'J5iU'),'Cookie':lI1lil,'Host':lI1l1l['jxtRg'],'User-Agent':$['UA']}};$[ill1II(0x242,'!ctq')](Ilil1i,(iili1,II11ii,Iil1iI)=>{const l1i1I1=ill1II,II11il={'FTKXd':function(iIIil1,IlllII){const i1llil=iii1II;return lI1l1l[i1llil(0x269,'uy!b')](iIIil1,IlllII);},'pEVwU':function(I1il1I,II111){const i1llii=iii1II;return lI1l1l[i1llii(0x2c6,'bd@o')](I1il1I,II111);}};if(lI1l1l[l1i1I1(0x2d2,'!ctq')](lI1l1l['yqzPO'],lI1l1l[l1i1I1(0x255,'tE*&')])){let lill11=null;try{const liI1i1=/(\w+)\(([\s\S]*?)\);/,I11i11=lili1[l1i1I1(0x257,'bd@o')](liI1i1);I11i11&&(lill11=IllIIi['parse'](I11i11[0x2]));}catch(I1llII){IiiIi1[l1i1I1(0x252,'okPG')](I1llII);}return lill11;}else try{if(lI1l1l[l1i1I1(0x267,']WTb')]!==lI1l1l[l1i1I1(0x21c,'okPG')])i1li[l1i1I1(0x204,'03]j')](l1i1I1(0x1b4,'6^[h'));else{if(iili1){if(lI1l1l['MJJJT'](lI1l1l[l1i1I1(0x239,'hXl[')],lI1l1l[l1i1I1(0x1bc,'oLXe')]))console[l1i1I1(0x1c0,'XqM]')](lI1l1l['QRvMi'](String,iili1)),console[l1i1I1(0x2a9,'lqaI')]($[l1i1I1(0x28c,'rAL(')]+l1i1I1(0x223,'6^[h'));else return II11il[l1i1I1(0x1d4,'%YMP')](IlII1['floor'](II11il['pEVwU'](IiI11[l1i1I1(0x1fc,'JJlw')](),lli-liIlI)),lll);}else{if(lI1l1l[l1i1I1(0x241,'%YMP')](lI1l1l['JlBvS'],lI1l1l[l1i1I1(0x1b5,'!ctq')])){if(Iil1iI)try{if(lI1l1l[l1i1I1(0x1d1,'03]j')](lI1l1l[l1i1I1(0x1e6,'D!Gg')],'yHisa'))Iil1iI=JSON[l1i1I1(0x20f,'i]WN')](Iil1iI),lI1l1l[l1i1I1(0x1af,'XqM]')](Iil1iI[l1i1I1(0x1b9,'m*w3')],'0')&&(console[l1i1I1(0x224,'X1&m')](lI1l1l['uNmrb']),$[l1i1I1(0x24d,'G(CG')]['fix'](lI1l1l['EHyNw']),$[l1i1I1(0x285,'3rv1')]=!![]);else{const I1llI1=i1IIi[l1i1I1(0x213,'P73J')][IIII1I][Il1i1I[l1i1I1(0x2b2,'ix0o')]];Il1i1I['bbhJW'](Iii111,Il1i1I['QNZMy'](l1l1II['prize'][l1i1I1(0x274,'tE*&')],0x1))?l1i11I+=I1llI1+'，':II11II+=''+I1llI1;}}catch{console['log']('京东服务器返回空数据'),$[l1i1I1(0x1e1,'XqM]')]=!![];}else lI1l1l['KYCMM'](lI1l1l[l1i1I1(0x1db,'4XWd')],lI1l1l[l1i1I1(0x233,'QPAO')])?(console[l1i1I1(0x222,'P73J')](l1i1I1(0x290,'jP5t')),$[l1i1I1(0x2d4,'kOnz')]=!![]):Iillil[l1i1I1(0x1bf,'m*w3')](l1lIli,lIIiiI);}else IiilI[l1i1I1(0x266,'hXl[')]('京东服务器返回空数据'),ii1I11[l1i1I1(0x278,'6p#p')]=!![];}}}catch(Il1i1i){$[l1i1I1(0x2c8,'6p#p')](Il1i1i,II11ii);}finally{lI1l1l[l1i1I1(0x2ae,'J5iU')](l1l1ii);}});}else iI1lll+=''+l1lIll;});}function i1i11I(Ii1iiI){const llIIil=IiillI,Ilil1I={'ZkSNl':llIIil(0x210,'XqM]'),'FtzbY':llIIil(0x2c3,'jP5t'),'XnEUK':'未获取到数据,请重新运行','JIhXB':function(iliIiI,II11iI){return iliIiI!==II11iI;},'EwVwe':llIIil(0x246,'D!Gg'),'RITXF':'DLeGe','VZjJT':function(Il1i1l,Iil1ii){return Il1i1l(Iil1ii);},'CXREk':llIIil(0x200,'i]WN'),'cupHd':llIIil(0x26e,'uIDz')};return new Promise(lill1I=>{const llIIii=llIIil,Ii1ii1={'PpLRt':Ilil1I[llIIii(0x264,'lqaI')]},Ilil11={'url':''+Ii1iiI,'timeout':0x2710,'headers':{'User-Agent':Ilil1I['cupHd']}};$[llIIii(0x1ed,'%YMP')](Ilil11,async(i1ii1,il1ii,llI111)=>{const Ii1I1i=llIIii;try{if(i1ii1){}else llI111?Ilil1I['ZkSNl']===Ilil1I['FtzbY']?(II11I1[Ii1I1i(0x1ea,'D!Gg')](Ii1ii1['PpLRt']),Iii11I[Ii1I1i(0x1f4,'rAL(')]['fix']('已领过'),Iil1II[Ii1I1i(0x26c,'Hrp!')]=!![]):llI111=JSON[Ii1I1i(0x253,'kOnz')](llI111):console['log'](Ilil1I[Ii1I1i(0x29f,'ix0o')]);}catch(IlllI1){Ilil1I['JIhXB'](Ilil1I[Ii1I1i(0x230,'cn@k')],Ii1I1i(0x25b,'rAL('))?(ii1I1i[Ii1I1i(0x279,'EUZ*')](llI,llliI),iI1li1=null):($[Ii1I1i(0x24e,'3rv1')](IlllI1,il1ii),llI111=null);}finally{Ilil1I['RITXF']!==Ilil1I['RITXF']?(Iiii1[Ii1I1i(0x209,'uIDz')](lIIili(IiiIil)),IiiIii[Ii1I1i(0x204,'03]j')](IIlll[Ii1I1i(0x287,'b4Tv')]+Ii1I1i(0x1d2,'Vs5B'))):Ilil1I[Ii1I1i(0x20d,'uIDz')](lill1I,llI111);}});});}function il1iIl(II11l,II11i){const llIIlI=IiillI,iI1Iii={'eTufn':function(liI1ii,lIIiIl){return liI1ii+lIIiIl;},'owRzw':function(iI1Iil,il1iI){return iI1Iil*il1iI;}};return iI1Iii[llIIlI(0x1f5,'QPAO')](Math[llIIlI(0x1ca,'Kwaj')](iI1Iii[llIIlI(0x2b3,'e9FO')](Math[llIIlI(0x22e,'3rv1')](),II11i-II11l)),II11l);}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
