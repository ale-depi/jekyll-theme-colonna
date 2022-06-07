/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 lxndrblz
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * visit https://github.com/lxndrblz/anatole
 *
 */

// initialize default value
function getTheme() {
    return localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
}

function setTheme(style) {
    document.documentElement.setAttribute('data-theme', style);
    localStorage.setItem('theme', style);
}

function init() {
    // initialize default value
    const theme = getTheme();

    // check if a preferred color theme is set for users that have never been to our site
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === null) {
        if (userPrefersDark) {
            setTheme('dark');
        } else if (!document.documentElement.getAttribute('data-theme')) {
            setTheme('light');
        } else {
            setTheme(document.documentElement.getAttribute('data-theme'));
        }
    } else {
        // load a stored theme
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}


// switch themes
function switchTheme() {
    const theme = getTheme();
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.querySelector('.theme-switch');
    themeSwitcher.addEventListener('click', switchTheme, false);
}, false);

init();
