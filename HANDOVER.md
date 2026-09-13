# LUNÉVA Website — Handover

Project for Robert (PMT Security Systems). New brand/site for **LUNÉVA** — a premium 32oz double-wall insulated water bottle ("Hydration, Elevated"). Separate from the existing Teracom infrastructure, but hosted on the same Proxmox box.

## IMPORTANT: how coding gets done

**All real coding happens on VM 400 using OpenHands against the internal Ollama model — not by editing files yourself over SSH one-off, and not any external LLM API.**

- OpenHands binary: `~/.local/bin/openhands` on VM 400 (installed via `uv tool install`, not on default PATH)
- Model: `ollama/qwen3-coder-agent` via Ollama at `http://localhost:11434` (local, GPU-backed)
- Invocation pattern (matches the existing `~/crewai/openhands_runner.py` used for other Teracom projects):
  ```
  cd ~/luneva-workspace/luneva
  LLM_MODEL='ollama/qwen3-coder-agent' LLM_BASE_URL='http://localhost:11434' LLM_API_KEY='ollama' OPENHANDS_SUPPRESS_BANNER=1 \
    ~/.local/bin/openhands --override-with-envs -t '<task description>' --headless --always-approve
  ```
  Run this in the background (`nohup ... &`) — a full run can take several minutes.
- **Known limitation**: OpenHands is good at scaffolding but has produced JSX referencing CSS classes it never wrote (invisible images, unstyled layout), and substituted invented marketing copy instead of using exact provided text. Always verify the actual build/output — don't trust its own "success" narration. For anything requiring precision (exact copy, exact CSS), it's often faster to write the file locally (via Write tool) and `scp` it directly rather than re-prompting OpenHands.
- VM 400's GPU may be shared with other sessions running other jobs (e.g. "Cybersecurity OS") — check for contention before kicking off a long run.

## Infrastructure

Proxmox host: `teracomsolutions` at **10.0.0.20** (root SSH access, not sudo — a scoped sudo user got blocked by this session's own permission classifier; connecting as root directly avoided that).

| VM | Role | IP | Notes |
|---|---|---|---|
| **400** | Coding (OpenHands + CrewAI + Ollama) | 10.0.0.241 | user `teracom`, shared with other Teracom AI work |
| **105** | Preview + GitHub push | 10.0.0.152 | cloned from template VM 310; DHCP conflicts were caused by a duplicated `/etc/machine-id` after cloning — fixed via `rm /etc/machine-id && dbus-uuidgen --ensure=/etc/machine-id` plus forcing `ClientIdentifier=mac`. Named "Lenova-Website-Production" internally (predates the "Luneva" spelling fix). |
| **101** | Reference only (read-only) | 10.0.0.101 | Existing Teracom production site — same conventions this build follows: Next.js 14 App Router, plain JS (not TS), `app/`+`components/`+`lib/` structure. Do not modify. |

SSH keys (on whatever machine is driving the browser/SSH session): `~/.ssh_leniva/leniva_vm400`, `leniva_vm105`, `leniva_vm101` (read-only). VM 105 also holds its own key (`~/.ssh/id_ed25519_vm400` on VM 105 itself) to pull from VM 400 directly.

### The actual code flow
```
OpenHands writes files on VM 400 (~/luneva-workspace/luneva/)
        │
        ▼   bash ~/sync-luneva.sh   (run this ON VM 105)
VM 105 (~/Luneva) — rsyncs from VM 400, excludes node_modules/.next/.git,
                    git add/commit/push
        │
        ▼
GitHub (Luneva-Collections/Luneva, public repo, main branch)
        │
        ▼
Vercel auto-deploys (project "luneva", under the TeracomSolutions Vercel team)
```
VM 105 is **also** used to `npm install && npm run build` for a sanity check before syncing, and can run `npm start -- -p 3005` for a live internal preview at `http://10.0.0.152:3005`.

## GitHub / Vercel

- Org: **Luneva-Collections**, repo: **Luneva** (public — made public specifically to dodge Vercel's Pro-plan requirement for deploying private org repos on a free Hobby plan; deploy keys are disabled by this org's policy, so push auth is a fine-grained PAT via `gh auth login` on VM 105, not SSH deploy keys)
- Vercel project **luneva** lives under the **TeracomSolutions** team (not personal account — ended up there by circumstance, Robert said leave it)
- Framework Preset **must be set to "Next.js"** in Vercel project settings — it defaults to "Other" when importing an empty repo and silently breaks the build until changed
- Custom domain: **luneva.com.au** (DNS via Crazy Domains) — `www` CNAME to Vercel, apex A record needs to point to Vercel's IP if the bare domain (no www) should also work

## Design system

- Fonts: **Cormorant Garamond** (serif, headings) + **Manrope** (sans-serif, body), via `next/font/google`
- Palette: cream background `#F4F0EB`, warm-dark text `#2B2724`, three product finishes — Cloud (light), Oat (warm beige), Noir (black)
- Design/copy reference: the live Lovable preview at `https://creative-capture-display.lovable.app` — pulled verbatim (exact copy + real product photos downloaded directly from that site, now in `public/images/`). Lovable itself is only a visual/copy reference — none of its Vite/React code was used.

## What's built so far

- `/` — homepage: hero, brand story + triptych, colour picker, features, product detail, why-we-made-it, journal grid, final CTA
- `/shop` — product grid (Cloud/Oat/Noir, $59.95 each)
- `/shop/[productId]` — individual product pages
- `/cart` — cart view, quantity controls, subtotal
- `/checkout` — shipping form + order summary + "Place Order" (UI complete, **not wired to real payment yet**)
- Cart state via React Context + localStorage (`lib/cart-context.js`, `lib/products.js`), matching VM 101's pattern
- GST note in footer, shop page, and checkout (subtotal/total)
- Footer: social icons for Facebook/Instagram/YouTube/TikTok (**placeholder `#` links — real URLs not yet provided**), and Stripe/card-brand payment badges (**currently plain text "VISA/MASTERCARD/AMEX" labels, not real logo graphics** — avoided pulling trademarked logo images without checking licensing first)

## Outstanding / next steps

1. **Stripe integration** — Robert said "later" then asked to complete the checkout UI (done) but the actual payment processing needs real Stripe API keys, which haven't been set up yet. VM 101's `CheckoutButton.js` + a `/api/checkout` route is the pattern to follow.
2. **Real social media URLs** — swap into `components/SocialLinks.js`
3. **Real payment brand logos** — currently text placeholders in `components/PaymentBadges.js`
4. Future: an invoicing platform integration was mentioned (Xero/MYOB/Zoho — unclear which was actually meant, worth confirming with Robert) via API, "in the near future"

## Session/tooling notes

- This session's Bash tool runs on a Windows machine; **avoid heredocs with embedded quotes over SSH** — Git Bash quoting breaks unpredictably on complex multi-line content. Write files locally first (Write tool) then `scp` them over; far more reliable.
- Running privileged remote commands (`sudo` over SSH, spawning unattended agent processes) may get blocked by this session's own permission classifier until the user adds a `Bash(ssh:*)` allow rule (or `bypassPermissions` mode) to `~/.claude/settings.json` — that file edit has to be done by the user directly, not by Claude.
