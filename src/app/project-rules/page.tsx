import React from "react";

type Props = {};

const Home = (props: Props) => {
  const rules = [
    "[IMPORTANT] All commits should be made properly. Use appropriate commit messages and follow the conventional commit message convention from the docs provided below.",
    "All shadcn components will be present in src/components/ui",
    "All custom components should be present in src/components. The components which are used globally should be stored in the src/components/common dir.",
    "All server actions should be written in src/app/actions. If a server action is performing an operation on an events collection in the db or something similar, then the file in which this action should be written is src/app/actions/events.action.ts",
    "All models should be written in src/app/models. If a model is for an 'events' collection or something similar, then the file should be named src/app/models/events.model.ts",
    "All hooks will be present in src/hooks",
    "All utils will be present in src/lib/utils",
    "All styles will be present in src/app/globals.css",
    "All images will be present in src/public/images",
    "All fonts will be present in src/app/fonts",
    "Design your components and pages accordingly following these architecture rules.",
    "Keep a note that we are using Nextjs v14 and TailwindCSS v3.4.1. Kindly do not change the dependency values",
  ];

  // Add the important URLs here
  const importantUrls = [
    // Example:
    {
      title: "Conventional Commits Documentation",
      url: "https://www.conventionalcommits.org/en/v1.0.0/",
    },
    {
      title: "GitHub Repository",
    },
    { title: "shadcn/ui Documentation", url: "https://ui.shadcn.com/docs" },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-zinc-800 text-white p-10">
      <div className="flex flex-col justify-center items-start gap-8 p-10 rounded-2xl shadow-2xl bg-black bg-opacity-75 border border-gray-800">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-2 text-cyan-400 drop-shadow-lg">
            Welcome to Our Project
          </h1>
          <p className="text-xl text-gray-300">
            You will soon be provided with the UI/UX for this website.
            <br />
            Till then, familiarise yourselves with the architecture and coding
            principles that we all will follow in this project.
          </p>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3 underline underline-offset-4">
            Architecture & Design Guidelines
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-gray-100">
            {rules.map((rule, idx) => (
              <li key={idx} className="pl-2">
                {rule}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-6">
          <span className="italic text-base text-gray-400">
            <span role="img" aria-label="palette">
              🎨
            </span>{" "}
            Remember to design accordingly!
          </span>
        </div>
        <div className="mt-10 w-full">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-3 underline underline-offset-4">
            Important URLs & Resources
          </h2>
          {importantUrls.length > 0 ? (
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-100">
              {importantUrls.map((item, idx) => (
                <li key={idx} className="pl-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-200 hover:text-cyan-400 underline"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 italic pl-2">
              No important URLs added yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
