# Pending Changes

## Additions (+)

- [ ] Add a 'default message' to display for Select components when nothing is selected. A sort of 'dropdown prompt'/
- [ ] Hook up the app to an external API taking real-world data.
- [ ] The 'New Movie' button/form doesn't actually submit to the DB yet, just console logs the action. Make it so it sends an HTTP PUT to my DB.
- [ ] Set focus on the search box when first loaded. On registration page, allow keyboard nav and autofocus on the next element after pressing return. Same thing for submitting a new movie.
- [ ] Render the Genre Select element as an accordion dropdown list.
- [ ] Fancy-formatting for Select elements.

## Removal (-)

## Changes/Refactoring (~)

- [ ] SVG backgrounds do not work in safari it seems. Find a way to fix this. This page looks correct in firefox or Chrome but has no BG in Safari.
- [ ] When using the search box: 1) the page changes the positioning on each char entry. Have it such that the box and page STAY PUT. This is probably due to the table having a variable size...there's nothing on the page below it so when there's no data in the table, the table disappears to just the header and the page shrinks. 2) It does not allow fuzzy matching at all, just checks that the string is equal (e.g. searching 'Hard' does NOT return 'Die Hard')
