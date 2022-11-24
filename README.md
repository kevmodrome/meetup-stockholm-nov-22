# Svelte Society Stockholm Meetup Nov-22 - Svelte for Everyone

Repo for the meetup on November 23rd, 2022

## Get the project running

1. Download [PocketBase](https://pocketbase.io), releases can be found on the GitHub release page. We used version [0.8.0](https://github.com/pocketbase/pocketbase/releases/tag/v0.8.0).
2. Register an account.
3. Import the pb_schema.json as your schema in the PocketBase settings.
4. Run `./pocketbase serve` from where the pocketbase file is located.
5. Add `API_URL=http://127.0.0.1:8090/api` to your .env file in this repo.
6. Run `pnpm run dev`.
7. Profit!
