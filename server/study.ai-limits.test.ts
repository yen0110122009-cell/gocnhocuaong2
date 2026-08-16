import { describe, expect, it } from "vitest";
import { limitFlashcards } from "../shared/study";

describe("AI Studio Flashcard limits", () => {
  it("limits one AI import to 27 cards", () => {
    const cards = Array.from({ length: 40 }, (_, index) => ({ id: index }));
    expect(limitFlashcards(cards)).toHaveLength(27);
    expect(limitFlashcards(cards).at(-1)?.id).toBe(26);
  });

  it("does not cap total cards across separate sets", () => {
    const first = limitFlashcards(Array.from({ length: 27 }, (_, index) => index));
    const second = limitFlashcards(Array.from({ length: 27 }, (_, index) => index + 27));
    expect([...first, ...second]).toHaveLength(54);
  });
});
