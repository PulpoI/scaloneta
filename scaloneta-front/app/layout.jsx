import Navbar from "@/components/NavBar/Navbar";
import "./globals.css";
import Head from "./head";

async function musicPage() {
  const res = await fetch(
    "https://scaloneta.pulpol.com.ar/wp-json/acf/v3/options/options/header/"
  );
  const data = await res.json();
  return data.header;
}

export default async function RootLayout({ children }) {
  const music = await musicPage();

  return (
    <html lang="en">
      <Head />
      <body>
        <Navbar />
        <audio id="audio" controls autoPlay={true}>
          <source src={music.music.url} type="audio/mpeg" />
          no es compatible
        </audio>

        {children}
      </body>
    </html>
  );
}
