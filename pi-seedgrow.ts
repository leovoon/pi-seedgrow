import type {
  ExtensionAPI,
  ExtensionContext,
  WorkingIndicatorOptions,
} from "@earendil-works/pi-coding-agent";

// Unicode Private Use Area frames from the SeedGrow icon font (U+E900–U+E909).
// A seed grows into a full sprout, then sways in the wind while the agent works.
// Ghostty: font-codepoint-map = U+E900-U+E909=SeedGrow
// Font: ~/Library/Fonts/seedgrow.ttf (family "SeedGrow", hand-built, v1.4)
const SEEDGROW_INDICATOR: WorkingIndicatorOptions = {
  // Each frame carries a trailing space: pi's Loader joins frame + message with
  // a single space, so the extra space doubles the gap before the "Working" label
  // (the sprout glyph fills its whole cell, unlike a narrow braille dot).
  frames: [
    "\uE900 ", // buried seed
    "\uE901 ", // peeking
    "\uE902 ", // cracked
    "\uE903 ", // tip out
    "\uE904 ", // bare shoot
    "\uE905 ", // leaf buds
    "\uE906 ", // leaves opening
    "\uE907 ", // full sprout
    "\uE908 ", // sway left
    "\uE909 ", // sway right
  ],
  intervalMs: 167,
};

function applySeedGrowIndicator(ctx: ExtensionContext) {
  if (!ctx.hasUI) return;
  ctx.ui.setWorkingIndicator(SEEDGROW_INDICATOR);
}

export default function (pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    applySeedGrowIndicator(ctx);
  });
}
