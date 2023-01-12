import type { Terminal, ITerminalAddon } from "xterm";
import { HistoryController } from "./HistoryController";
import { IoEventTarget } from './event';
export interface Option {
    historySize: number;
    enableAutocomplete: boolean;
    maxAutocompleteEntries: number;
    enableIncompleteInput: boolean;
}
export declare class LocalEchoAddon extends IoEventTarget implements ITerminalAddon {
    constructor(option?: Partial<Option>);
    history: HistoryController;
    private terminal;
    private disposables;
    private enableAutocomplete;
    private maxAutocompleteEntries;
    private enableIncompleteInput;
    private autocompleteHandlers;
    private active;
    private input;
    private cursor;
    private activePrompt;
    private activeCharPrompt;
    private writingPromise;
    private remainKeys;
    private terminalSize;
    activate(terminal: Terminal): void;
    dispose(): void;
    /**
     * Register a handler that will be called to satisfy auto-completion
     */
    addAutocompleteHandler(fn: Function, ...args: any[]): void;
    /**
     * Remove a previously registered auto-complete handler
     */
    removeAutocompleteHandler(fn: Function): void;
    /**
     * Return a promise that will resolve when the user has completed
     * typing a single line
     */
    read(prompt?: string, continuationPrompt?: string): Promise<string>;
    /**
     * Return a promise that will be resolved when the user types a single
     * character.
     *
     * This can be active in addition to `.read()` and will be resolved in
     * priority before it.
     */
    readChar(prompt: string): Promise<unknown>;
    /**
     * Abort a pending read operation
     */
    abortRead(reason?: string): void;
    /**
     * Prints a message and changes line
     */
    println(message: string): Promise<void>;
    /**
     * Prints a message and properly handles new-lines
     */
    print(message: string): Promise<void>;
    /**
     * Prints a list of items using a wide-format
     */
    printWide(items: string[], padding?: number): Promise<void> | undefined;
    private attach;
    private detach;
    /** Calls terminal.write, but promisify */
    private internalWrite;
    /**
     * Apply prompts to the given input
     */
    private applyPrompts;
    /**
     * Advances the `offset` as required in order to accompany the prompt
     * additions to the input.
     */
    private applyPromptOffset;
    /** Combine tab->space and CJK->space conversion. This make cursor calculation correct. */
    private toSingleWidth;
    /**
     * Clears the current prompt
     *
     * This function will erase all the lines that display the current prompt
     * and move the cursor in the beginning of the first line of the prompt.
     */
    private clearInput;
    /**
     * Replace input with the new input given
     *
     * This function clears all the lines that the current input occupies and
     * then replaces them with the new input.
     */
    private setInput;
    /**
     * This function completes the current input, calls the given callback
     * and then re-displays the prompt.
     */
    private printAndRestartPrompt;
    /**
     * Set the new cursor position, as an offset on the input string
     *
     * This function:
     * - Calculates the previous and current
     */
    private setCursor;
    /**
     * Move cursor at given direction
     */
    private handleCursorMove;
    /**
     * Erase a character at cursor location
     */
    private handleCursorErase;
    /**
     * Insert character at cursor location
     */
    private handleCursorInsert;
    /**
     * Handle input completion
     */
    private handleReadComplete;
    /**
     * Handle terminal resize
     *
     * This function clears the prompt using the previous configuration,
     * updates the cached terminal size information and then re-renders the
     * input. This leads (most of the times) into a better formatted input.
     */
    private handleTermResize;
    /**
     * Handle terminal input
     */
    private handleTermData;
    /**
     * Handle a single piece of information from the terminal.
     */
    private handleData;
}
