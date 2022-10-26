This is a [Next.js](https://nextjs.org/) project.

## Run site locally

To run the site locally you need to clone this repository, see this [step by step guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) for more information.

To run the project you need to have node.js and yarn installed on your machine.

### Installing Node.js

If you don't have Node.js installed on your computer see the following link https://nodejs.org/en/download/package-manager/.

### Installing Yarn

This project uses the yarn package manager to manage the Node.js dependencies. Use the following link to install Yarn https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable.

### Running the project

To run the project use the following commands.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribution

We encourage the developer community to submit [issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) and [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for the [origintrail.club](https://origintrail.club) to this repository.

### Adding content to OriginTrail Academy

Create a new folder in the `courses` folder with a slug of the name of the course, for example `deep-dive`.

Create a new file and copy the following content.

```.mdx
---
subject: [Title]
description: [Short description]
author: [Your name]
banner: [[Link to a banner](#banner)]
---

[Course introduction]

```

To add pages to the course you can add multiple `.mdx` files to the course folder with the following naming convention (`[order]-[slug].mdx`).

```.mdx
---
title: [Page title]
section: [Section]
---

[Page content]
```

To group multiple page's in the same group use the same value in the section key, for example:


```.mdx
---
title: [Page title]
section: Tokenomics
---
```

```.mdx
---
title: [Page title]
section: Tokenomics
---
```

You will end up with a folder looking like:

```
your-course/
├─ index.mdx
├─ 1-first-page-title.mdx
└─ 2-second-page-title.mdx
```

#### Creating assets

Create a new folder in the `public/courses` folder with the same slug as the course.

##### Banner

Create a image with the following properties:
- Aspect ratio of 16 / 10
- And at least a width of 300px

Both `.jpg` and `.png` files are supported and automatically optimized in the project. 
