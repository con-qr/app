(this.webpackJsonpwebcartaovisita=this.webpackJsonpwebcartaovisita||[]).push([[0],{19:function(e,t,o){e.exports=o(54)},24:function(e,t,o){},54:function(e,t,o){"use strict";o.r(t);var n=o(2),a=o.n(n),r=o(17),s=o.n(r),d=(o(24),o(8)),c=o(18),i=o.n(c),l=o(7);l.a.initialize("UA-162791801-1");var u=function(){var e=new Headers;e.set("Content-Disposition","attachment"),e.set("content-Type","text/vcard; charset=utf-8");var t=Object(n.useState)(!1),r=Object(d.a)(t,2),s=r[0],c=r[1],u=Object(n.useState)(!1),p=Object(d.a)(u,2),h=p[0],g=p[1],m=Object(n.useState)(""),f=Object(d.a)(m,2),v=f[0],w=f[1],b=function(){try{var e=window.location.search.substring(1).split("&").map((function(e){return e.split("=")})).reduce((function(e,t){var o=Object(d.a)(t,2),n=o[0],a=o[1];return e.set(n,decodeURIComponent(a))}),new Map);if(e){var t=e.get("token"),n=new i.a("U2Fsd"),a=JSON.parse(n.decrypt(t));return l.a.set({qrcodeUUID:a.uuid}),function(e){try{var t=new Date(e);return new Date>t}catch(o){return!0}}(a.exp)?(g(!0),null):function(e){var t=o(51)();if(e.nome&&e.nome.length>0){var n=e.nome.split(" "),a="";n.forEach((function(e,t){t!==n.length-1&&(a=a+" "+e)})),w(a),t.firstName=a,t.lastName=n[n.length-1]}return e.empresa&&e.empresa.length>0&&(t.organization=e.empresa),e.cargo&&e.cargo.length>0&&(t.title=e.cargo),e.site&&e.site.length>0&&(t.url=e.site),e.telefone1&&e.telefone1.length>0&&(t.cellPhone=e.telefone1),e.telefone2&&e.telefone2.length>0&&(t.workPhone=e.telefone2),e.email&&e.email.length>0&&(t.email=e.email),"Work Address"==e.tipoDeEndereco?(t.workAddress.label="Endere\xe7o comercial",e.cep&&e.cep.length>0&&(t.workAddress.postalCode=e.cep),e.cidade&&e.cidade.length>0&&(t.workAddress.city=e.cidade),e.estado&&e.estado.length>0&&(t.workAddress.stateProvince=e.estado),e.pais&&e.pais.length>0&&(t.workAddress.countryRegion=e.pais),e.endereco&&e.endereco.length>0&&(t.workAddress.street=e.endereco)):(t.homeAddress.label="Endere\xe7o residencial",e.cep&&e.cep.length>0&&(t.homeAddress.postalCode=e.cep),e.cidade&&e.cidade.length>0&&(t.homeAddress.city=e.cidade),e.estado&&e.estado.length>0&&(t.homeAddress.stateProvince=e.estado),e.pais&&e.pais.length>0&&(t.homeAddress.countryRegion=e.pais),e.endereco&&e.endereco.length>0&&(t.homeAddress.street=e.endereco)),t}(a)}return c(!0),null}catch(r){return l.a.exception({description:r.toString()}),c(!0),null}};return Object(n.useEffect)((function(){l.a.pageview("/"),function(e){var t=b();if(t){var o=document.createElement("a");o.setAttribute("href","data:text/vcard;charset=utf-8,"+encodeURIComponent(t.getFormattedString())),o.setAttribute("download",e),o.setAttribute("target","_blank"),o.style.display="none",document.body.appendChild(o),o.click(),l.a.event({category:"Autenticador",action:"Download VCard"}),document.body.removeChild(o)}}("".concat(v.length>0?v:"Cart\xe3oPessoal",".vcf")),setInterval((function(){window.location.replace("https://www.dtidigital.com.br")}),3e3)}),[]),a.a.createElement("div",null,h?"N\xe3o foi poss\xedvel obter os dados do usu\xe1rio pois o QRCode pois sua validade expirou":s?"N\xe3o foi poss\xedvel obter os dados do usu\xe1rio pois ocorreu uma falha na obten\xe7\xe3o dos dados, nos desculpe":"")};s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2be971d9.chunk.js.map
