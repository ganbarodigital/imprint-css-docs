import * as fs from 'node:fs';

import { colorDetails } from "../../../src/theme/colors.js";

const colorNames = Object.getOwnPropertyNames(colorDetails);
colorNames.forEach(colorName => {
    const color = colorDetails[colorName];

    const path = "./src/content/colors/" + color.name + '.json';
    const fh = fs.openSync(path, 'w+');
    fs.writeSync(fh, JSON.stringify(color, null, "  "));
    fs.close(fh);
});