# GitCMS
A fully open-source Git-backed CMS. All your data is committed to git along with your code, so your code and content can never be out of sync, and can be rolled back together.

Deploy your project however you want to, GitCMS just helps to manage the data, but once it's commited, it's up to you! This CMS only does one thing, so you're free to integrate directly with any other tools you need to get the job done without overly cumbersome frameworks to hack around.

## Getting Started

### Installation
1. To install the CLI locally, run `npm -i -g gitcms-cli`
2. Initialise gitcms in the project by running `gitcms init` and following the instructions
3. Run `gitcms start --admin` to launch the cms in admin mode. This will allow you to setup users, pages, custom data types, theme the app, and generally setup how you want everything to fit together. You can also edit content in this mode.

### Deploying the CMS
Running `gitcms start` will launch in normal end user mode, where users can login and edit the content with the structure setup in step 3.

A docker container is available that can run this for you, but you will have to configure your git provider authentication to allow pushes from the container.
As the changes are made to the local fs, instances can only be vertically scaled. 

## FAQ

### How does data storage work?
GitCMS will output a folder called `gitcms-data`, which contains all of your static data to build however you want to. We make no assumptions about branching strategies or anything, that's all up to you. 
This has additional metadata in it that your app might not need because this is the ACTUAL source data that GitCMS uses, not a projection. This is done so that you can just go in and edit the data without having to load the entire CMS, or script migrations to new formats without the cms getting in the way. 
Be warned though, editing the data manually could result in data corruption and errors running GitCMS, so it's recommended you run `gitcms validate` after editing or `gitcms validate --watch` before editing, to catch any breaking changes.

## How do users work without a database?
In the default auth plugin, all users have the same permissions by default, so any logged in user can edit the same things. Only in admin mode can the datastructures be changed and new users added.

User details are stored as a salted hashed password & username in an internal file (hidden inside .gitcms, not gitcms-data).
This authentication method is just a plugin and can be swapped for any other if you want to.

## What if I want to integrate with other systems?
That's totally fine! GitCMS has a plugin system which provides hooks for data reading, writing, committing, authentication, and more. Remember though that these plugins are only for the CMS, and will not add any functionality to your application at run time.

## Can I choose the format of the output data?
At the moment we only support JSON. All of the content is dumped into one big file. Each piece of content is uniquely identified by a content ID, and can reference each other in complex graphs. Because of this, cyclical dependencies are possible between content (e.g. page 1 is related to page 2, and page 2 is related to page 1). 
It is important to take this into consideration and lazily evaluate these references when reading the data at build time. It is recommended for nodejs-based build processes that you use `gitcms.load()` to load your data and follow those references efficiently.