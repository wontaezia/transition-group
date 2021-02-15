const theme = {
  $black: '#424242',
  $white: '#fff',
  $lightGray: 'rgba(189,189,189,0.2)',
  $darkGray: '#ccc',
  $themeColor: '#eeff00',
  flex: ($justify = null, $align = null, $direction = null) => ({
    display: 'flex',
    'flex-direction': $direction,
    'justify-content': $justify,
    'align-items': $align,
  }),
};

export default theme;
