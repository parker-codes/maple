window.BENCHMARK_DATA = {
  "lastUpdate": 1625019040522,
  "repoUrl": "https://github.com/parker-codes/maple",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "11802a9a1d35c2573abdb79447e13b40ba27ff83",
          "message": "Setup continuous benchmark\n\nPush continuous benchmark results to gh_pages\n\nFix cargo bench command",
          "timestamp": "2021-03-17T19:49:56-07:00",
          "tree_id": "4f61562eff826f8fe365e54b622b63c998cd79b7",
          "url": "https://github.com/lukechu10/maple/commit/11802a9a1d35c2573abdb79447e13b40ba27ff83"
        },
        "date": 1616036009473,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49388,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408867,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c",
          "message": "Iteration (#49)\n\n* enable clone_on_ref_path\r\n\r\n* SignalVec\r\n\r\n* wip\r\n\r\n* Fix\r\n\r\n* wip\r\n\r\n* Add test for dropping owner inside create_root\r\n\r\n* cleanup\r\n\r\n* Simplify create_effect_initial\r\n\r\n* Cleanup\r\n\r\n* Add map_chain test\r\n\r\n* Todo demo\r\n\r\n* Fix insert\r\n\r\n* Fix compile error\r\n\r\n* Test map_chain_temporary\r\n\r\n* Update wasm-bindgen to 0.2.72\r\n\r\n* Fix netlify-build\r\n\r\n* Add to_vec",
          "timestamp": "2021-03-18T15:54:02-07:00",
          "tree_id": "2a0b53f131ed86eaeb2102c91f2feefafe40545b",
          "url": "https://github.com/lukechu10/maple/commit/291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c"
        },
        "date": 1616108220084,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54818,
            "range": "± 2432",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 358986,
            "range": "± 19175",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "128c3294392c6a456aeae131778d1f7f5c86cc1c",
          "message": "Iteration on `Signal<Vec>` and integration tests (#51)\n\n* wip\r\n\r\n* fix\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Add some integration tests\r\n\r\n* Fix test command in CI\r\n\r\n* Indexed\r\n\r\n* Remove excess nodes\r\n\r\n* Add some basic integration tests\r\n\r\n* Update changed nodes\r\n\r\n* Remove unused variabe\r\n\r\n* Keyed\r\n\r\n* Fix Keyed\r\n\r\n* Fix clippy\r\n\r\n* Add integration test for Indexed",
          "timestamp": "2021-03-23T20:52:06-07:00",
          "tree_id": "9b35766bebb5452f736475f18a5835deba37e853",
          "url": "https://github.com/lukechu10/maple/commit/128c3294392c6a456aeae131778d1f7f5c86cc1c"
        },
        "date": 1616558145110,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56522,
            "range": "± 2722",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 392673,
            "range": "± 15596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe32999412d1ef0d3932d78c0f7ba9019d06708a",
          "message": "Fix debug assertion (#53)",
          "timestamp": "2021-03-23T21:29:24-07:00",
          "tree_id": "79cb6c23a7b2b879e481eb4dbb45ae95b7dd14cf",
          "url": "https://github.com/lukechu10/maple/commit/fe32999412d1ef0d3932d78c0f7ba9019d06708a"
        },
        "date": 1616560359088,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52874,
            "range": "± 3282",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 378377,
            "range": "± 11683",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3314992d74d923ff7557608837cc4919a6d03273",
          "message": "Fix reactive bindings inside Indexed and Keyed children (#54)\n\n* Fix clippy\r\n\r\n* Remove Option<TemplateResult> in Indexed and Keyed\r\n\r\n* create_effect_initial call initial() in create_root\r\n\r\n* Call template function inside reactive root\r\n\r\n* Add docs for Keyed and Indexed\r\n\r\n* Add some more docs and doctests",
          "timestamp": "2021-03-24T12:55:33-07:00",
          "tree_id": "340227bbda14f65e7a25cc97ef51fd8a773f2d1b",
          "url": "https://github.com/lukechu10/maple/commit/3314992d74d923ff7557608837cc4919a6d03273"
        },
        "date": 1616615927340,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58505,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 374764,
            "range": "± 3930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cb05bd80bf0baa5dc9db09c7015c3794562b733",
          "message": "Node refs (#57)\n\n* NodeRef\r\n\r\n* Set NodeRef with template! macro\r\n\r\n* Add NodeRef integration test",
          "timestamp": "2021-03-24T14:01:47-07:00",
          "tree_id": "63c3f7cdd5c3927b3eb222f797e2b67c978e7232",
          "url": "https://github.com/lukechu10/maple/commit/8cb05bd80bf0baa5dc9db09c7015c3794562b733"
        },
        "date": 1616619938774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58393,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408288,
            "range": "± 20280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8eda5aa825f3c6541aa280dbdb123bf08dd72f1c",
          "message": "Complete TodoMVC spec conforming implementation (#60)\n\n* Add fmt::Debug implementation to Signal and StateHandle\r\n\r\n* Create Header and Copyright components\r\n\r\n* Parse keywords in component path\r\n\r\n* Fix parsing with a Component followed by interpolated value\r\n\r\n* List and Item\r\n\r\n* Handle todo edit\r\n\r\n* Update trybuild tests\r\n\r\n* Toggle complete all\r\n\r\n* Add untrack utility\r\n\r\n* Fixes\r\n\r\n* Footer\r\n\r\n* Save todos to localStorage\r\n\r\n* Get Filter from Hash\r\n\r\n* Clear completed\r\n\r\n* Set value when entering editing mode",
          "timestamp": "2021-03-25T21:32:45-07:00",
          "tree_id": "c3fed21ccf6be373ddc701a96070e6ab6e15ed9d",
          "url": "https://github.com/lukechu10/maple/commit/8eda5aa825f3c6541aa280dbdb123bf08dd72f1c"
        },
        "date": 1616733355532,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49259,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 349624,
            "range": "± 8185",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c18f28534bd36f67c2a884de4f21fe891f694041",
          "message": "Release 0.4.0 (#61)\n\n* Release 0.4.0\r\n\r\n* fixes",
          "timestamp": "2021-03-25T22:00:55-07:00",
          "tree_id": "edfbbd0b5f995c73d1950d7947cdc59a18c940e9",
          "url": "https://github.com/lukechu10/maple/commit/c18f28534bd36f67c2a884de4f21fe891f694041"
        },
        "date": 1616735046671,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47596,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 347333,
            "range": "± 26747",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d36bbc71caec28255c15e108568b0b26f0ef7135",
          "message": "Minimize code size (#62)\n\n* Use dynamic dispatch for create_effect\r\n\r\n* Use dynamic dispatch for create_effect_initial\r\n\r\n* Use dyn Any for create_effect_initial ret and remove Clone bound\r\n\r\n* append_static_text\r\n\r\n* Make internal functions use trait objects\r\n\r\n* Make internal::attr() Box<dyn Fn() -> String>\r\n\r\n* Make create_root dynamic dispatch\r\n\r\n* Build examples with -o3 and LTO",
          "timestamp": "2021-03-26T11:05:36-07:00",
          "tree_id": "ebb99a34734427387daef63229afa9aea6c08e26",
          "url": "https://github.com/lukechu10/maple/commit/d36bbc71caec28255c15e108568b0b26f0ef7135"
        },
        "date": 1616782130774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50552,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 534864,
            "range": "± 29791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iwburns8@gmail.com",
            "name": "Ian Burns",
            "username": "iwburns"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b9aa0938bcf152cf640bd7c880e15de1476113",
          "message": "fix typo in README.md (#64)",
          "timestamp": "2021-03-26T13:38:58-07:00",
          "tree_id": "d15a9e6e6ee111e20929439b84e844a2fc4072e3",
          "url": "https://github.com/lukechu10/maple/commit/25b9aa0938bcf152cf640bd7c880e15de1476113"
        },
        "date": 1616791314547,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58031,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581365,
            "range": "± 6168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5ef27b0dcdba315c5e4a9cea27b99b30530ceb3",
          "message": "fix todomvc links (#65)",
          "timestamp": "2021-03-26T13:49:33-07:00",
          "tree_id": "24fdda96868cab414f685c99f57f31329b1b4ee6",
          "url": "https://github.com/lukechu10/maple/commit/e5ef27b0dcdba315c5e4a9cea27b99b30530ceb3"
        },
        "date": 1616791967728,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 59126,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 586231,
            "range": "± 2504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90e6d46679a62d715f3502f3f64811482c94f02a",
          "message": "Add discord server link to issue template config (#68)",
          "timestamp": "2021-03-27T22:22:20-07:00",
          "tree_id": "676036cde031e6e6a8c799be4978273f7117335f",
          "url": "https://github.com/lukechu10/maple/commit/90e6d46679a62d715f3502f3f64811482c94f02a"
        },
        "date": 1616909116804,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52120,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 539677,
            "range": "± 24640",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d96c5711d607248ab0bea1931b3239f9c7327222",
          "message": "Fix Keyed iteration (#73)\n\n* Add more integration tests\r\n\r\n* Move nodes instead of recreating nodes\r\n\r\n* Keyed do not always append new nodes to end",
          "timestamp": "2021-03-31T15:42:39-07:00",
          "tree_id": "16334ebfe9289fb571d76ec8574eb75d731a9c67",
          "url": "https://github.com/lukechu10/maple/commit/d96c5711d607248ab0bea1931b3239f9c7327222"
        },
        "date": 1617230745311,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51830,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 508610,
            "range": "± 42425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffab9c38f9f1f34abfb0d7754534db26e4dd534e",
          "message": "Release 0.4.1 (#74)",
          "timestamp": "2021-03-31T15:49:00-07:00",
          "tree_id": "96a15b04c09ea754ae953fefcac30d1e0c633a26",
          "url": "https://github.com/lukechu10/maple/commit/ffab9c38f9f1f34abfb0d7754534db26e4dd534e"
        },
        "date": 1617231124914,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58200,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579314,
            "range": "± 9976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b99fb54ff4e65dd321df662b8afcb54c1b0acf2",
          "message": "Fix Keyed iteration again (#75)\n\n* Fix\r\n\r\n* Remove fmt::Debug bound for debugging\r\n\r\n* Add nested reactivity test",
          "timestamp": "2021-03-31T18:51:03-07:00",
          "tree_id": "b7b2c379c5e91318194d3144c29f4a42a4092ae5",
          "url": "https://github.com/lukechu10/maple/commit/5b99fb54ff4e65dd321df662b8afcb54c1b0acf2"
        },
        "date": 1617242023071,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48532,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 485893,
            "range": "± 464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f46cf591a1170e172477f065740289efd22756ec",
          "message": "Release 0.4.2 (#76)",
          "timestamp": "2021-03-31T18:56:22-07:00",
          "tree_id": "078b0c8e490fa5842d0d4386453ea478a1614826",
          "url": "https://github.com/lukechu10/maple/commit/f46cf591a1170e172477f065740289efd22756ec"
        },
        "date": 1617242382731,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56708,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 595712,
            "range": "± 22609",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27d90ecb08a020ea9da7e1b3233d6331ac2050ef",
          "message": "Documentation for Router + SSR (#133)\n\n* Add navigate function\r\n\r\n* Add rustdocs to sycamore-router\r\n\r\n* Add rustdocs for generic_node::render\r\n\r\n* Add rustdocs to rx::iter\r\n\r\n* Docs for router\r\n\r\n* Add SSR docs\r\n\r\n* Add some more router docs\r\n\r\n* Add code snippet to SSR docs",
          "timestamp": "2021-06-29T18:16:28-07:00",
          "tree_id": "b7a2173c348e1828275ca4c1ae3a14568b4318f0",
          "url": "https://github.com/parker-codes/maple/commit/27d90ecb08a020ea9da7e1b3233d6331ac2050ef"
        },
        "date": 1625019040011,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46997,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 562825,
            "range": "± 24037",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15494,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32742,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2405,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 111577,
            "range": "± 125",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}