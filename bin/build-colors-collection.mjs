#!/usr/bin/env node

//
// Copyright (c) 2024-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

import * as fs from 'node:fs';
import { DEFINITION_STORE } from "@imprintcss/css-definitions";
import { isObject } from "@safelytyped/core-types";
import { contrastRatio, hasClearContrast, hues, isDark, isLight, isMidtone, luma, makeCssColor, relativeLuminance, tonality, wcagContrast } from "@safelytyped/css-color";
import { roundDown } from "@safelytyped/math-rounding";

// ================================================================
//
// HELPER FUNCTIONS
//
// ----------------------------------------------------------------

function writeFile(folder, collectionName, collectionData)
{
    const path = folder + "/" + collectionName + ".json";
    const fh = fs.openSync(path, "w+");
    fs.writeSync(fh, JSON.stringify(collectionData, null, "  "));
    fs.close(fh);
}

function writeCollections(folder, collections)
{
    Object.getOwnPropertyNames(collections).forEach(collectionName => {
        writeFile(folder, collectionName, collections[collectionName]);
    });
}

function isColorPalette(input)
{
    if (isObject(input)) {
        return true;
    }

    return false;
}

function processColor(colorGroupName, colorName, colorDefinition)
{
    // console.log(colorGroupName + ": " + colorName + ": " + colorDefinition);
    // shorthand
    const cssColor = makeCssColor(colorDefinition);
    const defaultFg = makeCssColor(DEFINITION_STORE.colorGroups.imprint["imprint-fg-default"]);
    const defaultBg = makeCssColor(DEFINITION_STORE.colorGroups.imprint["imprint-bg-default"]);

    // work out which color shades this belongs to
    const colorHues = hues(cssColor);
    colorHues.forEach(hue => {
        hueCollections[hue].push(colorName);
    });

    // analyse the color
    const colorAnalysis = {
        hex: cssColor.hex(),
        general: {
            hues: hues(cssColor),
            tonality: tonality(cssColor),
            isDark: isDark(cssColor),
            isMidtone: isMidtone(cssColor),
            isLight: isLight(cssColor),
            luma: roundDown(3, luma(cssColor)),
            relativeLuminance: roundDown(3, relativeLuminance(cssColor)),
        },
        pairedWithLightColor: {
            clearContrast: hasClearContrast(cssColor, defaultBg),
            contrastRatio: contrastRatio(cssColor, defaultBg),
            wcagContrast: wcagContrast(contrastRatio(cssColor, defaultBg)),
        },
        pairedWithDarkColor: {
            clearContrast: hasClearContrast(cssColor, defaultFg),
            contrastRatio: contrastRatio(cssColor, defaultFg),
            wcagContrast: wcagContrast(contrastRatio(cssColor, defaultFg)),
        },
    }

    // use that data for some additional analysis
    colorAnalysis.pairedWithLightColor.useForHeadings = (colorAnalysis.pairedWithLightColor.wcagContrast.AAA_large && colorAnalysis.pairedWithLightColor.clearContrast && !colorAnalysis.general.isMidtone);
    colorAnalysis.pairedWithLightColor.useForBodyContent = (colorAnalysis.pairedWithLightColor.wcagContrast.AAA_normal && colorAnalysis.pairedWithLightColor.clearContrast && !colorAnalysis.general.isMidtone);
    colorAnalysis.pairedWithDarkColor.useForHeadings = (colorAnalysis.pairedWithDarkColor.wcagContrast.AAA_large && colorAnalysis.pairedWithDarkColor.clearContrast && !colorAnalysis.general.isMidtone);
    colorAnalysis.pairedWithDarkColor.useForBodyContent = (colorAnalysis.pairedWithDarkColor.wcagContrast.AAA_normal && colorAnalysis.pairedWithDarkColor.clearContrast && !colorAnalysis.general.isMidtone);

    writeFile(colorFolorPrefix, colorName, colorAnalysis);

    // add the color to any remaining collections
    colorCollections[colorGroupName].push(colorName);
}

function processColorPalette(colorGroupName, paletteName, paletteDefinition)
{
    // setup our collections
    colorPaletteCollections[paletteName] = [];

    const paletteContentNames = Object.getOwnPropertyNames(paletteDefinition);
    paletteContentNames.forEach(paletteContentName => {
        // shorthand
        const colorName = paletteName + "-" + paletteContentName;
        const colorDefinition = paletteDefinition[paletteContentName];

        // add it to our collections
        colorGroupsCollections[colorGroupName].push(colorName);
        colorPaletteCollections[paletteName].push(colorName);

        processColor(colorGroupName, colorName, colorDefinition);
    });
}

// ================================================================
//
// MAIN CODE
//
// ----------------------------------------------------------------

// shorthand
const groupFolderPrefix = "./src/data/colorGroups";
const colorFolorPrefix = "./src/data/colors";
const paletteFolderPrefix = "./src/data/colorPalettes";
const hueFolderPrefix = "./src/data/colorHues";

const colorGroups = DEFINITION_STORE.colorGroups;

// these will hold our colors data sets
const hueCollections = {
    black: [],
    blue: [],
    cyan: [],
    gray: [],
    green: [],
    magenta: [],
    orange: [],
    pink: [],
    purple: [],
    red: [],
    violet: [],
    white: [],
    yellow: [],
}
const colorGroupsCollections = {};
const colorCollections = {};
const colorPaletteCollections = {};

// first pass - organise Imprint CSS's colors into our data sets

const colorGroupNames = Object.getOwnPropertyNames(colorGroups);
colorGroupNames.forEach(colorGroupName => {
    // shorthand
    const colorGroup = colorGroups[colorGroupName];

    // setup our collections
    colorGroupsCollections[colorGroupName] = [];
    colorCollections[colorGroupName] = [];

    const paletteOrColorNames = Object.getOwnPropertyNames(colorGroup);
    paletteOrColorNames.forEach(paletteOrColorName => {
        // what are we looking at?
        const paletteOrColor = colorGroup[paletteOrColorName];
        if (isColorPalette(paletteOrColor)) {
            processColorPalette(colorGroupName, paletteOrColorName, paletteOrColor);
        }
        else {
            colorGroupsCollections[colorGroupName].push(paletteOrColorName);
            processColor(colorGroupName, paletteOrColorName, paletteOrColor);
        }
    });
});

writeCollections(groupFolderPrefix, colorGroupsCollections);
writeCollections(paletteFolderPrefix, colorPaletteCollections);
writeCollections(hueFolderPrefix, hueCollections);

