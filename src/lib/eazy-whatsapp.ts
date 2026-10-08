type WhatsAppSendResult={ok:boolean;messageId?:string;error?:string};
function required(name:string){const value=process.env[name];if(!value)throw new Error(`Missing required environment variable: ${name}`);return value;}
export async function sendOwnerWhatsAppText(text:string):Promise<WhatsAppSendResult>{
 const token=required("WHATSAPP_ACCESS_TOKEN"),phoneNumberId=required("WHATSAPP_PHONE_NUMBER_ID"),recipient=required("EAZY_OWNER_WHATSAPP_NUMBER");
 const response=await fetch(`https://graph.facebook.com/v23.0/${phoneNumberId}/messages`,{method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},body:JSON.stringify({messaging_product:"whatsapp",to:recipient,type:"text",text:{preview_url:false,body:text.slice(0,4096)}})});
 const data=await response.json().catch(()=>({}));if(!response.ok)return {ok:false,error:data?.error?.message||`WhatsApp request failed (${response.status})`};return {ok:true,messageId:data?.messages?.[0]?.id};
}
export async function sendOwnerWhatsAppImage(imageUrl:string,caption?:string):Promise<WhatsAppSendResult>{
 const token=required("WHATSAPP_ACCESS_TOKEN"),phoneNumberId=required("WHATSAPP_PHONE_NUMBER_ID"),recipient=required("EAZY_OWNER_WHATSAPP_NUMBER");
 const response=await fetch(`https://graph.facebook.com/v23.0/${phoneNumberId}/messages`,{method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},body:JSON.stringify({messaging_product:"whatsapp",to:recipient,type:"image",image:{link:imageUrl,caption:caption?.slice(0,1024)}})});
 const data=await response.json().catch(()=>({}));if(!response.ok)return {ok:false,error:data?.error?.message||`WhatsApp image request failed (${response.status})`};return {ok:true,messageId:data?.messages?.[0]?.id};
}
export function verifyWhatsAppWebhook(mode:string|null,token:string|null,challenge:string|null){if(mode!=="subscribe"||!token||token!==process.env.WHATSAPP_VERIFY_TOKEN||!challenge)return null;return challenge;}
