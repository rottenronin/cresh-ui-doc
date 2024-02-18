import{d as b,u as v,i as f,r,o as N,e as P,f as l,w as p,g as d,t as a,k as C,b as n,s as u}from"./index-kt3BPNUV.js";const I={class:"phone-input-page"},H=n("h3",null,"Basic usage",-1),S=n("h3",null," disable-async-validation disable-blur-validatation ",-1),y=n("p",null,"Disable intern validation",-1),U=n("h3",null," countryCode ",-1),x=n("p",null,"specify number of country",-1),g=n("h3",null," initial value ",-1),B=n("p",null,"set initial value",-1),M=n("h3",null," model value change ",-1),k=n("p",null,"handle model value change",-1),F=n("br",null,null,-1),w=n("br",null,null,-1),D=n("h3",null,"phoneHelper",-1),E=n("h4",null,"isValidPhoneNumber",-1),T=n("div",null," phoneHelper.isValidPhoneNumber(phone) ",-1),j=n("h4",null,"isValidMobilePhoneNumber",-1),q=n("div",null," phoneHelper.isValidMobilePhoneNumber(phone) ",-1),z=n("h4",null,"isValidFixedPhoneNumber",-1),A=n("div",null," phoneHelper.isValidFixedPhoneNumber(phone) ",-1),G=n("h4",null,"parse and format",-1),J=n("div",null," phoneHelper.parse(phone) ",-1),K=n("br",null,null,-1),L=`
<CPhoneInput
  v-model="state.phone1"
  name="phone1"
  label="phone 1"
/>`,O=`
<CPhoneInput
  v-model="state.phone2"
  name="phone2"
  label="phone 2"
  disable-async-validation
  disable-blur-validation
/>
`,Q=`
<CPhoneInput
  v-model="state.phone3"
  name="phone3"
  label="phone 3"
  country-code="CN"
/>
`,R=`
  phoneHelper.isValidPhoneNumber(state.phone4)
`,W=`
  phoneHelper.isValidMobilePhoneNumber(state.phone5)
`,X=`
  phoneHelper.isValidFixedPhoneNumber(state.phone6)
`,Y=`
  phoneHelper.parse(state.phone6).formatNational()
  phoneHelper.parse(state.phone6).formatInternational()
`,Z=`
<CPhoneInput
  v-model="state.phone8"
  name="phone8"
  label="phone 8"
/>
`,$=`
<CPhoneInput
  v-model="state.phone9"
  name="phone9"
  label="phone 9"
/>
`,le=b({__name:"PhoneInput",setup(ee){const i=v.phoneHelper,e=f({phone1:"",phone2:"",phone3:"",phone4:"2445435323",phone5:"0657383758",phone6:"0142385968",phone7:"0756374858",phone8:"0726384658",phone9:"0123456789"});return(ne,o)=>{const h=r("CPhoneInput"),s=r("c-code-snippet"),c=r("CButton"),m=r("CInput");return N(),P("div",I,[H,l(s,{snippet:L},{default:p(()=>[l(h,{modelValue:e.phone1,"onUpdate:modelValue":o[0]||(o[0]=t=>e.phone1=t),name:"phone1",label:"phone 1"},null,8,["modelValue"]),d(" value: "+a(e.phone1),1)]),_:1}),S,y,l(s,{snippet:O},{default:p(()=>[l(h,{modelValue:e.phone2,"onUpdate:modelValue":o[1]||(o[1]=t=>e.phone2=t),name:"phone2",label:"phone 2","disable-async-validation":"","disable-blur-validation":""},null,8,["modelValue"]),d(" value: "+a(e.phone2),1)]),_:1}),U,x,l(s,{snippet:Q},{default:p(()=>[l(h,{modelValue:e.phone3,"onUpdate:modelValue":o[2]||(o[2]=t=>e.phone3=t),name:"phone3",label:"phone 3","country-code":"CN"},null,8,["modelValue"]),d(" value: "+a(e.phone3),1)]),_:1}),g,B,l(s,{snippet:Z},{default:p(()=>[l(h,{modelValue:e.phone8,"onUpdate:modelValue":o[3]||(o[3]=t=>e.phone8=t),name:"phone8",label:"phone 8"},null,8,["modelValue"]),d(" value: "+a(e.phone8),1)]),_:1}),M,k,l(s,{snippet:$},{default:p(()=>[l(h,{modelValue:e.phone9,"onUpdate:modelValue":o[4]||(o[4]=t=>e.phone9=t),name:"phone9",label:"phone 9"},null,8,["modelValue"]),d(" value: "+a(e.phone9)+" ",1),F,w,l(c,{onClick:o[5]||(o[5]=C(()=>e.phone9="000000000",["prevent","stop"]))},{default:p(()=>[d(" change value ")]),_:1})]),_:1}),D,E,l(s,{snippet:R},{default:p(()=>[l(m,{name:"phone4",modelValue:e.phone4,"onUpdate:modelValue":o[6]||(o[6]=t=>e.phone4=t)},null,8,["modelValue"]),T,n("div",null," result: "+a(u(i).isValidPhoneNumber(e.phone4)),1)]),_:1}),j,l(s,{snippet:W},{default:p(()=>[l(m,{name:"phone5",modelValue:e.phone5,"onUpdate:modelValue":o[7]||(o[7]=t=>e.phone5=t)},null,8,["modelValue"]),q,n("div",null," result: "+a(u(i).isValidMobilePhoneNumber(e.phone5)),1)]),_:1}),z,l(s,{snippet:X},{default:p(()=>[l(m,{name:"phone6",modelValue:e.phone6,"onUpdate:modelValue":o[8]||(o[8]=t=>e.phone6=t)},null,8,["modelValue"]),A,n("div",null," result: "+a(u(i).isValidFixedPhoneNumber(e.phone6)),1)]),_:1}),G,l(s,{snippet:Y},{default:p(()=>{var t,_;return[l(m,{name:"phone7",modelValue:e.phone7,"onUpdate:modelValue":o[9]||(o[9]=V=>e.phone7=V)},null,8,["modelValue"]),J,n("div",null,[d(" formatNational: "+a((t=u(i).parse(e.phone7))==null?void 0:t.formatNational())+" ",1),K,d(" formatInternational: "+a((_=u(i).parse(e.phone7))==null?void 0:_.formatInternational()),1)])]}),_:1})])}}});export{le as default};
