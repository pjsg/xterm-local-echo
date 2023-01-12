/**
 * Detects all the word boundaries on the given input
 */
export declare function wordBoundaries(input: string, leftSide?: boolean): number[];
/**
 * The closest left (or right) word boundary of the given input at the
 * given offset.
 */
export declare function closestLeftBoundary(input: string, offset: number): number;
export declare function closestRightBoundary(input: string, offset: number): number;
/**
 * Convert offset at the given input to col/row location
 *
 * This function is not optimized and practically emulates via brute-force
 * the navigation on the terminal, wrapping when they reach the column width.
 */
export declare function offsetToColRow(input: string, offset: number, maxCols: number): {
    row: number;
    col: number;
};
/**
 * Covert tabs (\t) to spaces.
 * @param input
 * @returns
 */
export declare function replaceTabToSpace(input: string): string;
/**
 * Enumerate each char in @c input, check if it is double-width.
 * If so, add a space after it to align the cursor.
 *
 * @param input
 * @param maxCols
 * @returns
 */
export declare function parseUnicode(input: string, maxCols: number): string;
/**
 * Counts the lines in the given input
 */
export declare function countLines(input: string, maxCols: number): number;
/**
 * Checks if there is an incomplete input
 *
 * An incomplete input is considered:
 * - An input that contains unterminated single quotes
 * - An input that contains unterminated double quotes
 * - An input that ends with "\"
 * - An input that has an incomplete boolean shell expression (&& and ||)
 * - An incomplete pipe expression (|)
 */
export declare function isIncompleteInput(input: string): boolean;
/**
 * Returns true if the expression ends on a tailing whitespace
 */
export declare function hasTailingWhitespace(input: string): boolean;
/**
 * Returns the last expression in the given input
 */
export declare function getLastToken(input: string): string;
/**
 * Returns the auto-complete candidates for the given input
 */
export declare function collectAutocompleteCandidates(callbacks: any[], input: string): string[];
export declare function getSharedFragment(fragment: string, candidates: string[]): string | null;
