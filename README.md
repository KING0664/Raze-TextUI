# Raze-TextUI
Modernizing Text UI with Animation | Free and Dynamic Design

## es_extended Code

<h2> Replace this code </h2>

```lua
function ESX.TextUI(message, notifyType)
    if GetResourceState("esx_textui") ~= "missing" then
        return exports["esx_textui"]:TextUI(message, notifyType)
    end

    print("[^1ERROR^7] ^5ESX TextUI^7 is Missing!")
end

function ESX.HideUI()
    if GetResourceState("esx_textui") ~= "missing" then
        return exports["esx_textui"]:HideUI()
    end

    print("[^1ERROR^7] ^5ESX TextUI^7 is Missing!")
end
```
<h3> With This</h3>

```lua
function ESX.TextUI(message, notifyType)
    if GetResourceState("Raze-TextUI") ~= "missing" then
        return exports["Raze-TextUI"]:TextUI(message, notifyType)
    end

    print("[^1ERROR^7] ^5Raze TextUI^7 is Missing!")
end

function ESX.HideUI()
    if GetResourceState("Raze-TextUI") ~= "missing" then
        return exports["Raze-TextUI"]:HideUI()
    end

    print("[^1ERROR^7] ^Raze TextUI^7 is Missing!")
end
```

## Exports
```lua
<h3>Show the TextUI</h3>

exports["Raze-TextUI"]:TextUI(message, notifyType)
```

```lua
<h3>Hide the TextUI</h3>

exports["Raze-TextUI"]:HideUI()
```




## Previews

![Preview_1](https://cdn.discordapp.com/attachments/1025803257064464447/1222034086206373979/Raze_TextUI_Theme.png?ex=6614beee&is=660249ee&hm=c49687259d81c5754039d6cc751d18472f49e5c29eaca2ecf450bed26a9fd931&)

![Preview_2](https://cdn.discordapp.com/attachments/1221960251998212266/1221960456911065118/small_image.png?ex=66147a5b&is=6602055b&hm=07717a934fa6fd9ab4faae92a1c3a10b9c125f8298daf5596a5a1cbbda3d521e&)

![Discord link](https://discord.gg/EFKGucD4hh)

## Legal

Copyright (C) 2023 ESX-Framework

This program Is free software: you can redistribute it And/Or modify it under the terms Of the GNU General Public License As published by the Free Software Foundation, either version 3 Of the License, Or (at your option) any later version.

This program Is distributed In the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty Of MERCHANTABILITY Or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License For more details.

You should have received a copy Of the GNU General Public License along with this program. If Not, see <http://www.gnu.org/licenses/>.

