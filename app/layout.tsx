import "./globals.css";
export const metadata={
 manifest:"/manifest.webmanifest",
 title:"RT 01 RW 04 Pegandekan | Portal Warga",
 description:"Portal digital warga RT 01 RW 04 Dusun 2 Desa Pegandekan, Kecamatan Kemangkon, Kabupaten Purbalingga.",
 icons:{icon:[{url:"https://i.ibb.co.com/TMpphB84/Chat-GPT-Image-Aug-1-2026-09-27-41-AM-removebg-preview.png",type:"image/png",sizes:"32x32"},{url:"https://i.ibb.co.com/TMpphB84/Chat-GPT-Image-Aug-1-2026-09-27-41-AM-removebg-preview.png",type:"image/png",sizes:"192x192"},{url:"https://i.ibb.co.com/TMpphB84/Chat-GPT-Image-Aug-1-2026-09-27-41-AM-removebg-preview.png",type:"image/png",sizes:"512x512"}],apple:"https://i.ibb.co.com/TMpphB84/Chat-GPT-Image-Aug-1-2026-09-27-41-AM-removebg-preview.png"}
};
export const viewport={themeColor:"#153860",width:"device-width",initialScale:1,viewportFit:"cover"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><head><meta name="mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/><link rel="apple-touch-icon" href="https://i.ibb.co.com/TMpphB84/Chat-GPT-Image-Aug-1-2026-09-27-41-AM-removebg-preview.png"/></head><body>{children}</body></html>}