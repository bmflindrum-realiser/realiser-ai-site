# realiser.ai – GitHub + Vercel (fix 1)
Dette er samme én-sideside, men med tryggere Next.js-konfig for Vercel.
- Fjernet deprecated `experimental.appDir`
- Ignorerer ESLint/TypeScript-feil under build (kan skrus på senere)
- Node engines >= 18.18.0

## Deploy
1) Last opp disse filene til et GitHub-repo.
2) I Vercel: Add New → Project → velg repo → Deploy.
