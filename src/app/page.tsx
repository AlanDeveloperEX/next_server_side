import { Suspense } from "react";
import GitHubUser from "./components/GitHubUser";
import { LoggedUserProvider } from "./context/LoggedUserContext";

export default async function Home() {
  return (
    <LoggedUserProvider>
      <main className="flex min-h-screen flex-col items-center  p-24">
        <div className="flex flex-col items-center justify-between p-24">
          <h1>Hello World</h1>
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <Suspense fallback={<p>Loading...</p>}>
            <GitHubUser username="AlanDeveloperEX" />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <GitHubUser username="oliveirajoabe" />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <GitHubUser username="diego3g" />
          </Suspense>
        </div>
      </main>
    </LoggedUserProvider>
  );
}
