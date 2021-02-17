const theme = {
    $black: '#191919',
    $darkGray: '#777',
    $lightGray: 'rgba(211,211,211,0.2)',
    $white: '#fff',
    $beige: '#f1e3d3',
    $pink: '#ffa095',
    $red: '#ff7b6b',
    $placeholder: 'rgba(0, 0, 0, 0.4)',
    flex: ($justify = null, $align = null, $direction = null) => ({
        display: 'flex',
        'flex-direction': $direction,
        'justify-content': $justify,
        'align-items': $align,
    }),
};

export default theme;
