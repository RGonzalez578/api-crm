"use strict";(self.webpackChunkapi_crm=self.webpackChunkapi_crm||[]).push([[6650],{16650:(m,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>W});var D=_(92132),P=_(45337),n=_(52210),A=_(21272),C=_(55506),R=_(14718),i=_(53323),v=_(55151),U=_(79077),B=_(58802),t=_(15126),l=_(63299),L=_(67014),I=_(59080),d=_(79275),O=_(82437),T=_(61535),o=_(5790),E=_(12083),M=_(35223),K=_(5409),a=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(56336),S=_(13426),y=_(84624),N=_(77965),j=_(54257),H=_(71210),V=_(51187),c=_(39404),x=_(58692),F=_(501),$=_(57646),z=_(23120),G=_(44414),X=_(25962),Y=_(14664),J=_(42588),e=_(90325),Q=_(62785),Z=_(87443),u=_(41032),p=_(22957),k=_(93179),w=_(73055),b=_(15747),q=_(85306),__=_(26509),E_=_(32058),t_=_(81185),s_=_(82261),O_=_(63137),o_=_(67031);const W=()=>((0,n.u)(),(0,D.jsx)(P.HomePageCE,{}))},52210:(m,s,_)=>{_.d(s,{u:()=>B});var D=_(21272),P=_(55506),n=_(67031),A=_(54894),C=_(17703),R=_(58802);const i="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:L,isLoading:I}=(0,R.m)(),d=(0,P.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:o,licenseLimitStatus:E,isHostedOnStrapiCloud:M}=l??{};D.useEffect(()=>{if(L||I)return;const K=!n(o)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&d({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:o}),link:{url:M?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:M})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,o,E,T,M,L])}}}]);
