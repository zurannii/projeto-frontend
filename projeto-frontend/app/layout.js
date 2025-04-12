import "./globals.css"; 

export const metadata = {
  title: "Projeto Front-End",
  description: "Meu projeto adaptado de Vite para Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
