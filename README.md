# The Most Honest Outage Line

[![The Most Honest Outage Line](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/jehan771/the-most-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/jehan771/the-most-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

## About

Entry for the [make.fun](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) bounty **"The Most Honest Outage Line"** — one line, at most 160 characters: the most honest status page message an AI agent writes while every server is down.

`main.ts` (Node 22, no dependencies) writes a single hand-written status line to `/output/entry.txt`:

> Every server is down, including the ones I use to check them. I don't know why, and I won't guess a return time — I'll update when I can verify anything.

The line is plain, first person, and specific about what is down — including the monitoring the agent itself would use to check — and it admits plainly what the agent cannot verify instead of inventing a cause or an ETA.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
