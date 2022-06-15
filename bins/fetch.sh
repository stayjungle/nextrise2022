#!/usr/bin/env bash
mkdir -p data
curl -L "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnocdy18TvMjDMPXeMMfS_T6K8QjIn1Q--RgCRIjUgUxffhuCLEpvbh3NvPstZfKrmoXvD0EAxG_86/pub?gid=325138325&single=true&output=csv" > data/ebti_steps.csv
curl -L "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnocdy18TvMjDMPXeMMfS_T6K8QjIn1Q--RgCRIjUgUxffhuCLEpvbh3NvPstZfKrmoXvD0EAxG_86/pub?gid=243133513&single=true&output=csv" > data/ebti_evals.csv
curl -L "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnocdy18TvMjDMPXeMMfS_T6K8QjIn1Q--RgCRIjUgUxffhuCLEpvbh3NvPstZfKrmoXvD0EAxG_86/pub?gid=219492135&single=true&output=csv" > data/ebti_foods.csv
