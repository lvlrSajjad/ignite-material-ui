// Ignite plugin for Maps
// ----------------------------------------------------------------------------
// const PLUGIN_PATH = __dirname
const APP_PATH = process.cwd()

const add = async function (context) {
  const { ignite, print } = context

  // install a npm module and link it
  await ignite.addModule('typescript', {dev: true })
  await ignite.addModule('react-native-typescript-transformer', { dev: true })
  await ignite.addModule('@types/react', { dev: true })
  await ignite.addModule('@types/react-native', { dev: true })
  await ignite.addModule('react-native-material-textfield', { version: '0.12.0', link: true })
  await ignite.addModule('react-native-vector-icons', { version: '4.4.2', link: true })
  await ignite.addModule('react-native-typescript-material-ui-collection', { link: true })
  await ignite.addModule('react-native-material-ripple', { version: '0.8.0', link: true })
  const copyJobs = [{
    template: 'jsconfig.json',
    target: `jsconfig.json`
  },{
    template: 'rn-cli.config.js',
    target: `rn-cli.config.js`
  }, {
    template: 'tsconfig.json',
    target: `tsconfig.json`
  }, {
    template: 'tslint.json',
    target: `tslint.json`
  }, {
    template: 'typings.d.ts',
    target: `typings.d.ts`
  }]

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, copyJobs)
  // add our component example to the plugin component examples screen
 // await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Maps Example' })

  // add the app build gradle config

  print.info('done')
}

/**
 * Remove from the project.
 */
const remove = async function (context) {
  const { ignite } = context

  // remove the npm module and unlink it
  await ignite.removeModule('typescript', {dev: true })
  await ignite.removeModule('react-native-typescript-transformer', { dev: true })
  await ignite.removeModule('@types/react', { dev: true })
  await ignite.removeModule('@types/react-native', { dev: true })
  await ignite.removeModule('react-native-material-textfield', { unlink: true })
  await ignite.removeModule('react-native-vector-icons', { unlink: true })
  await ignite.removeModule('react-native-typescript-material-ui-collection', { unlink: true })
  await ignite.removeModule('react-native-material-ripple', { unlink: true })

  // remove our component example from the plugin component examples screen

  // TODO: Remove API key
  // android/app/src/main/AndroidManifest.xml
}

module.exports = { add, remove }
