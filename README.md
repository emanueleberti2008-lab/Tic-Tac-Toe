# Tic Tac Toe

## 1. Project Overview

A web-based two-player Tic Tac Toe game.
Players enter their names, a random pick decides who goes first, finally they choose the board size before the game starts.
Players take turns clicking tiles. They can undo the last move at any time.
The game ends when someone wins or the board is full with no winner (draw).
The game supports three board sizes: 3x3, 4x4, and 5x5.

## 2. Technologies Used

- **React** → builds the UI with components and manages state
- **Next.js** → application framework that handles routing and page structure
- **TypeScript** → adds types to catch bugs before runtime
- **Tailwind CSS** → styles the UI with utility classes

## 3. Project Structure

### `components/`

UI components, one per screen or UI element.

- `players-name-form.tsx` → collects player names
- `random-first-player.tsx` → randomly picks who goes first
- `board-size-picker.tsx` → lets players pick the board size
- `playing-board.tsx` → main game screen
- `board.tsx` → renders the grid and handles tile clicks
- `tile.tsx` → single cell of the board
- `button.tsx` → reusable button

### `types/`

Shared TypeScript types.

- `TileValue` → represents the value of a cell: `"X"`, `"O"`, or `null` if empty
- `BoardSize` → restricts the board size to valid values only: `3`, `4`, or `5`

### `utils/`

Pure utility functions.

- `find-winner.ts` → checks if a player has won
- `board-utils.ts` → creates empty boards and deep copies boards for the undo history

### `app/`

- `page.tsx` → entry point of the app; manages the global game state and renders the correct screen based on the current phase

## 4. Game Flow

1. Players enter their names (must be different)
2. A random pick decides who goes first
3. Players choose the board size
4. Players take turns filling tiles. They can undo the last move at any time
5. After each move the game checks for a winner
6. The game ends when someone wins (winner screen appears) or the board is full with no winner (draw screen appears)
7. Players can restart the game or reset everything

## 5. Game State

- `player1` → name of the X player. Set once at the start, never changes during the game
- `player2` → name of the O player. Set once at the start, never changes during the game
- `currentPlayer` → whose turn it is (`"X"` or `"O"`). Switches after every move, and switches back on undo. Stays the same when a winner is found
- `size` → board size (3, 4, or 5). Set when the player chooses the board size. Used to create the board and to determine the win length
- `board` → 2D array of all tile values. Updated after every move. Never mutated directly — a new copy is created each time
- `winner` → the winning player (`"X"` or `"O"`) or `null` if nobody has won yet. When set, the board freezes and the winner screen appears
- `history` → list of past board snapshots. A new snapshot is added before every move. Used to restore the previous board state when the player presses undo

## 6. Board Representation

The board is a 2D array where each cell can contain `"X"`, `"O"`, or `null` if not played yet.
A 2D array is used because it naturally represents a grid — `board[row][col]` maps directly to a cell's position on screen. A flat array would require manual index calculation like `board[row * size + col]`.
A new empty board is created with `boardUtils.empty(size)`, which fills every cell with `null`.
The board is never mutated directly — every move creates a new copy with only the clicked cell updated.
This immutability is what makes the undo feature possible: past boards stored in `history` are never affected by future moves.

## 7. Undo Feature

Before each move, a deep copy of the board is saved to `history`.
A deep copy is needed because JavaScript arrays are passed by reference — without it, every entry in `history` would point to the same board and change together with every move.
Pressing Undo restores the last saved board and switches the current player back.
The undo button is disabled when `history` is empty.

## 8. Winner Detection

Logic is in `find-winner.ts`.
It checks rows, columns, and both diagonals for a consecutive sequence of the same symbol.
The required sequence length equals the board size (3 on a 3x3, 4 on a 4x4, 5 on a 5x5).
It takes the current player as a parameter so it only checks for that player's symbol.
If it returns `true`, the current player is set as the winner and the board freezes.
If it returns `false`, the game continues and the turn switches to the other player.

## 9. How to Run the Project

```bash
git clone https://github.com/emanueleberti2008-lab/Tic-Tac-Toe  # download the project
npm install                  # install all dependencies
npm run dev                  # start the development server
```

Open [http://localhost:3000] in your browser.

## 10. Possible Improvements

- Add an AI opponent for single-player mode
- Improve the winner detection algorithm to stop checking as soon as a win is impossible
- Add a score counter that persists across multiple rounds
- Make the UI fully responsive for phone and tablet screens

## 11. What I Learned

- How to manage state and pass data between components using props
- How to handle user events like clicks and input changes
- How to use conditional rendering to show and hide elements
- How to structure and organize a React project
- How to break a UI into small focused components, each responsible for a single screen, element or function
- Why immutability matters in React and how to use it to implement undo with a history array
- How to use React hooks like `useState` to manage component state
- How to style components using Tailwind CSS utility classes
- Why `prev =>` in `setState` is important to always work with the latest state
- How to use type guards instead of the bang operator (`!`) to handle nullable values safely
- How to use TypeScript types to restrict values to a safe set and prevent invalid states
