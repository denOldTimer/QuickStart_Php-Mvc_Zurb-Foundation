module.exports = {
  plugins: {
    // include whatever plugins you want
    // but make sure you install these via yarn or npm!
    // add browserslist config to package.json (see below)
    precss: { },
    autoprefixer: { browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7'] }

  }
}
