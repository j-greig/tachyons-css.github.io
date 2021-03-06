const chalk = require('chalk');
const co = require('co');
const prettyHrtime = require('pretty-hrtime');
const startTime = process.hrtime();
const componentsBuildCraftClips = require('./src/components-build-craftclips');

// See src/components-build-defaults for list of options that can be overriden
const options = {
  components: {
    globPattern: 'src/components/**/*.html',
    // frontMatter: {
    //   bodyClass: 'bg-red',
    //   screenshot: {
    //     autocrop: false,
    //   },
    // },
  },
  // screenshot: {
  //   aspectRatio: '16x9',
  // },
};

// Note that componentsBuildList() generates a temporary components list (saved as JSON),
// which is re-used by later steps (for performance).
// If you are working on one component, uncomment and set components.GlobPattern
// in the options above to only (re-)generate the list, index, pages, and screenshots for the
// corresponding category. Once you are done, comment components.GlobPattern back, comment
// the line below that generate the screenshots, then run the script -- this will
// re-create the full index pages for all components, re-generate all the pages (since they need
// to cross-reference the new component), and use the previously generated screenshots as well
// as the new one (i.e. no need to re-generate *all* the screenshots unless you made
// modifications to the screenshots script itself).
co(function* generator() {
  yield componentsBuildCraftClips(options);        // <- builds config file for the Redactor Clips plugin for Craft CMS
}).then(() => {
  const elapsed = process.hrtime(startTime);
  console.log(chalk.green('All done'), chalk.dim(prettyHrtime(elapsed)));
}).catch((err) => {
  console.log(err);
});
