import{d as q,i as _,u as b,q as h,r as n,o as B,e as Y,f as s,w as i,b as o,g as V}from"./index-kt3BPNUV.js";import{c as k,b as m}from"./index.esm-pGSbMFc_.js";const x={class:"yup-validation"},N=o("h2",null," Yup helper ",-1),w=o("h3",null," useYupHelper ",-1),E={class:"actions"},H=`
  const {
    reset: resetForm1,
    validate: validateForm1,
  } = useYupHelper({
    fields: ref(form1),
    schema: yup.object({
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
    }),
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    }
  })
`,S=q({__name:"YupValidation",setup(R){const e=_({firstname:"",lastname:"",email:""}),r=_({}),{reset:C,validate:y}=b.useYupHelper({fields:h(e),schema:k({firstname:m().required(),lastname:m().required(),email:m().email().required()}),initialValues:{firstname:"",lastname:"",email:""}});function g(){C(),r.errors=void 0}async function v(){const{errors:u}=await y();r.errors=u}return(u,a)=>{const l=n("CInput"),d=n("CButton"),F=n("CCodeSnippet");return B(),Y("div",x,[N,w,s(F,{snippet:H},{default:i(()=>{var p,c,f;return[o("form",null,[s(l,{name:"yupFirstname",class:"firstname",label:"Prénom",modelValue:e.firstname,"onUpdate:modelValue":a[0]||(a[0]=t=>e.firstname=t),"error-message":(p=r.errors)==null?void 0:p.firstname},null,8,["modelValue","error-message"]),s(l,{name:"yupLastname",class:"lastname",label:"Nom",modelValue:e.lastname,"onUpdate:modelValue":a[1]||(a[1]=t=>e.lastname=t),"error-message":(c=r.errors)==null?void 0:c.lastname},null,8,["modelValue","error-message"]),s(l,{name:"yupEmail",class:"email",label:"Email",modelValue:e.email,"onUpdate:modelValue":a[2]||(a[2]=t=>e.email=t),"error-message":(f=r.errors)==null?void 0:f.email},null,8,["modelValue","error-message"])]),o("div",E,[s(d,{color:"primary",class:"c-mr-35",onClick:v},{default:i(()=>[V(" Valider ")]),_:1}),s(d,{color:"secondary",onClick:g},{default:i(()=>[V(" Ré-initialiser ")]),_:1})])]}),_:1})])}}});export{S as default};
