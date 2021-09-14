module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    rules: [
      {
        test: /\.md$/i,
        use: 'raw-loader',
      }
    ]
  ]
}
