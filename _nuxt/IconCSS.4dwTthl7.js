import{d,ax as f,v as x,H as o,b as _,c as z,a0 as S,L as a,k as I}from"./entry.fJzW-1qr.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;f(s=>({"27c1ef5f":a(m)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(_(),z("span",{style:S({width:a(c),height:a(c)})},null,4))}}),v=I(y,[["__scopeId","data-v-9ea9d78b"]]);export{v as default};
