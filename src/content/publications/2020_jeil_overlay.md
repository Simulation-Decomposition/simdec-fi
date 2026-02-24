---
title: "Visual Analytics in Environmental Decision-Making: A Comparison of Overlay Charts versus Simulation Decomposition"
year: 2020
authors:
- "Mariia Kozlova"
- "Julian Scott Yeomans"
venue: "Journal of Environmental Informatics Letters"
summary: "A detailed comparison of overlay charts (common in commercial Monte Carlo software) versus SimDec."
category: "methodology"
url: "https://www.researchgate.net/profile/Mariia-Kozlova-3/publication/348384768_Visual_Analytics_in_Environmental_Decision-Making_A_Comparison_of_Overlay_Charts_versus_Simulation_Decomposition/links/6053224f458515e834521b2b/Visual-Analytics-in-Environmental-Decision-Making-A-Comparison-of-Overlay-Charts-versus-Simulation-Decomposition.pdf"
order: 1
tags:
- "simdec"
- "monte-carlo"
- "visual-analytics"
- "overlay-charts"
- "environmental-decision-making"

---

Some commercial Monte Carlo tools support overlay charts: run the model multiple times under different input assumptions, then layer the resulting distributions on top of each other. It looks intuitive, but there is a hidden cost: you are limiting yourself to a handful of customary defined scenarios, which simply cannot explore a full decision/uncertainty space and reveal interactions of factors.   

In this paper, we make a detailed, practical comparison between overlay charts and SimDec. Overlay charts require multiple separate simulations with truncated inputs, while SimDec uses one simulation and decomposes the resulting distribution into components. SimDec preserves the full distribution, does not hide any information in overlaying, and exposes a full set of possible combinations of input factors.
