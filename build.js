'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single-double',
  backgroundcolor: 'black'
}

// Text + chalk definitions
const data = {
  name: chalk.white.bold('           Jen Garcia'),
  handle: chalk.yellow.bold('cuibonobo'),
  workTitle: chalk.white.bold('Lead Software Engineer'),
  workCompany: chalk.gray('            at ') + chalk.white('Floyd County Productions'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('cuibonobo'),
  github: chalk.gray('https://github.com/') + chalk.yellow('cuibonobo'),
  instagram: chalk.gray('https://instagram.com/') + chalk.red('cuibonobo'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('cuibonobo'),
  web: chalk.cyan.bold('https://cuibonobo.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('cuibonobo'),
  labelWork: chalk.white('     Work:'),
  labelTwitter: chalk.white('  Twitter:'),
  labelGitHub: chalk.white('   GitHub:'),
  labelInstagram: chalk.white('Instagram:'),
  labelLinkedIn: chalk.white(' LinkedIn:'),
  labelWeb: chalk.white('      Web:'),
  labelCard: chalk.white('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.workTitle}${newline}${data.workCompany}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const instagramming = `${data.labelInstagram}  ${data.instagram}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               instagramming + newline + // data.labelInstagram + data.instagram
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.yellow(boxen(output, options)))
