import{c as x,d as m}from"./index.esm-pGSbMFc_.js";import{d as f,h as b,i as v,r as i,o as V,e as _,f as a,w as e,g as c,u as C,q as g,y as R,z as y,b as w,_ as B}from"./index-kt3BPNUV.js";const T=n=>(R("data-v-99b6f344"),n=n(),y(),n),U={class:"form-controls checkbox"},I=T(()=>w("div",{style:{color:"red"}}," Custom label ",-1)),q=`
    <c-checkbox
      name="checkboxTest"
      v-model="checked"
      :label="'checkbox test'"
    />
  `,M=`
    <c-checkbox
      name="checkboxTest"
      v-model="checked"
    >
      <template #label>
        <div style="color: red">
          Custom label
        </div>
      </template>
    </c-checkbox>
  `,N=`
    <c-checkbox
        :value="checkbox3Value"
        :rules="{ required: { allowFalse: false } }"
        @input="onCheckbox3Change"
        ref="checkbox3Ref"
      >
        checked obligatoire
    </c-checkbox>
  `,S=`
    <c-checkbox
        :value="checkbox4Value"
        @input="onCheckbox4Change"
        ref="checkbox4Ref"
        :disabled="true"
      >
        disabled checkbox
    </c-checkbox>
  `,F=`
  <c-checkbox
      :value="checkbox4Value"
      @input="onCheckbox4Change"
      ref="checkbox4Ref"
      no-uppercase
    >
      disable label uppercase
  </c-checkbox>
`,$=f({__name:"Checkbox",setup(n){const u=b(!1),t=v({value:!1,errorMessage:""});async function k(){const{errors:r}=await C.yupHelper.validate({schema:x({value:m().oneOf([!0],"Field must be checked")}),fields:g(t)});t.errorMessage=(r==null?void 0:r.value)||""}const p=b(!0),h=b();return(r,o)=>{const s=i("CCheckbox"),d=i("c-code-snippet");return V(),_("div",U,[a(d,{snippet:q},{title:e(()=>[c(" c-checkbox ")]),description:e(()=>[c(" Basic select ")]),default:e(()=>[a(s,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=l=>u.value=l),name:"checkboxTest",label:"checkbox test",class:"test"},null,8,["modelValue"])]),_:1}),a(d,{snippet:M},{title:e(()=>[c(" Label ")]),description:e(()=>[c(" c-checkbox avec label personnalisé ")]),default:e(()=>[a(s,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=l=>u.value=l),name:"checkboxTest"},{default:e(()=>[I]),_:1},8,["modelValue"])]),_:1}),a(d,{snippet:N},{title:e(()=>[c(" Rule: required ")]),description:e(()=>[c(" c-checkbox avec rule ")]),default:e(()=>[a(s,{ref:h.value,modelValue:t.value,"onUpdate:modelValue":[o[2]||(o[2]=l=>t.value=l),k],name:"checkbox3Value","error-message":t.errorMessage},{default:e(()=>[c(" checked obligatoire ")]),_:1},8,["modelValue","error-message"])]),_:1}),a(d,{snippet:S},{title:e(()=>[c(" disabled ")]),description:e(()=>[c(" c-checkbox avec property disabled ")]),default:e(()=>[a(s,{ref:"checkbox4Ref",modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=l=>p.value=l),name:"checkbox4Value",disabled:!0},{default:e(()=>[c(" disabled checkbox ")]),_:1},8,["modelValue"])]),_:1}),a(d,{snippet:F},{title:e(()=>[c(" no-uppercase ")]),description:e(()=>[c(" disable label uppercase ")]),default:e(()=>[a(s,{ref:"checkbox4Ref",modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=l=>p.value=l),name:"checkbox4Value","no-uppercase":""},{default:e(()=>[c(" no uppercase label ")]),_:1},8,["modelValue"])]),_:1})])}}}),H=B($,[["__scopeId","data-v-99b6f344"]]);export{H as default};
