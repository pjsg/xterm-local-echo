/**
 * The history controller provides an ring-buffer
 */
export declare class HistoryController {
    private size;
    constructor(size: number);
    entries: string[];
    private cursor;
    /**
     * Push an entry and maintain ring buffer size
     */
    push(entry: string): void;
    /**
     * Rewind history cursor on the last entry
     */
    rewind(): void;
    /**
     * Returns the previous entry
     */
    getPrevious(): string;
    /**
     * Returns the next entry
     */
    getNext(): string;
}
