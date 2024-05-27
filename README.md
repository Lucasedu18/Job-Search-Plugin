# Job Search Plugin

The Job Search Plugin is a powerful tool designed to streamline the process of finding job opportunities based on your specific criteria. Developed using the Extism JavaScript PDK, this plugin leverages the FindWork.dev API to fetch relevant job listings, making your job search more efficient and targeted.

## Installation

To install the Job Search Plugin, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where you cloned or downloaded the repository.
3. Compile the plugin using the `extism-js` tool:

```bash
extism-js plugin.js -i plugin.d.ts -o plugin.wasm
```
This command will generate a plugin.wasm file, which is the compiled version of the plugin.

## Usage
To utilize the Job Search Plugin, execute the following command:
```bash
extism call plugin.wasm run --input='{"search":"Full Stack","location":"London","remote":"true"}' --wasi --allow-host='findwork.dev'
```
Replace the values for `search`, `location`, and `remote` with your desired criteria. The search parameter specifies the job title or keyword, location represents the desired location, and remote indicates whether you are searching for remote positions (true) or on-site positions (false) or you could only pass search and location parameters for searching both(remote and on-site).

The plugin will fetch job listings from the FindWork.dev API based on your specified criteria and display the results in a formatted table, including the job role, company name, location, and the job URL.

## Example
Here's an example and its response :
```bash
$ extism call plugin.wasm run --input='{"search":"Full Stack","location":"London"}' --wasi --allow-host='findwork.dev'

Role | Company | Location | URL
Senior Full Stack Engineer | Hypertune | ONSITE (London) | https://findwork.dev/XlLVNEX/senior-full-stack-engineer-at-hypertune
Software Engineer, Web Frameworks | Cloudflare | Austin, Lisbon, London, remote | https://findwork.dev/MNN7dyM/software-engineer-web-frameworks-at-cloudflare
Senior Full Stack Engineers (TypeScript, JavaScript, ReScript) | Humaans | London HQ | https://findwork.dev/XoAEqdQ/senior-full-stack-engineers-typescript-javascript-rescript-at-humaans
Full-stack Engineer | OpenCover | London, United Kingdom | https://findwork.dev/XE59oYX/full-stack-engineer-at-opencover
Senior Full-Stack Engineer | Sillion | London | https://findwork.dev/MBjrwqM/senior-full-stack-engineer-at-sillion
Software Engineer, Fullstack & AI | 11x | London, UK | https://findwork.dev/Qg6LNYn/software-engineer-fullstack-ai-at-11x
Lead Full Stack Developer | Boiler Room | London, UK | https://findwork.dev/M1pZe9Q/lead-full-stack-developer-at-boiler-room
Full Stack Typescript Engineer | Virtual Store Trials | London - UK | https://findwork.dev/XE59PxX/full-stack-typescript-engineer-at-virtual-store-trials
Full Stack Typescript Engineer | Virtual Store Trials | London - UK | https://findwork.dev/nalrpZX/full-stack-typescript-engineer-at-virtual-store-trials
Product Engineers (Full Stack), Founding Designer, Developer Advocate | Speakeasy | US (SF), London (UK) | https://findwork.dev/n2Y31gX/product-engineers-full-stack-founding-designer-developer-advocate-at-speakeasy
Backend and Full Stack | Education Platform | Hybrid/Onsite in London, UK | https://findwork.dev/n98NEzX/backend-and-full-stack-at-education-platform
Quant Python Engineer | Man Group Tech | London, UK | https://findwork.dev/MrJG9KM/quant-python-engineer-at-man-group-tech
Senior Developer Experience Engineer | Novata | London, UK (Hybrid) | https://findwork.dev/MdVg2xn/senior-developer-experience-engineer-at-novata
Full Stack Engineer | Orbit | REMOTE, or London (UK), or Hamburg (Germany) | https://findwork.dev/nJRraZn/full-stack-engineer-at-orbit
```
