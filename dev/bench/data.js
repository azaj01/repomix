window.BENCHMARK_DATA = {
  "lastUpdate": 1774742234404,
  "repoUrl": "https://github.com/azaj01/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3e1fc1a4951a3c18780c94802159137797a61343",
          "message": "Merge pull request #1349 from yamadashy/fix/perf-benchmark-no-cancel\n\nfix(ci): Disable cancel-in-progress for perf benchmark",
          "timestamp": "2026-03-29T00:36:26+09:00",
          "tree_id": "d16f9e864be9c3f932098d3248103a25b820c5cf",
          "url": "https://github.com/azaj01/repomix/commit/3e1fc1a4951a3c18780c94802159137797a61343"
        },
        "date": 1774742234163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1483,
            "range": "±89",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1472ms, Q3: 1561ms\nAll times: 1445, 1446, 1450, 1454, 1459, 1461, 1465, 1472, 1475, 1475, 1475, 1476, 1478, 1481, 1483, 1483, 1483, 1495, 1496, 1507, 1510, 1543, 1561, 1569, 1569, 1597, 1692, 1957, 1970, 2005ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2677,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2668ms, Q3: 2687ms\nAll times: 2653, 2656, 2663, 2663, 2666, 2668, 2670, 2671, 2672, 2672, 2677, 2678, 2682, 2683, 2684, 2687, 2689, 2694, 2699, 2705ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3248,
            "range": "±240",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3221ms, Q3: 3461ms\nAll times: 3189, 3193, 3205, 3210, 3216, 3221, 3228, 3228, 3234, 3234, 3248, 3260, 3336, 3389, 3408, 3461, 3516, 3568, 3732, 4493ms"
          }
        ]
      }
    ]
  }
}