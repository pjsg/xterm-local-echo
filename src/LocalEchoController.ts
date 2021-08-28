import type { Terminal, ITerminalAddon } from "xterm";

import { HistoryController } from "./HistoryController";
import {
  closestLeftBoundary,
  closestRightBoundary,
  collectAutocompleteCandidates,
  countLines,
  getLastToken,
  hasTailingWhitespace,
  isIncompleteInput,
  offsetToColRow,
  getSharedFragment,
} from "./Utils";

/**
 * A local terminal controller is responsible for displaying messages
 * and handling local echo for the terminal.
 *
 * Local echo supports most of bash-like input primitives. Namely:
 * - Arrow navigation on the input
 * - Alt-arrow for word-boundary navigation
 * - Alt-backspace for word-boundary deletion
 * - Multi-line input for incomplete commands
 * - Auto-complete hooks
 */
export default class LocalEchoController {
  constructor(options = {}) {
    this._handleTermData = this.handleTermData.bind(this);
    this._handleTermResize = this.handleTermResize.bind(this);

    this.history = new HistoryController(options.historySize || 10);
    this.maxAutocompleteEntries = options.maxAutocompleteEntries || 100;

    this._autocompleteHandlers = [];
    this._active = false;
    this._input = "";
    this._cursor = 0;
    this._activePrompt = null;
    this._activeCharPrompt = null;
    this._termSize = {
      cols: 0,
      rows: 0,
    };

    this._disposables = [];

    if (term) {
      if (term.loadAddon) term.loadAddon(this);
      else this.attach();
    }
  }

  // xterm.js new plugin API:
  activate(term) {
    this.term = term;
    this.attach();
  }
  dispose() {
    this.detach();
  }

  /////////////////////////////////////////////////////////////////////////////
  // User-Facing API
  /////////////////////////////////////////////////////////////////////////////

  /**
   *  Detach the controller from the terminal
   */
  detach() {
    if (this.term.off) {
      this.term.off("data", this._handleTermData);
      this.term.off("resize", this._handleTermResize);
    } else {
      this._disposables.forEach((d) => d.dispose());
      this._disposables = [];
    }
  }

  /**
   * Attach controller to the terminal, handling events
   */
}
