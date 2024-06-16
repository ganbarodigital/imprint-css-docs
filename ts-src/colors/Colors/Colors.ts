//
// Copyright (c) 2024-present Stuart Herbert
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

import { HashMap, type Maybe } from "@safelytyped/core-types";
import type { ColorDefinition } from "../ColorDefinition/ColorDefinition";
import type { ColorGroup } from "../ColorGroup/ColorGroup";

export class Colors {
    protected data: HashMap<ColorGroup> = {};

    public push(
        groupName: string,
        color: ColorDefinition | ColorPalette,
    )
    {
        const group = this.groupOrNew(groupName);
        group.push(color);
    }

    /**
     * retrieve a ColorGroup from our master list of colors
     *
     * @param groupName
     * - which group do you want to retrieve?
     * @param onNotFound
     * - we call this if the requested `groupName` does not exist
     * @returns
     * - the requested ColorGroup (if it exists)
     * - the ColorGroup returned by `onNotFound()` (if defined)
     * - `undefined` otherwise
     */
    public group(
        groupName: string,
        {
            onNotFound = () => undefined,
        }: {
            onNotFound?: () => Maybe<ColorGroup>
        } = {}
    ): Maybe<ColorGroup>
    {
        return HashMap.get(this.data, groupName) || onNotFound();
    }

    /**
     * retrieve a ColorGroup from our master list of colors
     *
     * if the group does not exist, we will create it
     *
     * @param groupName
     * - which group do you want to retrieve / create?
     * @returns the requested ColorGroup
     */
    public groupOrNew(groupName: string): ColorGroup
    {
        // shorthand
        const self = this;
        const onNotFound = function() {
            // if this gets called, we need to make a new group
            self.data[groupName] = new ColorGroup();

            // return our new group
            return self.data[groupName];
        }

        // we have to cast this, because TS can't tell that we're
        // guaranteed to return a ColorGroup
        return this.group(groupName, { onNotFound }) as ColorGroup;
    }
}