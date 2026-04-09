---
title: "A quick guide to simdec"
date: 2026-04-09
category: "tutorial"
summary: "SimDec algorithm, software, and interpretation."
tags: ["simdec", "open-source", "software", "instructions"]
---

Simulation decomposition, or **SimDec**, is a multidimensional data visualization guided by global sensitivity analysis (GSA)[^1]. The core idea is to visualize the most important input–output relationships on a single plot.  What for?
[^1]: Kozlova, M., & Yeomans, J. S. (Eds.). (2024). Sensitivity Analysis for Business, Technology, and Policymaking: Made Easy with Simulation Decomposition (SimDec). Taylor & Francis.
- to map the decisive regions of input space to the distribution of the output, and  
- to expose the shape of the individual effects and interactions.  

The result is an in-depth understanding of system behavior and actionable information for decision-making.  

---

## The algorithm

The SimDec algorithm runs fully automatically: uploaded input–output data directly produces a visualization, while still allowing the user fine-tuning at different steps:

<img width="748" height="377" alt="image" src="https://github.com/user-attachments/assets/4f9ceea8-8fba-4be3-8cfb-fa56f773cf05" />

Figure 1. SimDec algorithm on an example model[^2],[^3].
[^2]: <img width="655" height="100" alt="image" src="https://github.com/user-attachments/assets/5b60250d-d013-4c1b-a01e-97ebc389deea" />

[^3]: Kozlova, M., Moss, R. J., Yeomans, J. S., & Caers, J. (2024). Uncovering heterogeneous effects in computational models for sustainable decision-making. Environmental Modelling & Software, 171, 105898.

1. **Computation of sensitivity indices** is performed using a simple binning estimator of Sobol’ indices[^4]. Compared to mainstream estimators, simple binning can work with smaller samples, given data, and with dependent variables. The dependency manifests itself in the negative second-order effects. Integration of any other GSA approach is possible as well.  
[^4]: Kozlova, M., Ahola, A., Roy, P. T., & Yeomans, J. S. (2025). Simple binning algorithm and SimDec visualization for comprehensive sensitivity analysis of complex computational models. Journal of Environmental Informatics Letters, 13 (1), 38-56.

3. **Selection of inputs for decomposition.** By default, the inputs are ordered by their importance, and the first input variables that together explain the portion of the output variance reaching the set threshold are selected. However, any variables in any order and quantity can be selected for decomposition manually for exploration purposes.  

4. **Dividing input ranges into states.** Each selected input is assigned a few subranges or states, either with an equal number of data points or following categories of a categorical variable.  

5. **Formation of scenarios** is accomplished by combining all states or all selected variables covering the entire input space.  

6. **Mapping outputs to scenarios.** In the input-output data, each output value is mapped to a corresponding scenario.  

7. **Visualization.** Built by either stacking the output scenarios into a histogram or displaying each scenario with a box plot. Regardless of the visualization form, a specific color-coding logic is applied to facilitate perception:   States of the first-for-decomposition variable are assigned distinct main colors.   All other subdivisions are colored with shades of the main color.  

---

## Availability

SimDec is an open-source project and is available in **Python, R, Julia, and Matlab**:  
👉 [GitHub repository](https://github.com/Simulation-Decomposition)  

A free no-code web dashboard:  
👉 [http://simdec.io/](http://simdec.io/)  

---

## Interpretation of results

The SimDec algorithm computes several types of indices:  

- **First-order (individual) effects** – how much of the output variance is explained by each individual variable.  
- **Second-order (interaction) effects** – the extra contribution of pairs of variables:  
  - 0 means no interaction.  
  - Positive means interaction or added contribution.  
  - Negative means dependency or overlapping contributions.  
- **Combined indices** – each variable’s individual effect plus half of each of its second-order effects.  
  - By construction, the combined indices sum to one if the full output variance is explained.  

The **SimDec visualization** shows how regions of the inputs (scenarios) map onto distinct parts of the output distribution by color-coding them in the histogram.  

- The legend specifies which combinations of inputs and numeric ranges define each scenario.  
- If scenarios fully overlap horizontally → input has **no influence** (different input values → same outputs).  
- If scenarios are separated vertically → input has a **strong, sharp effect**.  

In this way, SimDec reveals whether the effect of one input depends on the numeric range of another input[^3].  

📺 See more on how to read a SimDec graph in [this funny video](https://youtu.be/bV3X_MSJmYA?si=vol2zZxqlDjKbWAm).  
📖 A full guide to interpreting SimDec results can be found in the [*SimDec Book*](https://doi.org/10.4324/9781003453789)[^1], Chapter 2.  
