import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id="remix-app">
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
