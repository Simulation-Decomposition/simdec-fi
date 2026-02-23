---
title: "Monte Carlo Enhancement via Simulation Decomposition: A “Must-Have” Inclusion for Many Disciplines"
year: 2020
authors:
- "Mariia Kozlova"
- "Julian Scott Yeomans"
venue: "INFORMS Transactions on Education"
summary: "Streamlined SimDec visualization algorithm and Excel implementation for teaching and cross-disciplinary use. (No sensitivity indices yet)"
category: "methodology"
url: "https://pubsonline.informs.org/doi/pdf/10.1287/ited.2019.0240"
tags:
- "simdec"
- "monte-carlo"
- "visualization"
- "decision-making"
- "education"
---

This paper was about making SimDec usable. After the first applications, the question became practical: how do we turn the idea into a clean, repeatable visualization algorithm that anyone can implement? Here we streamlined the SimDec procedure, formalized the step-by-step decomposition logic, and built an Excel-based implementation that makes the method accessible without specialized software.
The [Excel template](https://github.com/Simulation-Decomposition/simdec-excel) is downloadable here, and the [video tutorial](https://youtu.be/8l6D58fiOxs?si=wQKo25ikvACEGS0q) is available. *Note: The Excel template does not compute sensitivity indices.*

The paper demonstrates how simulation decomposition enhances standard Monte Carlo analysis across geology, business, and environmental science. Instead of running multiple separate scenarios, the algorithm records input states during a single simulation and produces a stacked, color-coded distribution that reveals which multi-variable combinations drive outcomes. The contribution is methodological: SimDec becomes a lightweight, generalizable visualization layer that can be appended to virtually any Monte Carlo model with negligible computational overhead — and immediately improves how decision-makers see uncertainty.
