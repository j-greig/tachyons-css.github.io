const _ = require('lodash');
const chalk = require('chalk');
const co = require('co');
const crypto = require('crypto');
const fm = require('json-front-matter');
const fs = require('fs');
const glob = require('glob');
const mkdirp = require('mkdirp');
const nodegit = require('nodegit');
const path = require('path');
const prettyHrtime = require('pretty-hrtime');
const rmHtmlExt = require('remove-html-extension');
// const htmlClean = require('html-clean');


const defaults = require('./components-build-defaults');

/*
 * Return the first commit that even introduced a component, given its path
 */
const getComponentFirstCommit = (repo, componentPath) =>
  co(function* generator() {
    const headCommit = yield repo.getHeadCommit();
    const walker = repo.createRevWalk();
    walker.push(headCommit.id());
    walker.sorting(nodegit.Revwalk.SORT.TIME);
    // Not happy about that hard-coded constant here, but this is the only way to
    // tell the walker to go as far back in time as possible. No amount of asking
    // on nodegit's Slack or Gitter gave me a better way to do it.
    const historyCommits = yield walker.fileHistoryWalk(componentPath, 30000);
    return historyCommits[historyCommits.length - 1].commit;
  });

/*
 * Return the list of components
 */
const getComponents = options => new Promise((resolve, reject) => {
  glob(options.components.globPattern, {}, (err, componentPaths) => {
    if (err) {
      reject(err);
      return;
    }
    const npmPackage = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    co(function* generator() {
      const repo = yield nodegit.Repository.open(path.resolve('.'));

      var components = "";
      for (let comp_idx = 0; comp_idx < componentPaths.length; comp_idx += 1) {
        const componentPath = componentPaths[comp_idx];

        const firstCommit = yield getComponentFirstCommit(repo, componentPath);

        const componentHtml = fs.readFileSync(componentPath, 'utf8');
        const fmParsed = fm.parse(componentHtml);
        const srcFrontMatter = fmParsed.attributes || {};
        const frontMatter = _.merge({}, options.components.frontMatter, srcFrontMatter);

        const targetDir = componentPath.replace('src/', '').replace('.html', '');

        const tokens = rmHtmlExt(componentPath).replace('src/components/', '').split('/');
        const category = tokens[0];
        const id = tokens[1];

        const page = {
          path: `${targetDir}/index.html`,
          href: `/${targetDir}/index.html`,
          name: frontMatter.name ||
            (options.components.prettify.id ? options.components.prettify.id(id) : id),
          category: options.components.prettify.category
            ? options.components.prettify.category(category) : category,
        };

        // Ignore everything before the first '<' in the component html, eg {{{ this stuff }}}
        var strippedComponentHtml = componentHtml.substr(componentHtml.indexOf("<"));;

        // Write to config file
        components += `[\``;
        components += frontMatter.name ||
          (options.components.prettify.id ? options.components.prettify.id(id) : id);
        components += `\`, \``;
        components += strippedComponentHtml;
        components += `\`],\n`

      }
      resolve(components);
    }); // generator
  }); // glob
});

module.exports = _options => new Promise((resolve, reject) => {
  const options = _.merge({}, defaults, _options);
  const startTime = process.hrtime();
  console.log(chalk.magenta('Working on components config for Craft CMS / Redactor Clips plugin...'));
  getComponents(options).then((components) => {
    mkdirp.sync(path.dirname(options.components.tempListPath));
    fs.writeFileSync(options.components.tempListPath, components);
    // fs.writeFileSync(options.components.tempListPath, components));
    // fs.writeFileSync(options.components.tempListPath, JSON.stringify(components), 'utf8', (err) => {
    //   if (err) throw err;
    // });
    console.log('- Working on components config for Craft CMS / Redactor Clips plugin:', options.components.tempListPath);
    const elapsed = process.hrtime(startTime);
    console.log(chalk.magenta('Done with Redactor Clips component config file!'), chalk.dim(prettyHrtime(elapsed)));
  }).then(resolve).catch(reject);
}); // return promise
