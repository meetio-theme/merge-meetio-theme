import { dark } from './dark';
import { light } from './light';

export const ui = [
    {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Meetio Dark',
        scheme: 'Meetio Dark',
        folder: 'Dark',
        variables: dark,
    }, {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Meetio Light',
        scheme: 'Meetio Light',
        folder: 'Light',
        variables: light,
    },
];
