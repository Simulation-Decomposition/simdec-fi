---
title: "How SimDec Began: From PhD Spark to Sensitivity Analysis Innovation"
date: 2026-03-15
category: "other"
summary: "Born from a tricky energy-investment model, SimDec evolved into a visual, industry-agnostic approach to sensitivity analysis and decision support."
tags: ["PhD research", "energy policy", "simulation"]
---

[![SimDec story](https://img.youtube.com/vi/rRwfBDPzjyc/0.jpg)](https://youtu.be/rRwfBDPzjyc)

# The Backstory: A Stubborn Model and a Long Dog Walk

SimDec started with a messy, real problem: evaluating renewable-energy policy and its impact on investment profitability.

The model had many inputs, policy-induced thresholds, and non-linear effects. A standard Monte Carlo run produced a strange, multi-peaked distribution of Net Present Value. The structure clearly meant something, but it was difficult to explain.

After getting stuck building endless scenarios by hand, a simple idea appeared during a dog walk:

**Run everything, then decompose the full output distribution into interpretable scenarios formed by ranges of key inputs.**

Once decomposed, every “mystery peak” in the distribution suddenly made sense. You could point to a scenario such as *all critical inputs in the green range* and immediately see why profitability held even under volatile markets.

> **“Every single peak became clear once we decomposed the distribution.”**

---

# The Defense That Changed the Roadmap

At the PhD defense, external examiner **Prof. Julian Scott Yeomans**, known for work in simulation optimization and metaheuristics, saw the decomposition and paused. He had not seen anything like it before.

It resembled **visual exploratory data analysis for simulation models**. Interactive, transparent, and accessible even to non-specialists.

The defense turned into a lively discussion and later a collaboration. The project shifted direction, from being just another case study to developing **SimDec as a general method**.

---

# From One Domain to Many

Early applications quickly expanded into multiple fields:

- Carbon capture and storage investments  
- Life-cycle CO₂ analysis  
- Geological and engineering models  
- Multiple techno-economic assessments  

The pattern was consistent. If a model maps **inputs to an output**, SimDec can decompose it.

Units do not matter. Kilowatts, euros, people, even dogs 🐶. As long as the model produces outputs from inputs, SimDec can analyze it.

---

# Why Classic Sensitivity Analysis Falls Short

Traditional sensitivity analysis mostly asks a single question:

**Which factor is most important?**

That information is useful but incomplete.

SimDec goes further:

- **Visualizes influence shapes**  
  Effects can be linear, stepwise, wave-like, or concentrated at extremes.

- **Reveals interactions**  
  Not just two-way relationships. Three or more inputs can be explored simultaneously.

- **Shows distributions, not single values**  
  You observe shifts in spread, not just changes in averages.

- **Surfaces counter-intuitive behavior**  
  In non-linear multi-input models, SimDec exposes why surprising outcomes occur.

> **“It’s not a single value. It’s the entire distribution under each scenario.”**

---

# From Plots to Decisions

The practical value of SimDec is **actionability**.

It highlights scenarios that achieve a target outcome range and identifies which inputs must be controlled to reach them.

If the ideal scenario cannot be achieved, SimDec also reveals second-best paths. For example:

- slightly lower investment but medium production  
- different combinations of inputs that still deliver acceptable outcomes  

Typical insights revealed by SimDec include:

- A factor’s influence can **reverse direction depending on another factor’s level**  
- A factor that is powerful in one regime can be **irrelevant in another**  
- Variance may **tighten or explode across ranges of a different input**  
- **Diminishing returns** appear only under specific conditions  

This is why the method resonates with both researchers and practitioners. SimDec compresses **weeks of ad-hoc scenario experimentation into a single interpretable visual**.

---

# Why Visual Matters (and for Whom)

Mathematical interaction terms quickly become complex. SimDec keeps the mathematics under the hood and surfaces the evidence visually.

This makes it easier for teams to align:

- **Modelers** validate model behavior without generating dozens of separate plots.  
- **Decision-makers** compare scenarios instantly and see trade-offs clearly.  
- **Stakeholders** understand why recommendations change when assumptions change.

> **“SimDec eliminates expert myopia by showing all key scenarios simultaneously.”**

---

# Where It’s Heading

The team is currently extending SimDec in two directions:

1. **Beyond simulation models** to observational datasets where the data-generating process is complex but decomposable.
2. **From visuals to language**, translating SimDec results into plain-language recommendations so anyone can act on them.

The long-term ambition is straightforward:

**Make SimDec a global standard for sensitivity analysis across engineering, finance, environmental science, and beyond.**

---

# Key Takeaways

- SimDec was born from a difficult renewable-energy investment problem and a simple idea: **decompose the full distribution into scenarios**.
- The method is **industry-agnostic**. Any model mapping inputs to outputs can benefit.
- SimDec visualizes **influence shapes and interactions**, not just factor importance.
- It turns sensitivity analysis into **actionable guidance for real-world decisions**.

---

# Acknowledgements

Thanks to **Prof. Julian Scott Yeomans** for recognizing the method’s potential.

And thanks to **Tibo**, the very patient dog, whose long walks helped spark the core idea behind SimDec. 🐕
