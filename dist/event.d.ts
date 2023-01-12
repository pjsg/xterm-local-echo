export declare class IoEventTarget extends EventTarget {
    emitEof(): void;
    emitInterrupt(): void;
    onEof(callback: (e: Event) => void): void;
    onInterrupt(callback: (e: Event) => void): void;
}
