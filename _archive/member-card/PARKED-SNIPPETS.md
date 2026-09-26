# Member card, parked (removed from the live draft on 2026-09-25)

Restore checklist:
1. Move `member-card.astro` back to `src/pages/` and `WalletPhone.astro` back to `src/components/`.
2. Add `<a href="/member-card/">Member Card</a>` back to `src/components/Footer.astro`.
3. Paste the blocks below back into the pages named.

## src/pages/membership.astro

Frontmatter additions:
```
import WalletPhone from '../components/WalletPhone.astro';
const cardPerks = ['Lives in Apple Wallet & Google Wallet', 'Tap to check in at the door', 'Perks at local businesses across Squamish', 'Reciprocal access at Sea-to-Sky partner spaces'];
```

Section (goes just before `<!-- CLOSING CTA -->`):
```
  <!-- MEMBER CARD showcase -->
  <section class="section light" id="card">
    <div class="wrap card-split">
      <div class="card-copy reveal">
        <span class="eyebrow">The Common Card</span>
        <h2 class="serif">Your membership, <em>in your pocket</em>.</h2>
        <p>Every membership comes with The Common Card — a wallet pass on your phone. Tap to check in at the door, and unlock perks from local businesses across Squamish as our network grows.</p>
        <ul class="card-perks">
          {cardPerks.map((c) => (
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>{c}</li>
          ))}
        </ul>
        <div class="card-cta-row">
          <a href="/member-card/" class="btn btn-ink">Explore The Common Card →</a>
          <span class="card-soon"><span class="card-dot" aria-hidden="true"></span>Coming summer 2026</span>
        </div>
      </div>
      <div class="reveal"><WalletPhone /></div>
    </div>
  </section>

```

CSS (goes inside the page `<style>` block):
```
  /* member card showcase */
  .card-split { display: grid; grid-template-columns: 1fr 0.85fr; gap: 4rem; align-items: center; }
  @media (max-width: 900px) { .card-split { grid-template-columns: 1fr; gap: 3rem; } }
  .card-copy h2 { font-size: clamp(2rem, 4.5vw, 3rem); line-height: 1.08; margin: 1rem 0 1rem; }
  .card-copy h2 em { font-style: italic; color: var(--gold); }
  .card-copy > p { color: var(--stone); font-weight: 300; font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.6rem; max-width: 480px; }
  .card-perks { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 2rem; }
  .card-perks li { display: flex; align-items: flex-start; gap: 0.7rem; font-size: 1.02rem; font-weight: 300; color: var(--stone); }
  .card-perks svg { flex-shrink: 0; margin-top: 3px; }
  .card-cta-row { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
  .card-soon { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--stone-soft); }
  .card-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); animation: cardpulse 2.4s infinite; }
  @keyframes cardpulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.7); } }
```

Copy that was reworded: meta description ended "Community, perks, and your member card come with every plan." and the intro said "the community, the perks, and your card."

## src/pages/index.astro

Section (goes just before `<!-- FIND US -->`):
```
  <!-- MEMBER CARD TEASER -->
  <section class="section warm">
    <div class="wrap" style="text-align:center;max-width:720px;">
      <span class="eyebrow" style="justify-content:center;">Coming summer 2026</span>
      <h2 class="serif reveal" style="font-size:clamp(2rem,4.5vw,3rem);line-height:1.08;margin:1.1rem 0 1.1rem;">One card for the <em style="font-style:italic;color:var(--gold);">whole community</em>.</h2>
      <p class="reveal" style="color:var(--stone);font-weight:300;font-size:1.1rem;margin:0 auto 1.8rem;max-width:520px;">The Common Card lives in your phone wallet — unlock partner perks across town, discounted access at Sea-to-Sky partner spaces, and new flexible plans built for the network.</p>
      <a href="/member-card/" class="btn btn-outline reveal">Preview the card →</a>
    </div>
  </section>

```
