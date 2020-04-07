import { dark } from './dark';
import { light } from './light';

export const ui = [
    {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Dark',
        scheme: 'Meetio-Theme-Dark',
        folder: 'Dark',
        variables: dark,
    }, {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Light',
        scheme: 'Meetio-Theme-Light',
        folder: 'Light',
        variables: light,
    },
];
