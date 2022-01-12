export class IoEventTarget extends EventTarget {
    emitEof() {
        this.dispatchEvent(new Event('eof'));
    }
    emitInterrupt() {
        this.dispatchEvent(new Event('interrupt'));
    }
    onEof(callback: (e: Event) => void) {
        this.addEventListener('eof', callback);
    }
    onInterrupt(callback: (e: Event) => void) {
        this.addEventListener('interrupt', callback);
    }
}