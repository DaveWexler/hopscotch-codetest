# Hopscotch Code Test - Dave Wexler

Thank you for the opportunity to complete this challenge!

### Files included:

1. puzzle.html - the game board elements
2. puzzle.css - the styling for the board and its pieces
3. puzzle.js - the javascript code to manage the sliding of board pieces
4. readme.me - this readme file

### The challenge

"Create a 15 puzzle UI using javascript (https://en.wikipedia.org/wiki/15_puzzle). The user should be able to move blocks into the blank space to try and solve the puzzle. It should behave like a physical puzzle in that you can push an entire row over into the blank space. You do not need to ensure that the puzzle is solvable or provide a solver for it."

### My thought process

My thought process for completing this challenge included the following steps:

1. On click, determine whether the clicked tile was moveable. A moveable piece consisted of a piece in either the same row or column as the empty square. Non-moveable pieces consisted of all other squares plus the empty square itself.

To accomplish this, I organized the board in a grid with HTML IDs consisting of coordinates in an "x-y" pattern. This enabled me to determine movability simply by determining whether the clicked tile had the same x or y coordinate as the empty square.

2. Once this was determined, the next step was to determine if the piece clicked on needed to be moved vertically or horizontally. By examining the coordinates, the is_moveable function returned a signifier string of "horizontal" or "vertical" accordingly.

3. Before executing the move itself, I needed to determine how many spaces needed to move in order to pass the test parameter of several pieces being able to be moved at once. This was accomplished by a simple calculation of the difference between x or y coordinates. This figure is passed to the "move" functions along with the cell that was clicked itself.

4. The move_vertical and move_horizontal functions are recursive functions that can handle moving any number of pieces at once. Instead of using the clicked-on cell as the "anchor", the function instead starts with the empty cell and swaps it with the cell next to it in the direction of the clicked cell. Then, the function calls itself with the original clicked cell and one less space than the original query. By this method, the empty square keeps getting swapped with the square next to it in the direction of the clicked tile until the number of spaces left to be moved is zero. At this point, the clicked cell becomes the new empty cell and the move is complete.

### Conclusion

By this methodology, the entire script could be applied to a puzzle of any size as long as each cell on the board (html table-data elements, in this case) maintains the "x-y" coordinate ID naming system. The result is a nice and flexible UI for this type of puzzle.

Thank you very much again for this opportunity, and I look forward to learning more about Hopscotch!
