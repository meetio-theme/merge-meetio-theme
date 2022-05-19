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
        variables: darker,
    }, {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Lighter',
        scheme: 'Meetio Lighter',
        variables: lighter,
    },
    {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Palenight',
        scheme: 'Meetio Palenight',
        variables: palenight,
    },
    {
        // Description: Theme
        // - These need to be a valid sublime-color-scheme
        // - file. In this case the Meetio theme
        name: 'Merge Deepocean',
        scheme: 'Meetio Deepocean',
        variables: deepocean,
    },
];

export const colors = {};