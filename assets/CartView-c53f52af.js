import{_ as x,o as l,c as r,b as p,d as t,F as g,f,g as b,t as n,h as m,v as y}from"./index-252086ec.js";const{VITE_APIPATH:d,VITE_API:i}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"biggo",BASE_URL:"/homework-week6/",MODE:"production",DEV:!1,PROD:!0},C={data(){return{cart:{carts:""}}},methods:{getCartData(){this.$http.get(`${i}/api/${d}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{console.log(e)})},deleteCart(e){this.$http.delete(`${i}/api/${d}/cart/${e}`).then(o=>{this.getCartData(),alert("刪除產品")}).catch(o=>{console.log(o)})},changeItemQty(e){const{id:o,qty:u}=e,h={data:{product_id:e.product_id,qty:u}};this.$http.put(`${i}/api/${d}/cart/${o}`,h).then(a=>{this.getCartData(),alert("更新數量")}).catch(a=>{console.log(a)})}},mounted(){this.getCartData()}},V={class:"container"},$={class:"table align-middle"},v=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),I=["onClick"],D=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),k={class:"input-group input-group-sm"},E={class:"input-group mb-3"},T=["onUpdate:modelValue","onChange"],A={class:"input-group-text",id:"basic-addon2"},P={class:"text-end"},w=t("td",{colspan:"3",class:"text-end"},"總計",-1),B={class:"text-end"},q=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),N={class:"text-end text-success"};function U(e,o,u,h,a,_){return l(),r(g,null,[p(" 這是前台購物車頁面 "),t("div",V,[t("table",$,[v,t("tbody",null,[a.cart.carts?(l(!0),r(g,{key:0},f(a.cart.carts,s=>(l(),r("tr",{key:s+"1211"},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>_.deleteCart(s.id)},[D,p(" x ")],8,I)]),t("td",null,n(s.product.category),1),t("td",null,[t("div",k,[t("div",E,[m(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":c=>s.qty=c,onChange:c=>_.changeItemQty(s)},null,40,T),[[y,s.qty]]),t("span",A,n(s.product.unit),1)])])]),t("td",P,n(s.product.price),1)]))),128)):b("",!0)]),t("tfoot",null,[t("tr",null,[w,t("td",B,n(a.cart.total),1)]),t("tr",null,[q,t("td",N,n(a.cart.final_total),1)])])])])],64)}const H=x(C,[["render",U]]);export{H as default};
