import{d as m,r as h,o as u,e as b,b as t,t as s,f as i,y as f,z as _,g as c,_ as g}from"./index-kt3BPNUV.js";const y=o=>(f("data-v-01a1cd7a"),o=o(),_(),o),v={id:"theme-page"},$={class:"description"},x=y(()=>t("pre",{class:"codes-wrapper"},[c("      "),t("code",null,`
        // put custom variables before the style.css in App.vue style bloc for example
        root: {
          --color-primary: '139, 0, 0';
          --font-text-bold: 'cursive';
          ...
        }
        // import cresh-ui style
        @import '@long2x/cresh-ui/style.css';
        // import cresh-ui default theme
        @import '@long2x/cresh-ui/default-theme.css';
      `),c(`
    `)],-1)),V=m({__name:"Theme",setup(o){const l=[{text:"#Variable",key:"variable",align:"start",sortable:!1},{text:"Description",key:"description",align:"start",sortable:!1},{text:"DefaultValue",key:"defaultValue",align:"start",sortable:!1}],d={primary:"64, 14, 201",secondary:"52, 156, 231",tertiary:"0, 236, 203",shadow:"226, 226, 226",grey:"146, 146, 157",text:"61, 100, 124",warning:"255, 165, 0","light-grey":"227, 225, 225","lightest-grey":"245, 244, 244","lightest-blue":"247, 251, 255",dark:"34, 33, 33",black:"0, 0, 0",error:"252, 90, 90",success:"0, 197, 170",border:"187, 201, 211",white:"255, 255, 255","datatable-hover":"223, 235, 244",header:"232, 236, 239","lite-datatable-header-text-color":"190, 203, 213"},p={regular:"lato-regular",semibold:"comfortaa-semibold",bold:"comfortaa-bold"};return(e,w)=>{const n=h("CDatatable");return u(),b("div",v,[t("p",$,s(e.$t("theme.introduction")),1),t("h4",null,s(e.$t("theme.available_colors")),1),i(n,{items:Object.entries(d).map(([a,r])=>({variable:`--color-${a}`,description:e.$t(`theme.colors.${a}`),defaultValue:r})),headers:l,"no-footer":"","items-per-page":-1},null,8,["items"]),t("h4",null,s(e.$t("theme.available_fonts")),1),i(n,{items:Object.entries(p).map(([a,r])=>({variable:`--font-text-${a}`,description:e.$t(`theme.fonts.${a}`),defaultValue:r})),headers:l,"no-footer":"","items-per-page":-1},null,8,["items"]),t("h4",null,s(e.$t("theme.how_to_work")),1),x])}}}),D=g(V,[["__scopeId","data-v-01a1cd7a"]]);export{D as default};
