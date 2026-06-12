window.BENCHMARK_DATA = {
  "lastUpdate": 1781251074353,
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
      },
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
          "id": "6dc0b0d446074771f9a1f1f7e2cffbac470dc137",
          "message": "Merge pull request #1497 from yamadashy/refactor/website-server-valibot\n\nrefactor(server): Migrate request validation from zod to valibot",
          "timestamp": "2026-04-19T22:46:59+09:00",
          "tree_id": "189208a3ecb34e596c518fe9bedd60c7d1f9305c",
          "url": "https://github.com/azaj01/repomix/commit/6dc0b0d446074771f9a1f1f7e2cffbac470dc137"
        },
        "date": 1776938711751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 922,
            "range": "±112",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 888ms, Q3: 1000ms\nAll times: 866, 872, 876, 879, 879, 881, 881, 888, 892, 896, 901, 907, 911, 913, 915, 922, 927, 931, 936, 942, 943, 954, 1000, 1019, 1046, 1058, 1067, 1134, 1191, 1442ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1563,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1545ms, Q3: 1581ms\nAll times: 1527, 1534, 1538, 1539, 1544, 1545, 1547, 1552, 1555, 1557, 1563, 1564, 1566, 1573, 1579, 1581, 1586, 1589, 1607, 1607ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2065,
            "range": "±64",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2041ms, Q3: 2105ms\nAll times: 1977, 1999, 2013, 2026, 2037, 2041, 2047, 2053, 2059, 2062, 2065, 2075, 2082, 2097, 2100, 2105, 2153, 2305, 2305, 2389ms"
          }
        ]
      },
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
          "id": "fc69dcc31357d5db934f67ceaff4150f67e4735c",
          "message": "Merge pull request #1622 from Samsen879/fix-ignore-gitignore-conflict\n\nfix(file): keep ignored .gitignore rules active",
          "timestamp": "2026-06-08T00:33:17+09:00",
          "tree_id": "0f9a330968372237c5335d0717c3b2158eb81bbe",
          "url": "https://github.com/azaj01/repomix/commit/fc69dcc31357d5db934f67ceaff4150f67e4735c"
        },
        "date": 1781251073501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 970,
            "range": "±101",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 939ms, Q3: 1040ms\nAll times: 827, 827, 880, 900, 910, 918, 925, 939, 939, 942, 952, 959, 961, 962, 968, 970, 980, 987, 999, 1006, 1021, 1021, 1040, 1054, 1110, 1130, 1134, 1180, 1286, 1381ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 861,
            "range": "±10",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 857ms, Q3: 867ms\nAll times: 831, 839, 850, 851, 853, 857, 857, 858, 858, 860, 861, 861, 864, 865, 866, 867, 876, 877, 878, 891ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1185,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1173ms, Q3: 1192ms\nAll times: 1120, 1152, 1160, 1161, 1168, 1173, 1175, 1180, 1181, 1181, 1185, 1186, 1187, 1187, 1189, 1192, 1195, 1197, 1202, 1274ms"
          }
        ]
      }
    ]
  }
}