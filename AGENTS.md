<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Common Ground Visuals
Purpose
Common Ground Visuals is a photography portfolio and print platform created by Merissa Bridgeman.
The site showcases photography through curated collections and field notes while supporting future print sales and event photography work.
Brand Identity
Theme: Common Ground
Core values:
* Community
* Storytelling
* Shared spaces
* Quiet moments
* Authenticity
Collections
City Fragments
Urban photography focused on isolated moments, atmosphere, light, shadow, and overlooked details.
Community
People, events, creators, musicians, vendors, and community gatherings.
Landscapes
Natural environments intended for portfolio display and future print sales.
Field Notes
Narrative content explaining the story, process, and observations behind photographs.
Design Principles
* Photography first
* Dark, cinematic aesthetic
* Generous negative space
* Minimal distractions
* Mobile-first
* Fast loading
* Accessible
Technical Stack
* Next.js
* TypeScript
* Tailwind CSS
* MDX
* App Router
Development Rules
* Prefer Server Components by default.
* Use TypeScript for all new code.
* Create reusable UI components.
* Avoid hardcoding photo data inside pages.
* Treat photographs as structured content.
* Keep business logic inside lib/.
* Favor composition over duplication.
Content Architecture
Photos should be stored as structured data and referenced by collections.
Field Notes should be authored in MDX.
Print availability should be controlled through metadata.
Future Features
* Print purchasing
* Interactive photo map
* Search and filtering
* Event photography portfolio
* Sports photography portfolio
* WNBA credential portfolio section

<!-- END:nextjs-agent-rules -->
