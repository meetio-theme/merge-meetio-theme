import { darker } from './darker';
import { lighter } from './lighter';
import { deepocean } from './deepocean';
import { palenight } from './palenight';

export const ui = [
    {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Darker',
        scheme: 'Meetio Darker',
        // folder: 'Dark',
        variables: darker,
    }, {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Lighter',
        scheme: 'Meetio Lighter',
        // folder: 'Light',
        variables: lighter,
    }, {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Palenight',
        scheme: 'Meetio Palenight',
        // folder: 'Light',
        variables: palenight,
    }, {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Deepocean',
        scheme: 'Meetio Deepocean',
        // folder: 'Light',
        variables: deepocean,
    },
];

export const colors = {};